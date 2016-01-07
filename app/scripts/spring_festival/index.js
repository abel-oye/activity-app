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

        var renderDialog = function(data){
            //渲染
            var html = ejs.render($('#poker-dialog-tpl').html(), data);
            $('.poker-dialog-bd').html(html);
            $('.poker-dialog,.poker-dialog-mask').addClass('open');
        }

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

                renderDialog(data);

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
        "picUrl":"http://p8.img.ymatou.com/G02/upload/product/small/M06/6E/53/CgvUA1YpABuAAhI8AAbh85KapUY992_s.jpg",
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
        "countryFlagUrl":"http://img.ymatou.com/app/flag/circle/Korea.png",
        "countryName":"韩国",
        "picUrl":"http://pm2.img.ymatou.com/G02/upload/product/small/M08/10/6B/CgvUBVaDjxSADh3kAARKUS5gk6I520_s.jpg",
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
    },
    {
        "name":"LOTTE/乐天56%巧克力86g罐装",
        "countryFlagUrl":"http://img.ymatou.com/app/flag/circle/Korea.png",
        "countryName":"韩国",
        "picUrl":"http://pm5.img.ymatou.com/G02/upload/product/small/M03/0F/D0/CgvUBVaDfs6AXiQ2AAR4-BoCpvM672_s.jpg",
        "catalogs":[
            {
                "stock":"1",
                "price":"35",
                "isGroup":false,
                "id":"711a71f8-6263-4d17-9d3c-a3c59ffcf193"
            },
            {
                "stock":"4",
                "price":"59",
                "isGroup":true,
                "id":"TC000000249"
            }
        ]
    },
    {
        "name":"日本悠哈UHA 味觉糖 40g（紫葡萄）",
        "countryFlagUrl":"http://img.ymatou.com/app/flag/circle/Japan.png",
        "countryName":"日本",
        "picUrl":"http://pm1.img.ymatou.com/G02/upload/product/big/M03/09/2A/CgvUA1ZAEq2AWCkxAAIRrRD69UY162_b.jpg",
        "catalogs":[
            {
                "stock":"1",
                "price":"17",
                "isGroup":false,
                "id":"641c332c-60cd-4d78-84ce-0d694157da32"
            },
            {
                "stock":"5",
                "price":"45",
                "isGroup":true,
                "id":"TC000000138"
            }
        ]
    },
    {
        "name":"精品Kirkland 特级蓝莓干 567g",
        "countryFlagUrl":"http://img.ymatou.com/app/flag/circle/America.png",
        "countryName":"美国",
        "picUrl":"http://p10.img.ymatou.com/G02/upload/product/small/M03/6F/1B/CgvUBFYpAuKAX0NsAAH60ltGoaI519_s.jpg",
        "catalogs":[
            {
                "stock":"1",
                "price":"79",
                "isGroup":false,
                "id":"f22ada6f-e5cc-46c6-80e7-59a7d61aeef1"
            },
            {
                "stock":"2",
                "price":"150",
                "isGroup":true,
                "id":"TC000000273"
            }
        ]
    },
    {
        "name":"Devondale德运高钙全脂中老年成人学生奶粉1kg",
        "countryFlagUrl":"http://img.ymatou.com/app/flag/circle/Australia.png",
        "countryName":"澳大利亚",
        "picUrl":"http://pm3.img.ymatou.com/G02/upload/product/small/M08/F9/A6/CgvUA1ZNlGWAEd40AAKdSfTEcok366_s.jpg",
        "catalogs":[
            {
                "stock":"1",
                "price":"75",
                "isGroup":false,
                "id":"8f01839a-2c08-4040-92a5-ca476481d8bd"
            },
            {
                "stock":"5",
                "price":"348",
                "isGroup":false,
                "id":"8f01839a-2c08-4040-92a5-ca476481d8bd"
            }
        ]
    },
    {
        "name":"Tom's Farm蜂蜜黄油杏仁1袋/250克",
        "countryFlagUrl":"http://img.ymatou.com/app/flag/circle/Korea.png",
        "countryName":"韩国",
        "picUrl":"http://pm5.img.ymatou.com/G02/upload/product/small/M09/CE/29/CgvUBFY8TzeAWlHeAASuydfx7bM907_s.jpg",
        "catalogs":[
            {
                "stock":"1",
                "price":"52",
                "isGroup":false,
                "id":"2b3b8d54-ba2a-40e2-9be6-d5e2f260d1b5"
            },
            {
                "stock":"2",
                "price":"75",
                "isGroup":true,
                "id":"TC000000235"
            }
        ]
    },
    {
        "name":"好丽友MARKET O 巧克力布朗尼蛋糕零食80克",
        "countryFlagUrl":"http://img.ymatou.com/app/flag/circle/Korea.png",
        "countryName":"韩国",
        "picUrl":"http://pm4.img.ymatou.com/G02/upload/product/small/M08/0D/46/CgvUBVZARcWAFXWhAAaSp9DAoYM597_s.jpg",
        "catalogs":[
            {
                "stock":"1",
                "price":"35",
                "isGroup":false,
                "id":"558860d2-8fa9-412a-8a59-86ba279eebc0"
            },
            {
                "stock":"4",
                "price":"69",
                "isGroup":true,
                "id":"TC000000150"
            }
        ]
    },
    {
        "name":"Swisse胶原蛋白 500ml",
        "countryFlagUrl":"http://img.ymatou.com/app/flag/circle/Australia.png",
        "countryName":"澳大利亚",
        "picUrl":"http://pm3.img.ymatou.com/G02/upload/product/small/M06/DD/44/CgvUA1Z7YhmAGpUaAAHb2qCP7Ms151_s.jpg",
        "catalogs":[
            {
                "stock":"1",
                "price":"118",
                "isGroup":false,
                "id":"9d309cd6-eca4-46d3-b510-de15cc69d798"
            },
            {
                "stock":"2",
                "price":"198",
                "isGroup":true,
                "id":"TC000000233"
            }
        ]
    },
    {
        "name":"LG生活健康4层防雾霾防PM2.5防微细尘埃口罩1个",
        "countryFlagUrl":"http://img.ymatou.com/app/flag/circle/Korea.png",
        "countryName":"韩国",
        "picUrl":"http://pm2.img.ymatou.com/G02/upload/product/small/M00/E7/36/CgvUBFZ9EE2Ae5HBAAQvGF5xtqI245_s.jpg",
        "catalogs":[
            {
                "stock":"1",
                "price":"29",
                "isGroup":false,
                "id":"74123f3b-72c5-4e0a-901e-7a7ecc8b3778"
            },
            {
                "stock":"5",
                "price":"59",
                "isGroup":true,
                "id":"TC000000237"
            }
        ]
    },
    {
        "name":"好丽友欧式奶油蛋糕派 奶酪软饼120g",
        "countryFlagUrl":"http://img.ymatou.com/app/flag/circle/Korea.png",
        "countryName":"韩国",
        "picUrl":"http://pm1.img.ymatou.com/G02/upload/product/small/M06/0D/54/CgvUBFZAQj2AZbdIAATj6G0_O28160_s.jpg",
        "catalogs":[
            {
                "stock":"1",
                "price":"35",
                "isGroup":false,
                "id":"12247ec4-3c6d-4ef5-afbe-67fc8a05f6d6"
            },
            {
                "stock":"4",
                "price":"59",
                "isGroup":true,
                "id":"TC000000148"
            }
        ]
    },
    {
        "name":"The market grocer 天然整粒蔓越莓干 250g",
        "countryFlagUrl":"http://img.ymatou.com/app/flag/circle/Australia.png",
        "countryName":"澳大利亚",
        "picUrl":"http://pm1.img.ymatou.com/G02/upload/product/small/M04/E4/40/CgvUA1Z8qKmAYI07AARQHHK7O7g632_s.jpg",
        "catalogs":[
            {
                "stock":"1",
                "price":"49",
                "isGroup":false,
                "id":"8e7cdb09-b806-4d83-90b6-1920ff827c57"
            },
            {
                "stock":"2",
                "price":"78",
                "isGroup":true,
                "id":"TC000000229"
            }
        ]
    },
    {
        "name":"Swisse高浓度蔓越莓胶囊30粒",
        "countryFlagUrl":"http://img.ymatou.com/app/flag/circle/Australia.png",
        "countryName":"澳大利亚",
        "picUrl":"http://pm1.img.ymatou.com/G02/upload/product/small/M05/99/A6/CgvUA1Y5agWABHOKAAQtc9LhjHU519_s.jpg",
        "catalogs":[
            {
                "stock":"1",
                "price":"118",
                "isGroup":false,
                "id":"058c7d50-9477-4fda-a0f2-c36236cbb541"
            },
            {
                "stock":"2",
                "price":"210",
                "isGroup":true,
                "id":"TC000000158"
            }
        ]
    },
    {
        "name":"marutai豚骨鸡汤风味拉面熊本鹿儿岛185g（2人份）1包",
        "countryFlagUrl":"http://img.ymatou.com/app/flag/circle/Japan.png",
        "countryName":"日本",
        "picUrl":"http://pm4.img.ymatou.com/G02/upload/product/small/M07/6A/2A/CgvUBVZF3faAXJFEAAW5RxlQwiM823_s.jpg",
        "catalogs":[
            {
                "stock":"1",
                "price":"25",
                "isGroup":false,
                "id":"9dbd14e8-76b0-4e2c-adc0-aab48ec33459"
            },
            {
                "stock":"3",
                "price":"54",
                "isGroup":true,
                "id":"TC000000165"
            }
        ]
    },
    {
        "name":"好丽友Market O非油炸有机奶酪烤薯片60g",
        "countryFlagUrl":"http://img.ymatou.com/app/flag/circle/Korea.png",
        "countryName":"韩国",
        "picUrl":"http://pm2.img.ymatou.com/G02/upload/product/small/M03/0D/E6/CgvUBVZASuWAe74YAAdbuCuQ7EQ915_s.jpg",
        "catalogs":[
            {
                "stock":"1",
                "price":"35",
                "isGroup":false,
                "id":"3cbc2102-f323-403a-825f-bd5919ec42e3"
            },
            {
                "stock":"4",
                "price":"59",
                "isGroup":true,
                "id":"TC000000153"
            }
        ]
    },
    {
        "name":"好丽友布朗尼巧克力夹心蛋糕香草味 80g",
        "countryFlagUrl":"http://img.ymatou.com/app/flag/circle/Korea.png",
        "countryName":"韩国",
        "picUrl":"http://pm4.img.ymatou.com/G02/upload/product/small/M05/0D/F9/CgvUBFZAR4iAP3ybAASrxFfy6Gs658_s.jpg",
        "catalogs":[
            {
                "stock":"1",
                "price":"35",
                "isGroup":false,
                "id":"2186b2d5-ed6b-4ccf-a5d7-80c6a8270aa8"
            },
            {
                "stock":"4",
                "price":"69",
                "isGroup":true,
                "id":"TC000000151"
            }
        ]
    },
    {
        "name":"好丽友儿童打糕鱼红豆糯米夹心蛋糕174g",
        "countryFlagUrl":"http://img.ymatou.com/app/flag/circle/Korea.png",
        "countryName":"韩国",
        "picUrl":"http://pm2.img.ymatou.com/G02/upload/product/small/M02/0D/0B/CgvUBVZAQ9SAMaRBAAbskM-AW00755_s.jpg",
        "catalogs":[
            {
                "stock":"1",
                "price":"36",
                "isGroup":false,
                "id":"bd921441-820b-40ed-8db6-be6d79b7cd9a"
            },
            {
                "stock":"4",
                "price":"77",
                "isGroup":true,
                "id":"TC000000149"
            }
        ]
    },
    {
        "name":"好丽友欧式巧克力派 蛋糕小甜点125g",
        "countryFlagUrl":"http://img.ymatou.com/app/flag/circle/Korea.png",
        "countryName":"韩国",
        "picUrl":"http://pm1.img.ymatou.com/G02/upload/product/small/M0A/09/B9/CgvUBFZAHK6ALdJHAAct-0w-Vls879_s.jpg",
        "catalogs":[
            {
                "stock":"1",
                "price":"35",
                "isGroup":false,
                "id":"fefdbb3a-b414-4978-8bbf-89de774fb88c"
            },
            {
                "stock":"4",
                "price":"59",
                "isGroup":true,
                "id":"TC000000147"
            }
        ]
    },
    {
        "name":"LOTTE/乐天软糯巧克力打糕 186克*6包",
        "countryFlagUrl":"http://img.ymatou.com/app/flag/circle/Korea.png",
        "countryName":"韩国",
        "picUrl":"http://pm5.img.ymatou.com/G02/upload/product/small/M09/10/E7/CgvUA1aDjCGAcpMfAAWsT6S171g324_s.jpg",
        "catalogs":[
            {
                "stock":"1",
                "price":"35",
                "isGroup":false,
                "id":"5c61cae3-6b9e-45bb-b5ec-19b57d101beb"
            },
            {
                "stock":"4",
                "price":"59",
                "isGroup":true,
                "id":"TC000000253"
            }
        ]
    },
    {
        "name":"和光堂Wakodo宝宝辅食高钙磨牙饼干系列三种口味 ",
        "countryFlagUrl":"http://img.ymatou.com/app/flag/circle/Japan.png",
        "countryName":"日本",
        "picUrl":"http://p10.img.ymatou.com/G02/upload/product/small/M03/64/98/CgvUBFXydIaAAGkpAAGxR9kK94Y164_s.jpg",
        "catalogs":[
            {
                "stock":"2",
                "price":"58",
                "isGroup":false,
                "id":"fc98f06e-5026-4a52-8604-103826c9ccf0"
            },
            {
                "stock":"6",
                "price":"139",
                "isGroup":false,
                "id":"fc98f06e-5026-4a52-8604-103826c9ccf0"
            }
        ]
    },
    {
        "name":"VEGE FRU Smoothie Diet奶昔酵素代餐粉300g（猕猴桃味）",
        "countryFlagUrl":"http://img.ymatou.com/app/flag/circle/Japan.png",
        "countryName":"日本",
        "picUrl":"http://p6.img.ymatou.com/G02/upload/product/small/M03/95/64/CgvUA1X2Qs-AN4c_AAG-P6Grvsg475_s.jpg",
        "catalogs":[
            {
                "stock":"1",
                "price":"145",
                "isGroup":false,
                "id":"5b96b8de-b018-4dc3-82df-9eca1169b666"
            },
            {
                "stock":"3",
                "price":"339",
                "isGroup":false,
                "id":"5b96b8de-b018-4dc3-82df-9eca1169b666"
            }
        ]
    },
    {
        "name":"善存Centrum成人多种复合维生素425粒",
        "countryFlagUrl":"http://img.ymatou.com/app/flag/circle/America.png",
        "countryName":"美国",
        "picUrl":"http://p5.img.ymatou.com/upload/product/small/5b24042a92f54f2fab40436cbc22b16f_s.jpg",
        "catalogs":[
            {
                "stock":"1",
                "price":"169",
                "isGroup":false,
                "id":"5aa66c24-c5a1-4650-8c78-0714fb601fb8"
            },
            {
                "stock":"2",
                "price":"299",
                "isGroup":true,
                "id":"TC000000270"
            }
        ]
    },
    {
        "name":"花王KAO乐而雅超薄1mm日用卫生巾片25cm*19片",
        "countryFlagUrl":"http://img.ymatou.com/app/flag/circle/Japan.png",
        "countryName":"日本",
        "picUrl":"http://pm2.img.ymatou.com/G02/upload/product/small/M02/77/4A/CgvUBVZGyreANMGOAANfSQBrWvc038_s.jpg",
        "catalogs":[
            {
                "stock":"1",
                "price":"45",
                "isGroup":false,
                "id":"253c03db-6903-465e-b0ef-397150e8b0a9"
            },
            {
                "stock":"3",
                "price":"87",
                "isGroup":true,
                "id":"TC000000181"
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

//包装活动list列表 支持不同回到函数
var moduleActivityList  = function(aid,pid,tplId,callback){
    var render = function(data) {
        var html = ejs.render(document.getElementById(tplId || 'active-tpl').innerHTML,data);
        $('[data-arguments="' + aid + ',' + pid +(tplId?','+tplId:'')+ '"]').parent().html(html);
        callback & callback();
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
                $('[data-arguments="' + aid + ',' + pid +(tplId?','+tplId:'')+ '"]').parent().remove();
            }
        });
    }
}


module.intPoint = function(aid, pid , tplId) {
    moduleActivityList(aid,pid,tplId,function(){
        initSwiper('.sf-swiper-intPoint');
    });
}

module.buyList = function(aid, pid , tplId) {
    moduleActivityList(aid,pid,tplId,function(){
        //initSwiper('.sf-swiper-buyDetail');
    console.log($('.sf-swiper-buyDetail'))
    var swiper = new Swiper('.sf-swiper-buyDetail', {
        pagination: '.sf-swiper-buyDetail .swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 5,
        onSlideChangeStart: function () {
            lazyLoad.check();
        }
    });
    
    });
}

function initSwiper(container){
    new Swiper(container, {
        pagination: container+' .swiper-pagination',
        loop: false,
        autoplay: 7000,
        onSlideChangeStart: function () {
            lazyLoad.check();
        }
    });
}

initSwiper('.sf-swiper-buyDetail');
})()