# 活动页
对于活动页的开发，我们应该遵守低耦合高复用，活动页开发和后期修改频次比较高，重复比较高。开发组件过于复杂不便于修改。

针对活动页开发原则：尽可能是90%页面和样式、10%脚本。活动页主要以多样性，交互和功能基本单一。common.js 就针对这一原则
做了包装，同时页加入了Ymtapi。一并解决不同端显示和交互问题。

大部分活动页开发，以参数定义，类名区分的方式。

比如打开页面
```
	<div class="J-open" data-url="http://www.ymatou.com"></div>
```

### 模块
	在整个活动改版之后，很大部分功能和性能优化都依赖lazyload这个模块。

* #### 图片加载
	
 		图片加载支持img和background
      <img lazy-load="">
      <div lazy-load-background=""></div>
     

* #### 模块加载
	模块加载原理：
    
		依赖图片加载模块，当模块区域触发加载，加载一张base64空图片，触发load事件执行模块加载。
      
   采用统一的模块加载类名 J-module-Hold data-module 为调用的方法名称，data-arguments为参数名称支持多参数使用逗号区分。
        
	内置模块加载支持C端、M端商品，调用方式：
		class="J-module-Hold"
		data-module="activityList"
		data-arguments="0,1" // 参数aid也就是第一个参数为0，会加载静态json对象，非0参数会采用活动脚本加载规则加载数据。

	```
	 <div class="J-module-Hold module-hold" data-sub-module-name="qcbk" data-module="activityList" data-arguments="0,1"
	                  lazy-load-background="http://staticontent.ymatou.com/images/activity/placeholder@300x300.png"></div>
	```
	```
	 <div class="J-module-Hold module-hold" data-sub-module-name="qcbk" data-module="activityList" data-arguments="4800,1"
	                  lazy-load-background="http://staticontent.ymatou.com/images/activity/placeholder@300x300.png"></div>
	```   


* #### 图片队列

### 功能

