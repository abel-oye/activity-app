/* global ejs: true,YmtApi:true,lazyLoad:true */
/**
 *
 * @authors zongzheng zhangzongzheng@ymatou.com
 * @date    2015-11-14 15:48:51
 */

$(function () {
    'use strict';

    ejs.open = '{{';
    ejs.close = '}}';

    ejs.filters.priceRegion = function (price) {
        if (!price) {
            return price;
        }
        var num = (price + '').split('.');
        return '<strong>' + num[0] + '</strong>' + (num[1] ? '.' + num[1] : '.00');
    };

    ejs.filters.convertImgUrl = function (str) {
        return str.replace(/\/original\//, '/small/').replace(/_o\./, '_s.').replace(/_lb\./, '_ls.');
    };

    var accessToken = YmtApi.utils.getAuthInfo().AccessToken,
        $sellerTab = $('.seller-tab-wrap'),
        $sellerList = $('.seller-list'),
        $loading = $('#loading'),
        $loadMore = $('#load-more'),
        $finishTip = $('.finish-tip'),
        $window = $(window);

    var tabMap = {
        '1':0,
        '2':1,
        '3':2,
        '4':3
    };

    var Utils = {
        //显示日志
        showLog: function (msg, callback) {
            var errElm = $('.sg-error');
            if (!errElm[0]) {
                errElm = $('<div class="sg-error"></div>').appendTo('body');
            }
            errElm.html(msg).css('opacity', '1');

            setTimeout(function () {
                $('.sg-error').css('opacity', '0');
                callback && callback();
            }, 2400);
        },

        reqJsonp: function (url, callback, params) {
            $.ajax({
                url: url,
                data: params,
                type: 'GET',
                timeout: 30000,
                dataType: 'jsonp',
                success: function (res) {
                    callback(res);
                },
                error: function () {
                    Utils.showLog('系统挤爆了，请稍后再试');
                }
            })
        }
    };

    var Buyerlist = {
        showContent: function (areaCode) {
            var index = tabMap[areaCode];

            $sellerTab.removeClass('active-tab');
            $sellerTab.eq(index).addClass('active-tab')
            $sellerList.removeClass('active-list');
            $sellerList.eq(index).addClass('active-list');

            if (!$sellerTab.eq(index).attr('init')) {
                $loading.show();
                $finishTip.hide(); //切换TAB时，隐藏”已显示全部“提示
                $sellerTab.eq(index).attr('init', new Date().getTime());
                var sellerTab = document.getElementById('seller-tab-list').children;
                sellerTab[index].pageIndex = 1;
                Buyerlist.getBuyer(sellerTab[index].pageIndex, 3, areaCode);
            }
            else {
                $sellerList.eq(index).attr('finish') !== 'true' && $finishTip.hide(); //切换TAB时，如果数据还没全部加载完，隐藏”已显示全部“提示
            }
        },

        getBuyer: function (pageIndex, pageSize, areaCode) {
            var index = tabMap[areaCode];
            pageIndex != 1 && $loadMore.show();
            $sellerList.eq(index).attr('res', 'false');

            var callback = 'buyer_explosion_list';
            window[callback] = function (res) {
                $loading.hide();
                $sellerList.eq(index).attr('res', 'false');
                if (res.Data && res.Data.BuyerList[0]) {
                    pageIndex == 1 && $loading.hide(); //第一页数据返回时隐藏loading
                    var html = ejs.render($('#seller-item-tpl').html(), res.Data);

                    $sellerList.eq(index).append(html);
                    $loadMore.hide();
                    $sellerList.eq(index).attr('res', 'true');

                    pageIndex == 1 && lazyLoad.check();

                    if (res.Data.IsNeedBrought) {
                        var couponIds = [];
                        for (var i = 0, len = res.Data.BuyerList.length; i < len; i++) {
                            if (res.Data.BuyerList[i].ProductCount) {
                                couponIds.push(res.Data.BuyerList[i].Buyer.CouponId);
                            }
                        }
                        couponIds = couponIds.join(',');
                        if (accessToken) {
                            Buyerlist.getCouponStatus(couponIds);
                        }
                        else {
                            var couponNode = $('[data-couponid]');
                            for (var j = 0, len = couponNode.length; j < len; j++) {
                                var couponid = couponNode.eq(i).attr('data-couponid');
                                couponNode.eq(j).removeAttr('data-couponid');
                                couponNode.eq(j).append('<span class="get-coupon" getstatus="true" couponid=' + couponid + '>领取</span>');
                            }
                        }

                    }

                }
                else {
                    $loadMore.hide();
                    $finishTip.show();
                    $sellerList.eq(index).attr('finish', 'true');
                }

            };

            $.ajax({
                url: 'http://jsapi.bf.ymatou.com/api/FridayMore/BuyerExplosionList',
                data: {
                    AccessToken: accessToken || '',
                    PageIndex: pageIndex,
                    pageSize: pageSize,
                    AreaCode: areaCode
                },
                type: 'GET',
                timeout: 30000,
                dataType: 'jsonp',
                jsonpCallback: callback,
                error: function () {
                    $loading.hide();
                    Utils.showLog('系统挤爆了，请稍后再试');
                }
            });
        }
    };

    $(document).on('tap', '.seller-info', function (event) {
        if ($(event.target).hasClass('get-coupon')) {
            return;
        }
        var sellerName = $(this).attr('data-sellerName'),
            sellerId = $(this).attr('data-sellerId');
        YmtApi.open({
            url: 'http://live.ymatou.com/forBuyerApp/sellerHome?SellerName=' + sellerName + '&SellerId=' + sellerId,
            isNew: true,
            title: '卖家主页',
            backFlag: true
        });
    }).on('tap', '.all-see', function () {
        var sellerName = $(this).attr('data-sellerName'),
            sellerId = $(this).attr('data-sellerId');
        YmtApi.open({
            url: 'http://live.ymatou.com/forBuyerApp/sellerHome?SellerName=' + sellerName + '&SellerId=' + sellerId,
            isNew: true,
            title: '卖家主页',
            backFlag: true
        });
    }).on('tap click', '.seller-tab-wrap', function () {
        var areaCode = $(this).attr('tab-areacode');
        Buyerlist.showContent(areaCode);
    }).on('tap', '.goods-item', function () {
        var productId = $(this).attr('data-productId'),
            logo = $(this).attr('data-logo'),
            seller = $(this).attr('data-seller'),
            sellerId = $(this).attr('data-sellerId');

        var url = YmtApi.utils.addParam('/forBuyerApp/productDetail', {
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
        YmtApi.open({
            title: '全球好货',
            url: url
        });
    });

    var tabTop = $('#seller-tab-list').offset().top;
    $(window).on('scroll touchmove', function () {
        if ($(window).scrollTop() > tabTop) {
            $('#seller-tab-list').css({
                position: 'fixed',
                top: 0
            });
        }
        else {
            $('#seller-tab-list').css({
                position: 'relative',
            });
        }


        var index = $('.active-tab').index(),
            sellerTab = document.getElementById('seller-tab-list').children,
            areacode = $('.active-tab').attr('tab-areaCode'),
            res = $('.active-list').attr('res') == 'true' ? true : false,
            finish = $('.active-list').attr('finish') == 'true' ? true : false;

        if (res && !finish && ($window.scrollTop() + $window.height() + 300 >= $('.active-list').height() + $('.active-list').offset().top)) {
            Buyerlist.getBuyer(++sellerTab[index].pageIndex, 3, areacode);
        }
    });

    var areacode = YmtApi.utils.getUrlObj().AreaCode || '1';
    Buyerlist.showContent(areacode);

    lazyLoad.init({
        throttle: 250,
        unload: false,
        offset: 250,
        callback: function () {

        }
    });
});
