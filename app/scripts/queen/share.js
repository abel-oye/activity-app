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
        //显示日志
        showLog: function(msg, callback) {
            var errElm = $('.ymtui-toast');
            if (!errElm[0]) {
                errElm = $('<div class="ymtui-toast"></div>')
                    .appendTo('body');
            }
            errElm.html(msg).addClass('show');

            setTimeout(function() {
                errElm.removeClass('show');
                callback && callback();
            }, 2400);
        },

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
                    Utils.showLog('系统挤爆了，请稍后再试');
                }
            })
        }
    };

    var search = YmtApi.utils.getUrlObj(),
        accessToken = search.AccessToken,
        wishProductId = search.wishProductId;

    //获取心愿详情
    var wishDetail = function(accessToken, wishProductId) {
        Utils.reqJsonp('http://jsapi.pk.ymatou.com/api/Wish/GetWishDetail', function(res) {
            if (res.Data && res.Data.WishDetail) {
                if (res.Data.WishDetail.LikesList) {
                    for (var i = 0, len = res.Data.WishDetail.LikesList.length; i < len; i++) {
                        res.Data.WishDetail.LikesList[i].UserName = decodeURIComponent(res.Data.WishDetail.LikesList[i].UserName);
                    }
                }
                var tpl = $('#wishDetail-tpl').html();
                var html = ejs.render(tpl, res.Data);
                $('#wish-detail').html(html);
            }
        }, {
            accessToken: accessToken,
            wishProductId: wishProductId
        });
    }

    //加入心愿单
    var addWish = function(accessToken, wishProductId) {
        Utils.reqJsonp('http://jsapi.pk.ymatou.com/api/Wish/AddWish', function(res) {
            if (res.Code == 200) {
                // alert(5)
                YmtApi.openShare({
                    shareTitle: 'Go！Go！Dance Go!',
                    shareUrl: 'http://evt.ymatou.com/activity_5132_mapp?wishId=' + res.Data.WishId,
                    sharePicUrl: 'http://staticontent.ymatou.com/images/activity/queen/wish_icon.jpg',
                    shareContent: 'Dance Go!别难过，活动期间洋码头每天抽取10位用户获得价值2016元的免单机会，让你在这个特殊的日子，不在寂寞，不在空虚，不再冷！',
                    showWeiboBtn: 0
                });
            } else {
                Utils.showLog(res.Data.Message || '加入心愿单失败');
            }
        }, {
            accessToken: accessToken,
            wishProductId: wishProductId
        })
    }

    $(document).on('click', '.js-share', function() {
        addWish(accessToken, wishProductId);
    }).on('click', '.js-open-search', function() {
        var keyword = $(this).parents('.pro-wrap').attr('data-keyword');
        YmtApi.open({
            url: 'http://s.app.ymatou.com/search?keywords=' + keyword,
            title: keyword,
            isNew: true
        })
    });

    // var wishProductId = 'CD2002FA-5524-434B-AC45-81F7FC6054B9';

    wishDetail(accessToken, wishProductId);
    lazyLoad.init();
});
