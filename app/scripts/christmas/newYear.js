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
           $('.ribbon-tab').css('top','4.6875rem');
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
                var $module = $('[data-arguments="'+aid+','+pid+'"]');
                if(data && data.Products){
                    if (!$module.parent().hasClass('bf-item_3col')) {
                        data.Products.length % 2 == 1 && data.Products.pop();  //商品数量为单数时去掉最后一个
                        var html = ejs.render($('#active-tpl').html(), data);
                    } else {
                        var html = ejs.render($('#item-tpl').html(), data);

                    }
                    $module.parent().html(html);
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
                        console.log(newGroup);
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
           /*if (!scrollChackeStatus) {
                //scrollChackeStatus = true;

                var top = document.documentElement.scrollTop || document.body.scrollTop,
                    bottom = window.innerHeight / 2; //首屏

                if (top > bottom) {
                    $('#bf-tab').addClass('show');
                    $('.ymt-butler').addClass('show');
                }else {
                    $('#bf-tab').removeClass('show');
                    $('.ymt-butler').removeClass('show');
                    // $('.ribbon-tab').removeClass('show');
                }

                setTimeout(function () {
                    scrollChackeStatus = false;
                }, 250);
            }*/

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
            $this.attr('data-href') != 'evt-00' && $('#bf-tab li').removeClass('active');
            window.scrollTo(0, $('[evt-id=' + $this.attr('data-href') + ']').offset().top - 150); //减去头部150
            stopCheck = true;
        }).on('click', '#bf-tab li', function() {
            var $this = $(this);
            $this.closest('.J-tab').find('li').removeClass('active');
            $this.addClass('active');
            window.scrollTo(0, $('[country-id=' + $this.attr('data-href') + ']').offset().top - 150);
            stopCheck = true;

            var $ribbonTab = $('.ribbon-tab');
            $ribbonTab[$this.attr('data-href') == 'country-01' ? 'addClass' : 'removeClass']('show');
            $ribbonTab.find('li').removeClass('active').filter('[data-href="evt-01"]').addClass('active');
        });


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
                     console.log(moduleName,args)

                    moduleName && isFuntion(module[moduleName]) && module[moduleName].apply(module, args);
                    $this.removeClass('J-module-Hold').addClass('module-load-end');
                }

            }
        });


})();
