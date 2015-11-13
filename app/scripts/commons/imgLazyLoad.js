/**
 * 图片懒加载
 */
+(function (root) {
	'use strict';

	var lazyLoad = {
        version:'1.0.2'
    };

	var callback = function () {};

	var offset, poll, throttle, unload;

    //使用requestAnimationFrame 替代 settimeout 来处理
    var raf = root.requestAnimationFrame || function(fn){
        clearTimeout(poll);
        poll = setTimeout(fn, throttle);
    }
	/**
	 * 判断元素是否在视口中
	 * @param  {element} element 图片对象
	 * @param  {object}  view 视图及页面显示部分
	 * @return {Boolean} 是否在视图中
	 */
	var inView = function (element, view) {
		var box = element.getBoundingClientRect();
		return box.top >= view.t && box.top < view.b && box.left >= view.l && box.left < view.r;
	};

	/**
	 * 判断元素是否显示中
	 * @param  {Element} element
	 * @return {boolea}  是否显示
	 */
	var isShow = function(element){
		return String.prototype.toLocaleLowerCase.apply(element.style.display) !== 'none'
	}

	var debounce = function () {
        raf(lazyLoad.render);
	};

	lazyLoad.init = function (opts) {
		opts = opts || {};
		var offsetAll = opts.offset || 0;
		var offsetVertical = opts.offsetVertical || offsetAll;
		var offsetHorizontal = opts.offsetHorizontal || offsetAll;
		var optionToInt = function (opt, fallback) {
			return parseInt(opt || fallback, 10);
		};
		offset = {
			t: optionToInt(opts.offsetTop, offsetVertical),
			b: optionToInt(opts.offsetBottom, offsetVertical),
			l: optionToInt(opts.offsetLeft, offsetHorizontal),
			r: optionToInt(opts.offsetRight, offsetHorizontal)
		};
		throttle = optionToInt(opts.throttle, 250);
		unload = !!opts.unload;
		callback = opts.callback || callback;
		lazyLoad.render();
		if (document.addEventListener) {
			root.addEventListener('scroll', debounce, false);
			root.addEventListener('touchstart', debounce, false);
			root.addEventListener('load', debounce, false);
		}
	};

	lazyLoad.render = function () {
		var nodes = (function(){
            var lazyLoad = [].slice.call(document.querySelectorAll('img[lazy-load]'),0),
                lazyLoadBackgroud = [].slice.call(document.querySelectorAll('[lazy-load-background]'),0);

            [].push.apply(lazyLoad,lazyLoadBackgroud);

            return lazyLoad ;
        })()

		var length = nodes.length;
		var src, elem;
		var view = {
			l: (root.pageXOffset || document.documentElement.scrollLeft) - offset.l,
			t: -offset.t,
			b: window.innerHeight + offset.b,
			r: (root.innerWidth || document.documentElement.clientWidth) + offset.r
		};

		var loadError = function (elem) {
            var errImg = 'data:image/gif;base64,R0lGODlhAQABAJEAAAAAAP///////wAAACH5BAEHAAIALAAAAAABAAEAAAICVAEAOw==';
            if( elem.getAttribute('lazy-load') ){
                elem.removeEventListener('error');
                elem.removeEventListener('load');
                elem.src = errImg;
            }else if(elem.getAttribute('lazy-load-background')){
                elem.style.backgroundImage = 'url(' + errImg + ')';
            }

            elem.className += ' lazyload-error ';
		};

        /**
         * 检测加载状态
         * @param  {Element}   elem     [description]
         * @param  {Function} sucFn [description]
         * @param  {Function} failFn [description]
         */
        var monitorLoad = function(elem,sucFn,failFn,targetElem){
            elem.addEventListener('load', function(){
                elem = targetElem || elem;

                sucFn(this,'load');
            } ,false);

            elem.addEventListener('error', failFn ,false);
        }

		for (var i = 0; i < length; i++) {
			elem = nodes[i];
			if (isShow(elem) && inView(elem, view)) {
				if (unload) {
					elem.setAttribute('lazy-load-placeholder', elem.src);
				}
				src = elem.getAttribute('lazy-load') || elem.getAttribute('lazy-load-background');

                elem.removeAttribute('lazy-load');
                elem.removeAttribute('lazy-load-background');
                elem.className += ' lazyload transition';
                elem.style.opacity = '1';

				var style = elem.getAttribute('style');

				if(elem.tagName === 'IMG'){

                   (function(elem){
                       monitorLoad(elem,function(){
                           callback(elem, 'load');
                       },function(){
                           loadError(elem);
                       });
                   })(elem);

                   elem.src = src;

                   /* //图片写在background-image时的做法
                    if (!style || style.indexOf('background') == -1) {
                        elem.src = src;
                    } else if (style && style.indexOf('background') != -1) {
                         elem.style.backgroundImage = 'url(' + src + ')';
                    }*/

                }else{
                    var img = new Image();
                    (function(elem,src){
                        monitorLoad(img,function(){
                            elem.style.backgroundImage = 'url(' + src + ')';
                            callback(elem, 'load');
                        },function(){
                            loadError(elem);
                        },elem);
                    })(elem,src);

                    img.src = src;
                }
			}
		}

		/*if (!length) {
			lazyLoad.detach();
		}*/
	};

    /**
     * 提供外部API可以手动检查
     */
    lazyLoad.check = debounce;

	lazyLoad.detach = function () {
		if (document.removeEventListener) {
			$(root).off('scroll')
				.off('touchstart');
		}
		/* else {
			root.detachEvent('onscroll', debounce);
		}*/
		clearTimeout(poll);
	};

	root.lazyLoad = lazyLoad;

})(this);
