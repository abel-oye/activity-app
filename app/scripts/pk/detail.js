/* global ejs: true,YmtApi:true */

/**
 * pk首页
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
          //showLog(res.Msg || '操作错误.');
        }
      }
    });
  };

  //获得pk信息
  var getPkInfo = function () {
    jsonpGetData(YmtApi.utils.addParam('http://172.16.2.97:8001/api/PKGame/GetPastPKGameDetail', {
      accessToken: authInfo.AccessToken,
      PKId: search.id || ''
    }), function (data) {
      var html = ejs.render($('#pkInfo').html(), data);
      $('pkInfo').html(html);
    });
  }

  getPkInfo();

  $(document).on('click', '.J-open', function () {
    var $this = $(this);

    YmtApi.open({
      url: $this.attr('data-url'),
      isNew: true,
    });
  });


});
