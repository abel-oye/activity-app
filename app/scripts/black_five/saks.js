/* global ejs: true,YmtApi:true */

/**
 * 萨克斯百货
 * @author river
 * @email lijiang@ymaotu.com
 * @create-date 20151123
 */
;(function () {

    FastClick.attach(document.body);

    'use strict';

    var _pk_id = '1120';

    var productData = {
        '1':{
            Products: [{"ProductId":"3b130b7d-24a5-410c-8a0a-c1c4fa08e04b","Name":"【黑五日本折上折】三宅一生  baobao  6×6  白色  34cm*34cm    2015年款  EMS直邮","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M01/21/AF/CgvUBVZRmO6AN4mgAAC3Lf4BPMY067-lists_ls.jpg","Stock":58,"Price":1860.0,"MarketPrice":0.0,"SellerId":527583,"SellerName":"日本东京代购","SellerLogo":"http://p6.img.ymatou.com/G02/M0A/76/C5/CgvUA1Y3OVuAWlIwAABwt55WyOA582_m.jpg","CountryName":"日本","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Japan.png","SortIndex":1,"ProductType":1},{"ProductId":"95acd9ff-682b-43cd-ab96-f567ff28488b","Name":"【韩国黑五折上折~MCM】中号拼色 十字纹牛皮 双拉链 杀手包 可手提 可单肩哦。好实用的一款哦～ 中号这个价位可以买到 我也是醉了～ \n","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M04/E1/8A/CgvUBVZMO9OAGXeXAAEMSF_MwrY630-listb_lb.jpg","Stock":5,"Price":2600.0,"MarketPrice":0.0,"SellerId":362161,"SellerName":"jacking26","SellerLogo":"http://p7.img.ymatou.com/G02/M02/44/AE/CgvUA1Xv_B-ARbfRAABQOs98xAE611_m.jpg","CountryName":"韩国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Korea.png","SortIndex":2,"ProductType":1},{"ProductId":"8f62b65d-e912-41d9-87ad-28136c4b4728","Name":"【黑五日本折上折】三宅一生  黑色亮面10x10 baobao  39.5cm*39.5cm   喜欢的赶快下手吧   EMS直邮","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M06/21/B5/CgvUBVZRmXeAfqZ5AAB_GDymLhI812-listb_lb.jpg","Stock":50,"Price":2400.0,"MarketPrice":0.0,"SellerId":527583,"SellerName":"日本东京代购","SellerLogo":"http://p6.img.ymatou.com/G02/M0A/76/C5/CgvUA1Y3OVuAWlIwAABwt55WyOA582_m.jpg","CountryName":"日本","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Japan.png","SortIndex":3,"ProductType":1},{"ProductId":"e2dd6523-a9f8-4328-8c8e-044901e4903b","Name":"【韩国黑五折上折~Samantha thavasa】洋码头热品推荐款 尹恩惠代言、懂得亲都知道哦海报款这个价格真的是超值的~经常脱销的一款所以想要的尽快吧 全牛皮 手提单肩包 三色选","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M09/E2/12/CgvUA1ZMOyeAUA8vAADuet8BmJg690-lists_ls.jpg","Stock":7,"Price":1799.0,"MarketPrice":0.0,"SellerId":362161,"SellerName":"jacking26","SellerLogo":"http://p7.img.ymatou.com/G02/M02/44/AE/CgvUA1Xv_B-ARbfRAABQOs98xAE611_m.jpg","CountryName":"韩国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Korea.png","SortIndex":4,"ProductType":1},{"ProductId":"4b35bde1-b541-4255-ab42-253971d273df","Name":"【日本黑五折上折】Samantha 杂志新款贝壳流苏包 mini号H15 W24 D10.5Cm左右【2438元】；小号H21.5 W29 D13Cm左右【2638元】底部的皮革，上面羊皮 色号全都在图上 直邮包邮","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M01/C7/16/CgvUBVZLFzeARo7JAACJgaAF4qI645-lists_ls.jpg","Stock":98,"Price":2438.0,"MarketPrice":0.0,"SellerId":1197454,"SellerName":"stong","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/1197454_7cdd95ede3394383b7ac858bfa58e687_m.jpg","CountryName":"日本","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Japan.png","SortIndex":5,"ProductType":1},{"ProductId":"d1667614-aee5-4620-857f-01aaf779d715","Name":"【黑五日本折上折】TASAKI田崎akoya珍珠项链，18K金，链子周长42CM，延长链4.3CM，珠直径8MM，珍珠完美无瑕，闪耀度不是其他品牌能比拟的，作为锁骨链真是美翻了！","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M0B/37/B6/CgvUBVZUMzKAUjuOAABGCDiOYKw885-listb_lb.jpg","Stock":50,"Price":1860.0,"MarketPrice":0.0,"SellerId":566820,"SellerName":"佐藤宅急便","SellerLogo":"http://p8.img.ymatou.com/G01/M01/F3/81/CgrTBFXchbeAPVwnAACNnZjAJcY377_m.jpg","CountryName":"日本","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Japan.png","SortIndex":6,"ProductType":1},{"ProductId":"d4fd15f5-a49a-4edc-81a2-80fdbfa917fa","Name":"【黑五日本折上折】💕套装包直邮💕POLA第五代抗衰老套装：賦颜晨光化妆水120ml+乳液80ml  高机能化妆水 解决真皮层的糖化现象 直达真皮抗衰老 @国内专柜单品1999","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M0A/20/D7/CgvUA1ZRgb2AJsxxAAB4LjAAesM380-lists_ls.jpg","Stock":100,"Price":3998.0,"MarketPrice":0.0,"SellerId":574983,"SellerName":"日本寻宝的猪","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/574983_9a0d2cbdbcca41fdb8a9d54b515c2dec_m.jpg","CountryName":"日本","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Japan.png","SortIndex":7,"ProductType":1},{"ProductId":"5ac0d70e-19f4-4ca8-b373-1f5ee2f6abf1","Name":"【韩国黑五折上折】韩国原装最新LG除螨机，无线且轻便。它能清除你家床上、地毯、沙发上的蟎虫，好不好用一看就知道，韩国原装进口，直邮到府，有专柜发票哦！","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M08/2A/6E/CgvUBFZSqT-Ae5sFAACWMblp37o393-lists_ls.jpg","Stock":100,"Price":1650.0,"MarketPrice":0.0,"SellerId":1301713,"SellerName":"欢子01","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/1301713_152255785d3b402eaefcd5e260a2425b_m.jpg","CountryName":"韩国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Korea.png","SortIndex":8,"ProductType":1},{"ProductId":"22148fe5-0378-4471-b959-04215377dae2","Name":"【黑五折上折】三宅一生经典款紫红色六格，34*34cm，带子可调节长短。日本直邮拍下即发","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M02/20/C1/CgvUA1ZRgFWAW3RQAAEl8tO8Ef4888-listb_lb.jpg","Stock":2,"Price":2200.0,"MarketPrice":0.0,"SellerId":489183,"SellerName":"轩妈在大阪","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/489183_b26e0446c5ff41dfbee772342d5a2fca_m.jpg","CountryName":"日本","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Japan.png","SortIndex":9,"ProductType":1},{"ProductId":"8b03d0ae-893a-4be6-a518-e6d50042ba3d","Name":"【黑五日本折上折】【秒杀】日本直邮【samantha】日本的【香奈儿】米兰达同款米兰达代言哦 尺寸：H20 W38 D13。纯皮。原价2783元\n下单备注颜色 【付专柜小票","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M07/1F/C5/CgvUBFZRfpCAYmi_AACHvrePscw891-lists_ls.jpg","Stock":98,"Price":2753.0,"MarketPrice":0.0,"SellerId":3793523,"SellerName":"wangwangtokyosales","SellerLogo":"http://p10.img.ymatou.com/G01/M00/33/A8/CgrTAlXjXiGAf1y1AAA7cNGpsaQ057_m.jpg","CountryName":"日本","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Japan.png","SortIndex":10,"ProductType":1},{"ProductId":"c40d779b-9751-4fa0-a297-b3ceb42c753d","Name":"【黑五韩国专场】playnomore家的彩色大眼睛包包，好看又好背各种明星同款 。尺寸21.5*17.5*9 袋子长56-104","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M09/2B/5F/CgvUBVZSu-CAPbkZAADbHILTrkY238-listb_lb.jpg","Stock":96,"Price":1007.0,"MarketPrice":0.0,"SellerId":2209517,"SellerName":"郝亦非","SellerLogo":"http://p8.img.ymatou.com/G02/M00/A3/8B/CgvUBFZJbneAR-xfAABBjI5P6O0636_m.jpg","CountryName":"韩国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Korea.png","SortIndex":11,"ProductType":1},{"ProductId":"4b91dd63-b844-4a07-8212-a5a11506ab28","Name":"【黑五日本折上折】cpb手榴弹细胞精华可以唤醒肌肤沉睡的更生能力，令肌肤恢复最佳状态同时软化表层细胞，加强肌肤的吸收力，令成分深入肌肤底层发挥功效","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M09/20/EF/CgvUA1ZRgweAIcdoAACreA-mnTA863-lists_ls.jpg","Stock":9999,"Price":1399.0,"MarketPrice":0.0,"SellerId":483101,"SellerName":"王太在日本","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/483101_5afbe8807bc440db943370ec85e22f61_m.jpg","CountryName":"日本","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Japan.png","SortIndex":12,"ProductType":1},{"ProductId":"2769ad32-c072-4e5f-bf9c-97f51c01e7a0","Name":"【黑五日本折上折】【单件包日本直邮】日本ReFa CARAT瘦脸瘦身铂金滚轮美容仪.吸收太阳能产生微离子电流.3D设计360度多角度揉捏.想瘦哪里瘦哪里.厂家批量拿货有量才有价","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M00/20/00/CgvUBFZRgm-Ac1TCAAG6hvDv9O8854-lists_ls.jpg","Stock":70,"Price":1180.0,"MarketPrice":0.0,"SellerId":488160,"SellerName":"CC日本代购","SellerLogo":"http://p4.img.ymatou.com/upload/userlogo/middle/488160_c306bdb79ffc4833b2a91d1808af3c76_m.jpg","CountryName":"日本","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Japan.png","SortIndex":15,"ProductType":1},{"ProductId":"3aa5cb64-f081-44e3-a244-c69f740d660a","Name":"【韩国黑五折上折】whoo后再生密贴精华李英爱每天必用的产品平均2个月都会用掉一瓶，25岁开始皮肤就开始走下坡了细纹会慢慢的产生，及早用及预防！45ml+20ml","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M09/F1/3A/CgvUBFZNQPWALSZ-AAC_zXyfzW8774-listb_lb.jpg","Stock":80,"Price":888.0,"MarketPrice":0.0,"SellerId":5806593,"SellerName":"柚子在首尔","SellerLogo":"http://p9.img.ymatou.com/G02/M05/33/35/CgvUA1Yl6TWAYu69AAB7FcWITFY687_m.jpg","CountryName":"韩国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Korea.png","SortIndex":16,"ProductType":1},{"ProductId":"5bb18a8e-4f2b-4843-9556-fa9da86cfcea","Name":"【黒五折上折】【日本直邮】100%正品保证/曰本保湿美容好帮手！HITACHI CM—N3000一W/24.7×7.9×9.3cmx531g/溫泠W Head/皮肤水分增1.3倍！","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M09/9E/36/CgvUA1ZJHHaABtjqAAHKSs1q5co002-listb_lb.jpg","Stock":92,"Price":1560.0,"MarketPrice":0.0,"SellerId":1505251,"SellerName":"兄弟联日本代购","SellerLogo":"http://p6.img.ymatou.com/G02/M0B/78/5E/CgvUBFYGxpOAMOaSAARqARXY4-k574_m.jpg","CountryName":"日本","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Japan.png","SortIndex":17,"ProductType":1},{"ProductId":"253f49fa-c1b0-4fea-a265-83fc8a59d4dc","Name":"【黑五韩国专场】Asics 2015 秋冬最新款 KAYANO22，亚瑟士支撑稳定系列顶级跑鞋\n女款\nT598N-1087","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M01/2B/B5/CgvUA1ZSs96AdfXCAAC20KhRMaE964-lists_ls.jpg","Stock":50,"Price":888.0,"MarketPrice":0.0,"SellerId":6062321,"SellerName":"良品中渡_运动品牌店","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/6062321_363e7ed8dbea4ed387f609ffa4b5c4a6_m.jpg","CountryName":"韩国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Korea.png","SortIndex":18,"ProductType":1},{"ProductId":"2769ad32-c072-4e5f-bf9c-97f51c01e7a0","Name":"【黑五日本折上折】【单件包日本直邮】日本ReFa CARAT瘦脸瘦身铂金滚轮美容仪.吸收太阳能产生微离子电流.3D设计360度多角度揉捏.想瘦哪里瘦哪里.厂家批量拿货有量才有价","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M00/20/00/CgvUBFZRgm-Ac1TCAAG6hvDv9O8854-lists_ls.jpg","Stock":70,"Price":1180.0,"MarketPrice":0.0,"SellerId":488160,"SellerName":"CC日本代购","SellerLogo":"http://p4.img.ymatou.com/upload/userlogo/middle/488160_c306bdb79ffc4833b2a91d1808af3c76_m.jpg","CountryName":"日本","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Japan.png","SortIndex":19,"ProductType":1},{"ProductId":"46bdbb0c-d63a-4785-a855-c3e43421c864","Name":"【韩国黑五折上折】WHOO后津率享贵妇级专享套盒，调理女人因气血失调造成的皮肤粗糙暗黄松弛失去光泽，回复美白细腻，紧致水润的皮肤状态，25岁到40岁左右佳品！","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M05/C9/EF/CgvUBVZLNwiALJCqAADLZ5I5bVE208-listb_lb.jpg","Stock":74,"Price":888.0,"MarketPrice":0.0,"SellerId":5806593,"SellerName":"柚子在首尔","SellerLogo":"http://p9.img.ymatou.com/G02/M05/33/35/CgvUA1Yl6TWAYu69AAB7FcWITFY687_m.jpg","CountryName":"韩国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Korea.png","SortIndex":20,"ProductType":1},{"ProductId":"d1667614-aee5-4620-857f-01aaf779d715","Name":"【黑五日本折上折】TASAKI田崎akoya珍珠项链，18K金，链子周长42CM，延长链4.3CM，珠直径8MM，珍珠完美无瑕，闪耀度不是其他品牌能比拟的，作为锁骨链真是美翻了！","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M0B/37/B6/CgvUBVZUMzKAUjuOAABGCDiOYKw885-listb_lb.jpg","Stock":50,"Price":1860.0,"MarketPrice":0.0,"SellerId":566820,"SellerName":"佐藤宅急便","SellerLogo":"http://p8.img.ymatou.com/G01/M01/F3/81/CgrTBFXchbeAPVwnAACNnZjAJcY377_m.jpg","CountryName":"日本","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Japan.png","SortIndex":21,"ProductType":1},{"ProductId":"80819a2c-f8d9-4e0a-960f-a56e2699d428","Name":"陆心媛流苏可爱斜挎包，创意女画家自创品牌，七个卡通人物的故事。下单请备注","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M0B/2A/E2/CgvUBVZSrhCAFiWLAACAMTwJc6Q197-lists_ls.jpg","Stock":22,"Price":1229.0,"MarketPrice":0.0,"SellerId":5524656,"SellerName":"KOREAno1","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/5524656_23e66fc15b45467f868841a02c2c7dd4_m.jpg","CountryName":"韩国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Korea.png","SortIndex":22,"ProductType":1},{"ProductId":"02571aef-4d33-4771-b994-090c5e12772b","Name":" 【Cpb圣诞彩妆限量版】限定色都是说没就没了  CPB肌肤之钥即将于11月21日限定发售2015年圣诞假面舞会限定眼影套装。套装内容：1.眼影盘 2.睫毛膏 3.唇膏 直邮包邮1080","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M01/C5/9F/CgvUBFZLDFKAGgbIAABW06XGzQU446-lists_ls.jpg","Stock":99,"Price":1080.0,"MarketPrice":0.0,"SellerId":1197454,"SellerName":"stong","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/1197454_7cdd95ede3394383b7ac858bfa58e687_m.jpg","CountryName":"日本","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Japan.png","SortIndex":23,"ProductType":1},{"ProductId":"3f7f53d4-461e-47c6-b541-85a3e9dcc039","Name":"【韩国黑五折上折】whoo/后拱辰享 雪 美白水分水乳三件套盒淡斑保湿提亮肤色","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M08/F1/91/CgvUBVZNQeiAG2gwAABt27ki5I8641-listb_lb.jpg","Stock":199,"Price":888.0,"MarketPrice":0.0,"SellerId":2196682,"SellerName":"korea_折扣","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/2196682_802ac9546dce4897bf4159efded3498f_m.JPG","CountryName":"韩国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Korea.png","SortIndex":24,"ProductType":1},{"ProductId":"a4ea09e9-e20a-444c-9625-a73687c1f48c","Name":"韩国LINE-kenneth lady 冬天外套，深蓝色，含毛90%，狐狸毛，55/66两个码，胸围85/88，国内160/165差不多噢","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M03/11/9B/CgvUBVZPu1GATNjPAABlD6a0JtI709-lists_ls.jpg","Stock":3,"Price":888.0,"MarketPrice":0.0,"SellerId":1195143,"SellerName":"oppa333","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/1195143_4cdbaeb788aa4be793c7087f037c9644_m.jpg","CountryName":"韩国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Korea.png","SortIndex":25,"ProductType":1},{"ProductId":"af167ec2-fcc7-478a-829f-00d102c2c042","Name":"【黑五日本折上折】畅销榜永远第一日本Panasonic 松下EH-NA56（老款）/EH-NA57（9月新款）纳米负离子吹风机 通用电压注意需要拨到220V DZ0115","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M08/1F/43/CgvUA1ZRZiOATpTsAAF2GopBmG4105-lists_ls.jpg","Stock":44,"Price":1099.0,"MarketPrice":0.0,"SellerId":563971,"SellerName":"东京彩虹桥","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/563971_4dd14f3c31b943c59757e900f6c5cd68_m.jpg","CountryName":"日本","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Japan.png","SortIndex":26,"ProductType":1},{"ProductId":"df19cf15-8858-483c-a25f-5207dc6e3fea","Name":"【韩国黑五专场】MCM【本款裸价】韩国人几乎每人都胸前挂着着这种哦。交通卡 最常用的银行卡工作证都挂在脖子里吧 使用时方便，再也不用到处找卡了","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M07/2A/ED/CgvUBVZSr1GAcO-DAAEof-53gAE070-lists_ls.jpg","Stock":20,"Price":888.0,"MarketPrice":0.0,"SellerId":5524656,"SellerName":"KOREAno1","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/5524656_23e66fc15b45467f868841a02c2c7dd4_m.jpg","CountryName":"韩国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Korea.png","SortIndex":27,"ProductType":1},{"ProductId":"f197782b-1c60-4b28-a450-c5b158203ecd","Name":"【黒五折上折】【日本直邮】MTG白金电子按摩棒ReFa CARAT RF—FC1932B/超想像体感300万人愛用新产品/全身，防水，W构造太阳能光产生微电流。100%正品保证。","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M0A/9D/89/CgvUBVZJG0yAPx1KAAImgW_GDmc480-listb_lb.jpg","Stock":38,"Price":1730.0,"MarketPrice":0.0,"SellerId":1505251,"SellerName":"兄弟联日本代购","SellerLogo":"http://p6.img.ymatou.com/G02/M0B/78/5E/CgvUBFYGxpOAMOaSAARqARXY4-k574_m.jpg","CountryName":"日本","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Japan.png","SortIndex":28,"ProductType":1},{"ProductId":"c9c4c452-a7a9-4e0a-98c0-68a9edf34f9e","Name":"【黒五折上折】【直邮】Canon CP910小型照片打印機/粉色,白色选/Wi—Fi,照片尺寸mm(89×119,100×148,54×86,22×17.3)/照相機,手禨Wi—Fi打印/SD CAR,USB对应/100～240V","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M03/01/29/CgvUBVZN-ZSAa6KPAAHur6vsAK4409-lists_ls.jpg","Stock":89,"Price":1080.0,"MarketPrice":0.0,"SellerId":1505251,"SellerName":"兄弟联日本代购","SellerLogo":"http://p6.img.ymatou.com/G02/M0B/78/5E/CgvUBFYGxpOAMOaSAARqARXY4-k574_m.jpg","CountryName":"日本","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Japan.png","SortIndex":29,"ProductType":1}]
        }
    }

    //初始化ejs
    ejs.open = '{{';
    ejs.close = '}}';

    ejs.filters.pirceRegion = function (price) {
        if (!price) {
            return price;
        }
        var num = ((+price || 0).toFixed(2) + '').split('.');
        return '<strong>' + num[0] + '</strong>' + (num[1] ? '.' + num[1] : '');
    };

    ejs.filters.convertImgUrl = function (str) {
        return str.replace(/\/original\//, '/small/').replace(/_o/, '_s').replace(/_ls/, '_lb');
    }

    var isFuntion = function (str) {
        return 'function' === typeof str;
    };

    var toastStatus = true;

    /**
     * 显示日志
     */
    var showLog = function (msg, callback) {
        if (toastStatus) {
            toastStatus = false;
            var errElm = $('.ymtui-toast');
            if (!errElm[0]) {
                errElm = $('<div class="ymtui-toast"></div>')
                    .appendTo('body');
            }
            errElm.html(msg).addClass('show');

            setTimeout(function () {
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
     * @param  {String}   callbackName   [description]
     * @return {[type]}            [description]
     */
    var jsonpGetData = function (url, callback, callbackName) {
        /*if(fnName){
            if(!(typeof window[fnName] === 'function')){
                window[fnName] = function(data){
                    callback && callback(data);
                    delete window[fnName];
                }
            }
        }*/
        var cbFn = {};

        if (typeof callback === 'function') {
            cbFn.success = callback;
        }

        if (typeof callback === 'object') {
            cbFn = callback;
        }

        cbFn.error = cbFn.error || function (res) {
            showLog(res.Msg);
        }

        $.ajax({
            url: url,
            type: 'GET',
            jsonpCallback: callbackName,
            dataType: 'jsonp',
            timeout: 30000, //1分钟过期
            cache: true,
            success: function (res) {
                if (res && (res.Code === 200 || res.Code === '200')) {
                    isFuntion(cbFn.success) && cbFn.success(res.Data);
                }
                else {
                    isFuntion(cbFn.error) && cbFn.error(res);
                }
            },
            error: function () {
                showLog('系统挤爆了，请稍后再试!');
            }
        });
    };

    var search = YmtApi.utils.getUrlObj(),
        authInfo = function () {
            return YmtApi.utils.getAuthInfo()
        };

    var dataStatus,
        dataOver = false;
    var getProduct = function (pageIndex, pageSize, areaCode) {
        dataStatus = false;
        jsonpGetData('http://jsapi.bf.ymatou.com/api/Friday/ExplosionAreaIndex?PageIndex=' + pageIndex + '&PageSize=' + pageSize + '&AreaCode=' + areaCode, function (data) {
            if (data.Products && data.Products[0]) {
                dataStatus = true;
                var html = ejs.render($('#active-tpl').html(), data);
                $('#bf-prolist').append(html);
            } else {
                dataOver = true;
                $('#load-over').show();
            }

        });
    };

    $(document).on('click', '.J-open', function () {
            var $this = $(this);

            YmtApi.open({
                url: $this.attr('data-url'),
                title: $this.attr('data-title'),
                isNew: true,
            });
        }).on('click', '.J-open-C-Product', function () {
            var url = "",
                $this = $(this),
                productId = $this.attr('data-productId'),
                sellerId = $this.attr('data-sellerId'),
                logo = $this.attr('data-logo'),
                seller = $this.attr('data-seller');

            //判断是否扫货app 跳转相应的页面
            if (YmtApi.isSaohuoApp) {
                url = YmtApi.utils.addParam('/forBuyerApp/productDetail', {
                    param: JSON.stringify({
                        SellerModel: {
                            Logo: logo,
                            Seller: seller,
                            SellerId: sellerId

                        },
                        ProductModel: {
                            ProductId: productId
                        }
                    })
                });
            }
            else {
                url = 'http://sq.ymatou.com/product/' + productId;
            }
            YmtApi.open({
                title: '全球好货',
                url: url
            });
        });

    lazyLoad.init({
        offset: 200,
        throttle: 250,
        callback: function () {
        }
    });

    var pageIndex = 1,
        pageSize = 10,
        areaCode = 1;
    getProduct(pageIndex, pageSize, areaCode);

    var $window = $(window),
        $proList = $('#bf-prolist');
    $window.on('scroll toumove', function() {
        if (!dataStatus || dataOver) {
            return;
        }

        if ($window.scrollTop() + $window.height() + 200 > $proList.height() + $proList.offset().top) {
            getProduct(++pageIndex, pageSize, areaCode);
        }
    });
})();
