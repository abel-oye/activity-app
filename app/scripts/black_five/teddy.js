window.onload = function () {
    lazyLoad.init({
        throttle: 250,
        unload: false,
        offset: 250,
        callback: function() {

        }
    });

    var buyTeddy = document.getElementById('buy-teddy');
    buyTeddy.onclick = function () {
        YmtApi.open({
            url: 'http://item.app.ymatou.com/forYmatouApp/product/pid?pid=4b8ad7a2-8f39-4171-ad02-02227c7dc3e8',
            isNew: true,
            title: '全球好货',
            backFlag: true,
            showMore: true,
            backTitle: '特卖首页',
            backUrl: ''
        });
    }
}
