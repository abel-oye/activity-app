/**
 *
 * @authors zongzheng zhangzongzheng@ymatou.com
 * @date    2015-11-14 15:48:51
 */

$(function() {
    'use strict';

    ejs.open = '{{';
    ejs.close = '}}';

    ejs.filters.pirceRegion = function(price) {
        if (!price) {
            return price;
        }
        var num = (price + '').split('.');
        return '<strong>' + num[0] + '</strong>' + (num[1] ? '.' + num[1] : '.00');
    };

    var accessToken = YmtApi.utils.getAuthInfo().AccessToken,
        $sellerTab = $('.seller-tab'),
        $sellerList = $('.seller-list'),
        sellerTab = document.getElementById('seller-tab-list').children;

    var tabMap = new Map();
    tabMap.set('meiguo', 0);
    tabMap.set('aoxing', 1);
    tabMap.set('rihan', 2);
    tabMap.set('ouzhou', 3);

    var Utils = {
        //显示日志
        showLog: function(msg, callback) {
            var showLogStatus = true;
            if (showLogStatus) {
                showLogStatus = false;
                var errElm = $('.sg-error');
                if (!errElm[0]) {
                    errElm = $('<div class="sg-error"></div>').appendTo('body');
                }
                errElm.html(msg).css('opacity', '1');

                setTimeout(function() {
                    $('.sg-error').css('opacity', '0');
                    showLogStatus = true;
                    callback && callback();
                }, 1800);
            }
        },

        reqJsonp: function(url, callback, params) {
            $.ajax({
                url: url,
                data: params,
                type: 'GET',
                dataType: 'jsonp',
                success: function(res) {
                    if (res && (res.Code == 200)) {
                        callback(res);
                    } else {
                        Utils.showLog(res.Msg || '操作失败');
                    }
                }
            })
        },

        infiniteScroll: function(options, loadMoreTag) {
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

            if (loadMoreTag && !finishTag && $window.scrollTop() > currTop && ($window.scrollTop() + $window.height() + offset >= $sel.height() + $sel.offset().top)) {
                throttle = false;
                loadMoreTag = false;
                currTop = $window.scrollTop();
                callback();
                setTimeout(function() {
                    throttle = true;
                }, throttleTime);
            }
        }
    };

    var Buyerlist = {
        switchTab: function(areaCode) {
            var index = tabMap.get(areaCode);
            var tabList = $('#seller-tab-list').children();
            var sellerList = $('#seller-list-wrap').children();

            $sellerTab.removeClass('active-tab');
            $sellerTab.eq(index).addClass('active-tab')
            $sellerList.removeClass('active-list');
            $sellerList.eq(index).addClass('active-list');
        },

        showContent: function (areaCode) {
            var index = tabMap.get(areaCode),
                tabList = $('#seller-tab-list').children(),
                sellerList = $('#seller-list-wrap').children();

            $sellerTab.removeClass('active-tab');
            $sellerTab.eq(index).addClass('active-tab')
            $sellerList.removeClass('active-list');
            $sellerList.eq(index).addClass('active-list');

            if (!$sellerTab.eq(index).init) {
                $sellerTab.eq(index).init = new Date().getTime();
                sellerTab[index].pageIndex = 1;
                Buyerlist.getBuyer(sellerTab[index].pageIndex, 5, areaCode);
            }
        },

        getBuyer: function (pageIndex, pageSize, areaCode) {
            Utils.reqJsonp('http://jsapi.pk.ymatou.com/api/FridayMore/BuyerExplosionList', function (res) {
                /*res.Data = {
                    ResultCount: 2,
                    HasBrought: true,
                    BuyerList: [
                        {
                            Buyer: {
                                SellerId: '1111',
                                SellerName: '呵呵',
                                SellerLogo: 'http://img.ymatou.com/portal/images/seller_01.png',
                                CountryName: '日本',
                                Flag: 'http://img.ymatou.com/app/flag/circle/Japan.png',
                                Activities: 111,
                                FavCount: 111,
                                CouponPrice: 111.11,
                                ProductCount: 1111
                            },
                            ProductCount: 111,
                            Products: [
                                {
                                    "ProductId": "6a9bea62-3ad8-4bb0-b3f5-9ef2b825da43",
                                    "Customer": {
                                        'DeliveryType': 1,
                                        'IsVip': false,
                                        'IsNewCustomer': false,
                                        'Price': 111.11,
                                        'VipPrice': 111.22,
                                        'NewCustomerPrice': 111.11,
                                        'ActivityExpiresIn': 111111111
                                    },
                                    "Mall": {
                                        "DeliveryMethod": 5,
                                        "MarketPrice": 25,
                                        "MaxCatalogPrice": 25,
                                        "MinCatalogPrice": 25,
                                        'CanLocalReturn': true,
                                        'IsActivity': true
                                    },
                                    "PicUrl": "http://pm4.img.ymatou.com/G02/upload/product/small/M01/B9/C5/CgvUA1Y7FymAVYWHAAIQENsb0ZM337_s.jpg",
                                    "Name": "日本牙膏LION清新薄荷洁净牙膏",
                                    "Logo": null,
                                    "Seller": null,
                                    "SellerId": 1954450,
                                    "CountryName": "日本",
                                    "Flag": "http://img.ymatou.com/app/flag/circle/Japan.png",
                                    "Price": 25,
                                    "MarketPrice": 25,
                                    "Stock": 539,
                                    "IsMall": true,
                                    "IsCustomer": false,
                                    "ActivityId": 0,
                                    "TaxFarming": true,
                                    "BonderShipments": false,
                                    "FreeShipping": true,
                                    "IsXloboBonded": true,
                                }
                            ]
                        }
                    ]
                };*/

                if (res.Data) {
                    var html = ejs.render($('#seller-item-tpl').html(), res.Data);
                    var index = tabMap.get(areaCode);
                    $sellerList.eq(index).append(html);
                }
            }, {
                PageIndex: pageIndex,
                pageSize: pageSize,
                AreaCode: areaCode
            })
        }
    };

    $(document).on('click', '.seller-tab', function() {
        var areaCode = $(this).attr('tab-areacode');
        Buyerlist.showContent(areaCode);
    });

    Buyerlist.showContent('meiguo');
});
