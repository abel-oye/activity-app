//图片懒加载
var picLazyLoad = (function ($, window) {
	var uid = 0,
		$window = $(window),
		_lazy = '.lazy',
		_url = 'data-lazy';

	return function (content, effect) {
		var guid = ++uid,
			content = content || 'body',
			effect = effect || 'fadeIn';

		var $content = $(content),
			$lazyImg = $content.find(_lazy),
			lazyLength = $lazyImg.not('[data-isLoad]').length;
		//绑定window的scroll事件
		$window.on('scroll.lazy' + guid, function () {
			if ($content.css('display') == 'none') return;
			var _winHeight = $window.height(),
				_winScrollTop = $window.scrollTop();
			$lazyImg.each(function () {
				var $self = $(this),
					_offsetTop = $self.offset().top,
					_selfHeight = $self.height();
				if (_offsetTop <= (_winHeight + _winScrollTop) && _winScrollTop <= (_offsetTop + _selfHeight)) {
					if (!$self.attr('data-isLoad')) {
						//加上标记
						$self.attr('data-isLoad', 'true');
						var selfUrl = $self.attr(_url);
						$self.is('img') ? $self.attr('src', selfUrl) : $self.css('background-image', 'url(' + selfUrl + ')');
						$self.removeAttr(_url);
						$self.addClass('animated ' + effect);
						lazyLength--;
					}
				}
			});
			if (lazyLength <= 0) {
				$window.off('scroll.lazy' + guid);
				$content = null;
				$lazyImg = null;
			}
		}).trigger('scroll');
	};
})(window.jQuery || window.Zepto, window);

(function (window, undefined) {

	//获取页面唯一ID
	var getUUID = function (aid, pid) {
		return aid + 'a' + pid;
	}

	//根据aid 或者 pid 查找所在的数组位置
	var _getArrayIndex = function (arr, key, val) {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i][key] && arr[i][key] == val) {
				return i;
			}
		}
		return -1;
	}

	//生成tab页面
	var ContentPage = (function () {
		var $tabCnt = $('#contentList');
		var _productTempl = doT.template($('#templ_product').html());
		//page缓存
		var _catch = {};

		//判断对象是否为空
		var isEmptyObj = function (obj) {
			for (var i in obj) return !0;
			return !1;
		}

		//tab页面类
		function CntPage(aid, pid) {
			this.aid = aid || "";
			this.pid = pid || "";
			this.uuid = getUUID(aid, pid);
			this.isLoadError = false;
			this.isLoading = false;
		}

		//初始化，如果传递prevUUID则表示拖动底部 自动加载
		CntPage.prototype.init = function (prevUUID) {
			_catch[this.uuid] = {};
			this.load(prevUUID);
		}

		//显示正在加载
		CntPage.prototype.showLoading = function (prevUUID) {
			if (prevUUID) {
				$('#' + prevUUID).find('.J_loading').show();
				return;
			}
			$('#contentList').hide();
			$('#ymtLoading').show();
		}

		//隐藏正在加载
		CntPage.prototype.hideLoading = function (prevUUID) {
			if (prevUUID) {
				$('#' + prevUUID).find('.J_loading').hide();
				return;
			}
			$('#contentList').show();
			$('#ymtLoading').hide();
		}

		//加载页面数据， 如果传递prevUUID则表示拖动底部 自动加载
		CntPage.prototype.load = function (prevUUID) {
			var me = this,
				aid = me.aid,
				pid = me.pid,
				cntId = '#' + me.uuid;
			if (me.isLoading) return;
			me.isLoading = true;
			me.showLoading(prevUUID);
			$.ajax({
				url: 'http://api.evt.ymatou.com/ActivityTemplate/Products/aid_' + aid + '/pid_' + pid + '/ps_50',
				dataType: 'jsonp',
				cache: true,
				jsonpCallback: 'ymatou_at_' + aid + '_' + pid,
				success: function (data) {
					if (data.Code != 200) {
						me.isLoadError = true;
						return;
					}

					var obj = data.Data;
					if (obj.Products == null || obj.Products.length <= 0) {
						me.isLoadError = true;
						return;
					}
					me.isLoadError = false;
					obj.Products = $.map(obj.Products, function (n) {
						//更换后缀
						if (n.PicUrl.indexOf('/original/') > -1) {
							n.PicUrl = n.PicUrl.replace("/original/", "/list/");
						}
						n.PicUrl = n.PicUrl.replace('_o', '_l');

						if (!n.SoldOut) {
							return n;
						}

					});

					obj.uuid = me.uuid;

					$tabCnt.append(_productTempl(obj));
				},
				complete: function () {
					me.isLoading = false;
					$('#ymtWrap').css('visibility', 'visible');
					me.hideLoading(prevUUID);

					me.isLoad(prevUUID);

					if (!me.isLoadError) {
						picLazyLoad(cntId);
					}
				}
			});
		}

		CntPage.prototype.isLoad = function (prevUUID) {
			var me = this;
			me.callBack && me.callBack.call(me);
			if (!prevUUID) {
				$tabCnt.find('.J_cnt').hide();
			}
			$('#' + me.uuid).show();
		}

		//显示tab页面 如果传递prevUUID则表示拖动底部自动加载
		CntPage.prototype.show = function (prevUUID) {
			var me = this;
			if (me.isLoadError) {
				me.load(prevUUID);
				return;
			}
			me.isLoad(prevUUID);
		}

		return function (aid, pid, callBack, prevUUID) {
			var id = getUUID(aid, pid);

			var callBack = $.isFunction(callBack) ? callBack : null;

			if (_catch[id]) {
				_catch[id].obj.callBack = callBack;
				_catch[id].obj.show(prevUUID);

				return _catch[id].obj;
			}

			var cntPage = new CntPage(aid, pid);
			cntPage.callBack = callBack;
			cntPage.init(prevUUID);
			_catch[id].obj = cntPage;
			return cntPage;
		}
	})();

	var Mhot = {
		//当前选择的id
		aid: '',
		pid: '',
		isLoadNext: true,
		isHadeTab: false,
		scrollPage: {},
		initTab: function () {
			var me = this,
				$subTab = $('#subTab'),
				$tabList = $('#tabList'),
				i, tab, subList;
			for (i = 0; i < tabSetting.length; i++) {
				tab = tabSetting[i];
				$tabList.append('<li class="item" data-aid=' + tab.aid + '><a src="javascript:;">' + tab.name + '</a></li>');
				var tempFn = doT.template($('#templ_subTab').html());
				$subTab.append(tempFn({
					subList: tab.child,
					aid: tab.aid
				}));

				var slidesPerView = 4
				switch (i) {
				case 0:
					slidesPerView = 5.9;
					break;
				case 4:
					slidesPerView = 5.5;
					break;
				}
				new Swiper($('#aid' + tab.aid)[0], {
					freeMode: true,
					slidesPerView: slidesPerView
				});
			}
			$subTab.find('.J_subTabCnt').eq(0).show();



			$tabList.on('click', '.item', function () {
				var $this = $(this),
					aid = $this.attr('data-aid');
				$this.addClass('cur').siblings().removeClass('cur');
				$('#aid' + aid).show().siblings().hide();
				me.aid = aid;
			});

			$subTab.on('click', '.item', function () {
				var $this = $(this),
					pid = $this.attr('data-pid');
				$subTab.find('.item').removeClass('cur');
				$this.addClass('cur');

				if (me.pid) {
					var uuid = getUUID(me.aid, me.pid);
					var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
					//me.scrollPage[uuid] = scrollTop;
				}

				me.pid = pid;
				me.switchPage();
			});
		},

		/**	
		 *移动到上个页面的scroll
		 */
		moveOldScroll: function () {
			var me = this,
				uuid = getUUID(me.aid, me.pid);
			//var oldScrollTop = me.scrollPage[uuid] || 0;
			var oldScrollTop = 0;
			$('body').scrollTop(oldScrollTop);

		},

		switchPage: function () {
			var me = this,
				contentPage = ContentPage(me.aid, me.pid, function () {
					me.isLoadNext = !this.isLoadError;
				});
			me.isHadeTab = false;
			me.moveOldScroll();
		},

		//页面上的效果
		pageEffect: function () {
			var me = this,
				$banner = $('#banner'),
				$tabBox = $('#tabBox'),
				p = 0;

			$(window).on('scroll', function () {
				var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				var bannerHeight = $banner.height(),
					tabBoxHeight = $tabBox.height();
				if (scrollTop > (bannerHeight + tabBoxHeight)) {
					$tabBox[0].className = 'tab-box fixed animated short slideInDown';
					// if (!(p > scrollTop) && me.isHadeTab) {
					// 	//console.log('向下滚动');
					// 	$tabBox[0].className = 'tab-box fixed animated hinge slideOutUp';
					// }
					me.isHadeTab = true;
				}
				else {
					me.isHadeTab = false;
					$tabBox[0].className = 'tab-box animated short fadeIn';
				}
				p = scrollTop;

			});
		},

		getNextPid: function () {
			var me = this,
				setting = window.tabSetting;
			//当前aid 下 模块集合
			var childModel = setting[_getArrayIndex(setting, 'aid', me.aid)].child;

			var index = _getArrayIndex(childModel, 'pid', me.pid);

			if (index + 1 >= childModel.length) {
				return false;
			}
			return childModel[index + 1]['pid'];
		},

		//自动加载下一页
		autoLoadNext: function () {
			var me = this,
				$window = $(window),
				$doc = $(document),
				_windowHeight = $window.height(),
				isWait = false;

			var wait = function () {
				isWait = true;
				var _st = setTimeout(function () {
					isWait = false;
					_st = null;
				}, 500);
			}

			$window.on('scroll', function () {
				var _scrollTop = $window.scrollTop(),
					_documentHeight = $doc.height();

				if ((_scrollTop >= _documentHeight - _windowHeight - 200) && !isWait && me.isLoadNext) {

					//wait(); 
					var prevUUID = getUUID(me.aid, me.pid),
						nextPid = me.getNextPid();
					if (nextPid === false) {
						return;
					}
					var contentPage = ContentPage(me.aid, nextPid, function () {
						me.isLoadNext = !this.isLoadError;
						me.pid = nextPid;
						$('#' + nextPid).addClass('cur').siblings().removeClass('cur');
					}, prevUUID);
				}

			});
		},

		//加载默认页面
		initDefaultPage: function () {
			$('#subTab .item').eq(0).addClass('cur');
			$('#tabList .item').eq(0).addClass('cur');
			var aid = tabSetting[0].aid,
				pid = tabSetting[0].child[0].pid;
			this.aid = aid;
			this.pid = pid;
			var contentPage = ContentPage(aid, pid);
		},

		init: function () {
			this.initTab();
			this.initDefaultPage();
			this.pageEffect();
			this.autoLoadNext();
			$('#contentList').on('click', '.J_product', function () {
				var url = $(this).attr('data-url');
				window.YmtApi.open({
					url: url,
					isNew: true,
					title: '全球好货',
					backFlag: true,
					showMore: true,
					backTitle: '特卖首页',
					backUrl: ''
				});
			});
		}
	}
	Mhot.init();

})(window);