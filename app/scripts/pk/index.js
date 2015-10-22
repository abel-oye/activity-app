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
                    isFuntion(callback) && callback(res.Data);
                }
                else {
                    //showLog(res.Msg || '操作错误.');
                }
            },
            error: function () {
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

    //获得pk信息
    var PKId,
        getPkInfo = function () {
            jsonpGetData(YmtApi.utils.addParam('http://jsapi.pk.ymatou.com/api/PKGame/GetTodayPKProductData', {
                accessToken: authInfo.AccessToken
            }), function (data) {
                if (data) {
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
                        VoteProductId: data.VoteProductId,
                        className: voteClassName
                    });
                    $('vote-status').html(html);

                    $('.pk-container').removeClass('pk-hide');
                    $('#loading-fixed').remove();

                     rowIntercept($('.J-textflow'), 2);

                     pastDynamics()
                }
            });
        };

    //投票动态
    var dynamics = function(){
         $('.pk-dynamics-list').each(function(i,z){
            var $this = $(this),
                childs = $this.find('li'),
                len = childs.length,
                inx = 0,timer;
            if(!len){
                return;
            }
            var move = function(){
                $this.css('transform','translate(0,'+(-100*inx)+'%)');
                if(inx+1 == len){
                    timer = null;
                    clearInterval(timer);
                }else{
                   inx ++;
                }
            }
            if(i){
                setTimeout(function(){
                    timer = setInterval(move,1800);
                },800)
            }else{
                timer = setInterval(move,1800);
            }
        });
    }
    //获得战绩统计
    var getSummary = function () {
        jsonpGetData(YmtApi.utils.addParam('http://jsapi.pk.ymatou.com/api/PKGame/GetSummary', {
            accessToken: authInfo.AccessToken
        }), function (data) {
            data.hasLogin = true;
            var html = ejs.render($('#summary').html(), data);
            $('summary').html(html);
        });
    };

    //获得往期
    var pastCompetition = function () {
        jsonpGetData(YmtApi.utils.addParam('http://jsapi.pk.ymatou.com/api/PKGame/GetPastPKGameDataList', {
            accessToken: authInfo.AccessToken
        }), function (data) {
            if (data) {
                var html = ejs.render($('#past').html(), data);
                $('past').html(html);
                 rowIntercept($('.J-textflow'), 2);
            }
        });
    };
    //获得投票动态
    var pastDynamics = function () {
        jsonpGetData(YmtApi.utils.addParam('http://jsapi.pk.ymatou.com/api/PKGame/GetJoinPKGameData', {
        }), function (data) {
            if (data) {
                var html = $('#pk-dynamics').html();

                $('.pk-left-wrapper .pk-dynamics').html(ejs.render(html, {
                    data:data.RedData
                }));

                $('.pk-right-wrapper .pk-dynamics').html(ejs.render(html, {
                    data:data.BlueData
                }));

                dynamics();
            }
        });
    };

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
    };

    getPkInfo();
    pastCompetition();

    if (YmtApi.utils.hasLogin()) {
        getSummary();
    }else{
        var html = ejs.render($('#summary').html(), {
            WinTotal:0,
            StraightTotal:0,
            hasLogin:false
        });
        $('summary').html(html);
    }

    var checkLogin = function(){
        if(YmtApi.utils.hasLogin()){
            return true;
        }else{
            YmtApi.toLogin();
        }
    }

    var voteProductId = '',
        confirmVote = function () { //确认投票
            jsonpGetData(YmtApi.utils.addParam('http://jsapi.pk.ymatou.com/api/PKGame/VotePKProduct', {
                accessToken: authInfo.AccessToken,
                PKId: PKId,
                ProductId: voteProductId
            }), function (data) {
                if (data.HasSuccess) {
                    $('.pk-vote-dialog').hide();
                    showLog('投票成功！');
                    window.location.reload();
                }
            });
        };

    $(document).scroll(function () {
            var top = document.documentElement.scrollTop || document.body.scrollTop,
                $backTop = $('.pk-back-top');
            if (top > 300) {
                $backTop.show();
            }
            else {
                $backTop.hide();
            }
        }).on('click', '.pk-back-top', gotoTop)
        //规则的显示隐藏
        .on('click', '.J-seeMore', function () {
            var $this = $(this),
                parent = $this.parent(),
                content = parent.find('.rule-content');

            if (parent.hasClass('open')) {
                 $this.text('查看更多细则').removeClass('handstand');
            }
            else {
                $this.text('收起更多细则').addClass('handstand');

            }
            /*title = content.attr('title');
            content.attr('title',content.text());
            content.text(title);*/
            parent.toggleClass('open');
            content.toggleClass('textflow');
        })
        .on('click', '.J-open', function () {
            var $this = $(this);

            YmtApi.open({
                url: $this.attr('data-url'),
                title:$this.attr('data-title'),
                isNew: true,
            });
        })
        .on('click', '.J-close-record', function () {
            $(this).closest('.pk-record').removeClass('open');
            $('.pk-record-close').show();
        })
        .on('click', '.J-open-record', function () { //打开
            if(checkLogin()){
                $(this).hide();
                $('.pk-record').addClass('open');
            }
        }).on('click', '.J-open-vote', function () { //打开投票
            if(checkLogin()){
                var $this = $(this);
                voteProductId = $this.attr('data-product-id');

                $('.pk-vote-dialog').show().find('.pk-dialog-body strong').text($this.attr('data-product-name'));
            }else{
                YmtApi.one('userStatusChange',function(){
                    window.location.reload()
                });
            }
        }).on('click', '.J-close-vote', function () { //关闭投票
            $('.pk-vote-dialog').hide();
        }).on('click', '.J-confirm-vote', function () { //确认投票
            confirmVote();
        }).on('click', '.J-share', function () { //分享
            var $this = $(this),
                url = $this.attr('data-share-url'),
                content = $this.attr('data-share-content'),
                title = $this.attr('data-share-title'),
                pic = $this.attr('data-share-pic');
            var share = function(userId){
                YmtApi.openShare({
                    shareTitle: '【有人@你】全球洋货年度PK赛正在直播！',
                    shareUrl: 'http://static.pk.ymatou.com/pk/share.html?kid='+PKId+'&uid='+userId,
                    sharePicUrl: 'http://static.pk.ymatou.com/images/pk_share-7a30468c08.jpg',
                    shareContent: '全球洋货分成红蓝两队，你偏爱哪一方呢？赶紧为你心爱的Ta投票吧，说不定可以把ta和iPhone6s一起带回家噢~',
                    showWeiboBtn:1
                });
            }
            if(authInfo.UserId){
                share(authInfo.UserId)
            }
        });

        rowIntercept();

        YmtApi.on('userStatusChange',function(){
            window.location.reload();
        });
});
