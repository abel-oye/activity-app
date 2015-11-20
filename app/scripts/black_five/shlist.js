/* global ejs: true,YmtApi:true */

/**
 * 黑五页--c端爆款列表
 * @author river
 * @email lijiang@ymaotu.com
 * @create-date 20151118
 */

+(function () {

    FastClick.attach(document.body);

    'use strict';

    //初始化ejs
    ejs.open = '<%';
    ejs.close = '%>';

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
    var jsonpGetData = function (url, opts, callbackName) {
        /*if(fnName){
            if(!(typeof window[fnName] === 'function')){
                window[fnName] = function(data){
                    callback && callback(data);
                    delete window[fnName];
                }
            }
        }*/
        var cbFn = {};

        if (typeof opts === 'function') {
            cbFn.success = opts;
        }

        if (typeof opts === 'object') {
            cbFn = opts;
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

    //默认区域code
    var areaCode = 1;

    var pageInfo = {
        1: {
            pageIndex: 1,
            isFinish: false,
            isLoad:false
        },
        2: {
            pageIndex: 1,
            isFinish: false,
            isLoad:false
        },
        3: {
            pageIndex: 1,
            isFinish: false,
            isLoad:false
        },
        4: {
            pageIndex: 1,
            isFinish: false,
            isLoad:false
        }
    }

    var module = {
        /**
         * @param  {string} aid 活动编号
         * @param  {string} pid 模块编号
         */
        productsModule: function (aid, pid) {
            if (pageInfo[areaCode].isFinish || pageInfo[areaCode].isLoad) {
                return;
            }
            $('.beat-loading').show();
            pageInfo[areaCode].isLoad = true;

            jsonpGetData(YmtApi.utils.addParam('http://jsapi.bf.ymatou.com/api/Friday/ExplosionAreaIndex', {
                PageIndex: pageInfo[areaCode].pageIndex,
                PageSize: pageInfo[areaCode].PageSize || 10,
                AreaCode: areaCode
            }), {
                success: function (data) {
                    pageInfo[areaCode].isLoad = false;
                    $('.beat-loading').hide();
                    if (data && data.Products && data.Products.length) {
                        var html = ejs.render($('#list-tpl').html(), data);
                        $('#area_' + areaCode).append(html);
                        pageInfo[areaCode].pageIndex++;
                        lazyLoad.check();
                    }
                    else {
                        pageInfo[areaCode].isFinish = true;
                        $('#area_' + areaCode).append('<div class="load-finish">哈尼，这里加载完了！</div>');
                    }

                },
                error: function (data) {

                }
            });
        }
    }

    var infiniteScroll = function (options) {
        var throttleTime = options.throttle || 450,
            callback = options.callback,
            offset = parseInt(options.offset) || 0,
            $sel = $(options.selector),
            finishTag = options.finishTag,
            $window = $(window),
            throttle = true,
            currTop = 0; //控制滑动方向

        if (!throttle && !$sel && !$sel[0]) {
            return;
        }

        if (!finishTag && $window.scrollTop() > currTop && ($window.scrollTop() + $window.height() + offset >= $sel.height() + $sel.offset().top)) {
            throttle = false;
            loadMoreTag = false;
            currTop = $window.scrollTop();
            callback();
            setTimeout(function () {
                throttle = true;
            }, throttleTime);
        }
    }



    module.productsModule();

    var fiexdTab = function () {
        var tab = $('.sh-tab-hd-wrapper'),
            parent = tab.parent(),
            $window = $(window);
        if ($window.scrollTop() > parent.offset().top) {
            tab.css('position', 'fixed');
        }
        else {
            tab.css('position', 'relative');
        }
    }

    var firstTab = $('.sh-tab-hd li span').eq(areaCode - 1)[0].getBoundingClientRect()
    $('.sh-tab-line').css({
        width: firstTab.width,
        left: firstTab.left
    });

    $(document).on('click', '.sh-tab-hd li', function () {
        var $this = $(this);

        $('.sh-tab-hd li').removeClass('active');
        $('.sh-tab-bd-item').removeClass('active')
            .eq($this.index()).addClass('active');
        $this.addClass('active');

        areaCode = $this.attr('data-area-code');

        $('.sh-tab-line').css('left', $this.find('span')[0].getBoundingClientRect().left);

        //当tab切换之后当前页还是1就加载第一页数据
        if (pageInfo[areaCode].pageIndex == 1) {
            module.productsModule();
        }
    }).on('scroll touchmove', function () {
        infiniteScroll({
            offset: 100,
            selector: '.sh-list-wrapper',
            callback: function () {
                module.productsModule();
            }
        });

        fiexdTab();
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
    }).on('click', '.J-open', function () {
        var $this = $(this);

        YmtApi.open({
            url: $this.attr('data-url'),
            title: $this.attr('data-title'),
            isNew: true,
        });
    });

    lazyLoad.init({
        offset: 0,
        callback: function (elem) {}
    });

})();
