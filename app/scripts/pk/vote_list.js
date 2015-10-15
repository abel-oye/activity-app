$(function () {
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
  //获得积分清单
  var getVoteList = function () {
    jsonpGetData(YmtApi.utils.addParam('http://172.16.2.97:8001/api/PKGame/GetPointDetail', {
      accessToken: authInfo.AccessToken
    }), function (data) {
      var html = ejs.render($('#voteList').html(), data);
      $('voteList').html(html);
    });
  }
  getVoteList()
});
