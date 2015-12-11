## 活动页
统一对evt进行源码管理

项目统一放置在app目录下，以活动名称为目录，只存放html。而其他的静态资源统一和html结构保持一致。以项目名称构建。

## 例如：
app
 |-/black_five
 	|-index.html
 |-scripts
 	|-black_five
 		|-index.js
 |-images
 	|-xxx.png
 |-styles
 	|-index.scss

## 开发
```javascript 
	gulp serve
```

## 发布
```javascript 
	gulp
```
