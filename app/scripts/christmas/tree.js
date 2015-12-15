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
	var toastStatus = true;

	/**
	 * 显示日志
	 */
	var showLog = function(msg, callback) {
		if (toastStatus) {
			toastStatus = false;
			var errElm = $('.ymtui-toast');
			if (!errElm[0]) {
				errElm = $('<div class="ymtui-toast"></div>')
					.appendTo('body');
			}
			errElm.html(msg).addClass('show');

			setTimeout(function() {
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
					showLog(res.Msg || '操作错误.');
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
		],
		SPEED_LIST = [
			1,
			0.9,
			1.1,
			1.2
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
			var rqf = function() {
				return requestAnimationFrame || function(fn) {
					setTimeout(fn, 300);
				}
			}
			var run = function() {
				this.flight();
				requestAnimationFrame(run.bind(this))
			}
			requestAnimationFrame(run.bind(this))

			this.shot();

			var opts = this.opts,
				len = Math.min(opts.bulletList.length,this.opts.battleRow);

			for (var i = 0; i < len; i++) {
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
				},
				getSpeed = function() {
					return SPEED_LIST[getRandom(4)];
				};
			//当前小于最大显示数才追加子弹
			if (this.runBattles <= opts.battleRow) {
				this.runBattles++;

				runBattles = runBattles || this.runBattles;

				this.rowMap[runBattles] = Math.min(this.rowMap[runBattles] + 1 || 1, opts.battleCell);

				var next = opts.bulletList.shift(),
					$next = $('<span class="bullet" data-bulletrow="' + runBattles + '" data-speed="' + getSpeed() + '">' + next + '</span>');
				$next.css({
					top: runBattles * opts.distance,
					left: $(window).width(),
					color: getColor(),
					opacity: getOpacity(),
					fontSize: getFontSize()
				});
				opts.bulletList.push(next);
				this.container.append($next);

				//this.shot();
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
			this.container.find('.bullet').each(function() {
				var $this = $(this),
					opts = that.opts,
					left = $this.offset().left - opts.speed * ($this.attr('data-speed') || 1),
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
		//暂停子弹飞
		pause: function() {
			this.pauseStatus = true;
		},
		//切换暂停状态
		swithPause: function() {
			this.pauseStatus = !this.pauseStatus;
		}
	}

	var jsApiHost = 'http://172.16.2.97:8001/';
	var jsApiHost = 'http://jsapi.pk.ymatou.com/';

	var bfield;
	//获得首页活动数据
	jsonpGetData(YmtApi.utils.addParam(jsApiHost + 'api/Christmas/ChristmasGift', {
		AccessToken: YmtApi.utils.getAuthInfo().AccessToken,
		wishUserId: search.wishUserId
	}), function(data) {
		console.log(data)
		if(data.WishContents && data.WishContents.length){
			//初始化弹幕
			bfield = new Battlefield({
				container: '#battlefield',
				speed: 1,
				battleRow: 5,
				distance: 40,
				battleCell: 2,
				bulletList: data.WishContents
			});

		}
		
		var wishHtml='';

		//判断是否存在许愿信息
		if (data.HasWish) {
			wishHtml= '<div class="wish">共'+data.WishCount+'人许下愿望</div>'
			/*data.WishDetail = {
				WishName:'lunchzhao',
				WishTreeId:'',
				WishContent:'希望明年可以拥有二十只狗五只猫死三栋洋房',
				LikesList:[
					{
						UserName:'布拉大王',
						LogoUrl:'http://pc4.img.ymatou.com/G02/shangou/M06/03/03/CgvUA1ZmckOAPWpqAAFXzIhADMk199-listb_lb.jpg',
						CreateDate:'2015-12-01 12:12:12'
					},
					{
						UserName:'布拉大王',
						LogoUrl:'http://pc4.img.ymatou.com/G02/shangou/M06/03/03/CgvUA1ZmckOAPWpqAAFXzIhADMk199-listb_lb.jpg',
						CreateDate:'2015-12-01 12:12:12'
					},
				]
			}*/
			if (data.WishDetail) {
				data.WishDetail.IsSelf = data.IsSelf;
				$('.tree-kind').addClass('tree-kinds-' + (data.WishDetail.WishTreeId || 1));
				var html = ejs.render($('#wish-tpl').html(), data.WishDetail);
				$('wish').html(html);
			}
		} else {
			$('.tree-kind').addClass('tree-kinds-1');
			wishHtml= '<div class="wish J-open" onclick=";" data-url="http://evt.ymatou.com/activity_16076_Mapp?title=圣诞许愿">许下我的圣诞愿望</div><div class="wish-txt">共'+data.WishCount+'人许下愿望</div>'
		}
		$('.tree-wrapper').append(wishHtml)
	});

	var openDialog = function (data) {
        var html = ejs.render($('#dialog-tpl').html(), data);
        $('#christmas-dialog').html(html).addClass('open');
        $('.ymtui-dialog-mask').addClass('open');
    }

	//抽奖
	var joinLottery = function() {
		if (!YmtApi.isWechat) {
			if (YmtApi.utils.hasLogin()) {
				jsonpGetData(YmtApi.utils.addParam(jsApiHost + 'api/Christmas/JoinLottery', {
					AccessToken: YmtApi.utils.getAuthInfo().AccessToken,
					DeviceId: search.DeviceId || search.DeviceToken || '111'
				}), function(data) {
					openDialog(data);
				});
			} else {
				YmtApi.toLogin();
			}
		} else {

		}


	}

	$('.J-close-bf').click(function(){
		bfield.swithPause();
		$('#battlefield').toggleClass('close');

		var $this = $(this);

		$this.text($this.text() === '关闭弹幕' ? '打开弹幕' : '关闭弹幕');
	});

	$('.J-toLike').click(function(){
		if (YmtApi.utils.hasLogin()) {
			jsonpGetData(YmtApi.utils.addParam(jsApiHost + 'api/Christmas/WishLikes', {
				AccessToken: YmtApi.utils.getAuthInfo().AccessToken,
				WishId: $(this).attr('data-wishId')
			}), function(data) {
				if (data.HasSuccess) {
					window.location.reload();
				} else {
					showLog('哈尼，您已经给他点过赞啦！')
				}
			});
		} else {
			YmtApi.toLogin();
		}
	});

	//抽奖
	$('.J-joinLottery').click(joinLottery);

	//关闭弹层
	$(document).on('click','.J-close-dialog',function(){
		$('#christmas-dialog').removeClass('open');
		$('.ymtui-dialog-mask').removeClass('open');
	}).on('click','.J-add-joinLottery',function() {
		console.log(this)
		jsonpGetData(YmtApi.utils.addParam(jsApiHost + 'api/Christmas/LotteryShare', {
			AccessToken: YmtApi.utils.getAuthInfo().AccessToken
		}),function(){

		});
	});


	$(document).on('click', '.J-share', function() { //分享
		var $this = $(this),
			url = $this.attr('data-share-url') || YmtApi.utils.addParam(window.location.href,{
				wishUserId:YmtApi.utils.getAuthInfo.UserId
			}),
			content = $this.attr('data-share-content'),
			title = $this.attr('data-share-title'),
			pic = $this.attr('data-share-pic');

		YmtApi.openShare({
			shareTitle: title,
			shareUrl: url,
			sharePicUrl: pic,
			shareContent: content,
			showWeiboBtn: 1
		});
	}).on('click', '.J-open', function() {
		var $this = $(this);

		YmtApi.open({
			url: $this.attr('data-url'),
			title: $this.attr('data-title'),
			isNew: true,
		});
	})



	///172.16.2.97:8001
})();