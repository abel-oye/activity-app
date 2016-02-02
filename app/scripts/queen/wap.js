/**
 * 心愿单分享页
 * @author zhangzongzheng
 * @email zhangzongzheng@ymatou.com
 */

$(function() {
    FastClick.attach(document.body);
    //初始化ejs
    ejs.open = '{%';
    ejs.close = '%}';

    var Utils = {
        reqJsonp: function(url, callback, params) {
            $.ajax({
                url: url,
                data: params,
                type: 'GET',
                timeout: 30000,
                dataType: 'jsonp',
                success: function(res) {
                    callback(res);
                },
                error: function() {
                    console.log('系统挤爆了，请稍后再试');
                }
            })
        }
    };

    YmtApi.isWechat && YmtApi.initWechat({
        shareConf:{
            title:'Go！Go！Dance Go!',
            desc:'Dance Go!别难过，活动期间洋码头每天抽取10位用户获得价值2016元的免单机会，让你在这个特殊的日子，不在寂寞，不在空虚，不再冷！',
            imgUrl:'http://staticontent.ymatou.com/images/activity/queen/wish_icon.jpg'
        }
    });

    var search = YmtApi.utils.getUrlObj(),
        wishId = search.wishId,
        unionId = search.unionId || '';

    //微信获取心愿详情
    var wishDetail = function (wishId, unionId) {
        Utils.reqJsonp('http://jsapi.pk.ymatou.com/api/Wish/GetWishDetailByWX', function(res) {
            if (res.Data && res.Data.WishDetail) {
                var tpl = $('#wishDetail-tpl').html();
                var html = ejs.render(tpl, res.Data);
                $('#wish-detail').html(html);
            }
        }, {
            wishId: wishId,
            unionId: unionId
        });
    }

    //微信加入心愿单
    var addWish = function () {
        var redirectUrl = encodeURIComponent(window.location.href),
            callbackUrl = encodeURIComponent('http://jsapi.pk.ymatou.com/api/Wish/AddLikes?wishId=' + wishId);
        window.location.href = 'http://login.ymatou.com/AuthorizeAndGetWeChatCodeForGetUnionId?redirectUrl=' + redirectUrl + '&callBackUrl=' + callbackUrl ;
    }

    $(document).on('click', '.js-share', function() {
        if (!$(this).hasClass('has-care')) {
            addWish();
            $(this).addClass('has-care');
        }
    });

    wishDetail(wishId, unionId);
    lazyLoad.init();
});
