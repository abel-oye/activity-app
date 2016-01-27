/*
 * 过年不打烊
 * @author zhangzongzheng
 * @date 2016/01/20
 */

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
        return '<em>' + num[0] + '</em>' + (num[1] ? '.' + num[1] : '');
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

    var module = {
        //砍价团
        groupList: function() {
            jsonpGetData(YmtApi.utils.addParam('http://api.appactivity.ymatou.com/api/BargainGroup/Tuan/TopicJoinList?sign=828', {

            }), {
                success: function(data, code) {
                    if (data) {
                        //var html = ejs.render($('#group-tpl').html(), data);
                        //$('.bf-group-list').html(html);
                    }
                },
                error: function(err) {
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

        sellerList: function() {
            jsonpGetData('http://jsapi.bf.ymatou.com/api/Spring/GetNewYearActivity', {
                success: function (data) {
                    if (data && data.PagePartList) {
                        var tpl = $('#seller-item-tpl').html();
                        for (var i = 0, len = data.PagePartList.length; i < len; i++) {
                            switch(data.PagePartList[i].PagePartName) {
                                case "店铺满减进行中":
                                $('#seller-list-01').html(ejs.render(tpl, data.PagePartList[0]));
                                break;

                                case "店铺优惠券发放中":
                                $('#seller-list-02').html(ejs.render(tpl, data.PagePartList[1]));
                                break;

                                case "店铺买就送":
                                $('#seller-list-03').html(ejs.render(tpl, data.PagePartList[2]));
                                break;
                            }
                        }
                    }
                }
            })
        }
    };

    var scrollChackeStatus = false, //scroll 检查频率控制
        // $subTab = $('.sf-goods-sub-tab-wrap'),
        // subTabTop = $subTab.offset().top; //二级导航距离页面顶部距离

        //tab切换公共脚本


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


    //秒杀
    new Swiper('.bf-seckill-wrapper .bf-area-bd', {
        pagination: '.bf-group-pagination',
        loop: true,
        autoplay: 7000,
        // onSlideChangeStart: function () {
        //     lazyLoad.check();
        // }
    });

    $(document).on('click', '.seller-info-wrap', function() {
        var $sellerItem = $(this).parent('.seller-item');
        var flag = $sellerItem.attr('data-flag'),
            sellerLogo = $sellerItem.attr('data-Logo'),
            sellerName = $sellerItem.attr('data-Seller'),
            sellerId = $sellerItem.attr('data-SellerId'),
            activityContent = $sellerItem.attr('data-ActivityContent'),
            activityId = $sellerItem.attr('data-ActivityId'),
            activityName = $sellerItem.attr('data-ActivityName'),
            activityStatusText = $sellerItem.attr('data-ActivityStatusText'),
            endTime = $sellerItem.attr('data-EndTime'),
            shopAddress = $sellerItem.attr('data-ShopAddress'),
            startTime = $sellerItem.attr('data-StartTime');

        var url = YmtApi.utils.addParam('/forBuyerApp/liveDetail', {
            param: JSON.stringify({
                SellerModel: {
                    Flag: flag,
                    Logo: sellerLogo,
                    Seller: sellerName,
                    SellerId: sellerId,
                },
                ActivityModel: {
                    ActivityContent: activityContent,
                    ActivityId: activityId,
                    ActivityName: activityName,
                    ActivityStatusText: activityStatusText,
                    EndTime: endTime,
                    ShopAddress: shopAddress,
                    StartTime: startTime
                }

            })
        });
        window.YmtApi.open({
            url: url,
            title: '直播详情'
        });
    }).on('click', '.seller-intro', function() {
        var $sellerItem = $(this).parent('.seller-item');
        var flag = $sellerItem.attr('data-flag'),
            sellerLogo = $sellerItem.attr('data-Logo'),
            sellerName = $sellerItem.attr('data-Seller'),
            sellerId = $sellerItem.attr('data-SellerId'),
            activityContent = $sellerItem.attr('data-ActivityContent'),
            activityId = $sellerItem.attr('data-ActivityId'),
            activityName = $sellerItem.attr('data-ActivityName'),
            activityStatusText = $sellerItem.attr('data-ActivityStatusText'),
            endTime = $sellerItem.attr('data-EndTime'),
            shopAddress = $sellerItem.attr('data-ShopAddress'),
            startTime = $sellerItem.attr('data-StartTime');

        var url = YmtApi.utils.addParam('/forBuyerApp/liveDetail', {
            param: JSON.stringify({
                SellerModel: {
                    Flag: flag,
                    Logo: sellerLogo,
                    Seller: sellerName,
                    SellerId: sellerId,
                },
                ActivityModel: {
                    ActivityContent: activityContent,
                    ActivityId: activityId,
                    ActivityName: activityName,
                    ActivityStatusText: activityStatusText,
                    EndTime: endTime,
                    ShopAddress: shopAddress,
                    StartTime: startTime
                }

            })
        });
        window.YmtApi.open({
            url: url,
            title: '直播详情'
        });
    })


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

    module.sellerList();
})();
