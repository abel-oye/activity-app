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
          //showLog(res.Msg || '操作错误.');
        }
      }
    });
  };

  //获得pk信息
  var PKId,
    getPkInfo = function () {
      jsonpGetData(YmtApi.utils.addParam('http://172.16.2.97:8001/api/PKGame/GetTodayPKProductData', {
        accessToken: authInfo.AccessToken
      }), function (data) {
        if(data){
          PKId = data.PKId;
          var html = ejs.render($('#pkInfo').html(), data);
          $('pkInfo').html(html);

          var voteClassName = 'column-vote-group';
          //投票 column-vote-group right-vote-group left-vote-group
          if (data.VoteProductId) {
            voteClassName = 'left-vote-group';
            if (data.VoteProductId === data.BlueProductId) {
              voteClassName = 'right-vote-group';
            }
          }

          var html = ejs.render($('#vote-status').html(), {
            BlueProductId: data.BlueProductId,
            RedProductId: data.RedProductId,
            RedProductName: data.RedProductName,
            BlueProductName: data.BlueProductName,
            VoteProductId:data.VoteProductId,
            className: voteClassName
          });
          $('vote-status').html(html);
        }
      });
    }

  //获得战绩统计
  var getSummary = function () {
      jsonpGetData(YmtApi.utils.addParam('http://172.16.2.97:8001/api/PKGame/GetSummary', {
        accessToken: authInfo.AccessToken
      }), function (data) {
        var html = ejs.render($('#summary').html(), data);
        $('summary').html(html);
      });
    }
    //获得往期
  var pastCompetition = function () {
    jsonpGetData(YmtApi.utils.addParam('http://172.16.2.97:8001/api/PKGame/GetPastPKGameDataList', {
      accessToken: authInfo.AccessToken
    }), function (data) {
      if(data){
        var html = ejs.render($('#past').html(), data);
        $('past').html(html);
      }
    });
  }

  //回到顶部
  var gotoTop = function (acceleration, stime) {
    acceleration = acceleration || 0.2;
    stime = stime || 10;

    var speeding = 1 + acceleration,
      top = document.documentElement.scrollTop || document.body.scrollTop;
    window.scrollTo(0, Math.floor(top / speeding));

    if (top > 0) {
      window.setTimeout(gotoTop, stime);
    }
  }

  getPkInfo();
  pastCompetition();

  if (YmtApi.utils.hasLogin()) {
    getSummary();
  }

  var voteProductId = '',
    confirmVote = function () { //确认投票
      jsonpGetData(YmtApi.utils.addParam('http://172.16.2.97:8001/api/PKGame/VotePKProduct', {
        accessToken: authInfo.AccessToken,
        PKId: PKId,
        ProductId: voteProductId
      }), function (data) {
        if(data.HasSuccess){
          $('#pk-vote').hide();
          console.log(data);
        }
      });
    }

  $(document).scroll(function () {
      var top = document.documentElement.scrollTop || document.body.scrollTop,
        $backTop = $('.pk-back-top');
      if (top > 300) {
        $backTop.show()
      }
      else {
        $backTop.hide();
      }
    }).on('click', '.pk-back-top', gotoTop)
    //规则的显示隐藏
    .on('click', '.J-seeMore', function () {
      var $this = $(this),
        parent = $this.parent();
      if (parent.has('open')) {
        $this.text('收起更多细则');
      }
      else {
        $this.text('查看更多细则');
      }
      parent.toggleClass('open')
    })
    .on('click','.J-open',function(){
      var $this = $(this);

      YmtApi.open({
        url: $this.attr('data-url'),
        isNew: true,
      });
    })
    .on('click', '.J-close-record', function () {
      $(this).closest('.pk-record').hide();
      $('.pk-record-close').show()
    })
    .on('click', '.J-open-record', function () {//打开
      $(this).hide();
      $('.pk-record').show()
    }).on('click', '.J-open-vote', function () {//打开投票
      var $this = $(this);
      voteProductId = $this.attr('data-product-name')
      $('#pk-vote').show().find('.pk-dialog-body strong').text(voteProductId);
    }).on('click', '.J-close-vote', function () {//关闭投票
      $('#pk-vote').hide();
    }).on('click', '.J-confirm-vote', function () {//确认投票
      confirmVote();
    }).on('click','.J-share',function(){//分享
     var $this = $(this),
         url = $this.attr('data-share-url'),
         content = $this.attr('data-share-content'),
         title = $this.attr('data-share-title'),
         pic = $this.attr('data-share-pic');

       YmtApi.openShare({
         shareTitle: title,
         shareUrl: url,
         sharePicUrl: pic,
         shareContent: content
       });

    });
});
