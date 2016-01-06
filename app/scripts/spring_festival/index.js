;(function(){
//
//初始化ejs
ejs.open = '{%';
ejs.close = '%}';

/**
 * [Poker description]
 * @param {object} options
 *        container 容器
 *        maxDraw   最大翻牌次数
 */
function Poker(options) {

    this.opts = $.extend({
        container: '.poker-container',
        maxDraw: 1
    }, options);
    this.$container = $(this.opts.container);
    this.init();
    this.ready = false;
}

Poker.prototype = {
    init: function() {
        this.drawNum = 0;

        this.cardItems = this.$container.find('.card-item');

        this.bind();

    },
    bind: function() {
        var that = this;
        //$(document).on('click','.card-item',function(){
        this.cardItems.on('click', function() {
            if (!that.startIng) {
                return;
            }
            that.startIng = false;
            if (that.drawNum++ < that.opts.maxDraw) {
                that.opts.clickFn && that.opts.clickFn.call(that, this);
            }
        });
    },
    start: function() {
        this.drawNum = 0;

        this.cardItems
            .removeClass('rollback')
            .removeClass('bg-left')
            .addClass('rolling');
        setTimeout(this.shuffle.bind(this), 1E3);
    },
    shuffle: function() {
        var className,
            that = this,
            inx;
        this.startIng = true;
        this.cardItems.each(function(i) {
            inx = i > 4 ? i + 2 : i == 4 ? 6 : i + 1
            className = 'shuffle' + inx;
            $(this).addClass(className)
                .attr('data-clsName', className)
                .one('webkitAnimationEnd animationend', function() {
                    var $this = $(this);
                    $this.removeClass($this.attr('data-clsName'))
                        .removeClass('rolling');
                });
        });
    },
    showdown: function() {
        this.cardItems.addClass('rollback');
    }
}



var _poker = new Poker({
    clickFn: function(elem) {
        var that = this;

        var search = YmtApi.utils.getUrlObj(),
            deviceId = search.DeviceId || search.DeviceToken || '0000000';
        jsonpGetData(YmtApi.utils.addAuth('http://jsapi.pk.ymatou.com/api/Christmas/Flop?Deviceid=' + deviceId ),{
            success: function(data) {
                console.log(data)
                var prizes = data.GiftList,
                    _data,
                    $elem = $(elem),
                    currInx = +$elem.attr('data-inx'),
                    _inx = currInx;

                var changePrizes = function($elme, data) {
                    if (data.HasLottery) {
                        var html;
                        if(data.IsProduct){
                            html = '<img src="'+data.Value+'" style="width:100%;height:100%;">';
                        }else{
                            html = '<strong>'+data.Value+'</strong>';
                        }
                        $elme.find('.back').html(html);
                    } else {
                        $elme.addClass('bg-left').removeClass('rollback')
                    }
                }

                for (var i = 0, len = 8; i < len; i++) {
                    _data = prizes[i];
                    changePrizes(!i ? $elem : that.cardItems.eq(_inx), _data)
                    _inx = _inx >= 7 ? 0 : _inx + 1;
                }

                $elem.addClass('rollback');

                //渲染
                var html = ejs.render($('#poker-dialog-tpl').html(), data);
                $('.poker-dialog-bd').html(html);
                $('.poker-dialog,.poker-dialog-mask').addClass('open')

                setTimeout(that.showdown.bind(that), 15E2);
            },
            error:function(data){
                console.log(data)
            }
        })
    }
});

var shareRecord = function () {
        jsonpGetData(YmtApi.utils.addAuth('http://jsapi.pk.ymatou.com/api/Christmas/LotteryShare'),{
            success:function(data){
               console.log(data)
            },
            error:function(){}
        });
    }

$('body').on('click', '.J-start-poker', function() {
    if(YmtApi.utils.hasLogin()){
        _poker.start();
    }else{
        YmtApi.toLogin()
    }
}).on('click', '.J-close-dialog', function() {
    $('.poker-dialog,.poker-dialog-mask').removeClass('open');
}).on('click','.J-add-lottery',shareRecord);



//setTimeout(_poker.shuffle.bind(_poker), 1E3);
})()