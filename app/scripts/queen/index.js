/**
 * 心愿单活动页
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
            var errElm = $('.sg-error');
            if (!errElm[0]) {
                errElm = $('<div class="sg-error"></div>').appendTo('body');
            }
            errElm.html(msg).css('opacity', '1');

            setTimeout(function() {
                $('.sg-error').css('opacity', '0');
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

    var auth = YmtApi.utils.getAuthInfo(),
        accessToken = auth.AccessToken,
        deviceId = auth.DeviceId || auth.DeviceToken || '0000000';

    //获取心愿单列表
    var wishList = function () {
        Utils.reqJsonp('http://jsapi.pk.ymatou.com/api/Wish/GetWishProducts', function(res) {
            if (res.Data && res.Data.WishList[0]) {
                var tpl = $('#wish-list-tpl').html();
                var html = ejs.render(tpl, res.Data);
                $('#wish-list').html(html);
            }
        }, {
            accessToken: accessToken
        });
    }

    $(document).on('click', '.js-beg-care', function() {
        if (YmtApi.utils.hasLogin()) {
            var wishProductId = $(this).attr('data-wishProductId');
            YmtApi.open({
                url: 'http://evt.ymatou.com/activity_5131_mapp?wishProductId=' + wishProductId,
                isNew: true
            });
        } else {
            YmtApi.toLogin();
        }
    }).on('click', '.js-open-search', function() {
        var keyword = $(this).parents('.pro-wrap').attr('data-keyword');
        YmtApi.open({
            url: 'http://s.app.ymatou.com/search?keywords=' + keyword,
            title: keyword,
            isNew: true
        })
    });

    wishList();
    lazyLoad.init();
});
