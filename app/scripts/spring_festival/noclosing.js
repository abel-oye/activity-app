/*
 * 过年不打烊
 * @author zhangzongzheng
 * @date 2016/01/20
 */

;
(function() {

    FastClick.attach(document.body);
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

    /**
     * 显示日志
     */
    // var toastStatus = true;
    var showLog = function(msg, callback) {
        // toastStatus = false;
        var errElm = $('.ymtui-toast');
        if (!errElm[0]) {
            errElm = $('<div class="ymtui-toast"></div>')
                .appendTo('body');
        }
        errElm.html(msg).addClass('show');

        setTimeout(function() {
            errElm.removeClass('show');
            // toastStatus = true;
            callback && callback();
        }, 2400);
    };

    /**
     * 通过jsonp获得数据
     * @param  {String}   url      请求的地址
     * @param  {Function} callback 回调方法
     * @param  {String}   fnName   [description]
     * @return {[type]}            [description]
     */
    var jsonpGetData = function(url, callback, callbackName) {
        var cbFn = {};

        if (typeof callback === 'function') {
            cbFn.success = callback;
        }

        if (typeof callback === 'object') {
            cbFn = callback;
        }

        cbFn.error = cbFn.error || function(res) {
            var idx = res.Msg.indexOf(':');
            if (idx !== -1)  res.Msg = res.Msg.slice(idx + 1);
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

    /**
     * 数字转汉字
     * 只支持0到5
     */
    var numToChinese = function(num) {
        switch (num) {
            case 0:
                return '零';
                break;
            case 1:
                return '一';
                break;
            case 2:
                return '二';
                break;
            case 3:
                return '三';
                break;
            case 4:
                return '四';
                break;
            case 5:
                return '五';
                break;
        }
    }

    var module = {
        //砍价团
        groupList: function() {
            jsonpGetData('http://jsapi.tuan.ymatou.com/api/Tuan/GetGroupTuanList', {
                success: function(data, code) {
                    if (data && data.TuanList[0]) {
                        for (var i = 0, len = data.TuanList.length; i < len; i++) {
                            data.TuanList[i].GroupMemberCount = numToChinese(data.TuanList[i].GroupMemberCount);
                        }
                        var html = ejs.render($('#group-tpl').html(), data);
                        $('#bf_01 .bf-area-bd').html(html);

                        new Swiper('#bf_01 .bf-area-bd', {
                            pagination: '.bf-group-pagination',
                            loop: true,
                            autoplay: 3000,
                            onSlideChangeEnd: function() {
                                lazyLoad.check();
                            }
                        });
                    } else {
                        $('.bf-group').hide();
                    }
                }
            })
        },

        //整点抢购
        msList: function() {
            jsonpGetData('http://jsapi.bf.ymatou.com/api/Spring/GetSecSkillProduct', {
                success: function(data) {
                    if (data && data.SecSkillProductList) {
                        var html = ejs.render($('#seckill-tpl').html(), data);
                        $('#ms-list .bf-area-bd').html(html);

                        new Swiper('#ms-list .bf-area-bd', {
                            pagination: '.bf-seckill-pagination',
                            loop: true,
                            autoplay: 3000,
                            onSlideChangeStart: function() {
                                lazyLoad.check();
                            }
                        });
                    }
                }
            })
        },

        sellerList: function() {
            jsonpGetData('http://jsapi.bf.ymatou.com/api/Spring/GetNewYearActivity', {
                success: function(data) {
                    if (data && data.PagePartList[0]) {
                        var html = ejs.render($('#shop-tpl').html(), data);
                        $('#shop-activity').html(html);
                    }
                }
            })
        }
    };

    //获取是否领取优惠券状态
    var getCouponStatus = function(couponIds) {
        jsonpGetData(YmtApi.utils.addParam('http://jsapi.bf.ymatou.com/api/FridayMore/BroughtCouponList', {
            AccessToken: YmtApi.utils.getAuthInfo().AccessToken,
            CouponIds: couponIds
        }), {
            success: function(data) {
                if (data.BroughtCouponList && data.BroughtCouponList[0]) {
                    var couponStatusList = data.BroughtCouponList;
                    var couponNode = $('[data-couponid]');
                    for (var i = 0, len = couponNode.length; i < len; i++) {
                        for (var j = 0, len = couponStatusList.length; j < len; j++) {
                            if (couponNode.eq(i).attr('data-couponid') == couponStatusList[j].CouponId) {
                                var couponid = couponNode.eq(i).attr('data-couponid');
                                // couponNode.eq(i).removeAttr('data-couponid');
                                couponStatusList[i].HasBrought && couponNode.eq(i).text('已领取');
                            }
                        }
                    }
                }
            }
        })
    };

    var getCoupon = function(event) {
        var $target = $(event.target);
        $target.attr('getstatus', 'false');
        setTimeout(function() {
            $target.attr('getstatus', 'true');
        }, 1000);
        var authInfo = YmtApi.utils.getAuthInfo();
        if (authInfo.UserId && authInfo.AccessToken) {
            var queryString = YmtApi.utils.getUrlObj(),
                deviceId = queryString.DeviceId || queryString.DeviceToken || '0000000',
                couponId = $target.attr('data-couponid');
            jsonpGetData(YmtApi.utils.addParam('http://ja.m.ymatou.com/api/Coupon/UserBatchReceiveCoupon', {
                DeviceCode: deviceId,
                PackageId: couponId,
                BuyerUserId: authInfo.UserId,
                AccessToken: authInfo.AccessToken
            }), {
                success: function(res) {
                    $target.attr('getstatus', 'true');
                    if (res.Data) {
                        $target.removeClass('get-coupon').text('已领取').addClass('hasget');
                    }
                }
            });
        } else {
            YmtApi.toLogin();
        }
    };

    var auth = YmtApi.utils.getAuthInfo(),
        accessToken = auth.AccessToken,
        deviceId = auth.DeviceId || auth.DeviceToken || '0000000';

    $(document).on('click', '.js-open-live', function(event) {
        if ($(event.target).hasClass('follow-btn')) {
            return false;
        }
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
    }).on('click', '.J-close-dialog', function() {
        $('.packet-dialog, #packet-mask').removeClass('show');
    }).on('click', '#packet-wrap', function() {
        if (YmtApi.utils.hasLogin()) {
            //登录之后需要重新获取登录态
            var auth = YmtApi.utils.getAuthInfo(),
                accessToken = auth.AccessToken,
                deviceId = auth.DeviceId || auth.DeviceToken || '0000000';
            jsonpGetData('http://jsapi.pk.ymatou.com/api/RedRain/IsCanRain?DeviceId=' + deviceId + '&AccessToken=' + accessToken, {
                success: function(data) {
                    if (data && data.IsCanRain) {
                        $('#packet-wrap').hide();
                        $('#packet-rain').show();
                        var bfield = new Battlefield({
                            container: '#packet-rain',
                            speed: 1,
                            battleRow: 5,
                            maxBattle: 8,
                            distance: 40,
                            battleCell: 2,
                            callback: function(that) {
                                lottery(function(data) {
                                    // data.ResultType = 3;
                                    // data.CurrentResult = {WinningType: 0};
                                    that.stopState = true;
                                    that.container.children().remove();
                                    renderDialog(data);
                                }, that.clickType)
                            }
                        });
                    } else {
                        $('#packet-mask').hide();
                    }
                }
            })
        } else {
            YmtApi.toLogin();
        }

    }).on('click', '.J-packet-share', function() {
        YmtApi.openShare({
            shareTitle: '没赶上这场红包雨，感觉错过了好几百万',
            shareUrl: 'http://evt.ymatou.com/activity_18482_mapp?uid=' + YmtApi.utils.getAuthInfo().UserId,
            sharePicUrl: 'http://staticontent.ymatou.com/images/activity/spring_festival/share_icon.png',
            shareContent: '疯了！洋码头疯了！一场猛烈的红包雨正在袭击，不来是真疯了！能用红包解决的问题，我们尽量少用言语。',
            showWeiboBtn: 0
        });
    }).on('click', '.js-open-group', function() {
        var topicId = $(this).attr('data-topicId'),
            tuanId = $(this).attr('data-tuanId');
        YmtApi.open({
            url: 'http://tuan.ymatou.com/detail.html?topicId=' + topicId + '&tuanId=' + tuanId,
            isNew: true
        })
    }).on('click', '.js-getcoupon', function(event) {
        getCoupon(event);
    }).on('click', '.J-open-C-Product', function() {
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
    })

    //元宝跳出来之后上下弹跳
    $('.packet-wrap .btn').on('webkitAnimationEnd', function() {
        $(this).removeClass('jumpout').addClass('bounce');
    })

    //获得随机数据
    var getRandom = function(size) {
        return Math.floor(Math.random() * size)
    }

    //货币种类
    var currencyList = ['red', 'red', 'red', 'dollar', 'pound', 'euro', 'krw', 'yen'];

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
                len = Math.min(window.innerWidth / 45 / 2, 8);

            // var loopNum = 1;
            that.battleNum = 1;
            this.winNum = [6, 7, 8, 9][getRandom(4)];
            var down = function() {
                if (that.stopState) {
                    return;
                }
                // that.battleNum = that.battleNum > len ? 1 : that.battleNum;
                that.shot();
                setTimeout(down, 6E2);
            }

            var countdownTime = 15;
            var countdown = function() {
                if (that.stopState || that.stopCountDown) {
                    return;
                }
                --countdownTime;
                if (!countdownTime) {
                    that.stopState = true;
                    that.container.children().remove();
                    renderDialog({
                        BCode: 101
                    })
                    return;
                }

                setTimeout(countdown, 1000);
            }

            down();
            countdown();
            this.bind();
        },
        bind: function() {
            var that = this;
            $('body').on('click', '.packet', function() {
                $(this).addClass('bg-right');
                that.runBattles--;
                if (that.clickNum++ == that.winNum) {
                    that.stopCountDown = true;
                    that.clickType = $(this).hasClass('red-packet') ? 1 : 0;
                    that.opts.callback && that.opts.callback(that);
                }
            });
        },
        /**
         * 装弹
         *
         */
        shot: function(runBattles) {
            if (this.stopState) {
                return;
            }
            runBattles = this.runBattles || this.battleNum;
            var that = this,
                opts = this.opts;
            //当前小于最大显示数才追加子弹
            if (this.runBattles <= opts.battleRow) {
                this.runBattles++;


                runBattles = runBattles || this.runBattles;

                this.rowMap[runBattles] = Math.min(this.rowMap[runBattles] + 1 || 1, opts.battleCell);

                this.currency = currencyList[getRandom(6)];
                var $next = $('<span class="' + this.currency + '-packet packet" data-bulletrow="' + runBattles + '" data-speed="2" onclick=";"></span>'),
                    speed = 2,
                    left = Math.max((getRandom(5) - 1) * 150, 0);
                // left = ((runBattles - 1) * window.innerWidth / 3 + 28 * (window.innerWidth / 375));

                $next.css({
                    top: '150px',
                    left: left + 'px',
                    transition: 'transform ' + speed + 's linear',
                    '-moz-transition': '-moz-transform ' + speed + 's linear',
                    '-webkit-transition': '-webkit-transform ' + speed + 's linear'
                }).on('webkitTransitionEnd transitionend', function() {
                    var $this = $(this);
                    $this.remove();
                    that.runBattles--;
                });

                this.flight();

                //opts.bulletList.push(next);
                this.container.append($next);

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
            this.container.find('.packet').each(function() {
                var $this = $(this),
                    height = window.innerHeight + 200;

                $this.css({
                    //left: left
                    'transform': 'translate(0,' + height + 'px)',
                    '-moz-transform': 'translate(0,' + height + 'px)',
                    '-webkit-transform': 'translate(0,' + height + 'px)'
                });

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
    };



    var lottery = function(cb, clickType) {
            var auth = YmtApi.utils.getAuthInfo(),
                accessToken = auth.AccessToken,
                deviceId = auth.DeviceId || auth.DeviceToken || '0000000';
            jsonpGetData('http://jsapi.pk.ymatou.com/api/RedRain/WinRedRain?DeviceId=' + deviceId + '&AccessToken=' + accessToken + '&ClickType=' + clickType, {
                success: function(data) {
                    if (data) {
                        cb && cb(data);
                    }
                }
            });
        },
        renderDialog = function(data) {
            var html = [];
            if (data.ResultType === 1) {
                html.push('<h3>猴赛雷，你都中过一次啦~<br/>把机会让给其他人吧<br/>（每个用户每个设备只能中一次哦~）</h3>');
                html.push('<div><button class="btn comfirm-btn J-close-dialog">知道啦</button></div>');
            } else if (data.ResultType === 3) {
                if (data.CurrentResult) {
                    winType = data.CurrentResult.WinningType;
                    if (winType == 0) {
                        html.push('<h3>我脚踏七彩跟斗云先来告诉你个好消息<br/>你中了一个神秘现金礼包<br/>我们会在节后统一安排发货</h3><h4>地址请去：我-设置-我的收货地址</h4>');
                        html.push('<div><button class="btn J-close-dialog J-packet-share" onclick=";">欢天喜地去分享</button></div>');
                    } else if (winType == 1) {
                        html.push('<h3>我脚踏七彩跟斗云带着优惠券来找你啦！<br/>恭喜你抽中了6元优惠券！</h3>');
                        html.push('<div><button class="btn J-close-dialog J-packet-share" onclick=";">欢天喜地去分享</button></div>');
                    } else if (winType == 2) {
                        html.push('<h3>我脚踏七彩跟斗云带着优惠券来找你啦！<br/>恭喜你抽中了10元优惠券！</h3>');
                        html.push('<div><button class="btn J-close-dialog J-packet-share" onclick=";">欢天喜地去分享</button></div>');
                    } else if (winType == 3) {
                        html.push('<h3>我脚踏七彩跟斗云带着优惠券来找你啦！<br/>恭喜你抽中了16元优惠券！</h3>');
                        html.push('<div><button class="btn J-close-dialog J-packet-share" onclick=";">欢天喜地去分享</button></div>');
                    } else if (winType == 4) {
                        html.push('<h3>我脚踏七彩跟斗云带着优惠券来找你啦！<br/>恭喜你抽中了20元优惠券！</h3>');
                        html.push('<div><button class="btn J-close-dialog J-packet-share" onclick=";">欢天喜地去分享</button></div>');
                    } else if (winType == 5) {
                        html.push('<h3>我脚踏七彩跟斗云带着优惠券来找你啦！<br/>恭喜你抽中了26元优惠券！</h3>');
                        html.push('<div><button class="btn J-close-dialog J-packet-share" onclick=";">欢天喜地去分享</button></div>');
                    }
                }
            } else {
                html.push('<h3>宝宝太可怜了<br/>什么都没抢到~~（>.<)~~</h3>');
                html.push('<div><button class="btn comfirm-btn J-close-dialog" onclick=";">知道啦</button></div>');
            }
            $('.packet-dialog').addClass('show').find('.packet-dialog-bd').html(html.join(''));
        };

    var isRain = function() {
        jsonpGetData('http://jsapi.pk.ymatou.com/api/RedRain/GetRedRainStatus', {
            success: function(data) {
                // data.IsStart = false;
                if (data && data.IsStart) {
                    $('#packet-mask').addClass('show');

                }
            }
        })
    }

    isRain();

    lazyLoad.init({
        offset: 100,
        callback: function(elem) {
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

    module.sellerList();
})();
