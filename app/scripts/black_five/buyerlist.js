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
        $loadMore = $('#load-more'),
        $finishTip = $('.finish-tip'),
        $window = $(window);

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
        showContent: function(areaCode) {
            var index = tabMap.get(areaCode);

            $sellerTab.removeClass('active-tab');
            $sellerTab.eq(index).addClass('active-tab')
            $sellerList.removeClass('active-list');
            $sellerList.eq(index).addClass('active-list');

            if (!$sellerTab.eq(index).attr('init')) {
                $finishTip.hide(); //切换TAB时，隐藏”已显示全部“提示
                $sellerTab.eq(index).attr('init', new Date().getTime());
                var sellerTab = document.getElementById('seller-tab-list').children;
                sellerTab[index].pageIndex = 1;
                Buyerlist.getBuyer($sellerTab.eq(index).attr('pageIndex'), 3, areaCode);
            } else {
                $sellerList.eq(index).attr('finish') !== 'true' && $finishTip.hide(); //切换TAB时，如果数据还没全部加载完，隐藏”已显示全部“提示
            }
        },

        getBuyer: function(pageIndex, pageSize, areaCode) {
            var index = tabMap.get(areaCode);
            pageIndex != 1 && $loadMore.show();
            $sellerList.eq(index).attr('res', 'false');
            Utils.reqJsonp('http://jsapi.pk.ymatou.com/api/FridayMore/BuyerExplosionList', function(res) {
                /*res.Data = {
                    "HasBrought": false,
                    "ResultCount": 1,
                    "BuyerList": [{
                        "Buyer": {
                            "SellerId": "536618",
                            "SellerName": "Leon1982",
                            "SellerLogo": "http://p5.img.ymatou.com/upload/userlogo/big/536618_05b78baf0d904a6bb5745742f894b0b7_b.JPG",
                            "PicUrl": "http://pc5.img.ymatou.com/G02/shangou/M08/71/20/CgvUA1ZGYC6AY1RJAACuIP8VE5I776-lists_ls.jpg",
                            "CountryName": "澳大利亚",
                            "Flag": "http://img.ymatou.com/app/flag/circle/Australia.png",
                            "Activities": 0,
                            "FavCount": 11,
                            "CouponId": null,
                            "CouponPrice": 0,
                            "CouponName": null,
                            "ProductCount": 1,
                            "GoodProductCatalogs": null
                        },
                        "ProductCount": 1,
                        "Products": [{
                            "ProductId": "bc08be3e-bcdb-43b7-9226-cbc45cf771db",
                            "IsMall": false,
                            "IsCustomer": true,
                            "Customer": {
                                "DeliveryType": 0,
                                "IsVip": false,
                                "IsNewCustomer": false,
                                "Price": 169,
                                "VipPrice": 0,
                                "NewCustomerPrice": 0,
                                "ActivityExpiresIn": 0
                            },
                            "Mall": null,
                            "PicUrl": "http://pc5.img.ymatou.com/G02/shangou/M08/71/20/CgvUA1ZGYC6AY1RJAACuIP8VE5I776-lists_ls.jpg",
                            "Name": "BM的秋葵大蒜精+维生素C ，90粒。鼻炎患者的好东西 ～鼻炎的朋友们，不如试试。可治疗鼻炎、鼻塞、感冒、上呼吸道感染、花粉过敏症状 超有效果噢^ _ ^ ",
                            "Price": 169,
                            "Stock": 5,
                            "Logo": null,
                            "Seller": "Leon1982",
                            "SellerId": 536618,
                            "CountryName": "澳大利亚",
                            "Flag": null,
                            "ActivityId": 0,
                            "TaxFarming": false,
                            "BonderShipments": false,
                            "FreeShipping": false,
                            "IsXloboBonded": false
                        }]
                    }]
                };*/
                $sellerList.eq(index).attr('res', 'false');
                if (res.Data && res.Data.BuyerList[0]) {
                    var html = ejs.render($('#seller-item-tpl').html(), res.Data);

                    $sellerList.eq(index).append(html);
                    $loadMore.hide();
                    $sellerList.eq(index).attr('res', 'true');

                    if (res.Data.IsNeedBrought) {
                        var couponIds = [];
                        for (var i = 0, len = res.Data.BuyerList.length; i < len; i++) {
                            couponIds.push(res.Data.BuyerList[i].Buyer.CouponId);
                        }
                        couponIds = couponIds.join(',');
                        Buyerlist.getCouponStatus(couponIds);
                    }

                } else {
                    $loadMore.hide();
                    $finishTip.show();
                    $sellerList.eq(index).attr('finish', 'true');
                }
            }, {
                AccessToken: accessToken,
                PageIndex: pageIndex,
                pageSize: pageSize,
                AreaCode: areaCode
            })
        },

        //获取是否领取优惠券状态
        getCouponStatus: function(couponIds) {
            Utils.reqJsonp('http://jsapi.pk.ymatou.com/api/FridayMore/BroughtCouponList', function(res) {
                res.Data = {
                    "BroughtCouponList": [{
                        "HasBrought": true,
                        "CouponId": "0"
                    }, {
                        "HasBrought": false,
                        "CouponId": "0"
                    }, {
                        "HasBrought": false,
                        "CouponId": "0"
                    }],
                    "ResultCount": 3
                };

                if (res.Data && res.Data.BroughtCouponList[0]) {
                    var couponStatusList = res.Data.BroughtCouponList;
                    var couponNode = $('[data-couponid');
                    var couponIds = couponIds.split(',');
                    for (var i = 0, len = couponNode.length; i < len; i++) {
                        if (couponNode.attr('data-couponid') == couponStatusList[i].CouponId) {
                            couponNode[i].removeAttr('data-couponid');
                            couponStatusList[i].HasBrought ? couponNode[i].append('<span class="hasget">已领取</span>') : couponNode[i].append('<span class="get-coupon">领取</span>');
                        }
                    }
                }
            }, {
                AccessToken: accessToken,
                CouponIds: couponIds
            });
        },

        getCoupon: function() {
            var authInfo = YmtApi.utils.getAuthInfo(),
                queryString = YmtApi.utils.getUrlObj(),
                deviceId = (YmtApi.isIphone ? queryString.DeviceId : queryString.DeviceToken) || '0000000',
                couponId = $(this).attr('data-couponid');
            Utils.reqJsonp('http://ja.m.ymatou.com/api/Coupon/UserBatchReceiveCoupon', function(res) {
                if (res.Data) {
                    showLog(res.Msg || '领取成功');
                }
            }, {
                DeviceCode: deviceId,
                PackageId: couponId,
                BuyerUserId: authInfo.UserId,
                AccessToken: authInfo.AccessToken
            })
        }
    };

    $(document).on('tap', '.seller-tab', function() {
        var areaCode = $(this).attr('tab-areacode');
        Buyerlist.showContent(areaCode);
    }).on('click', '.get-coupon', function() {
        Buyerlist.getCoupon();
    });

    $(window).on('scroll touchmove', function() {
        var index = $('.active-tab').index(),
            sellerTab = document.getElementById('seller-tab-list').children,
            areacode = $('.active-tab').attr('tab-areaCode'),
            res = $('.active-list').attr('res') == 'true' ? true : false,
            finish = $('.active-list').attr('finish') == 'true' ? true : false;

        if (res && !finish && ($window.scrollTop() + $window.height() + 300 >= $('.active-list').height() + $('.active-list').offset().top)) {
            Buyerlist.getBuyer(++sellerTab[index].pageIndex, 3, areacode);
        }
    });

    Buyerlist.showContent('meiguo');
});
