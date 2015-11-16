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
					_offsetTop = $self.offset().top;
				if (_offsetTop <= (_winHeight + _winScrollTop)) {
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

	var getUUID = function (aid, pid) {
		return aid + 'a' + pid;
	}


	var ContentPage = (function () {
		var $cntId = $('#contentList');
		var _productTempl = doT.template($('#templ_product').html());
		//page缓存
		var _catch = {};

		var isEmptyObj = function (obj) {
			for (var i in obj) return !0;
			return !1;
		}

		var showLoading = function () {
			$('#contentList').hide();
			$('#ymtLoading').show();
		}

		function CntPage(aid, pid) {
			this.aid = aid || "";
			this.pid = pid || "";
			this.uuid = getUUID(aid, pid);
			this.isLoadError = false;
		}

		CntPage.prototype.setCnt = function () {
			$cntId.append('<div id="' + this.uuid + '" class="content"><ul class="product-list J_productList"></ul></div>');
		}
		CntPage.prototype.init = function () {
			_catch[this.uuid] = {};
			this.setCnt();
			this.load();
		}
		CntPage.prototype.load = function () {
			var me = this,
				aid = me.aid,
				pid = me.pid,
				cntId = '#' + me.uuid;
			showLoading();
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
					$(cntId).find('.J_productList').append(_productTempl(obj));
					picLazyLoad(cntId);
				},
				complete: function () {
					$('#ymtWrap').css('visibility', 'visible');
					$('#contentList').show();
					$('#ymtLoading').hide();
				}
			});
		}

		CntPage.prototype.show = function () {
			if (this.isLoadError) {
				this.load();
			}
			$cntId.find('.J_productList').hide();
			$('#' + this.uuid).find('.J_productList').show();
		}

		return function (aid, pid) {
			var id = getUUID(aid, pid);
			if (_catch[id]) {
				return _catch[id].obj;
			}
			var cntPage = new CntPage(aid, pid);
			cntPage.init();
			_catch[id].obj = cntPage;
			return cntPage;
		}
	})();

	var Mhot = {
		//当前选择的id
		aid: '',
		pid: '',
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
			}
			$subTab.find('.J_subTab').eq(0).show();

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
					me.scrollPage[uuid] = scrollTop;
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
			var oldScrollTop = me.scrollPage[uuid] || 0;
			$('body').scrollTop(oldScrollTop);

		},

		switchPage: function () {
			var me = this,
				contentPage = ContentPage(me.aid, me.pid);
			contentPage.show();
			me.isHadeTab = false;
			me.moveOldScroll();
		},

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
					if (!(p > scrollTop) && me.isHadeTab) {
						console.log('向下滚动');
						$tabBox[0].className = 'tab-box fixed animated hinge slideOutUp';
					}
					me.isHadeTab = true;
				}
				else {
					me.isHadeTab = false;
					$tabBox[0].className = 'tab-box animated short fadeIn';
				}
				p = scrollTop;

			});
		},

		initDefaultPage: function () {
			$('#subTab .item').eq(0).addClass('cur');
			$('#tabList .item').eq(0).addClass('cur');
			var aid = tabSetting[0].aid,
				pid = tabSetting[0].child[0].pid;
			this.aid = aid;
			this.pid = pid;
			var contentPage = ContentPage(aid, pid);
			contentPage.show();
		},

		init: function () {
			this.initTab();
			this.initDefaultPage();
			this.pageEffect();

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