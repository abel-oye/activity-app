/* global ejs: true,YmtApi:true */

/**
 * 海外购物节首页
 * @author river
 * @email lijiang@ymaotu.com
 * @create-date 20151014
 */
$(function () {
    'use strict';

    //初始化ejs
    ejs.open = '{{';
    ejs.close = '}}';

    var isFuntion = function (str) {
        return 'function' === typeof str;
    };

    //日期转换
    ejs.filters.simpleDate = function (price) {
        if (!price) return '';

        var date = price.split(' ')[0];
        return date.replace(/[-\/]/g, '.');
    };

    ejs.filters.pirceRegion = function (price) {
      if (!price) {
        return price;
      }
      var num = (price + '').split('.');
      return '<strong>' + num[0] + '</strong>' + (num[1] ? '.' + num[1] : '');
    };

    var search = YmtApi.utils.getUrlObj(),
        authInfo = YmtApi.utils.getAuthInfo();
    var showLogStatus = true;

    /**
     * 显示日志
     */
    var showLog = function (msg, callback) {
        if (showLogStatus) {
            showLogStatus = false;
            var errElm = $('.msg-error');
            if (!errElm[0]) {
                errElm = $('<div class="msg-error"></div>')
                    .appendTo('body');
            }
            errElm.html(msg).css('opacity', '1');

            setTimeout(function () {
                $('.msg-error').css('opacity', '0');
                showLogStatus = true;
                callback && callback();
            }, 1800);
        }
    };
    /**
     * 通过jsonp获得数据
     * @param  {String}   url      请求的地址
     * @param  {Function} callback 回调方法
     * @param  {String}   callbackName   [description]
     * @return {[type]}            [description]
     */
    var jsonpGetData = function (url, callback,callbackName) {
        /*if(fnName){
            if(!(typeof window[fnName] === 'function')){
                window[fnName] = function(data){
                    callback && callback(data);
                    delete window[fnName];
                }
            }
        }*/
        var cbFn = {};

        if(typeof callback === 'function'){
            cbFn.success = callback;
        }

        if(typeof callback === 'object'){
            cbFn = callback;
        }

        $.ajax({
            url: url,
            type: 'GET',
            jsonpCallback:callbackName,
            dataType: 'jsonp',
            timeout:60000,//1分钟过期
            cache:false,
            success: function (res) {
                if (res && (res.Code === 200 || res.Code === '200')) {
                    isFuntion(cbFn.success) && cbFn.success(res.Data);
                }
                else {
                    isFuntion(cbFn.error) && cbFn.error(res);
                }
            },
            error: cbFn.error || function(){
                showLog('操作失败.')
            }
        });
    };
    var pageIndex = 1;
    var module = {
        //双11更便宜
        getCheap:function(){
            jsonpGetData(YmtApi.utils.addParam('http://api.evt.ymatou.com/ActivityTemplate/Products/aid_4023/pid_4700/pi_'+(pageIndex++)+'/ps_10', {

            }), function (data) {
                if(data && data.ProductList && data.ProductList[0]){
                    var html = ejs.render($('#cheap-tpl').html(), data);
                    $('cheap').append(html);
                }
            },'ymatou_at_4023_4700');
        }
    }

    module.getCheap();

    $(document).on('click', '.J-open', function () {
        var $this = $(this);

        YmtApi.open({
            url: $this.attr('data-url'),
            title: $this.attr('data-title'),
            isNew: true,
        });
    }).on('click', '.J-share', function () { //分享
            var $this = $(this),
                url = $this.attr('data-share-url'),
                content = $this.attr('data-share-content'),
                title = $this.attr('data-share-title'),
                pic = $this.attr('data-share-pic');

            YmtApi.openShare({
                shareTitle: '他破解了一个全球知名网站，想看看里面的秘密，惊的下巴都掉了！ ',
                shareUrl: 'http://static.pk.ymatou.com/gwj/share.html',
                sharePicUrl: 'http://static.pk.ymatou.com/images/gwj/gwj_share-4d3a881e31.jpg',
                shareContent: '2016最潮购省攻略！听说省下来的钱都可以去迪拜住一个月了！所以梦想还是要有的，万一实现了呢~',
                showWeiboBtn:1
            });
        });

    /**
     * [infiniteScroll description]
     * @param  {Object} options 配置信息
     *                  selector
     *                  offset
     *                  callback
     *                  throttle
     */
    var infiniteScroll = function ( /*配置*/ options) {
      if ('function' !== typeof (options.callback)) {
        return;
      }
      options.offset = parseInt(options.offset) || 0;
      var throttleTime = options.throttle || 450;

      var callback = options.callback,
        $widnow = $(window),
        $sel = $(options.selector),
        throttle = true,
        currTop = 0; //控制滑动方向

      var selectorHeight = function () {
          var $sel = $(options.selector);
          //当前高度 加上容器的位置
          return $sel.height() + $sel.offset().top;
        },handler = function () {
            var $sel = $(options.selector);
            if(!($sel && $sel[0])){
                return;
            }
            if (throttle && ($widnow.scrollTop() > currTop) && ($widnow.scrollTop() + $widnow.height() + options.offset >= selectorHeight())) {
              throttle = false;
              currTop = $widnow.scrollTop();
              setTimeout(function () {
                throttle = true;
              }, throttleTime);

              callback();
            }
        }

      $widnow.on('scroll touchmove', handler);
    };

    infiniteScroll({
      selector: '.cheap-wrapper',
      offset: 300,
      callback: function () {
            module.getCheap();
      }
    });


});
