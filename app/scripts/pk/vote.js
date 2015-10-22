/* global ejs: true,YmtApi:true */

/**
 * 我的积分
 * @author river
 * @email lijiang@ymaotu.com
 * @create-date 20151014
 */
$(function () {
    'use strict';

    //初始化ejs
    ejs.open = '{{';
    ejs.close = '}}';

    //日期转换
    ejs.filters.simpleDate = function (price) {
        if (!price) return '';

        var date = price.split(' ')[0];
        return date.replace(/[-\/]/g, '.');
    };

    var isFuntion = function (str) {
        return 'function' === typeof str;
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
        var errElm = $('.pk-error');
        if (!errElm[0]) {
          errElm = $('<div class="pk-error"></div>')
            .appendTo('body');
        }
        errElm.html(msg).css('opacity', '1');

        setTimeout(function () {
          $('.pk-error').css('opacity', '0');
          showLogStatus = true;
          callback && callback();
        }, 1800);
      }
    };


    /**
     * 通过jsonp获得数据
     * @param  {String}   url      请求的地址
     * @param  {Function} callback 回调方法
     * @param  {String}   fnName   [description]
     * @return {[type]}            [description]
     */
    var jsonpGetData = function (url, callback) {
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
            success: function (res) {
                if (res && (res.Code === 200 || res.Code === '200')) {
                    isFuntion(callback) && callback(res.Data,res);
                }
                else {
                    showLog(res.Msg || '操作错误.');
                }
            },
            error:function(){
                showLog('操作错误.');
            }
        });
    };

    /**
     * 文字截断
     * @param  {[type]} $target [description]
     * @param  {[type]} rowNum  [description]
     * 不用设置高度否则会影响计算，最佳设置字体大小和行高
     * 设置行数处理多行文本
     */
    var rowIntercept = function ($target, rowNum) {
        $target = $target || '.J-textflow';
        if(typeof $target === 'string'){
            $target = $($target);
        }
        rowNum = rowNum || 2;
      $target.each(function () {
        var $this = $(this),
          getCurrentStyle = function (elem, styleName) {
            return window.getComputedStyle ? window.getComputedStyle(elem, null)[styleName] : elem.currentStyle[styleName];
          },
          clientHeight = this.clientHeight, //容器高度
          fontSize = parseFloat(getCurrentStyle($this[0], 'fontSize')) || 22,
          lineHeight = parseFloat(getCurrentStyle($this[0], 'lineHeight')) || fontSize * 1.5;



        var title = $this.attr('title');
        //将原来的值保存到title中
        if (title === undefined || title === '') {
          $this.attr('title', title = $this.text());
        }
        //将原来的值还原重新计算
        $this.text(title);
        var dheight = parseInt(rowNum * lineHeight);
        if (clientHeight >= dheight) {
          while (dheight * 3 < this.clientHeight) {
            $this.html(title.substring(0, title.length / 2));
            title = $this.text();
          }
          //减去末尾文字
          while (dheight < this.clientHeight) {
            title = $this.text();
            $this.html(title.replace(/(\s)*([a-zA-Z0-9]?|\W)(\.\.\.)?$/, '...'));
          }
          $this.removeClass('J-textflow');
        }

      });
    };

    //当前页面做登录强制验证
    if(!YmtApi.utils.hasLogin()){
        YmtApi.toLogin();
    }
    //获得战绩统计
    var getSummary = function () {
        jsonpGetData(YmtApi.utils.addParam('http://jsapi.pk.ymatou.com/api/PKGame/GetSummary', {
            accessToken: authInfo.AccessToken
        }), function (data) {
            var html = ejs.render($('#summary').html(), data);
            $('summary').html(html);
        });
    };
    var exchangeList, //奖品列表
        currExchange; //当前选中的奖品
    //获得奖品信息
    var getSpoils = function () {
        jsonpGetData(YmtApi.utils.addParam('http://jsapi.pk.ymatou.com/api/PKGame/GetPointExchange', {
            accessToken: authInfo.AccessToken
        }), function (data) {
            exchangeList = data.PointExchangeList;
            var html = ejs.render($('#spoils').html(), data);
            $('spoils').html(html);
        });
    };

    //获得历史战绩
    var getGains = function () {
        jsonpGetData(YmtApi.utils.addParam('http://jsapi.pk.ymatou.com/api/PKGame/GetPastPKGameRecord', {
            accessToken: authInfo.AccessToken
        }), function (data) {
            if (data) {
                var html = ejs.render($('#gains').html(), data);
                $('gains').html(html);
            }
        });
    };

    getSummary();
    getSpoils();
    getGains();

    //tab切换
    $('.pk-tab-header').on('click', '.tab-header-item', function () {
        var $this = $(this),
            $tab = $this.closest('.pk-tab');

       if (!$this.hasClass('open')) {
            $tab.find('.tab-header-item').removeClass('open');
            $this.addClass('open');
        }

        if($this.index() == 1){
            $tab.removeClass('is-switch-state');
        }else{
            $tab.addClass('is-switch-state');
        }
         rowIntercept();
    });

    $(document).on('click', '.J-open', function () {
        var $this = $(this);
        YmtApi.open({
            url: $this.attr('data-url'),
            title: $this.attr('data-title'),
            isNew: true,
        });
    }).on('click', '.J-open-exchange', function () {

        var inx = $(this).attr('data-index');

        currExchange = exchangeList[inx];

        var html = ejs.render($('#vote-exchange-tpl').html(), currExchange);
        $('.vote-exchange').show().find('.vote-coupon-dialog').html(html);

    }).on('click', '.J-close-exchange', function () {
        $('.vote-exchange').hide();
    }).on('click', '.J-receive-coupon', function () {
        jsonpGetData(YmtApi.utils.addParam('http://jsapi.pk.ymatou.com/api/PKGame/ReceiveCouponInfo', {
            accessToken: authInfo.AccessToken,
            awardId: currExchange.AwardId,
            couponNumber: currExchange.CouponDetailInfo.BatchCode
        }), function (data,res) {
            showLog(res.Msg);
            $('.vote-exchange').hide();
            window.location.reload();
        });
    }).on('click', '.J-add-privilege', function () {
        jsonpGetData(YmtApi.utils.addParam('http://jsapi.pk.ymatou.com/api/PKGame/ExchangeProductAward', {
            accessToken: authInfo.AccessToken,
            awardId: currExchange.AwardId
        }), function (data,res) {
            showLog(res.Msg);
            if(data.ProductId){
                $('#vote-exchange').hide();
                YmtApi.open({
                    url:'http://item.app.ymatou.com/forYmatouApp/product/pid?pid='+data.ProductId,
                    title:'商品详情',
                    isNew:true
                });
                setTimeout(function(){
                  window.location.reload();
              },1E3);
            }

        });
    });

});
