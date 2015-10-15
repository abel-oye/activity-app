/* global ejs: true,YmtApi:true */

/**
 * 我的积分
 * @author river
 * @email lijiang@ymaotu.com
 * @create-date 20151014
 */
$(function(){
  'use strict';

  //初始化ejs
  ejs.open = '{{';
  ejs.close = '}}';

  ejs.filters.pirceRegion = function (price) {
    if (!price) {
      return price;
    }
    var num = (price + '').split('.');
    return '<strong>' + num[0] + '</strong>' + (num[1] ? '.' + num[1] : '');
  };

  var isFuntion = function (str) {
    return 'function' === typeof str;
  };

  var search = YmtApi.utils.getUrlObj(),
      authInfo = YmtApi.utils.getAuthInfo();

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
          isFuntion(callback) && callback(res.Data);
        }
        else {
          showLog(res.Msg || '操作错误.');
        }
      }
    });
  };
  //获得战绩统计
  var getSummary = function(){
      jsonpGetData(YmtApi.utils.addParam('http://172.16.2.97:8001/api/PKGame/GetSummary', {
         accessToken:authInfo.AccessToken
      }), function (data) {
        var html = ejs.render($('#summary').html(), data);
        $('summary').html(html);
      });
  };
  var exchangeList ;
  //获得奖品信息
  var getSpoils = function(){
      jsonpGetData(YmtApi.utils.addParam('http://172.16.2.97:8001/api/PKGame/GetPointExchange', {
         accessToken:authInfo.AccessToken
      }), function (data) {
        /*data = {
          PointExchangeList:[
            {
              AwardId:'',
              AwardStatus:'1',
              StatusDes:'50'
            },
            {
              AwardId:'',
              AwardStatus:'1',
              StatusDes:'50'
            },{
              AwardId:'',
              AwardStatus:'2',
              StatusDes:'50'
            },{
              AwardId:'',
              AwardStatus:'3',
              StatusDes:'50'
            },{
              AwardId:'',
              AwardStatus:'1',
              StatusDes:'50'
            },
          ]
        }*/
        exchangeList = data.PointExchangeList;
        var html = ejs.render($('#spoils').html(), data);
        $('spoils').html(html);
      });
  };

  //获得历史战绩
  var getGains = function(){
      jsonpGetData(YmtApi.utils.addParam('http://172.16.2.97:8001/api/PKGame/GetPastPKGameRecord', {
         accessToken:authInfo.AccessToken
      }), function (data) {
        if(data){
          var html = ejs.render($('#gains').html(), data);
          $('gains').html(html);
        }
      });
  };

  getSummary();
  getSpoils();
  getGains();

  //tab切换
  $('.pk-tab-header').on('click','.tab-header-item',function(){
    var $this = $(this),
        $header = $this.closest('.pk-tab-header'),
        $tab = $header.parent();

    if(!$this.hasClass('open')){
      $tab.find('.tab-header-item,.tab-body-item').removeClass('open');
      $this.addClass('open');
      $tab.find('.tab-body-item').eq($this.index()-1).addClass('open');
      $header.toggleClass('is-switch-state');
    }
  });

  $(document).on('click', '.J-open', function () {
    var $this = $(this);
    YmtApi.open({
      url: $this.attr('data-url'),
      isNew: true,
    });
  }).on('click','.J-open-exchange',function(){
    var inx = $(this).attr('data-index')
    var html = ejs.render($('#vote-exchange-tpl').html(), exchangeList[inx]);
    $('#vote-exchange').show().find('.vote-coupon-dialog').html(html);

  }).on('click','.J-close-exchange',function(){
    $('#vote-exchange').hide();
  });

});
