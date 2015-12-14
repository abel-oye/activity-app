/* global ejs: true,YmtApi:true */

/**
 * 圣诞树
 * @author river
 * @email lijiang@ymaotu.com
 * @create-date 2015/12/14
 */

+(function() {

	var isFuntion = function(str) {
		return 'function' === typeof str;
	};
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
	var jsonpGetData = function(url, callback) {
		/*if(fnName){
		    if(!(typeof window[fnName] === 'function')){
		        window[fnName] = function(data){
		            callback && callback(data);
		            delete window[fnName];
		        }
		    }
		}*/
		$.ajax({
			url: url,
			type: 'GET',
			//jsonpCallback:undefined,
			dataType: 'jsonp',
			success: function(res) {
				if (res && (res.Code === 200 || res.Code === '200')) {
					isFuntion(callback) && callback(res.Data);
				} else {
					//showLog(res.Msg || '操作错误.');
				}
			},
			error: function() {
				showLog('操作错误.');
			}
		});
	};

	new Swiper('#tree-options', {
		freeMode: true,
		slidesPerView: 2.1,
		onSlideChangeEnd: function() {
			lazyLoad.check();
		}
	});

	$('.tree-kind-list li').click(function() {
		$('.tree-kind-list li').removeClass('selected');
		$(this).addClass('selected');
	});

	var jsApiHost = 'http://172.16.2.97:8001/';
	//var jsApiHost = 'http://jsapi.pk.ymatou.com/';

	$('#submit').click(function() {
		if(YmtApi.utils.hasLogin()){
			jsonpGetData(YmtApi.utils.addParam(jsApiHost + 'api/Christmas/Wishing', {
				AccessToken: YmtApi.utils.getAuthInfo().AccessToken,
				TreeId: $('.tree-kind-list li.selected').index(),
				Content: $('#content').text()
			}), function(data) {
				if(data.HasSuccess){

				}else{
					showLog('许愿失败');
				}
			});
		}else{
			YmtApi.toLogin()
		}
		
	});
})();