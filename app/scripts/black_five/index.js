/* global ejs: true,YmtApi:true */

/**
 * 黑五预热页
 * @author river
 * @email lijiang@ymaotu.com
 * @create-date 20151119
 */
+(function(){
    'use strict';

    //初始化ejs
    ejs.open = '{{';
    ejs.close = '}}';

    var isFuntion = function (str) {
        return 'function' === typeof str;
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

   var search = YmtApi.utils.getUrlObj(),
    authInfo = function(){
        return YmtApi.utils.getAuthInfo()
    };

    var turntable = (function(){
        //大转盘
        var sequence = [0, 1, 2, 4, 7, 6, 5, 3],
            _inx = 0,
            currCircleNum = 0,
            minCircleNum = 6;

        var timer = null,
            minNum = 5, //最小圈数
            currNum = 0,
            maxSpeed = 350, //最快速度
            minSpeed = 80, //最快速度
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
                var $wrap = $('.turntable-box'),
                    $boards = $wrap.find('.board');
                $boards.removeClass('active').eq(inx).addClass('active');
            },
            loop: function () {

                turntable.move(_inx);

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

                _inx++;

                //跑完一圈
                if (_inx >= sequence.length) {
                    currCircleNum++;
                    _inx = 0;
                    if (currNum++ >= minNum) {
                        direction = 1;
                        isFinal && currFinalNum++;
                    }
                }


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

        return turntable;

    })()


    /**
     * 打开转转乐 弹层
     */
    var openDialog = function(data){
        var html = ejs.render($('#vote-exchange-tpl').html(), data);
        $('.vote-coupon-dialog').html(html);
        $('.vote-exchange').addClass('open');
    },drawNum = 0;

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
                7: '4',
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
        }
    }

    $(document).on('scroll', function () {
            var top = document.documentElement.scrollTop || document.body.scrollTop,
                bottom = document.querySelector('#bf_01').getBoundingClientRect().bottom;

            if (top > bottom) {
                $('#bf-tab').removeClass('show');
            }
            else {
                $('#bf-tab').addClass('show');
            }
        })
        .on('click', '#bf-tab li', function () {
            $('#bf-tab li').removeClass('active');
            $(this).addClass('active');
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

        })

})();
