/* global ejs: true,YmtApi:true */

/**
 * 双12
 * @author river
 * @email lijiang@ymaotu.com
 * @create-date 2015/12/04
 */
;
(function () {

    FastClick.attach(document.body);

    'use strict';

    var IS_IOS = /\(i[^;]+;( U;)? CPU.+Mac OS X/ig.test(window.navigator.userAgent);
    var topHeight = IS_IOS ? 150 : 0;
    //针对Ios 顶部被遮挡 对fixed top为0的元素进行处理
        if(IS_IOS){
           $('#bf-tab').css('top','4.6875rem');
        }

    //初始化ejs
    ejs.open = '{{';
    ejs.close = '}}';

    ejs.filters.pirceRegion = function (price) {
        if (!price) {
            return price;
        }
        var num = ((+price || 0).toFixed(2) + '').split('.');
        return '<strong>' + num[0] + '</strong>' + (num[1] ? '.' + num[1] : '');
    };

    ejs.filters.convertImgUrl = function (str) {
        return str.replace(/\/original\//, '/small/').replace(/_o/, '_s').replace(/_ls/, '_lb');
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
            timeout: 30000, //1分钟过期
            cache: true,
            success: function (res) {
                if (res && (res.Code === 200 || res.Code === '200')) {
                    isFuntion(cbFn.success) && cbFn.success(res.Data);
                }
                else {
                    isFuntion(cbFn.error) && cbFn.error(res);
                }
            },
            error: function () {
                showLog('系统挤爆了，请稍后再试!');
            }
        });
    };

    var search = YmtApi.utils.getUrlObj(),
        authInfo = function () {
            return YmtApi.utils.getAuthInfo()
        };

    new Swiper('.bf-seckill-wrapper .bf-area-bd', {
        pagination: '.bf-group-pagination',
        loop: true,
        autoplay: 7000,
        // onSlideChangeStart: function () {
        //     lazyLoad.check();
        // }
    });

    //数字<10前面补0
    var addZero = function (num) {
        var str = num < 10 ? '0' + num : num;
        return str;
    }

    var $td = $('#t_d'),
        $th = $('#t_h'),
        $tm = $('#t_m'),
        $ts = $('#t_s'),
        timeStr = '2016/01/01 00:00:00',
        endTime = new Date(timeStr).getTime(),//结束时间
        packetEndTime = new Date(timeStr);

        packetEndTime.setTime(packetEndTime.getTime()+1000*60*15)//红包十五分钟结束

    // 秒杀商品
    var msProducts = [
        //12.30 21:00
        [{productId: '120e4546-41d5-4694-9b32-9db47c70a244', productPic: 'http://staticontent.ymatou.com/images/activity/christmas/countdown/1230_21_1.jpg'}, {productId: 'd56a041a-2c4c-44de-950a-ed61db2fa1a6', productPic: 'http://staticontent.ymatou.com/images/activity/christmas/countdown/1230_21_2.jpg'}],
        //12.30 23:00
        [{productId: 'fcc37c70-168e-491b-94e4-e8d4e6a6d966', productPic: 'http://staticontent.ymatou.com/images/activity/christmas/countdown/1230_23_1.jpg'}, {productId: 'dc1e8f1b-f4bf-4fa9-8e2b-00f1cfdf26b5', productPic: 'http://staticontent.ymatou.com/images/activity/christmas/countdown/1230_23_2.jpg'}],
        //12.31 9:00
        [{productId: 'bb642a76-a292-4993-8813-1202bfa75c2a', productPic: 'http://staticontent.ymatou.com/images/activity/christmas/countdown/1231_9_1.jpg'}, {productId: '0ede7afb-6a84-4cb2-a257-f827b233ff9a', productPic: 'http://staticontent.ymatou.com/images/activity/christmas/countdown/1231_9_2.jpg'}],
        //12.31 13:00
        [{productId: '1272d45e-f075-4d4b-a69b-6006813f5b4f', productPic: 'http://staticontent.ymatou.com/images/activity/christmas/countdown/1231_13_1.jpg'}, {productId: '72ed7408-14dd-406f-83d5-a78dcfb7cd1d', productPic: 'http://staticontent.ymatou.com/images/activity/christmas/countdown/1231_13_2.jpg'}],
        //12.31 21:00
        [{productId: '63d6dc80-dba6-4062-9813-eb349efb2a46', productPic: 'http://staticontent.ymatou.com/images/activity/christmas/countdown/1231_21_1.jpg'}, {productId: 'e9c261f6-0163-447c-a330-03ce5402a943', productPic: 'http://staticontent.ymatou.com/images/activity/christmas/countdown/1231_21_2.jpg'}],
        //12.31 23:00
        [{productId: '781769f2-3bf2-4ee6-aedd-8a51bd57b839', productPic: 'http://staticontent.ymatou.com/images/activity/christmas/countdown/1231_23_1.jpg'}, {productId: '6ac66194-9105-46ad-be61-f73e9db5518f', productPic: 'http://staticontent.ymatou.com/images/activity/christmas/countdown/1231_23_2.jpg'}]
    ];

    var t0 = new Date('2015/12/30 13:30:00').getTime(),
        t1 = new Date('2015/12/30 21:30:00').getTime(),
        t2 = new Date('2015/12/30 23:30:00').getTime(),
        t3 = new Date('2015/12/31 09:30:00').getTime(),
        t4 = new Date('2015/12/31 13:30:00').getTime(),
        t5 = new Date('2015/12/31 21:30:00').getTime(),
        t6 = new Date('2015/12/31 23:30:00').getTime(),
        msTime = [t0, t1, t2, t3, t4, t5, t6];

    var $msPro = $('.bf-seckill-item');
    var nowTime = new Date().getTime();
    
    while(msTime[0] && msProducts.length > 1){
        if (msTime[0] && msProducts[0]) {
            if (nowTime - msTime[0] > 0) {
                var pro1 = msProducts[0][0],
                    pro2 = msProducts[0][1];
                $msPro.find('.bf-seckill-pro1').attr({
                    'data-pid': pro1.productId,
                    'src': pro1.productPic
                });
                $msPro.find('.bf-seckill-pro2').attr({
                    'data-pid': pro2.productId,
                    'src': pro2.productPic
                });
                msTime.shift();
                msProducts.shift();
            }
        } else if (msTime[0]) {
            if (nowTime - msTime[0] > 0) {
                $('.bf-seckill-wrapper').hide();
                msTime.shift();
            }
        }
    }  


    //倒计时
    var getRTime = function(){
        var nowTime = new Date().getTime();
        var t = endTime - nowTime;

        if (t > 0) {
            var d = Math.floor(t/1000/60/60/24),
                h = addZero(Math.floor(t/1000/60/60%24)),
                m = addZero(Math.floor(t/1000/60%60)),
                s = addZero(Math.floor(t/1000%60));

            $td.html(d);
            $th.html(h);
            $tm.html(m);
            $ts.html(s);
            setTimeout(getRTime,1000);
        } else {
            if(nowTime < packetEndTime){
                hasLottery();
            }
            $('#count-down-wrap').hide();
           
        }
       
    }

    getRTime();

    var module = {
        /**
         * 获得活动商品
         * @param  {string} aid 活动编号
         * @param  {string} pid 模块编号
         */
        activityList: function (aid, pid) {
            getActivityJsonP(aid,pid,100,function(data){
                if(data && data.Products){
                    data.Products.length % 2 == 1 && data.Products.pop();  //商品数量为单数时去掉最后一个
                    var html = ejs.render($('#active-tpl2').html(), data);
                    $('[data-arguments="'+aid+','+pid+'"]').parent().html(html);
                    lazyLoad.check();
                }else{
                    $('[data-arguments="'+aid+','+pid+'"]').parents(".bf-list").hide();
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
                    data.Products.length % 2 == 1 && data.Products.pop();  //商品数量为单数时去掉最后一个
                    var html = ejs.render($('#active-tpl').html(), data);
                    $('[data-arguments="'+aid+','+pid+'"]').parent().html(html);
                    lazyLoad.check();
                }else{
                    $('[data-arguments="'+aid+','+pid+'"]').parents(".hot-wrapper").hide();
                }
            });
        },
        //砍价团
        groupList: function () {
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
                    if (err && err.RetCode == 200) {
                        var group = err.RetData.TopicJoinList,
                            newGroup = {"TopicJoinList": []};
                        for (var i = 0, len = group.length; i < len; i++) {
                            if (group[i].TopicId == 114 || group[i].TopicId == 119 || group[i].TopicId == 112) {
                                newGroup.TopicJoinList.push(group[i]);
                            }
                        }
                        var html = ejs.render($('#group-tpl').html(), newGroup);
                        $('#group .bf-area-bd').html(html);

                        new Swiper('#group .bf-area-bd', {
                            pagination: '.bf-group-pagination',
                            loop: true,
                            autoplay: 3000,
                            onSlideChangeEnd: function () {
                                lazyLoad.check();
                            }
                        });
                    }
                }
            });
        },
        //全球好货
        getGoodsList: function () {
            jsonpGetData(YmtApi.utils.addParam('http://jsapi.app.ymatou.com/api/Polymeric/ForeignIndex', {
                pagepartIndex: 1,
                pagepartSize: 5
            }), {
                success: function (data, code) {
                    if (data) {
                        var html = ejs.render($('#goods-tpl').html(), data);
                        $('[data-module="getGoodsList"]').parent().html(html);

                        new Swiper('#getGoodsList .goods-item', {
                            freeMode: true,
                            slidesPerView: 3.7,
                            onSlideChangeEnd: function () {
                                lazyLoad.check();
                            }
                        });
                    }
                },
                error: function (err) {

                }
            });
        },
        receivePk: function (packageId) { //领取大礼包
            var authInfo = YmtApi.utils.getAuthInfo(),
                deviceId = search.DeviceId || search.DeviceToken || '0000000';
            jsonpGetData(YmtApi.utils.addParam('http://ja.m.ymatou.com/api/Coupon/UserBatchReceiveCoupon?DeviceCode=' + deviceId + '&PackageId=' + packageId, {
                BuyerUserId: authInfo.UserId,
                AccessToken: authInfo.AccessToken
            }), {
                success: function (data) {
                    if (data) {
                        //showLog('恭喜您，价值&yen;555的全场通用券已到您的账户，开始买买买吧');
                       showLog('领取成功');
                    }
                },
                error: function (data) {
                    switch (data.BCode) {
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
                        showLog('您已经领取过该礼包');
                        break;
                    case -5:
                        showLog('登录失效，请重新登录');
                        setTimeout(YmtApi.toLogin, 1E3);
                        break;
                    }
                }
            });
        },
        //模块打点空方法
        noop: function () {

        }
    }

    var getActivityJsonP = function (aid, pid, pageSize, callback) {
        var callbackName = 'ymatou_at_' + aid + '_' + pid;
        pageSize = pageSize || 10;
        jsonpGetData('http://api.evt.ymatou.com/ActivityTemplate/Products/aid_' + aid + '/pid_' + pid + '/ps_' + pageSize, callback, callbackName);
    }

    var share = function () { //分享
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
    }
    stopCheck = false;
    var checkAxis = function () {
        if (stopCheck) {
            return;
        }
        var $axle = $('.J-bf-axie'),
            doc = document.documentElement,
            view = {
                l: (window.pageXOffset || doc.scrollLeft),
                t: 0,
                b: window.innerHeight,
                r: (window.innerWidth || doc.clientWidth)
            } //视口位置

        $axle.each(function (index, el) {
            var box = el.getBoundingClientRect();
            if ((box.top >= view.t && box.top < view.b || box.bottom >= view.t && box.bottom < view.b || box.bottom > view.b && box.top < view.t) && box.left >= view.l && box.left < view.r) {
                $('#bf-tab li').removeClass('active').filter('[data-href="' + el.getAttribute('country-id') + '"]').addClass('active');

                $('.tab-list li').removeClass('active').filter('[data-href="' + el.getAttribute('evt-id') + '"]').addClass('active');

                // $('.ribbon-tab')[/evt-01|evt-02|evt-03|evt-04/.test(el.getAttribute('evt-id')) ? 'addClass':'removeClass']('show');

                return false;
            }
        });
    }

    var scrollChackeStatus = false; //scroll 检查频率控制
    $(document).on('touchstart', function () {
            //当点击tab切换之后，不再做滚动检测，当用户再次手动点击触发
            //再次计算滚动切换tab位置
            stopCheck = false;
        }).on('touchmove scroll', function () {
            checkAxis();
           if (!scrollChackeStatus) {
                //scrollChackeStatus = true;

                var top = document.documentElement.scrollTop || document.body.scrollTop,
                    bottom = window.innerHeight / 2; //首屏

               /* var brandTop = $('#bf_03').offset().top,
                    tabScope =  $('.bf-catalog-tab'),
                    sellerTop = $('#bf_04').offset().top;*/

                if (top > bottom) {
                    $('#bf-tab').addClass('show');
                    $('.ymt-butler').addClass('show');
                    // alert($('#bf-tab').hasClass('show'));
                    // alert($('#bf-tab').offset().top);
                }else {
                    $('#bf-tab').removeClass('show');
                    $('.ymt-butler').removeClass('show');
                    // $('.ribbon-tab').removeClass('show');
                }

                setTimeout(function () {
                    scrollChackeStatus = false;
                }, 250);
            }

        }).on('click', '.J-open', function () {
            var $this = $(this);

            YmtApi.open({
                url: $this.attr('data-url'),
                title: $this.attr('data-title'),
                isNew: true,
            });
        }).on('click', '.J-close', function () {
            var $this = $(this);

            $('.' + $this.attr('data-target')).removeClass('open').addClass('close');

        }).on('click', '.J-open-receive', function () { //打开大礼包
            if (YmtApi.utils.hasLogin()) {
                /*$('#receive-package-bd').html($('#package-tpl').html());
                $('.receive-package').addClass('open');*/
                module.receivePk($(this).attr('data-pkid'));
            }
            else {
                YmtApi.toLogin();
            }
        }).on('click', '.J-share', share).on('click', '.ymt-butler', function () { //洋管家
            if (YmtApi.utils.hasLogin()) {
                var auth = YmtApi.utils.getAuthInfo();;
                var UserId = auth.UserId || 0;
                var index = UserId % 10;
                //客服组
                var customServiceIdList = ["5771600", "5771700", "5771737", "5771792", "5771899", "5771996", "5772067", "5772141", "5772204", "5772284"];

                YmtApi.openChatDetail({
                    SessionId: UserId + '_' + customServiceIdList[index],
                    ToId: customServiceIdList[index],
                    ToLoginId: '洋管家' //auth.UserId
                        // ToLogoUrl:''
                });
            }
            else {
                YmtApi.toLogin();
            }
        }).on('click', '.J-receive-pk', function () { //领取大礼包
            if (YmtApi.utils.hasLogin()) {
                share.apply(this);
                if (/iphone|ipad|ipod/i.test(navigator.userAgent)) {
                    module.receivePk(_pk_id);
                }
                else {
                    //@TODO android通过urlchange的方式如果协议ajax是同步触发，可能会导致
                    //ajax被终止。在ajax使用同步阻塞方法，比如alert也可以解决这个问题
                    setTimeout(function () {
                        module.receivePk(_pk_id);
                    }.bind(this), 100)
                }

            }
            else {
                YmtApi.toLogin();
            }
        }).on('click', '.J-open-C-Product', function () {
            var url = "",
                $this = $(this),
                productId = $this.attr('data-productId'),
                sellerId = $this.attr('data-sellerId'),
                logo = $this.attr('data-logo'),
                seller = $this.attr('data-seller');

            //判断是否扫货app 跳转相应的页面
            if (YmtApi.isSaohuoApp) {
                url = YmtApi.utils.addParam('/forBuyerApp/productDetail', {
                    param: JSON.stringify({
                        SellerModel: {
                            Logo: logo,
                            Seller: seller,
                            SellerId: sellerId

                        },
                        ProductModel: {
                            ProductId: productId
                        }
                    })
                });
            }
            else {
                url = 'http://sq.ymatou.com/product/' + productId;
            }
            YmtApi.open({
                title: '全球好货',
                url: url
            });
        }).on('click', '.J-go-top', function () {
            var scrollOffset = -$(window).scrollTop() - window.innerHeight,
                $this = $(this);
            window.scrollTo(0, 0);
            $this.css('transform', 'translate(0,' + scrollOffset + 'px)');
        }).on('click', '.ribbon-tab li', function () {
            var $this = $(this);
            $this.closest('.J-tab').find('li').removeClass('active');
            $this.addClass('active');
            // $this.attr('data-href') != 'evt-00' && $('#bf-tab li').removeClass('active');
            window.scrollTo(0, $('[evt-id=' + $this.attr('data-href') + ']').offset().top - 150); //减去头部150
            stopCheck = true;
        }).on('click', '#bf-tab li', function() {
            var $this = $(this);
            $this.closest('.J-tab').find('li').removeClass('active');
            $this.addClass('active');
            window.scrollTo(0, $('[country-id=' + $this.attr('data-href') + ']').offset().top - 150);
            stopCheck = true;
        }).on('click', '.J-open-ms', function () {
            var $this = $(this),
                pid = $this.attr('data-pid');
            if (!pid) {
                return;
            }
            YmtApi.open({
                url: 'http://item.app.ymatou.com/forYmatouApp/product/pid?pid=' + pid,
                title: '秒杀商品',
                isNew: true,
            });
        })


        lazyLoad.init({
            offset: 100,
            callback: function (elem) {
                //注册模块懒加载
                var $this = $(elem);
                if ($this.hasClass('J-module-Hold')) {
                    var moduleName = $this.attr('data-module'),
                        args = ($this.attr('data-arguments') || '').split(',');

                    (window['_dc_'] || function () {})('exec', 'load_more_fn', {
                        module_name: 'activity_4864_capp',
                        sub_module_name: $this.attr('data-sub-module-name')
                    });

                    moduleName && isFuntion(module[moduleName]) && module[moduleName].apply(module, args);
                    $this.removeClass('J-module-Hold').addClass('module-load-end');
                }

            }
        });

        //获得首页数据
        var getRandom = function(size) {
            return Math.floor(Math.random() * size)
        }

        var ROTATE_LIST = [ //选择角度
                -30,
                -53.2,
                -40,
                -55,
                -57
            ];

        /**
         * opts {object}
         *   container //容器
         *   speed 速度
         *   battleRow 并行的子弹行数
         *   distance 距离
         *   battleCell 
         */
        function Battlefield(opts) {
            this.opts = opts;

            this.runBattles = 0; //正在运行的子弹数
            this.container = $(opts.container);
            this.rowMap = {};
            this.init();
        }

        Battlefield.prototype = {
            init: function() {
                var that = this;

                this.clickNum = 0;
                this.shot();

                var opts = this.opts,
                    len = Math.min(window.innerWidth/45/2,3);

                // for (var i = 0; i < len; i++) {
                //     setTimeout(this.shot.bind(this), 15E2);
                // }
                //
                var loopNum = 1;
                that.battleNum = 1; 
                this.winNum = [6,7,8,9,10][getRandom(5)];
                var down = function(){
                    if(that.stopState){
                        return;
                    }
                    that.battleNum = that.battleNum > len ? 1 : that.battleNum;
                    that.shot();
                    setTimeout(down,6E2);   
                }    

                var countdownTime = 15;
                var countdown = function(){
                    if(that.stopState || that.stopCountDown){
                        return;
                    }
                    $('.packet-countdown').text(--countdownTime);
                    if(!countdownTime){
                        that.stopState = true;
                        that.container.children().remove();
                        renderDialog({
                            BCode:101
                        })
                        return;
                    }
                    
                    setTimeout(countdown,1000);
                }     
                
                down();
                countdown();   
                //this.flight();
                
                this.bind();

            },
            bind:function(){
                var that = this;
                 $('body').on('click','.red-packet',function(){
                    console.log(1)
                    $(this).addClass('bg-right');
                     that.runBattles--;
                     if(that.clickNum++ == that.winNum ){
                        that.stopCountDown = true;
                        that.opts.callback && that.opts.callback(that);
                     }
                 });
            },
            /**
             * 装弹
             *
             */
            shot: function(runBattles) {
                if(this.stopState){
                    return;
                }
                runBattles = runBattles || this.battleNum;
                var that = this,
                    opts = this.opts,
                    getRotate = function() {
                        return ROTATE_LIST[getRandom(5)]
                    };
                //当前小于最大显示数才追加子弹
                if (this.runBattles <= opts.battleRow) {
                    this.runBattles++;


                    runBattles = runBattles || this.runBattles;

                    this.rowMap[runBattles] = Math.min(this.rowMap[runBattles] + 1 || 1, opts.battleCell);

                    var $next = $('<span class="red-packet" data-bulletrow="' + runBattles + '" data-speed="2"></span>'),
                        speed = 3.2,
                        //left = Math.max((runBattles-1) * 95 + 130,75);
                        left = ((runBattles -1 )* window.innerWidth/3 + 28 * (window.innerWidth/375) ) ;

                    $next.css({
                        top:'-450px',
                        left:  left +'px',
                        //transform:'rotate('+getRotate()+'deg)',
                        transition: 'transform ' + speed + 's linear',
                        '-moz-transition': '-moz-transform ' + speed + 's linear',
                        '-webkit-transition': '-webkit-transform ' + speed + 's linear'
                            //animation:'bulletFlight '+getSpeed()+'s linear'
                    }).on('webkitTransitionEnd transitionend', function() {
                        var $this = $(this);
                        $this.remove();
                        that.runBattles--;
                        //that.shot($this.attr('data-bulletrow'));
                    });

                    //this.shot();
                    this.flight();

                    //opts.bulletList.push(next);
                    this.container.append($next);

                   // if(that.rowMap[runBattles] < 2){
                   //      setTimeout(function(){
                   //          that.runBattles--;
                   //          that.shot(runBattles);
                   //      }.bind(this),speed*1000*0.87)
                   //  }
                   this.battleNum++;
                }
            },
            /**
             * 让子弹飞
             */
            flight: function() {
                //是否暂停
                if (this.pauseStatus) {
                    return;
                }
                var that = this,
                    opts = this.opts;
                this.container.find('.red-packet').each(function() {
                    var $this = $(this),
                        height = window.innerHeight+600;

                    $this.css({
                        //left: left
                        'transform': 'translate(0,'+height+'px)',
                        '-moz-transform': 'translate(0,'+height+'px)',
                        '-webkit-transform': 'translate(0,'+height+'px)'
                    });

                    /*if (left < -width){
                        $this.remove();
                        that.runBattles--;
                        that.shot($this.attr('data-bulletrow'));
                    }*/


                    /*else if(left < $(window).width()/opts.battleCell 
                        && that.rowMap[dataBulletrow] < opts.battleCell){
                        that.runBattles--;
                        that.shot(dataBulletrow);
                        console.log(dataBulletrow)
                    }*/
                });
            },
            //暂停子弹飞
            pause: function() {
                this.pauseStatus = true;
            },
            //切换暂停状态
            swithPause: function() {
                this.pauseStatus = !this.pauseStatus;
            }
        }

        var lottery = function(cb){
            var deviceId = search.DeviceId || search.DeviceToken || '0000000';

            jsonpGetData(YmtApi.utils.addAuth('http://jsapi.pk.ymatou.com/api/Christmas/JoinLottery?DeviceId=' + deviceId), {
                success: function (data) {
                    if (data) {
                         cb && cb(data);
                    }
                }
            });
        },renderDialog = function(data){
            var html=[];
            if(data.BCode === 102 ){
                html.push('<h3>每人只有一次机会哟</h3>');
                html.push('<div><button class="btn comfirm-btn J-close-dialog">知道啦</button></div>');
            }else if(data.BCode === 100){
                html.push('<h3>恭喜哈尼抢到16元现金优惠券啦！</h3>');
                html.push('<div><button class="btn comfirm-btn J-close-dialog">马上去花</button><button class="btn J-close-dialog J-packet-share">分享秀一下</button></div>');
            }else{
                html.push('<h3>武林高手<br/>竟然躲过了所有的红包袭击<br>一个都没有拿到</h3>');
                html.push('<div><button class="btn comfirm-btn J-close-dialog">知道啦</button></div>');
            }
            $('.packet-dialog').addClass('show').find('.packet-dialog-bd').html(html.join(''));
        }

        function hasLottery(){
            if(YmtApi.utils.hasLogin()){
                jsonpGetData(YmtApi.utils.addAuth('http://jsapi.pk.ymatou.com/api/Christmas/HasLottery'), {
                    success: function (data) {
                        if (data && !data.HasLottery) {
                            $('.packet').addClass('show');
                        }
                    }
                });
            }else{
                $('.packet').addClass('show');
            }
            
        }

        $(document).on('click','.J-close-dialog',function(){
            $('.packet-dialog ,.packet').removeClass('show');
        }).on('click','.J-packet-start',function(){
            if (YmtApi.utils.hasLogin()) {
                $('.packet-start').hide();
                var bfield = new Battlefield({
                    container: '.packet-box',
                    speed: 1,
                    battleRow: 5,
                    distance: 40,
                    battleCell: 2,
                    callback:function(that){
                        lottery(function(data){
                            that.stopState = true;
                            that.container.children().remove();
                            renderDialog(data);
                        })
                    }
                });
            } else {
                YmtApi.toLogin();
            }
        }).on('click','.J-packet-share',function(){
            YmtApi.openShare({
                shareTitle: '没赶上这场红包雨，感觉错过了好几百万',
                shareUrl: 'http://evt.ymatou.com/activity_4984_mapp?uid='+YmtApi.utils.getAuthInfo().UserId,
                sharePicUrl: 'http://staticontent.ymatou.com/images/activity/new_year/20151231161642.jpg',
                shareContent: '洋码头疯了！不来是真疯了！能用红包解决的问题，我们尽量少用言语。',
                showWeiboBtn: 0
            });
        });
})();
