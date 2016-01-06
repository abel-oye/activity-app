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

    this.endNum = 0;//记录动画结束
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
            if (!that.startIng || that.endNum < 8) {
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
        this.endNum = 0;
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
                    that.endNum++;
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
                
                var prizes = data.GiftList,
                    _data,
                    $elem = $(elem),
                    currInx = +$elem.attr('data-inx'),
                    _inx = currInx;

                var changePrizes = function($elme, data) {
                    if (data.HasLottery) {
                        var html;
                        if(data.IsProduct){
                            html = '<img src="'+data.Value+'">';
                        }else{
                            html = '<strong>'+data.Value+'</strong>';
                        }
                        $elme.find('.back').html(html);
                    } else {
                        $elme.addClass('bg-left').removeClass('rollback').find('.back').html('');
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
}).on('click','.J-add-lottery',shareRecord).
on('click','.J-mixture-buyNow',function(){
    var $this =$(this);

    var radio = $this.closest('.catalogs').find('input:checked'),
        isGroup = radio.attr('data-is-group'),
        pid = radio.attr('data-pid'),
        url = "http://item.app.ymatou.com/forYmatouApp/product/pid?pid="+pid;
        console.log(isGroup == "true")
    if(isGroup == "true"){
        url = "http://evt.ymatou.com/"+pid;
    }
    YmtApi.open({
        url:url,
        tilte:'',
        isNew:1
    })

    console.log(radio)
});



var productData = {
    "mixture":{
        products:[
                {
                    "name":"费列罗 Ferrero 金莎榛仁巧克力48粒",
                    "countryFlagUrl":"http://img.ymatou.com/app/flag/circle/America.png",
                    "countryName":"美国",
                    "catalogs":[
                        {
                            "stock":"1",
                            "price":"139",
                            "isGroup":false,
                            "id":"79380a65-6dda-4124-af8e-f9c959a78fa1"
                        },
                        {
                            "stock":"2",
                            "price":"229",
                            "isGroup":true,
                            "id":"TC000000269"
                        }
                    ]
                },
                {
                    "name":"LOTTE/乐天黑加纳巧克力90g",
                    "CountryFlagUrl":"",
                    "CountryName":"",
                    "catalogs":[
                        {
                            "stock":"1",
                            "price":"35",
                            "isGroup":false,
                            "id":"e4d0da8a-aadc-4f29-8f9d-7c8d3ab10163"
                        },
                        {
                            "stock":"4",
                            "price":"59",
                            "isGroup":true,
                            "id":"TC000000252"
                        }
                    ]
                }
            ]
    }
}

module.activityList = function(aid, pid , tplId) {
    var render = function(data) {
        var html = ejs.render($( '#'+(tplId || 'active-tpl') ).html(),data);
        console.log('[data-arguments="' + aid + ',' + pid +(tplId?','+tplId:'')+ '"]')
        $('[data-arguments="' + aid + ',' + pid +(tplId?','+tplId:'')+ '"]').parent().html(html);
        lazyLoad.check();
    }

    if (aid === '0') {
        render(productData[pid]);
    } else {
        getActivityJsonP(aid, pid, 50, function(data) {
            if (data && data.Products) {
                render(data);
            } else {
                //不存在数据则会删除父节点
                $('[data-arguments="' + aid + ',' + pid + '"]').parent().remove();
            }
        });
    }
}

module.intPoint = function(aid, pid , tplId) {
    var render = function(data) {
        var html = ejs.render($( '#'+(tplId || 'active-tpl') ).html(),data);
        console.log('[data-arguments="' + aid + ',' + pid +(tplId?','+tplId:'')+ '"]')
        $('[data-arguments="' + aid + ',' + pid +(tplId?','+tplId:'')+ '"]').parent().html(html);
        lazyLoad.check();
        initSwiper('.sf-swiper-intPoint');
    }

    if (aid === '0') {
        render(productData[pid]);
    } else {
        getActivityJsonP(aid, pid, 50, function(data) {
            if (data && data.Products) {
                render(data);
            } else {
                //不存在数据则会删除父节点
                $('[data-arguments="' + aid + ',' + pid + '"]').parent().remove();
            }
        });
    }
}

function initSwiper(container){
    new Swiper(container, {
        pagination: container+' .swiper-pagination',
        loop: false,
        autoplay: 7000,
        // onSlideChangeStart: function () {
        //     lazyLoad.check();
        // }
    });
}

initSwiper('.sf-swiper-buyDetail');
})()