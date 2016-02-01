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
            jsonpGetData('http://jsapi.tuan.ymatou.com/api/Tuan/GetGroupTuanList', {
                success: function(data, code) {
                    if (data && data.TuanList) {
                        var html = ejs.render($('#group-tpl').html(), data);
                        $('#bf_01 .bf-area-bd').html(html);

                        new Swiper('#bf_01 .bf-area-bd', {
                            pagination: '.bf-group-pagination',
                            loop: true,
                            // autoplay: 3000,
                            onSlideChangeEnd: function() {
                                lazyLoad.check();
                            }
                        });
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
                    if (data && data.PagePartList) {
                        var tpl1 = $('#seller-item-tpl1').html();
                        var tpl2 = $('#seller-item-tpl2').html();
                        for (var i = 0, len = data.PagePartList.length; i < len; i++) {
                            switch (data.PagePartList[i].PagePartName) {
                                case "店铺满减进行中":
                                    $('#seller-list-01').html(ejs.render(tpl1, data.PagePartList[0]));
                                    break;

                                case "店铺优惠券发放中":
                                    $('#seller-list-02').html(ejs.render(tpl2, data.PagePartList[1]));
                                    break;

                                case "店铺买就送":
                                    $('#seller-list-03').html(ejs.render(tpl1, data.PagePartList[2]));
                                    break;
                            }
                        }
                    } else {
                        console.log(res.Msg);
                    }
                }
            })
        }
    };

    $(document).on('click', '.seller-info-wrap, .seller-intro', function() {
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
                        that.stopState = true;
                        that.container.children().remove();
                        renderDialog(data);
                    }, that.clickType)
                }
            });
        } else {
            YmtApi.toLogin();
        }

    }).on('click','.J-packet-share',function(){
        YmtApi.openShare({
            shareTitle: '没赶上这场红包雨，感觉错过了好几百万',
            shareUrl: 'http://evt.ymatou.com/activity_4984_mapp?uid='+YmtApi.utils.getAuthInfo().UserId,
            sharePicUrl: 'http://staticontent.ymatou.com/images/activity/new_year/20151231161642.jpg',
            shareContent: '洋码头疯了！不来是真疯了！能用红包解决的问题，我们尽量少用言语。',
            showWeiboBtn: 0
        });
    });

    //元宝跳出来之后上下弹跳
    $('.packet-wrap .btn').on('webkitAnimationEnd', function() {
        $(this).removeClass('jumpout').addClass('bounce');
    })

    //获得随机数据
    var getRandom = function(size) {
        return Math.floor(Math.random() * size)
    }

    //选择角度
    var ROTATE_LIST = [-30, -53.2, -40, -55, -57];
    //选择货币
    var currencyList = ['red', 'dollar', 'pound', 'euro', 'krw', 'yen'];

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
            this.winNum = [1, 2, 3, 4, 5][getRandom(5)];
            var down = function() {
                if (that.stopState) {
                    return;
                }
                // that.battleNum = that.battleNum > len ? 1 : that.battleNum;
                that.shot();
                setTimeout(down, 6E2);
            }

            var countdownTime = 15;
            var countdown = function(){
                if(that.stopState || that.stopCountDown){
                    return;
                }
                --countdownTime;
                if(!countdownTime){
                    that.stopState = true;
                    that.container.children().remove();
                    renderDialog({
                        BCode:101
                    })
                    return;
                }

                setTimeout(countdown,1000);
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
                opts = this.opts,
                getRotate = function() {
                    return ROTATE_LIST[getRandom(5)]
                };
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

    var search = YmtApi.utils.getUrlObj(),
        accessToken = search.AccessToken,
        deviceId = search.DeviceId || search.DeviceToken || '0000000';

    var lottery = function(cb, clickType) {
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
                html.push('<h3>哈尼，你已经中过奖了</h3>');
                html.push('<div><button class="btn comfirm-btn J-close-dialog">知道啦</button></div>');
            } else if (data.ResultType === 3) {
                if (data.CurrentResult) {
                    winType = data.CurrentResult.WinningType;
                    if (winType == 0) {
                        html.push('<h3>我脚踏七彩跟斗云先来告诉你个好消息<br/>您中了一个神秘现金礼包（全球货币哦）<br/>洋码头会在2月14日按照您的默认收货地址陆续发快递哦~<br/>默认地址的请去：我-设置-我的收货地址 更改</h3>');
                        html.push('<div><button class="btn J-close-dialog J-packet-share">欢天喜地去分享</button></div>');
                    } else if (winType == 1) {
                        html.push('<h3>恭喜你抽中了6元优惠券</h3>');
                        html.push('<div><button class="btn J-close-dialog J-packet-share">欢天喜地去分享</button></div>');
                    } else if (winType == 2) {
                        html.push('<h3>恭喜你抽中了10元优惠券</h3>');
                        html.push('<div><button class="btn J-close-dialog J-packet-share">欢天喜地去分享</button></div>');
                    } else if (winType == 3) {
                        html.push('<h3>恭喜你抽中了16元优惠券</h3>');
                        html.push('<div><button class="btn J-close-dialog J-packet-share">欢天喜地去分享</button></div>');
                    } else if (winType == 4) {
                        html.push('<h3>恭喜你抽中了20元优惠券</h3>');
                        html.push('<div><button class="btn J-close-dialog J-packet-share">欢天喜地去分享</button></div>');
                    } else if (winType == 5) {
                        html.push('<h3>恭喜你抽中了26元优惠券</h3>');
                        html.push('<div><button class="btn J-close-dialog J-packet-share">欢天喜地去分享</button></div>');
                    }
                }
            } else {
                html.push('<h3>武林高手<br/>竟然躲过了所有的红包袭击<br>一个都没有拿到</h3>');
                html.push('<div><button class="btn comfirm-btn J-close-dialog">知道啦</button></div>');
            }
            $('.packet-dialog').addClass('show').find('.packet-dialog-bd').html(html.join(''));
        };

    var isRain = function () {
        jsonpGetData('http://jsapi.pk.ymatou.com/api/RedRain/GetRedRainStatus', {
            success: function(data) {
                data.IsStart = true;
                if (data && data.IsStart) {
                    jsonpGetData('http://jsapi.pk.ymatou.com/api/RedRain/IsCanRain?DeviceId=' + deviceId + '&AccessToken=' + accessToken, {
                        success: function(data) {
                            data.IsCanRain = true;
                            if (data && data.IsCanRain) {
                                $('#packet-mask').addClass('show');
                            }
                        }
                    })
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
