/* global ejs: true,YmtApi:true */

/**
 * 海外购物节首页
 * @author river
 * @email lijiang@ymaotu.com
 * @create-date 20151014
 */
+(function(){
    'use strict';


    //初始化ejs
    ejs.open = '{{';
    ejs.close = '}}';

    var isFuntion = function (str) {
        return 'function' === typeof str;
    };

    //日期转换
    ejs.filters.simpleDate = function (price) {
        if (!price) return '';

        var date = price.split(' ')[0];
        return date.replace(/[-\/]/g, '.');
    };

    ejs.filters.pirceRegion = function (price) {
        if (!price) {
            return price;
        }
        var num = (price + '').split('.');
        return '<strong>' + num[0] + '</strong>' + (num[1] ? '.' + num[1] : '');
    };

    var search = YmtApi.utils.getUrlObj(),
        authInfo = function(){
            return YmtApi.utils.getAuthInfo()
        };
    var showLogStatus = true;

    /**
     * 显示日志
     */
    var showLog = function (msg, callback) {
        if (showLogStatus) {
            showLogStatus = false;
            var errElm = $('.msg-error');
            if (!errElm[0]) {
                errElm = $('<div class="msg-error"></div>')
                    .appendTo('body');
            }
            errElm.html(msg).css('opacity', '1');

            setTimeout(function () {
                $('.msg-error').css('opacity', '0');
                showLogStatus = true;
                callback && callback();
            }, 1800);
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



        cbFn.error = cbFn.error || function(res){
            showLog(res.Msg || '操作失败..');
        }


        $.ajax({
            url: url,
            type: 'GET',
            jsonpCallback: callbackName,
            dataType: 'jsonp',
            timeout: 60000, //1分钟过期
            cache: false,
            success: function (res) {
                if (res && (res.Code === 200 || res.Code === '200')) {
                    isFuntion(cbFn.success) && cbFn.success(res.Data);
                }
                else {
                    isFuntion(cbFn.error) && cbFn.error(res);
                }
            },
            error: cbFn.error
        });
    };

    //大转盘
    var sequence = [0, 1, 2, 4, 7, 6, 5, 3],
        _inx = 0,
        currCircleNum = 0,
        minCircleNum = 6;

    var timer = null,
        minNum = 5, //最小圈数
        currNum = 0,
        maxSpeed = 200, //最快速度
        minSpeed = 60, //最快速度
        tempo = 0.18, //速率
        direction = -1, //加速度方向
        stopInx = 0, //停止索引
        isFinal = false, //是否进入
        finalNum = 2, //最后缓冲圈数
        currFinalNum = 0, //最后倒计时 当前圈数
        currSpeed = 500; //当前速度


    var turntable = {
        runing: false,
        complete: function () {

        },
        move: function (inx) {
            inx = sequence[inx];
            var $wrap = $('.turntable-body'),
                $boards = $wrap.find('.board');
            $boards.removeClass('active').eq(inx).addClass('active');
        },
        loop: function () {
            var speend = currSpeed + direction * tempo * currSpeed;
            //限速
            if (direction > 0) {
                speend = Math.min(speend, maxSpeed);
            }
            else {
                speend = Math.max(speend, minSpeed);
            }

            //开启倒数且最后一圈且达到当前坐标 停止
            if (isFinal && currFinalNum === finalNum && stopInx === _inx) {
                currCircleNum = 0;
                clearInterval(timer);
                timer = null;
                turntable.runing = false;
                turntable.complete && turntable.complete();
                return;
            }

            //当速度改变了，或者没有定时器时 生成新的定时器
            if (!timer || speend != currSpeed) {
                currSpeed = speend;
                clearInterval(timer);
                timer = setInterval(turntable.loop, speend);
            }

            //跑完一圈
            if (_inx >= sequence.length) {
                currCircleNum++;
                _inx = 0;
                if (currNum++ >= minNum) {
                    direction = 1;
                    isFinal && currFinalNum++;
                }
            }
            turntable.move(_inx++);
        },
        run: function () {
            if(this.runing){
                return;
            }
            module.joinLottery();
            isFinal = false;
            currFinalNum = 0;
            direction = -1;
            this.runing = true;
            currNum = 0;
            this.loop();
        },
        stop: function (inx) {
            //direction = 1;
            stopInx = +inx;
            isFinal = true;
        }
    };

    /**
     * 打开转转乐 弹层
     */
    var openDialog = function(data){
        var html = ejs.render($('#vote-exchange-tpl').html(), data);
        $('.vote-coupon-dialog').html(html);
        $('.vote-exchange').addClass('open');
    },drawNum = 0;

    var module = {
        joinLottery: function () {
            var map = {
                0: '0',
                1: '1',
                2: '2',
                3: '7',
                4: '3',
                5: '6',
                6: '5',
                7: '5',
            }

            var complete = function(data){
                turntable.complete = function () {
                    openDialog(data);
                }
            }

            jsonpGetData(YmtApi.utils.addParam('http://jsapi.pk.ymatou.com/api/Lottery/JoinLottery', {
                accessToken: authInfo().AccessToken,
                deviceId: search.DeviceId || search.DeviceToken || '132',
                hasShare: true
            }), {
                success: function (data, code) {
                    if (data) {
                        turntable.stop(map[data.LotteryIndex]);
                        drawNum = data.HasUseCount;
                        complete(data);
                    }
                },
                error: function () {
                    //如果出错 直接显示谢谢惠顾
                    turntable.stop(map[7]);
                    complete({
                        BCode:103
                    });
                }
            });
        },
        //获得热门买手
        getHotBuyerList: function () {
            jsonpGetData(YmtApi.utils.addParam('http://jsapi.pk.ymatou.com/api/HotBuyer/GetHotBuyerList', {
                accessToken: authInfo().AccessToken,
                deviceId: search.deviceId,
                hasShare: false
            }), function (data) {
                if (data) {
                    var html = ejs.render($('#buyerList').html(), data);
                    $('buyerList').html(html);
                }
            });
        },
        //双11更便宜
        getCheap: function () {
            jsonpGetData(YmtApi.utils.addParam('http://api.evt.ymatou.com/ActivityTemplate/Products/aid_4023/pid_4700/ps_6', {

            }), function (data) {
                if (data) {
                    var html = ejs.render($('#cheap-tpl').html(), data);
                    $('cheap').html(html);
                }
            }, 'ymatou_at_4023_4700');
        },
        getForeginIndex: function () {
            jsonpGetData(YmtApi.utils.addParam('http://jsapi.app.ymatou.com/api/Polymeric/ForeignIndex', {

            }), function (data) {
                if (data) {
                    var html = ejs.render($('#foreignIndex').html(), data);
                    $('foreignIndex').html(html);
                }
            });
        },
        //爆款推荐
        getExplosivePro: function (aid, pid) {
            var args = Array.prototype.slice.call(arguments),
                modInfo,
                pageIndex = 1,
                pageSize = 10;

            //取当前模块的位置
            if (modInfo = activeMod[aid + '_' + pid]) {
                pageIndex = modInfo.pageIndex++;
                pageSize = modInfo.pageSize;
            }
            else {
                activeMod[aid + '_' + pid] = {
                    pageIndex: 1,
                    pageSize: 10,
                    isInit: false
                }
            }

            Array.prototype.push.apply(args, [pageIndex, pageSize, function (data) {
                if (data && data.ProductList) {
                    if (!activeMod.isInit) {
                        activeMod.isInit = true;
                        activeMod[aid + '_' + pid].isInit = true;
                        var html = ejs.render($('#explosive-pro').html(), data);
                        $('explosive-pro').html(html);
                        infiniteScroll({
                            selector: '.tab-body',
                            offset: 300,
                            callback: function () {
                                var tab = $('.explosive-pro-tab .tab-header .active');
                                module.getExplosivePro(tab.attr('data-aid'), tab.attr('data-pid'));
                            }
                        });
                    }
                    else {

                        var html = ejs.render($('#explosive-pro-item').html(), data);
                        if (!activeMod[aid + '_' + pid].isInit) {
                            activeMod[aid + '_' + pid].isInit = true;
                            $('#explosive_' + aid + '_' + pid).html(html);
                        }
                        else {
                            $('#explosive_' + aid + '_' + pid).append(html);
                        }
                    }

                }
            }]);

            getActivityJsonP.apply(null, args);
        },
        share: function () {
            jsonpGetData(YmtApi.utils.addParam('http://jsapi.pk.ymatou.com/api/Lottery/LotteryShareRecord', {
                accessToken:authInfo().AccessToken
            }), function (data) {

            });
        }
    }

    //存放活动模块
    var activeMod = {
            isInit: false
        }
        //
    var getActivityJsonP = function (aid, pid, pageIndex, pageSize, callback) {
        console.log(pageIndex,pageSize,activeMod[aid + '_' + pid])
        var callbackName = 'ymatou_at_' + aid + '_' + pid;
        pageIndex = pageIndex || 1;
        pageSize = pageSize || 10;
        jsonpGetData('http://api.evt.ymatou.com/ActivityTemplate/Products/aid_' + aid + '/pid_' + pid + '/pi_' + pageIndex + '/ps_' + pageSize, callback, callbackName);
    }

    var checkModule = function () {

        //模块占位符
        //使用image 站位模块区域，依赖图片懒加载实现按需加载模块
        $('.J-module-Hold').on('load', function () {
            var $this = $(this),
                moduleName = $this.attr('data-module'),
                args = ($this.attr('data-arguments') || '').split(',');
                console.log(moduleName)
            moduleName && isFuntion(module[moduleName]) && module[moduleName].apply(module, args);
            $this.removeClass('J-module-Hold').addClass('module-load-end');
        });
    }


    checkModule();

    new Swiper('.gwj-group', {
        pagination: '.slide-pagination',
        slidesPerView: 1,
        spaceBetween: 0,
        loop: false,
        centeredSlides: true,
        autoplayDisableOnInteraction: false
    });

    $(document).on('click', '.J-open', function () {
            var $this = $(this);

            YmtApi.open({
                url: $this.attr('data-url'),
                title: $this.attr('data-title'),
                isNew: true,
            });
        }).on('click', '.J-turntable-run', function () { //转盘运行

            if (YmtApi.utils.hasLogin()) {
                // 判断当前状态是否为1
                if(drawNum === 1){
                    return openDialog({
                        BCode:102,
                        HasUseCount:1
                    });
                }
                turntable.run();
            }
            else {
                YmtApi.toLogin();
            }

        }).on('scroll', function () {
            var top = document.documentElement.scrollTop || document.body.scrollTop,
                bottom = document.querySelector('#gwj_01').getBoundingClientRect().bottom;

            if (top > bottom) {
                $('#gwj-tab').removeClass('fixed');
            }
            else {
                $('#gwj-tab').addClass('fixed');
            }
        })
        .on('click', '#gwj-tab a', function () {
            $('#gwj-tab a').removeClass('active');
            $(this).addClass('active');
        })
        .on('click', '.explosive-pro-tab li', function () {
            var $this = $(this)
            $this.parent()
                .find('li')
                .removeClass('active')
                .parent().parent()
                .find('.tab-body-item')
                .removeClass('active')
                .eq($this.index()).addClass('active');
            $this.addClass('active');

            //判断是否已经初始化
            var aid = $this.attr('data-aid'),
                pid = $this.attr('data-pid');
            if (!(activeMod[aid + '_' + pid] && activeMod[aid + '_' + pid].isInit)) {
                module.getExplosivePro(aid, pid);
            }
        })
        .on('click', '.J-open-rule', function () {
            var $this = $(this);
            if ($this.hasClass('handstand')) {
                $this.text('展开 ')
            }
            else {
                $this.text('收起 ')
            }
            $this.toggleClass('handstand').prev().toggleClass('close');

        }).on('click', '.J-close-exchange', function () {
            $('.vote-exchange').removeClass('open');
        }).on('click', '.J-share', function () { //分享
            var $this = $(this),
                url = $this.attr('data-share-url'),
                content = $this.attr('data-share-content'),
                title = $this.attr('data-share-title'),
                pic = $this.attr('data-share-pic');

            module.share();

            YmtApi.openShare({
                shareTitle: '他破解了一个全球知名网站，想看看里面的秘密，惊的下巴都掉了！ ',
                shareUrl: 'http://static.pk.ymatou.com/gwj/share.html',
                sharePicUrl: 'http://static.pk.ymatou.com/images/gwj/gwj_share-4d3a881e31.jpg',
                shareContent: '2016最潮购省攻略！听说省下来的钱都可以去迪拜住一个月了！所以梦想还是要有的，万一实现了呢~',
                showWeiboBtn: 1
            });
        });

    /**
     * [infiniteScroll description]
     * @param  {Object} options 配置信息
     *                  selector
     *                  offset
     *                  callback
     *                  throttle
     */
    var infiniteScroll = function ( /*配置*/ options) {
        if ('function' !== typeof (options.callback)) {
            return;
        }
        options.offset = parseInt(options.offset) || 0;
        var throttleTime = options.throttle || 450;

        var callback = options.callback,
            $widnow = $(window),
            $sel = $(options.selector),
            throttle = true,
            currTop = 0; //控制滑动方向
        if (!($sel && $sel[0])) {
            return;
        }
        var selectorHeight = function () {
                //当前高度 加上容器的位置
                return $sel.height() + $sel.offset().top;
            },
            handler = function (event) {
                console.dir(event.changedTouches && event.changedTouches[0])
                if (throttle && ($widnow.scrollTop() > currTop) && ($widnow.scrollTop() + $widnow.height() + options.offset >= selectorHeight())) {
                    throttle = false;
                    currTop = $widnow.scrollTop();
                    setTimeout(function () {
                        throttle = true;
                    }, throttleTime);

                    callback();
                }
            }

        $widnow.on('scroll touchmove', handler);
    };

})();



