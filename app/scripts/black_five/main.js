/* global ejs: true,YmtApi:true */

/**
 * 黑五页
 * @author river
 * @email lijiang@ymaotu.com
 * @create-date 20151113
 */
(function (w, o) {
    w['YmatouAnalyticsobject'] = w['YmatouAnalyticsobject'] || o;
    w[o] = w[o] || function () {
        (w[o].q = w[o].q || []).push(arguments)
    }
})(window, '_dc_');
+(function () {

    FastClick.attach(document.body);

    'use strict';

    var _pk_id = '4';

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
        return str.replace(/\/original\//, '/small/').replace(/_o/, '_s');
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
                1
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
            cache: true,
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
        /*//全球买手
        globalSeller: function () {
            var data = {
                "IsNeedBrought": true,
                "BuyerList": [{
                    "SellerId": "sample string 1",
                    "SellerName": "sample string 2",
                    "SellerLogo": "http://p5.img.ymatou.com/upload/userlogo/original/574544_697f183901d24aa2a5b180b907b50bbe_o.jpg",
                    "PicUrl": "http://p5.img.ymatou.com/upload/product/big/82b5e97d3f5a415fa8afbd8602026801_b.jpg",
                    "CountryName": "sample string 5",
                    "Flag": "http://img.ymatou.com/app/flag/circle/Germany.png",
                    "Activities": 7,
                    "FavCount": 8,
                    "CouponPrice": 9.0,
                    "ProductCount": 10
                }, {
                    "SellerId": "sample string 1",
                    "SellerName": "sample string 2",
                    "SellerLogo": "http://p5.img.ymatou.com/upload/userlogo/original/574544_697f183901d24aa2a5b180b907b50bbe_o.jpg",
                    "PicUrl": "http://p5.img.ymatou.com/upload/product/big/82b5e97d3f5a415fa8afbd8602026801_b.jpg",
                    "CountryName": "sample string 5",
                    "Flag": "http://img.ymatou.com/app/flag/circle/Germany.png",
                    "Activities": 7,
                    "FavCount": 8,
                    "CouponPrice": 9.0,
                    "ProductCount": 10
                }]
            };
            if (data && data.BuyerList.length) {
                var html = ejs.render($('#globalseller-tpl').html(), data);
                $('#bf_02 .buyerlist').html(html);
            }
        },*/
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
         * 获得活动C商品
         */
        CProductsModule: function (aid, pid) {
            jsonpGetData('http://jsapi.bf.ymatou.com/api/Friday/ExplosionIndex', {
                success: function (data, code) {
                    if (data && data.Products.length) {
                        var html = ejs.render($('#active-tpl').html(), data);
                        $('#bf_03 .CProductsModule').html(html);
                    }
                },
                error: function (err) {
                    //@TODO fuck 砍价团的接口格式不一致
                }
            },'ymt_explosion_index');
        },
        /**
         * 获得活动商品
         * @param  {string} aid 活动编号
         * @param  {string} pid 模块编号
         */
        MProductsModule: function (aid, pid) {
            getActivityJsonP(aid, pid, 10, function (data) {
                if (data && data.Products) {
                    var html = ejs.render($('#active-tpl').html(), data);
                    $('#bf_03 .MProductsModule').html(html);
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
                        var html = ejs.render($('#group-tpl').html(), err.RetData);
                        $('#bf_01 .bf-area-bd').html(html);

                        new Swiper('#bf_01 .bf-area-bd', {
                            pagination: '.bf-group-pagination',
                            loop: true,
                            autoplay: 3000,
                            onSlideChangeEnd: function() {
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
                        $('#bf_05 .bf-area-bd').html(html);

                        new Swiper('#bf_05 .goods-item', {
                            freeMode: true,
                            slidesPerView: 4.7
                        });
                    }
                },
                error: function (err) {

                }
            });
        },
        share: function () {
            jsonpGetData(YmtApi.utils.addParam('http://jsapi.pk.ymatou.com/api/Lottery/LotteryShareRecord', {
                accessToken: authInfo().AccessToken
            }), {
                success: function () {
                    //重置抽奖次数
                    drawNum = 0;
                },
                error: function () {}
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
                        showLog('恭喜您，价值&yen;555的全场通用券已到您的账户，开始买买买吧');
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
                    }
                }
            });
        },
        checkReceive: function () { //检查是否领取大礼包
            jsonpGetData(YmtApi.utils.addAuth(YmtApi.utils.addParam('http://jsapi.pk.ymatou.com/api/Lottery/CheckUserHasReceive', {
                PackageId: _pk_id
            })), {
                success: function (data) {
                    if (data && data.HasSuccess) {
                        $('.bf-tab-wrapper').removeClass('bf-package');
                    }
                    else {
                        $('.bf-tab-wrapper').addClass('bf-package')
                    }
                },
                error: function (data) {

                }
            });
        },
        follow: function (sellerId) { //关注卖家

            jsonpGetData(YmtApi.utils.addAuth(YmtApi.utils.addParam('http://jsapi.app.ymatou.com/api/User/UserAttent', {
                SellerId: sellerId,
                AttentType: 0
            })), {
                success: function (data) {

                },
                error: function (data) {

                }
            });
        },
        //秒杀
        seckillList:function(){
           jsonpGetData('http://jsapi.ms.ymatou.com/ActivityTemplate/GetPagePartProductListForSecKill', {
                success: function (data) {
                    if(data){
                        var html = ejs.render($('#seckill-tpl').html(), data);
                        $('.bf-seckill .bf-area-bd').html(html);

                        new Swiper('.bf-seckill .bf-area-bd', {
                            pagination: '.bf-group-pagination',
                            loop: true,
                            autoplay: 7000,
                            onSlideChangeStart: function() {
                                lazyLoad.check();
                            }
                        });
                    }

                },
                error: function (data) {

                }
            },'ymatou_at_ms');
        },
        //模块打点空方法
        noop:function(){

        }
    }

    var getActivityJsonP = function (aid, pid, pageSize, callback) {
        var callbackName = 'ymatou_at_' + aid + '_' + pid;
        pageSize = pageSize || 10;
        jsonpGetData('http://api.evt.ymatou.com/ActivityTemplate/Products/aid_' + aid + '/pid_' + pid + '/ps_' + pageSize, callback, callbackName);
    }

    /**
     * 检查坐标变更tab的active 位置
     */
    var checkCoordinate = function () {
        var li = $('#bf-tab ul li'),
            active = li.filter('.active'),
            coor = $('.coordinate');
        var left = active.offset().left,
            width = active.width();
        //这里注意去写分离 减少重绘
        coor.removeClass('first')
            .removeClass('last')
            .css({
                width: width,
                left: left
            });
        $('.ymt-person').css({
            left: left
        })

        if (active.index() === 0) {
            coor.addClass('first');
        }
    }


    var checkAxis = function () {
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
            if ((box.top >= view.t && box.top < view.b
                || box.bottom >= view.t && box.bottom < view.b
                || box.bottom > view.b && box.top < view.t) && box.left >= view.l && box.left < view.r) {
                $('#bf-tab li').removeClass('active')
                    .find('[href="#' + el.id + '"]')
                    .parent().addClass('active');
                checkCoordinate();
                return false;
            }
        });
    }

    var scrollChackeStatus = false; //scroll 检查频率控制
    $(document).on('click', '.J-open', function () {
            var $this = $(this);

            YmtApi.open({
                url: $this.attr('data-url'),
                title: $this.attr('data-title'),
                isNew: true,
            });
        }).on('scroll', function () {
            if (!scrollChackeStatus) {
                scrollChackeStatus = true;

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

                checkAxis();

                setTimeout(function () {
                    scrollChackeStatus = false;
                }, 250);
            }

        })
        .on('click', '.J-close', function () { //转盘运行
            var $this = $(this);

            $('.' + $this.attr('data-target')).removeClass('open').addClass('close');

        })
        .on('click', '#bf-tab li', function () {
            $('#bf-tab li').removeClass('active');
            $(this).addClass('active');
            checkCoordinate();
        }).on('click', '.J-open-receive', function () { //打开大礼包
            if (YmtApi.utils.hasLogin()) {
                $('#receive-package-bd').html($('#package-tpl').html());
                $('.receive-package').addClass('open');
            }
            else {
                YmtApi.toLogin();
            }
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
                module.receivePk(_pk_id);
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
                            SellerId:sellerId

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
        });

    lazyLoad.init({
        offset: 0,
        callback: function (elem) {
            //注册模块懒加载
            var $this = $(elem);
            if ($this.hasClass('J-module-Hold')) {
                var moduleName = $this.attr('data-module'),
                    args = ($this.attr('data-arguments') || '').split(',');

                (window['_dc_'] || function(){})('exec', 'load_more_fn', {
                    module_name:  'activity_16010_capp',
                    sub_module_name: $this.attr('data-sub-module-name')
                } )

                moduleName && isFuntion(module[moduleName]) && module[moduleName].apply(module, args);
                $this.removeClass('J-module-Hold').addClass('module-load-end');
            }

        }
    });


})();