/* global ejs: true,YmtApi:true */

/**
 * 海外购物节首页
 * @author river
 * @email lijiang@ymaotu.com
 * @create-date 20151014
 */
$(function () {
    'use strict';

    //初始化ejs
    ejs.open = '{{';
    ejs.close = '}}';

    var isFuntion = function (str) {
        return 'function' === typeof str;
    };

    ejs.filters.pirceRegion = function (price) {
      if (!price) {
        return price;
      }
      var num = (price + '').split('.');
      return '<strong>' + num[0] + '</strong>' + (num[1] ? '.' + num[1] : '');
    };

    var search = YmtApi.utils.getUrlObj(),
        authInfo = YmtApi.utils.getAuthInfo();
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
     * @param  {String}   fnName   [description]
     * @return {[type]}            [description]
     */
    var jsonpGetData = function (url, callback) {
        /*if(fnName){
            if(!(typeof window[fnName] === 'function')){
                window[fnName] = function(data){
                    callback && callback(data);
                    delete window[fnName];
                }
            }
        }*/
        $.ajax({
            url: url,
            type: 'GET',
            //jsonpCallback:undefined,
            dataType: 'jsonp',
            timeout:60000,//1分钟过期
            cache:false,
            success: function (res) {
                if (res && (res.Code === 200 || res.Code === '200')) {
                    isFuntion(callback) && callback(res.Data);
                }
                else {
                    //showLog(res.Msg || '操作错误.');
                }
            },
            error: function () {
                showLog('操作错误.');
            }
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
        runing:false,
        complete:function(){

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
                if(currNum++ >= minNum){
                   direction = 1 ;
                   isFinal  && currFinalNum++;
                }
            }
            turntable.move(_inx++);
        },
        run: function () {
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
            this.runing = false;
        }
    }

    var module = {
        joinLottery : function(){
        if(YmtApi.utils.hasLogin()){
                jsonpGetData(YmtApi.utils.addParam('http://jsapi.pk.ymatou.com/api/Lottery/JoinLottery', {
                    accessToken: authInfo.AccessToken,
                    deviceId:search.deviceId || '1',
                    hasShare:false
                }), function (data) {
                    if(data){
                        var map = {
                            0:'0',
                            1:'1',
                            2:'2',
                            3:'7',
                            4:'3',
                            5:'6',
                            6:'5',
                            7:'5',
                        }
                        turntable.stop(map[data.LotteryIndex]);

                        turntable.complete = function(){
                           alert()
                        }
                    }
                });
            }else{
                YmtApi.toLogin();
            }
        },
        //获得热门买手
        getHotBuyerList : function(){
            jsonpGetData(YmtApi.utils.addParam('http://jsapi.pk.ymatou.com/api/HotBuyer/GetHotBuyerList', {
                accessToken: authInfo.AccessToken,
                deviceId:search.deviceId,
                hasShare:false
            }), function (data) {
                if(data){
                    var html = ejs.render($('#buyerList').html(), data);
                    $('buyerList').html(html);
                }
            });
        },
        getForeginIndex : function(){
            jsonpGetData(YmtApi.utils.addParam('http://jsapi.app.ymatou.com/api/Polymeric/ForeignIndex', {

            }), function (data) {
                if(data){
                    var html = ejs.render($('#foreignIndex').html(), data);
                    $('foreignIndex').html(html);
                }
            });
        },
        //爆款推荐
        getExplosivePro:function(aid,pid){
            var args =  Array.prototype.slice.call(arguments);

            var getJsonP = function(aid,pid,callback){
                var callbackName = 'ymatou_at_'+aid+'_'+pid;
                $.ajax({
                    url: 'http://api.evt.ymatou.com/ActivityTemplate/Products/aid_'+aid+'/pid_'+pid+'/pi_1/ps_10',
                    type: 'GET',
                    jsonpCallback:callbackName,
                    dataType: 'jsonp',
                    beforeSend:function(xhr,settings){
                        settings.url = settings.url.replace(/_=\d*&/,'')
                    },
                    success: function (res) {
                        if (res && (res.Code === 200 || res.Code === '200')) {
                            isFuntion(callback) && callback(res.Data);
                        }
                        else {
                            //showLog(res.Msg || '操作错误.');
                        }
                    },
                    error: function () {
                        showLog('操作错误.');
                    }
                });
            }
            Array.prototype.push.apply(args,[function(data){
                if(data && data.ProductList){
                    var html = ejs.render($('#explosive-pro').html(), data);
                    $('explosive-pro').html(html);
                }
            }])

            getJsonP.apply(this,args);
        },
        getExplosiveProMod:function(){

        }
    }

    var checkModule = function(){

        //模块占位符
        //使用image 站位模块区域，依赖图片懒加载实现按需加载模块
        $('.J-module-Hold').on('load',function(){
            var $this= $(this),
                moduleName = $this.attr('data-module'),
                args = ($this.attr('data-arguments') || '').split(',');

            moduleName && isFuntion(module[moduleName]) && module[moduleName].apply(module,args);
            $this.removeClass('J-module-Hold').addClass('module-load-end');
        });
    }


    checkModule();

    new Swiper('.gwj-group',{
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
        if(!turntable.runing){
            turntable.run();
            module.joinLottery();
        }else{
            turntable.stop(2)
        }

    }).on('scroll',function(){
        var top = document.documentElement.scrollTop || document.body.scrollTop,
            bottom = document.querySelector('#gwj_01').getBoundingClientRect().bottom;

        if(top > bottom){
            $('#gwj-tab').removeClass('fixed');
        }else{
            $('#gwj-tab').addClass('fixed');
        }
    })
    .on('click','#gwj-tab a',function(){
        $('#gwj-tab a').removeClass('active');
        $(this).addClass('active');
    })
    .on('click','.explosive-pro-tab li',function(){
        var $this = $(this)
        $this.parent()
            .find('li')
            .removeClass('active')
            .parent().parent()
            .find('.tab-body-item')
            .removeClass('active')
            .eq($this.index()).addClass('active');
        $this.addClass('active');

    })
    .on('click','.J-open-rule',function(){
        var $this = $(this);
        if($this.hasClass('handstand')){
            $this.text('展开 ')
        }else{
            $this.text('收起 ')
        }
        $this.toggleClass('handstand').prev().toggleClass('close');

    }).on('click','.J-close-exchange',function(){
        $('.vote-exchange').removeClass('open');
    });


});
