(function (window, undefined) {
	var tabSetting = [{
		aid: '',
		name: '鞋包服饰',
		child: [{
			pid: '',
			name: '男鞋'
		}, {
			pid: '',
			name: '女鞋'
		}, {
			pid: '',
			name: '运动鞋'
		}, {
			pid: '',
			name: '服饰配件'
		}, {
			pid: '',
			name: '奢侈箱包'
		}]
	}, {
		aid: '',
		name: '美妆个护',
		child: [{
			pid: '',
			name: 'aa'
		}, {
			pid: '',
			name: 'bb'
		}, {
			pid: '',
			name: 'cc'
		}, {
			pid: '',
			name: 'dd'
		}, {
			pid: '',
			name: 'ee'
		}]
	}];

	//tableList  subTableList

	var Mhot = {
		initTab: function () {
			var i, tab, subList;
			for (i = 0; i < tabSetting.length; i++) {
				tab = tabSetting[i];
				$('#tabList').append('<li class="item"><a src="javascript:;">' + tab.name + '</a></li>');
				var tempFn = doT.template($('#templ_subTab').html());
				subList = tab.child;
				$('#subTab').append(tempFn({
					subList: subList
				}));
			}
		},

		init: function () {
			this.initTab();
		}

	}

	Mhot.init();


})(window);