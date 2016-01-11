;(function() {
    //
    //初始化ejs
    ejs.open = '{%';
    ejs.close = '%}';

    var isFuntion = function(str) {
        return 'function' === typeof str;
    };

    ejs.filters.pirceRegion = function(price) {
        if (!price) {
            return price;
        }
        var num = ((+price || 0).toFixed(2) + '').split('.');
        return '<strong>' + num[0] + '</strong>' + (num[1] ? '.' + num[1] : '');
    };

    ejs.filters.convertImgUrl = function(str) {
        return str.replace(/\/original\//, '/small/').replace(/_o/, '_s').replace(/_ls/, '_lb');
    }

    /**
     * 显示日志
     */
    var toastStatus = true;
    var showLog = function(msg, callback) {
        if (toastStatus) {
            toastStatus = false;
            var errElm = $('.ymtui-toast');
            if (!errElm[0]) {
                errElm = $('<div class="ymtui-toast"></div>')
                    .appendTo('body');
            }
            errElm.html(msg).addClass('show');

            setTimeout(function() {
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
     * @param  {String}   fnName   [description]
     * @return {[type]}            [description]
     */
    var jsonpGetData = function(url, callback, callbackName) {
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

        cbFn.error = cbFn.error || function(res) {
            showLog(res.Msg);
        }

        $.ajax({
            url: url,
            type: 'GET',
            jsonpCallback: callbackName,
            dataType: 'jsonp',
            timeout: 30000, //1分钟过期
            cache: true,
            success: function(res) {
                if (res && (res.Code === 200 || res.Code === '200')) {
                    isFuntion(cbFn.success) && cbFn.success(res.Data);
                } else {
                    isFuntion(cbFn.error) && cbFn.error(res);
                }
            },
            error: function() {
                showLog('系统挤爆了，请稍后再试!');
            }
        });
    };

    //针对活动接口请求方式
    var getActivityJsonP = function(aid, pid, pageSize, callback) {
        var callbackName = 'ymatou_at_' + aid + '_' + pid;
        pageSize = pageSize || 10;
        jsonpGetData('http://api.evt.ymatou.com/ActivityTemplate/Products/aid_' + aid + '/pid_' + pid + '/ps_' + pageSize, callback, callbackName);
    }

    var module = {
        /**
         * 获得活动商品
         * @param  {string} aid 活动编号
         *                 aid为0，则取静态数据productData
         *                 aid不为0，则按照活动接口请求方式
         *
         * @param  {string} pid 模块编号
         *
         * @param  {string} tplId 模板编号
         */
        activityList: function(aid, pid, tplId) {
            var render = function(data) {
                data.Products.length % 2 == 1 && data.Products.pop();
                var html = ejs.render($('#' + (tplId || 'active-tpl')).html(), data);
                $('[data-arguments="' + aid + ',' + pid + (tplId ? ',' + tplId : '') + '"]').parent().html(html);
                lazyLoad.check();
            }

            if (aid === '0') {
                render(productData[pid]);
            } else {
                getActivityJsonP(aid, pid, 50, function(data) {
                    if (data && data.Products) {
                        render(data);
                    } else {
                        //不存在数据则会删除父节点
                        $('[data-arguments="' + aid + ',' + pid + '"]').parent().remove();
                    }
                });
            }

        },

        buyList: function(aid, pid, tplId) {
            var render = function(data) {
                data.Products.length % 2 == 1 && data.Products.pop();
                var html = ejs.render($('#' + (tplId || 'buy-list-tpl')).html(), data);
                $('[data-arguments="' + aid + ',' + pid + (tplId ? ',' + tplId : '') + '"]').parent().html(html);
                lazyLoad.check();
            }

            if (aid === '0') {
                render(productData[pid]);
            } else {
                getActivityJsonP(aid, pid, 50, function(data) {
                    if (data && data.Products) {
                        render(data);
                        var swiper = new Swiper('.sf-swiper-buyDetail', {
                            pagination: '.sf-swiper-buyDetail .swiper-pagination',
                            slidesPerView: 3,
                            paginationClickable: true,
                            spaceBetween: 5,
                            onSlideChangeStart: function () {
                                lazyLoad.check();
                            }
                        });
                    } else {
                        //不存在数据则会删除父节点
                        $('[data-arguments="' + aid + ',' + pid + '"]').parent().remove();
                    }
                });
            }



        }
    }

    var scrollChackeStatus = false, //scroll 检查频率控制
        $subTab = $('.sf-goods-sub-tab-wrap'),
        subTabTop = $subTab.offset().top; //二级导航距离页面顶部距离

    //tab切换公共脚本
    $(document).on('click', '.J-tab li',

            function() {
                var $this = $(this);
                $this.closest('.J-tab').find('li').removeClass('active');
                $this.addClass('active');
                //location.hash = $this.attr('data-href');
                window.scrollTo(0, $('#' + $this.attr('data-href')).offset().top);
                stopCheck = true;

            }).on('click', '.J-go-top',
            /**
             * 回到顶部
             */
            function() {
                var scrollOffset = -$(window).scrollTop() - window.innerHeight,
                    $this = $(this);
                window.scrollTo(0, 0);
            }).on('click', '.J-open-C-Product',
            /**
             * 打开C端商品详情
             * 区分app内和wap
             */
            function() {
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
                } else {
                    url = 'http://sq.ymatou.com/product/' + productId;
                }
                YmtApi.open({
                    title: '全球好货',
                    url: url
                });
            }).on('click', '.ymt-butler',
            /**
             * 洋管家
             */
            function() { //洋管家
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
                } else {
                    YmtApi.toLogin();
                }
            }).on('click', '.J-open',
            /**
             * 打开按钮
             * @dependence attr data-url 为打开的链接地址
             *             不需要做过多处理，会追加相关用户认证，默认
             *             为新窗口打开
             */
            function() {
                var $this = $(this);

                YmtApi.open({
                    url: $this.attr('data-url'),
                    title: $this.attr('data-title'),
                    isNew: true,
                });
            })
        .on('click', '.J-show', function() {
            $($(this).attr('data-target')).addClass('open')
        }).on('scroll touchmove', function() {
            if ($(window).scrollTop() >= subTabTop) {
                $subTab.css({
                    position: 'fixed',
                    top: '0'
                });
            } else {
                $subTab.css({
                    position: 'relative',
                });
            }

            checkAxis();
            if (!scrollChackeStatus) {
                var top = document.documentElement.scrollTop || document.body.scrollTop,
                    bottom = window.innerHeight / 2; //首屏

                if (top > bottom) {
                    $('.ymt-butler').addClass('show');
                }else {
                    $('.ymt-butler').removeClass('show');
                }

                setTimeout(function () {
                    scrollChackeStatus = false;
                }, 250);
            }
        }).on('touchstart', function () {
            //当点击tab切换之后，不再做滚动检测，当用户再次手动点击触发
            //再次计算滚动切换tab位置
            stopCheck = false;
        });

    stopCheck = false;
    function checkAxis() {
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

        $axle.each(function(index, el) {
            var box = el.getBoundingClientRect();
            if ((box.top >= view.t && box.top < view.b || box.bottom >= view.t && box.bottom < view.b || box.bottom > view.b && box.top < view.t) && box.left >= view.l && box.left < view.r) {
                $('#sf-sub-tab li').removeClass('active').filter('[data-href="' + el.id + '"]').addClass('active');
                return false;
            }
        });
    }


    lazyLoad.init({
        offset: 100,
        callback: function(elem) {
            //注册模块懒加载
            var $this = $(elem);
            if ($this.hasClass('J-module-Hold')) {
                var moduleName = $this.attr('data-module'),
                    args = ($this.attr('data-arguments') || '').split(',');

                // (window['_dc_'] || function () {})('exec', 'load_more_fn', {
                //     module_name: 'activity_4864_capp',
                //     sub_module_name: $this.attr('data-sub-module-name')
                // });
                //
                console.log(module)

                moduleName && isFuntion(module[moduleName]) && module[moduleName].apply(module, args);
                $this.removeClass('J-module-Hold').addClass('module-load-end');
            }

        }
    });
})();
