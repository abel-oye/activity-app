/* global ejs: true,YmtApi:true */

/**
 * 圣诞树
 * @author river
 * @email lijiang@ymaotu.com
 * @create-date 2015/12/04
 */
;
(function() {
	'use strict';

	//初始化ejs
	ejs.open = '{{';
	ejs.close = '}}';

	var isFuntion = function(str) {
		return 'function' === typeof str;
	};

	var search = YmtApi.utils.getUrlObj(),
		authInfo = YmtApi.utils.getAuthInfo();
	var showLogStatus = true;

	/**
	 * 显示日志
	 */
	var showLog = function(msg, callback) {
		if (showLogStatus) {
			showLogStatus = false;
			var errElm = $('.pk-error');
			if (!errElm[0]) {
				errElm = $('<div class="pk-error"></div>')
					.appendTo('body');
			}
			errElm.html(msg).css('opacity', '1');

			setTimeout(function() {
				$('.pk-error').css('opacity', '0');
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
	var jsonpGetData = function(url, callback) {
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
			success: function(res) {
				if (res && (res.Code === 200 || res.Code === '200')) {
					isFuntion(callback) && callback(res.Data);
				} else {
					//showLog(res.Msg || '操作错误.');
				}
			},
			error: function() {
				showLog('操作错误.');
			}
		});
	};

	//获得首页数据
	var getRandom = function(size) {
		return Math.floor(Math.random() * size)
	}

	var OPACITY_LIST = [ //不透明度
			1,
			0.92,
			0.9,
			0.88
		],
		COLOR_LIST = [
			'#ff7800',
			'#fff',
			'#e74448',
			'#caa8a6'
		],
		FONT_LIST = [
			30,
			28,
			24,
			20
		];

	var bulletList = [
		'我是弹幕我是弹幕1',
		'我是弹幕弹幕2',
		'我是弹幕我是幕3',
		'我是弹幕幕4',
		'我是弹幕5',
		'我是弹幕我77777幕6',
	]


	console.log(getRandom(10));

	/**
	 * opts {object}
	 *	container //容器
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
			//this.timer = setInterval(this.flight.bind(this),50);
			var run = function() {
				this.flight();
				requestAnimationFrame(run.bind(this))
			}
			requestAnimationFrame(run.bind(this))

			this.shot();

			for (var i = 0; i < this.opts.battleRow; i++) {
				setTimeout(this.shot.bind(this), getRandom(3842));
			}

		},
		/**
		 *
		 *
		 */
		shot: function(runBattles) {
			var opts = this.opts,
				getColor = function() {
					return COLOR_LIST[getRandom(4)]
				},
				getOpacity = function() {
					return OPACITY_LIST[getRandom(4)]
				},
				getFontSize = function() {
					return 1 / 32 * FONT_LIST[getRandom(4)] + 'rem'
				};
			//当前小于最大显示数才追加子弹
			if (this.runBattles <= opts.battleRow) {
				this.runBattles++;

				runBattles = runBattles || this.runBattles;

				this.rowMap[runBattles] = Math.min(this.rowMap[runBattles] + 1 || 1, opts.battleCell);

				var next = bulletList.shift(),
					$next = $('<span class="bullet" data-bulletrow="' + runBattles + '">' + next + '</span>');
				$next.css({
					top: runBattles * opts.distance,
					left: $(window).width(),
					color: getColor(),
					opacity: getOpacity(),
					fontSize: getFontSize()
				});
				bulletList.push(next);
				this.container.append($next);

				//this.shot();
			}
		},
		/**
		 * @return {[type]}
		 */
		flight: function() {
			var that = this,
				opts = this.opts;
			this.container.find('.bullet').each(function() {
				var $this = $(this),
					opts = that.opts,
					left = $this.offset().left - opts.speed,
					dataBulletrow = $this.attr('data-bulletrow');

				$this.css({
					left: left
				});

				if (left < -$this.width()) {
					$this.remove();
					that.runBattles--;
					that.shot($this.attr('data-bulletrow'));
				}
				/*else if(left < $(window).width()/opts.battleCell 
									&& that.rowMap[dataBulletrow] < opts.battleCell){
									that.runBattles--;
									that.shot(dataBulletrow);
									console.log(dataBulletrow)
								}*/
			});
		},
	}

	new Battlefield({
		container: '#battlefield',
		speed: 1,
		battleRow: 5,
		distance: 40,
		battleCell: 2
	});

	///172.16.2.97:8001
})();