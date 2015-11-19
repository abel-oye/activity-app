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
			//如果容器是隐藏，则不加载
			if ($content.css('display') == 'none') return;
			var _winHeight = $window.height(),
				_winScrollTop = $window.scrollTop();
			$lazyImg.each(function () {
				var $self = $(this),
					_offsetTop = $self.offset().top,
					_selfHeight = $self.height();
				//在可视区域内
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

			//加载错误
			this.isLoadError = false;

			//正在加载
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

			//如果正在加载。则返回
			if (me.isLoading) return;

			//设置为正在加载
			me.isLoading = true;
			me.showLoading(prevUUID);

			//请求服务器数据
			$.ajax({
				url: 'http://api.evt.ymatou.com/ActivityTemplate/Products/aid_' + aid + '/pid_' + pid + '/ps_50',
				dataType: 'jsonp',
				cache: true,
				jsonpCallback: 'ymatou_at_' + aid + '_' + pid,
				success: function (data) {
					if (data.Code != 200) {
						//业务错误
						me.isLoadError = true;
						return;
					}

					var obj = data.Data;
					if (obj.Products == null || obj.Products.length <= 0) {
						//空数据
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

						//筛选售罄
						if (!n.SoldOut) {
							return n;
						}

					});
					obj.uuid = me.uuid;
					//渲染页面
					$tabCnt.append(_productTempl(obj));
				},
				complete: function () {
					//加载完成
					me.isLoading = false;
					$('#ymtWrap').css('visibility', 'visible');
					me.hideLoading(prevUUID);

					//回调加载完成函数
					me.isLoad(prevUUID);

					//如果没有错误。则调用图片懒加载
					if (!me.isLoadError) {
						picLazyLoad(cntId);
					}
				}
			});
		}

		CntPage.prototype.isLoad = function (prevUUID) {
			var me = this;
			//如果不是拖动到底部自动加载，则隐藏其他 tab页面
			if (!prevUUID) {
				$tabCnt.find('.J_cnt').hide();
			}
			//显示cnt
			$('#' + me.uuid).show();

			me.callBack && me.callBack.call(me);
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

			//加载完成回调函数
			var callBack = $.isFunction(callBack) ? callBack : null;

			if (_catch[id]) {
				//每个UUID 只能创建单利对象
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

		//当前模块索引
		index: '',
		//是否能继续加载下一页
		isLoadNext: false,

		//是否能隐藏tab面板
		isHadeTab: false,

		//上一个page的scroll值
		scrollPage: {},


		initTab: function () {
			var me = this,
				$subTab = $('#subTab'),
				$tabList = $('#tabList'),
				i, tab, subList;
			//根据tabSetting 循环生成tab
			for (i = 0; i < tabSetting.length; i++) {
				tab = tabSetting[i];
				$tabList.append('<li class="item" data-index=' + i + '  data-aid=' + tab.aid + '><a src="javascript:;">' + tab.name + '</a></li>');
				var tempFn = doT.template($('#templ_subTab').html());
				$subTab.append(tempFn({
					subList: tab.child,
					index: i
				}));

				//子tab可滑动
				var slidesPerView = 4
				switch (i) {
				case 0:
					slidesPerView = 5.9;
					break;
				case 4:
					slidesPerView = 5.5;
					break;
				}
				new Swiper($('#aid' + i)[0], {
					freeMode: true,
					slidesPerView: slidesPerView
				});
			}
			$subTab.find('.J_subTabCnt').eq(0).show();


			//一级tab绑定事件
			$tabList.on('click', '.item', function () {
				var $this = $(this),
					aid = $this.attr('data-aid'),
					i = $this.attr('data-index');
				$this.addClass('cur').siblings().removeClass('cur');
				//aid可能相同， 要用索引做id
				var $sub = $('#aid' + i);
				$sub.show().siblings().hide();

				me.index = i;
				me.aid = aid;

				//出发子tab第一项的点击事件
				$sub.find('.item').eq(0).trigger('click');
			});

			//二级tab事件
			$subTab.on('click', '.item', function () {
				var $this = $(this),
					pid = $this.attr('data-pid');

				$subTab.find('.item').removeClass('cur');
				$this.addClass('cur');

				//重置属性
				me.isLoadNext = false;
				//记录这次滑动的距离
				// if (me.pid) {
				// 	var uuid = getUUID(me.aid, me.pid);
				// 	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				// 	me.scrollPage[uuid] = scrollTop;
				// }
				me.pid = pid;
				//切换页面
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
					me.isHadeTab = false;
					me.moveOldScroll();
				});
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

					//向下滚动时。隐藏头部tab
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

		//获取下一个pid
		getNextPid: function () {
			var me = this,
				setting = window.tabSetting;
			//当前aid 下 模块集合
			var childModel = setting[me.index].child;

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

			// //500毫秒的延迟
			// var wait = function () {
			// 	isWait = true;
			// 	var _st = setTimeout(function () {
			// 		isWait = false; 
			// 		_st = null;
			// 	}, 500);
			// }

			$window.on('scroll', function () {
				var _scrollTop = $window.scrollTop(),
					_documentHeight = $doc.height();

				if ((_scrollTop >= _documentHeight - _windowHeight - 200) && !isWait && me.isLoadNext) {
					isWait = true;
					var prevUUID = getUUID(me.aid, me.pid),
						nextPid = me.getNextPid();
					if (nextPid === false) {
						isWait = false;
						return;
					}
					var contentPage = ContentPage(me.aid, nextPid, function () {
						isWait = false;
						me.isLoadNext = !this.isLoadError;
						me.pid = nextPid;
						$('#' + nextPid).addClass('cur').siblings().removeClass('cur');
					}, prevUUID);
				}

			});
		},

		//加载默认页面
		initDefaultPage: function () {
			var me = this;
			$('#subTab .item').eq(0).addClass('cur');
			$('#tabList .item').eq(0).addClass('cur');
			var aid = tabSetting[0].aid,
				pid = tabSetting[0].child[0].pid;
			me.index = 0;
			me.aid = aid;
			me.pid = pid;
			var contentPage = ContentPage(aid, pid, function () {
				me.isLoadNext = !this.isLoadError;
			});
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