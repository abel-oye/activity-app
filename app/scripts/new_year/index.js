;(function(){
    /**
     * [Poker description]
     * @param {object} options
     *        container 容器
     *        maxDraw   最大翻牌次数
     */
    // function Poker(options){

    //     this.opts = $.extend({
    //         container:'.poker-container',
    //         maxDraw:1
    //     },options);
    //     this.$container = $(this.opts.container);
    //      this.init();
    // }

    // Poker.prototype = {
    //     init:function(){
    //         console.log(this)
    //         this.drawNum = 0;

    //         this.cardItems = this.$container.find('.card-item');
    //         this.bind();
    //     },
    //     bind:function(){
    //          var that = this;
    //          this.$container.on('click','.card-item',function(){
    //             if(that.drawNum++ < that.opts.maxDraw){
    //                 $(this).addClass('rollback');
    //                 if(that.drawNum <= that.opts.maxDraw){
    //                     setTimeout(that.showdown.bind(that), 15E2);
    //                 }
    //             }


    //         });
    //     },
    //     start:function(){
    //         this.cardItems
    //                 .removeClass('rollback')
    //                 .addClass('rolling');
    //         setTimeout(this.shuffle.bind(this), 1E3);
    //     },
    //     shuffle:function(){
    //         var className;
    //         this.cardItems.each(function(i){
    //             className = 'shuffle'+(i+1);
    //             $(this).addClass(className)
    //                     .attr('data-clsName',className)
    //                     .one('webkitAnimationEnd animationend',function(){
    //                         var $this = $(this);
    //                         console.log('end')
    //                         $this.removeClass($this.attr('data-clsName'))
    //                             .removeClass('rolling');
    //                     });
    //         });
    //     },
    //     showdown:function(){
    //         this.cardItems.addClass('rollback');
    //     }
    // }

    //var _poker = new Poker();
    //
    //
    var isFuntion = function (str) {
        return 'function' === typeof str;
    };
    var search = YmtApi.utils.getUrlObj();
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

        cbFn.error = cbFn.error || function (res) {
            showLog(res.Msg);
        }

        $.ajax({
            url: url,
            type: 'GET',
            jsonpCallback: callbackName,
            dataType: 'jsonp',
            timeout: 30000, //1分钟过期
            cache: true,
            success: function (res) {
                if (res && (res.Code === 200 || res.Code === '200')) {
                    isFuntion(cbFn.success) && cbFn.success(res.Data);
                }
                else {
                    isFuntion(cbFn.error) && cbFn.error(res);
                }
            },
            error: function () {
                showLog('系统挤爆了，请稍后再试!');
            }
        });
    };


    FastClick.attach(document.body);

    //获得首页数据
    var getRandom = function(size) {
        return Math.floor(Math.random() * size)
    }

    var ROTATE_LIST = [ //选择角度
            -30,
            -53.2,
            -40,
            -55,
            -57
        ];

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
                len = Math.min(window.innerWidth/45/2,3);

            // for (var i = 0; i < len; i++) {
            //     setTimeout(this.shot.bind(this), 15E2);
            // }
            //
            var loopNum = 1;
            that.battleNum = 1; 
            this.winNum = [6,7,8,9,10][getRandom(5)];
            var down = function(){
                if(that.stopState){
                    return;
                }
                that.battleNum = that.battleNum > len ? 1 : that.battleNum;
                that.shot();
                setTimeout(down,6E2);   
            }    

            var countdownTime = 15;
            var countdown = function(){
                if(that.stopState){
                    return;
                }
                $('.packet-countdown').text(--countdownTime);
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
            //this.flight();
            
            this.bind();

        },
        bind:function(){
            var that = this;
             $('body').on('click','.red-packet',function(){
                console.log(1)
                $(this).addClass('bg-right');
                 that.runBattles--;
                 if(that.clickNum++ == that.winNum ){
                    
                    that.opts.callback && that.opts.callback(that);
                 }
             });
        },
        /**
         * 装弹
         *
         */
        shot: function(runBattles) {
            if(this.stopState){
                return;
            }
            runBattles = runBattles || this.battleNum;
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

                var $next = $('<span class="red-packet" data-bulletrow="' + runBattles + '" data-speed="2"></span>'),
                    speed = 3.2,
                    left = Math.max((runBattles-1) * 95 + 130,75);

                $next.css({
                    top:'-450px',
                    left:  left +'px',
                    //transform:'rotate('+getRotate()+'deg)',
                    transition: 'transform ' + speed + 's linear',
                    '-moz-transition': '-moz-transform ' + speed + 's linear',
                    '-webkit-transition': '-webkit-transform ' + speed + 's linear'
                        //animation:'bulletFlight '+getSpeed()+'s linear'
                }).on('webkitTransitionEnd transitionend', function() {
                    var $this = $(this);
                    $this.remove();
                    that.runBattles--;
                    //that.shot($this.attr('data-bulletrow'));
                });

                //this.shot();
                this.flight();

                //opts.bulletList.push(next);
                this.container.append($next);

               // if(that.rowMap[runBattles] < 2){
               //      setTimeout(function(){
               //          that.runBattles--;
               //          that.shot(runBattles);
               //      }.bind(this),speed*1000*0.87)
               //  }
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
            this.container.find('.red-packet').each(function() {
                var $this = $(this),
                    height = window.innerHeight+600;

                $this.css({
                    //left: left
                    'transform': 'translate(0,'+height+'px)',
                    '-moz-transform': 'translate(0,'+height+'px)',
                    '-webkit-transform': 'translate(0,'+height+'px)'
                });

                /*if (left < -width){
                    $this.remove();
                    that.runBattles--;
                    that.shot($this.attr('data-bulletrow'));
                }*/


                /*else if(left < $(window).width()/opts.battleCell 
                    && that.rowMap[dataBulletrow] < opts.battleCell){
                    that.runBattles--;
                    that.shot(dataBulletrow);
                    console.log(dataBulletrow)
                }*/
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
    }

    var lottery = function(cb){
        var deviceId = search.DeviceId || search.DeviceToken || '0000000';

        jsonpGetData(YmtApi.utils.addAuth('http://jsapi.pk.ymatou.com/api/Christmas/JoinLottery?DeviceId=' + deviceId), {
            success: function (data) {
                if (data) {
                     cb && cb(data);
                }
            }
        });
    },hasLottery = function(){
        if(YmtApi.utils.hasLogin()){
            jsonpGetData(YmtApi.utils.addAuth('http://jsapi.pk.ymatou.com/api/Christmas/HasLottery'), {
                success: function (data) {
                    if (data && !data.HasLottery) {
                        $('.packet').addClass('show');
                    }
                }
            });
        }else{
            $('.packet').addClass('show');
        }
        
    },renderDialog = function(data){
        var html=[];
        if(data.BCode === 102 ){
            html.push('<h3>每人只有一次机会哟</h3>');
            html.push('<div><button class="btn comfirm-btn J-close-dialog">知道啦</button></div>');
        }else if(data.BCode === 100){
            html.push('<h3>恭喜哈尼抢到16元现金优惠券啦！</h3>');
            html.push('<div><button class="btn comfirm-btn J-close-dialog">马上去花</button><button class="btn J-close-dialog J-packet-share">分享秀一下</button></div>');
        }else{
            html.push('<h3>武林高手<br/>竟然躲过了所有的红包袭击<br>一个都没有拿到</h3>');
            html.push('<div><button class="btn comfirm-btn J-close-dialog">知道啦</button></div>');
        }
        $('.packet-dialog').addClass('show').find('.packet-dialog-bd').html(html.join(''));
    }

    $(document).on('click','.J-close-dialog',function(){
        $('.packet-dialog ,.packet').removeClass('show');
    }).on('click','.J-packet-start',function(){
        if (YmtApi.utils.hasLogin()) {
            $('.packet-start').hide();
            var bfield = new Battlefield({
                container: '.packet-box',
                speed: 1,
                battleRow: 5,
                distance: 40,
                battleCell: 2,
                callback:function(that){
                    lottery(function(data){
                        that.stopState = true;
                        that.container.children().remove();
                        renderDialog(data);
                    })
                }
            });
        } else {
            YmtApi.toLogin();
        }
    }).on('click','.J-packet-share',function(){
        YmtApi.openShare({
            shareTitle: '洋码头发红包啦，大家快去抢啊',
            shareUrl: 'http://staticontent.ymatou.com/images/activity/new_year/red_packet.png',
            sharePicUrl: 'http://staticontent.ymatou.com/images/activity/new_year/red_packet.png',
            shareContent: '我在洋码头抽奖获得16元现金红包，大家快来，人人有份哦。',
            showWeiboBtn: 0
        });
    });

    hasLottery()


    //setTimeout(_poker.shuffle.bind(_poker), 1E3);
})();
