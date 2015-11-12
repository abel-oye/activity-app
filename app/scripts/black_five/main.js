/* global ejs: true,YmtApi:true */

/**
 * 黑五页
 * @author river
 * @email lijiang@ymaotu.com
 * @create-date 20151113
 */
+(function () {
    'use strict';

    var _pk_id='4';

    //初始化ejs
    ejs.open = '{{';
    ejs.close = '}}';

    ejs.filters.convertImgUrl = function(str){
        return str.replace(/\/original\//,'/small/').replace(/_o/,'_s');
    }

    var isFuntion = function (str) {
        return 'function' === typeof str;
    };

    var toastStatus = true;

    /**
     * 显示日志
     */
    var showLog = function (msg, callback) {
        if (toastStatus) {
            toastStatus = false;
            var errElm = $('.ymtui-toast');
            if (!errElm[0]) {
                errElm = $('<div class="ymtui-toast"></div>')
                    .appendTo('body');
            }
            errElm.html(msg).addClass('show');

            setTimeout(function () {
                errElm.removeClass('show');1
                toastStatus = true;
                callback && callback();
            }, 2400);
        }
    };
    /**
     * 通过jsonp获得数据
     * @param  {String}   url      请求的地址
     * @param  {Function} callback 回调方法
     * @param  {String}   callbackName   [description]
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
            timeout: 60000, //1分钟过期
            cache: false,
            success: function (res) {
                if (res && (res.Code === 200 || res.Code === '200')) {
                    isFuntion(cbFn.success) && cbFn.success(res.Data);
                }
                else {
                    isFuntion(cbFn.error) && cbFn.error(res);
                }
            }
        });
    };

    var search = YmtApi.utils.getUrlObj(),
        authInfo = function () {
            return YmtApi.utils.getAuthInfo()
        };



    var checkModule = function () {

        //模块占位符
        //使用image 站位模块区域，依赖图片懒加载实现按需加载模块
        $('.J-module-Hold').on('load', function () {
            var $this = $(this),
                moduleName = $this.attr('data-module'),
                args = ($this.attr('data-arguments') || '').split(',');
            moduleName && isFuntion(module[moduleName]) && module[moduleName].apply(module, args);
            $this.removeClass('J-module-Hold').addClass('module-load-end');
        });
    }

    var module = {
        joinLottery: function () {
            var map = {
                0: '0',
                1: '1',
                2: '2',
                3: '7',
                4: '3',
                5: '6',
                6: '5',
                7: '4',
            }

            var complete = function (data) {
                turntable.complete = function () {
                    openDialog(data);
                }
            }

            jsonpGetData(YmtApi.utils.addParam('http://jsapi.pk.ymatou.com/api/Lottery/JoinLottery', {
                accessToken: authInfo().AccessToken,
                deviceId: (YmtApi.isIos ? search.DeviceId : search.DeviceToken) || '132',
                hasShare: true
            }), {
                success: function (data, code) {
                    if (data) {
                        data.LotteryIndex = data.LotteryIndex < 0  ? 1 : data.LotteryIndex;
                        data.ProductPic = 'http://i13.tietuku.com/7ebfd293ec6cb11e.png';

                        if(data.LotteryIndex == 6){
                            data.ProductPic = 'http://i13.tietuku.com/7ebfd293ec6cb11e.png';
                        }
                        turntable.stop(map[data.LotteryIndex]);
                        drawNum = data.HasUseCount;
                        complete(data);
                    }
                },
                error: function () {
                    //如果出错 直接显示谢谢惠顾
                    turntable.stop(map[7]);
                    complete({
                        BCode: 103
                    });
                }
            });
        },
        //明星卖家
        starSeller: function () {
            jsonpGetData(YmtApi.utils.addParam('http://jsapi.pk.ymatou.com/api/HotBuyer/GetHotBuyerList', {

            }), {
                success: function (data, code) {
                    if (data) {
                        var html = ejs.render($('#star-seller-tpl').html(), data);
                        $('star-seller').html(html);
                    }
                },
                error: function () {

                }
            });
        },
        /**
         * 获得活动商品
         * @param  {string} aid 活动编号
         * @param  {string} pid 模块编号
         */
        activeModule:function(aid,pid){
            getActivityJsonP(aid,pid,100,function(data){
                if(data && data.Products){
                    var html = ejs.render($('#active-tpl').html(), data);
                    $('[data-arguments="'+aid+','+pid+'"]').html(html);
                }

            });
        },
        //砍价团
        groupList:function(){
            jsonpGetData(YmtApi.utils.addParam('http://api.appactivity.ymatou.com/api/BargainGroup/Tuan/TopicJoinList?sign=828', {

            }), {
                success: function (data, code) {
                    if (data) {
                        //var html = ejs.render($('#group-tpl').html(), data);
                        //$('.bf-group-list').html(html);
                    }
                },
                error: function (err) {
                    //@TODO fuck 砍价团的接口格式不一致
                    if(err && err.RetCode == 200){
                        var html = ejs.render($('#group-tpl').html(), err.RetData);
                        $('.bf-group-list').html(html);
                    }
                }
            });
        },
        share: function () {
            jsonpGetData(YmtApi.utils.addParam('http://jsapi.pk.ymatou.com/api/Lottery/LotteryShareRecord', {
                accessToken:authInfo().AccessToken
            }),{
                success:function(){
                    //重置抽奖次数
                    drawNum = 0;
                },
                error:function(){}
            });
        },
        receivePk:function(packageId){//领取大礼包
            var authInfo = YmtApi.utils.getAuthInfo(),
                deviceId = (YmtApi.isIos ? search.DeviceId : search.DeviceToken) || '0000000';

            jsonpGetData(YmtApi.utils.addParam('http://ja.m.ymatou.com/api/Coupon/UserBatchReceiveCoupon?DeviceCode='+deviceId+'&PackageId='+packageId,{
               BuyerUserId:authInfo.UserId,
               AccessToken:authInfo.AccessToken
           }), {
               success:function(data){
                   if(data){
                       showLog('领取成功！');
                   }
               },
               error:function(data){
                   switch(data.BCode){
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
                          showLog('您已经领取成功');
                          break;
                   }
               }
           });
        },
        checkReceive:function(){//检查是否领取大礼包
            jsonpGetData(YmtApi.utils.addAuth(YmtApi.utils.addParam('http://jsapi.pk.ymatou.com/api/Lottery/CheckUserHasReceive',{
                PackageId:_pk_id
            })), {
                success:function(data){
                    if(data && data.HasSuccess){
                        $('.bf-tab-wrapper').removeClass('bf-package');
                    }else{
                        $('.bf-tab-wrapper').addClass('bf-package')
                    }
                },
                error:function(data){

                }
            });
        },
        follow:function(sellerId){//关注卖家

            jsonpGetData(YmtApi.utils.addAuth(YmtApi.utils.addParam('http://jsapi.app.ymatou.com/api/User/UserAttent',{
               SellerId: sellerId,
                AttentType: 0
            })), {
                success:function(data){

                },
                error:function(data){

                }
            });
        }
    }

    var getActivityJsonP = function (aid, pid, pageSize, callback) {
        var callbackName = 'ymatou_at_' + aid + '_' + pid;
        pageSize = pageSize || 10;
        jsonpGetData('http://api.evt.ymatou.com/ActivityTemplate/Products/aid_' + aid + '/pid_' + pid + '/ps_' + pageSize, callback, callbackName);
    }

    //检查坐标
    var checkCoordinate = function(){
        var li = $('#bf-tab ul li'),
            active = li.filter('.active'),
            coor = $('.coordinate');
        var left = active.offset().left,
            width = active.width();
        //这里注意去写分离 减少重绘
       coor.removeClass('first')
            .removeClass('last')
            .css({
                width:width,
                left:left
            });
        $('.ymt-person').css({
            left:left
        })

        if(active.index() === 0){
            coor.addClass('first');
        }
    }

    $(document).on('click', '.J-open', function () {
            var $this = $(this);

            YmtApi.open({
                url: $this.attr('data-url'),
                title: $this.attr('data-title'),
                isNew: true,
            });
        }).on('scroll', function () {
            var top = document.documentElement.scrollTop || document.body.scrollTop,
                bottom = document.querySelector('#bf_01').getBoundingClientRect().bottom;

            if (top > bottom) {
                $('#bf-tab').removeClass('show');
                $('.ymt-butler').addClass('show')
            }
            else {
                $('#bf-tab').addClass('show');
                $('.ymt-butler').removeClass('show')
            }
        })
        .on('click', '#bf-tab li', function () {
            $('#bf-tab li').removeClass('active');
            $(this).addClass('active');
            checkCoordinate();
        }).on('click', '.J-share', function () { //分享
            var $this = $(this),
                url = $this.attr('data-share-url'),
                content = $this.attr('data-share-content'),
                title = $this.attr('data-share-title'),
                pic = $this.attr('data-share-pic');

            YmtApi.openShare({
                shareTitle: title,
                shareUrl: url,
                sharePicUrl: pic,
                shareContent: content,
                showWeiboBtn: 1
            });
        }).on('click', '.ymt-butler', function () { //洋管家
            if(YmtApi.utils.hasLogin()){
                var auth = YmtApi.utils.getAuthInfo();;
                var UserId = auth.UserId || 0;
                var index = UserId % 10;
                //客服组
                var customServiceIdList = ["5771600", "5771700", "5771737", "5771792", "5771899", "5771996","5772067", "5772141", "5772204", "5772284"];

                YmtApi.openChatDetail({
                    SessionId:UserId+'_'+customServiceIdList[index],
                    ToId:customServiceIdList[index],
                    ToLoginId:'洋管家'//auth.UserId
                    // ToLogoUrl:''
                });
            }else{
                YmtApi.toLogin();
            }
        });

    lazyLoad.init({
        offset: 350,
        callback: function (elem) {
            var $this = $(elem);
            if ($this.hasClass('J-module-Hold')) {
                var moduleName = $this.attr('data-module'),
                    args = ($this.attr('data-arguments') || '').split(',');
                moduleName && isFuntion(module[moduleName]) && module[moduleName].apply(module, args);
                $this.removeClass('J-module-Hold').addClass('module-load-end');
            }

        }
    });


})();
