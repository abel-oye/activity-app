/* global ejs: true,YmtApi:true */

/**
 * 公共脚本
 */
//+(function() {
	//'use strict';

	var isFuntion = function(str) {
		return 'function' === typeof str;
	};
	
	ejs.filters.pirceRegion = function (price) {
	    if (!price) {
	        return price;
	    }
	    var num = ((+price || 0).toFixed(2) + '').split('.');
	    return '<strong>' + num[0] + '</strong>' + (num[1] ? '.' + num[1] : '');
	};

	ejs.filters.convertImgUrl = function (str) {
	    return str.replace(/\/original\//, '/small/').replace(/_o/, '_s').replace(/_ls/, '_lb');
	}

	/**
	 * 显示日志
	 */
	var toastStatus = true;
	var showLog = function(msg, callback) {
		if (toastStatus) {
			toastStatus = false;
			var errElm = $('.ymtui-toast');
			if (!errElm[0]) {
				errElm = $('<div class="ymtui-toast"></div>')
					.appendTo('body');
			}
			errElm.html(msg).addClass('show');

			setTimeout(function() {
				errElm.removeClass('show');
				toastStatus = true;
				callback && callback();
			}, 2400);
		}
	};

	/**
	 * 通过jsonp获得数据
	 * @param  {String}   url      请求的地址
	 * @param  {Function} callback 回调方法
	 * @param  {String}   fnName   [description]
	 * @return {[type]}            [description]
	 */
	var jsonpGetData = function (url, callback, callbackName) {
        /*if(fnName){
            if(!(typeof window[fnName] === 'function')){
                window[fnName] = function(data){
                    callback && callback(data);
                    delete window[fnName];
                }
            }
        }*/
        var cbFn = {};

        if (typeof callback === 'function') {
            cbFn.success = callback;
        }

        if (typeof callback === 'object') {
            cbFn = callback;
        }

        cbFn.error = cbFn.error || function (res) {
            showLog(res.Msg);
        }

        $.ajax({
            url: url,
            type: 'GET',
            jsonpCallback: callbackName,
            dataType: 'jsonp',
            timeout: 30000, //1分钟过期
            cache: true,
            success: function (res) {
                if (res && (res.Code === 200 || res.Code === '200')) {
                    isFuntion(cbFn.success) && cbFn.success(res.Data);
                }
                else {
                    isFuntion(cbFn.error) && cbFn.error(res);
                }
            },
            error: function () {
                showLog('系统挤爆了，请稍后再试!');
            }
        });
    };

	//针对活动接口请求方式
	var getActivityJsonP = function(aid, pid, pageSize, callback) {
		var callbackName = 'ymatou_at_' + aid + '_' + pid;
		pageSize = pageSize || 10;
		jsonpGetData('http://api.evt.ymatou.com/ActivityTemplate/Products/aid_' + aid + '/pid_' + pid + '/ps_' + pageSize, callback, callbackName);
	}

	var module = {
		/**
		 * 获得活动商品
		 * @param  {string} aid 活动编号
		 *                 aid为0，则取静态数据productData
		 *                 aid不为0，则按照活动接口请求方式
		 *                 
		 * @param  {string} pid 模块编号
		 */
		activityList: function(aid, pid) {

			var render = function(data) {
				var html = ejs.render($('#active-tpl').html(),data);
				$('[data-arguments="' + aid + ',' + pid + '"]').parent().html(html);
				lazyLoad.check();
			}

			if (aid === '0') {
				render(productData[pid]);
			} else {
				getActivityJsonP(aid, pid, 50, function(data) {
					if (data && data.Products) {
						render(data);
					} else {
						//不存在数据则会删除父节点
						$('[data-arguments="' + aid + ',' + pid + '"]').parent().remove();
					}
				});
			}

		},
		/**
		 * 全球好货
		 * 1配7 商品显示方式
		 * 使用固定Swiper的结构
		 */
		getGoodsList: function() {
			jsonpGetData(YmtApi.utils.addParam('http://jsapi.app.ymatou.com/api/Polymeric/ForeignIndex', {
				pagepartIndex: 1,
				pagepartSize: 5
			}), {
				success: function(data, code) {
					if (data) {
						var html = ejs.render($('#goods-tpl').html(), data);
						$('[data-module="getGoodsList"]').parent().html(html);

						new Swiper('#getGoodsList', {
							freeMode: true,
							slidesPerView: 3.7,
							onSlideChangeEnd: function() {
								lazyLoad.check();
							}
						});
					}
				},
				error: function(err) {

				}
			});
		},
		/**
		 * 领取大礼包
		 */
		receivePk: function(packageId) { //领取大礼包
			var authInfo = YmtApi.utils.getAuthInfo(),
				deviceId = search.DeviceId || search.DeviceToken || '0000000';
			jsonpGetData(YmtApi.utils.addParam('http://ja.m.ymatou.com/api/Coupon/UserBatchReceiveCoupon?DeviceCode=' + deviceId + '&PackageId=' + packageId, {
				BuyerUserId: authInfo.UserId,
				AccessToken: authInfo.AccessToken
			}), {
				success: function(data) {
					if (data) {
						//showLog('恭喜您，价值&yen;555的全场通用券已到您的账户，开始买买买吧');
						showLog('领取成功');
					}
				},
				error: function(data) {
					switch (data.BCode) {
						case -1:
							showLog('礼包不存在');
							break;
						case -2:
							showLog('用户不存在');
							break;
						case -3:
							showLog('该设备已达最大领取次数');
							break;
						case -4:
							showLog('您已经领取过该礼包');
							break;
						case -5:
							showLog('登录失效，请重新登录');
							setTimeout(YmtApi.toLogin, 1E3);
							break;
					}
				}
			});
		},
		//模块打点空方法
		noop: function() {

		}
	}

	var share = function() { //分享
		var $this = $(this),
			url = $this.attr('data-share-url'),
			content = $this.attr('data-share-content'),
			title = $this.attr('data-share-title'),
			pic = $this.attr('data-share-pic');

		var magicReg = /\${(.+?)\}/,
			magicParam = url.match(magicReg),
			paramKey;
			//@TODO 暂时只支持userId
		if(magicParam && (paramKey = magicParam.pop())){
			if(paramKey==='userid'){
				url = url.replace(magicReg,YmtApi.utils.getAuthInfo().UserId)
			}
			
		}

		YmtApi.openShare({
			shareTitle: title,
			shareUrl: url,
			sharePicUrl: pic,
			shareContent: content,
			showWeiboBtn: 1
		});
	}

	//tab切换公共脚本
	$(document).on('click', '.J-tab li',
			/**
			 * tab 功能
			 *
			 * @example
			 * 
			 * <ul class="J-tab">
			 * 	<li class="active"></li>
			 *  <li></li>
			 * </ul>
			 *
			 * 事例结构如上，每次点击li会自动变更且增加active className 
			 */
			function() {
				var $this = $(this);
				$this.closest('.J-tab').find('li').removeClass('active');
				$this.addClass('active');
				//location.hash = $this.attr('data-href');
				window.scrollTo(0, $('#' + $this.attr('data-href')).offset().top);
				stopCheck = true;

			}).on('click', '.J-go-top',
			/**
			 * 回到顶部
			 */
			function() {
				var scrollOffset = -$(window).scrollTop() - window.innerHeight,
					$this = $(this);
				window.scrollTo(0, 0);
			}).on('click', '.J-open-C-Product',
			/**
			 * 打开C端商品详情
			 * 区分app内和wap
			 */
			function() {
				var url = "",
					$this = $(this),
					productId = $this.attr('data-productId'),
					sellerId = $this.attr('data-sellerId'),
					logo = $this.attr('data-logo'),
					seller = $this.attr('data-seller');

				//判断是否扫货app 跳转相应的页面
				if (YmtApi.isSaohuoApp) {
					url = YmtApi.utils.addParam('/forBuyerApp/productDetail', {
						param: JSON.stringify({
							SellerModel: {
								Logo: logo,
								Seller: seller,
								SellerId: sellerId

							},
							ProductModel: {
								ProductId: productId
							}
						})
					});
				} else {
					url = 'http://sq.ymatou.com/product/' + productId;
				}
				YmtApi.open({
					title: '全球好货',
					url: url
				});
			}).on('click', '.ymt-butler',
			/**
			 * 洋管家
			 */
			function() { //洋管家
				if (YmtApi.utils.hasLogin()) {
					var auth = YmtApi.utils.getAuthInfo();;
					var UserId = auth.UserId || 0;
					var index = UserId % 10;
					//客服组
					var customServiceIdList = ["5771600", "5771700", "5771737", "5771792", "5771899", "5771996", "5772067", "5772141", "5772204", "5772284"];

					YmtApi.openChatDetail({
						SessionId: UserId + '_' + customServiceIdList[index],
						ToId: customServiceIdList[index],
						ToLoginId: '洋管家' //auth.UserId
							// ToLogoUrl:''
					});
				} else {
					YmtApi.toLogin();
				}
			}).on('click', '.J-open',
			/**
			 * 打开按钮
			 * @dependence attr data-url 为打开的链接地址
			 *             不需要做过多处理，会追加相关用户认证，默认
			 *             为新窗口打开
			 */
			function() {
				var $this = $(this);

				YmtApi.open({
					url: $this.attr('data-url'),
					title: $this.attr('data-title'),
					isNew: true,
				});
			}).on('click', '.J-close',
			/**
			 * 关闭功能
			 */
			function() {
				var $this = $(this);

				$('.' + $this.attr('data-target')).removeClass('open').addClass('close');

			}).on('click', 'J-share', share)
		.on('click', '.J-receive-pk',
			/**
			 * 领取大礼包
			 * 领取礼包编号绑定元素data-pk-id
			 */
			function() {
				var pk_id = $(this).attr('data-pk-id');
				if (YmtApi.utils.hasLogin()) {
					share.apply(this);
					if (/iphone|ipad|ipod/i.test(navigator.userAgent)) {
						module.receivePk(pk_id);
					} else {
						//@TODO android通过urlchange的方式如果协议ajax是同步触发，可能会导致
						//ajax被终止。在ajax使用同步阻塞方法，比如alert也可以解决这个问题
						setTimeout(function() {
							module.receivePk(pk_id);
						}.bind(this), 100)
					}

				} else {
					YmtApi.toLogin();
				}
			});

		lazyLoad.init({
		    offset: 100,
		    callback: function (elem) {
		        //注册模块懒加载
		        var $this = $(elem);
		        if ($this.hasClass('J-module-Hold')) {
		            var moduleName = $this.attr('data-module'),
		                args = ($this.attr('data-arguments') || '').split(',');

		            // (window['_dc_'] || function () {})('exec', 'load_more_fn', {
		            //     module_name: 'activity_4864_capp',
		            //     sub_module_name: $this.attr('data-sub-module-name')
		            // });

		            moduleName && isFuntion(module[moduleName]) && module[moduleName].apply(module, args);
		            $this.removeClass('J-module-Hold').addClass('module-load-end');
		        }

		    }
		});

//})();