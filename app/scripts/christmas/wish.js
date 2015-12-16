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
					if(res.Data && res.Data.HasSuccess){
						isFuntion(callback) && callback(res.Data);
					}else{
						showLog(res.Msg)
					}					
				} else {
					showLog(res.Msg || '操作错误.');
				}
			},
			error: function() {
				showLog('操作错误..');
			}
		});
	};

	new Swiper('#tree-options', {
		freeMode: true,
		slidesPerView: 2.2,
		onSlideChangeEnd: function() {
			lazyLoad.check();
		}
	});

	$('.tree-kind-list li').click(function() {
		$('.tree-kind-list li').removeClass('selected');
		$(this).addClass('selected');
	});

	/**
	 * 计算字节长度
	 * @return {[type]} [description]
	 */
	var strChatLength = function(str){
		var i = 0,len=str.length,n=0;
		while(i<len){
			n += str.charCodeAt(i++)<128 ? 1 : 2;
		}
		return n;
	},cutString = function(str,len){
		var i = 0,len1=str.length,n=0;
		while(i<Math.min(len,len1)){
			n += str.charCodeAt(i++)<128 ? 1 : 2;
			if(n === len)break;
		}
		return str.substr(0,i);
	}

	//打开弹层
	var openDialog = function (data) {
        $('#christmas-dialog').addClass('open');
        $('.ymtui-dialog-mask').addClass('open');
    }


    $(document).on('click','.J-close-dialog',function(){
    	$('#christmas-dialog').removeClass('open');
    	$('.ymtui-dialog-mask').removeClass('open');
    });

	//var jsApiHost = 'http://172.16.2.97:8001/';
	var jsApiHost = 'http://jsapi.pk.ymatou.com/';
	
	$('#content').on('input',function(){
		var val = $(this).val();
		if(strChatLength(val) > 40){
			$(this).val(cutString(val,40));
		}
		$('#submit')[val?'removeClass':'addClass']('invalid');
	});

	$('#submit').click(function() {
		
		if(YmtApi.utils.hasLogin()){
			if($(this).hasClass('invalid')){
				return;
			}
			jsonpGetData(YmtApi.utils.addParam(jsApiHost + 'api/Christmas/Wishing', {
				AccessToken: YmtApi.utils.getAuthInfo().AccessToken,
				TreeId: $('.tree-kind-list li.selected').index()+1,
				Content: $('#content').val()
			}), function(data) {
				if(data.HasSuccess){
					openDialog();
				}else{
					showLog('许愿失败');
				}
			});
		}else{
			YmtApi.toLogin()
		}
		
	});

	$(document).on('click', '.J-share', function() { //分享
		var $this = $(this),
			url = $this.attr('data-share-url') || YmtApi.utils.addParam('http://evt.ymatou.com/activity_4861_capp',{
				wishUserId:YmtApi.utils.getAuthInfo().UserId
			}), 
			content = $this.attr('data-share-content'),
			title = $this.attr('data-share-title'),
			pic = $this.attr('data-share-pic');

		YmtApi.openShare({
			shareTitle: title,
			shareUrl: url,
			sharePicUrl: pic,
			shareContent: content,
			showWeiboBtn: 0
		});
	});

})();