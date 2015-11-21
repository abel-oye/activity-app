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

    var productData = {
        '1':{
            Products:[{"ProductId":"901f3c8b-7c92-4021-a7c4-e0ba830629ad","Name":"LV alma bb 漆皮款 只此一次 如此低价，不买悔一生哈","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M06/C9/9C/CgvUBVZLM3uAbFjAAABsjIwuWW4161-lists_ls.jpg","Stock":3,"Price":9800.0,"MarketPrice":0.0,"SellerId":3635770,"SellerName":"lushan991","SellerLogo":"http://p6.img.ymatou.com/G02/M01/71/F2/CgvUA1ZGcnuAYuwsAABchmy8yKk269_m.jpg","CountryName":"英国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/England.png","SortIndex":2,"ProductType":2},{"ProductId":"fe0b47f1-3581-4cc6-8e9b-484fda722745","Name":"Hermes爱马仕经典珐琅瓷手镯窄版～普通H头现在惊爆价💥💥3999¥包直邮包税到手～难得颜色这么全，总有一款适合你","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M03/C4/F2/CgvUA1ZK-5CAb8EcAABznjAx6WU005-lists_ls.jpg","Stock":8,"Price":3999.0,"MarketPrice":0.0,"SellerId":2244788,"SellerName":"楽楽meatballrikki","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/2244788_35599d2e9559435a9abc23eba935c92c_m.png","CountryName":"英国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/England.png","SortIndex":4,"ProductType":4}]
        },
        '2':{
            Products:[]
        },
        '3':{
            Products:[]
        },
        '4':{
            Products:[]
        },
        '5':{
            Products:[]
        },
    }

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

    var module = {
        receivePk: function (packageId) { //领取大礼包
            var authInfo = YmtApi.utils.getAuthInfo(),
                deviceId = search.DeviceId || search.DeviceToken || '0000000';
            jsonpGetData(YmtApi.utils.addParam('http://ja.m.ymatou.com/api/Coupon/UserBatchReceiveCoupon?DeviceCode=' + deviceId + '&PackageId=' + packageId, {
                BuyerUserId: authInfo.UserId,
                AccessToken: authInfo.AccessToken
            }), {
                success: function (data) {
                    if (data) {
                        showLog('恭喜您，成功领取');
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
        productList:function(inx){
            console.log(productData)
            var html = ejs.render($('#list-tpl').html(), productData[1]);
            $('[data-arguments="'+inx+'"]').parent().html(html);
        }
    }

    var search = YmtApi.utils.getUrlObj(),
        authInfo = function () {
            return YmtApi.utils.getAuthInfo()
        };

    $(document).on('click','.J-receive',function(){
        var couponId = $(this).attr('data-couponId');
        if (YmtApi.utils.hasLogin()) {
            module.receivePk(couponId);
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
    }).on('click', '.J-open', function () {
        var $this = $(this);

        YmtApi.open({
            url: $this.attr('data-url'),
            title: $this.attr('data-title'),
            isNew: true,
        });
    }).on('click', '#bf-tab li', function () {
            var $this = $(this);
            $('#bf-tab li').removeClass('active');
            $this.addClass('active');
            location.hash = $this.attr('data-href');

        });

    lazyLoad.init({
        offset: 0,
        callback: function (elem) {
            //注册模块懒加载
            var $this = $(elem);
            if ($this.hasClass('J-module-Hold')) {
                var moduleName = $this.attr('data-module'),
                    args = ($this.attr('data-arguments') || '').split(',');
                console.log(module)
                moduleName && isFuntion(module[moduleName]) && module[moduleName].apply(module, args);
                $this.removeClass('J-module-Hold').addClass('module-load-end');
            }

        }
    });

    try{
        YmtApi.initWechat({
            shareConf:{
                title: 'Double狂购黑五夜 老板放大招 礼包放大再加码！',
                desc: '914元黑五加码礼包已经发到哈尼账户，百元坐拥世界大牌不是梦',
                imgUrl: 'http://pm4.img.ymatou.com/G02/M0A/31/CA/CgvUA1ZCPiuAP8Z7AABOfcrqVew149_o.jpg'
            }
        })
    }catch(e){

    }


})();
