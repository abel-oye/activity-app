/* global ejs: true,YmtApi:true */

/**
 * 美国馆
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
            Products: [{"ProductId":"9d36e07a-a2d7-4d48-a23a-061218a4dfae","Name":"Air Jordan 8 Chrome 刚出的哦 8代虽然不热门 但是上脚很好看 低调华丽 36到40码全 只包邮不包税哦 ","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M0A/CC/CC/CgvUBVZ47e6AWmTCAABmRXXvrmw387-lists_ls.jpg","Stock":50,"Price":1279.0,"MarketPrice":0.0,"SellerId":2756207,"SellerName":"咖喱潮牌","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/2756207_3da77760d97f44db829598244cc24b0d_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":1,"ProductType":1},{"ProductId":"beb8e501-b546-4cc3-bd22-d50d8a7cd29f","Name":"【圣诞大放“价”】重磅来袭Air Jordan 11 GS 大魔王女款！！！最酷的时刻就是穿上这双鞋的时刻！全场焦点非你莫属！！36-40码全有！！","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M05/BA/81/CgvUBFZ2ojKAAe5eAAB-d0zTAKk755-lists_ls.jpg","Stock":10,"Price":1599.0,"MarketPrice":0.0,"SellerId":1826871,"SellerName":"小郎美国代购","SellerLogo":"http://p6.img.ymatou.com/G02/M05/1A/F3/CgvUBFYkZMWAWNXmAABKUusAAlU994_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":2,"ProductType":1},{"ProductId":"0b0d0513-2abf-4e65-80ea-0b6e698e6f5b","Name":"coach纯皮十字纹小号杀手包～新颜色上架了～","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M09/C9/DE/CgvUA1Z4luCAf696AACEHNCjcB8726-lists_ls.jpg","Stock":5,"Price":1200.0,"MarketPrice":0.0,"SellerId":459249,"SellerName":"yu8750","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/459249_3ac32038f6054b45bc9aee68317dff54_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":3,"ProductType":1},{"ProductId":"0a92e47e-2178-45f2-9b17-c1f9bc178efc","Name":"美国直邮coach大号波士顿包～可以手提斜挎～28*14cm","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M08/C9/48/CgvUBFZ4n66ARiehAAC-cjyPGr0712-lists_ls.jpg","Stock":5,"Price":1370.0,"MarketPrice":0.0,"SellerId":459249,"SellerName":"yu8750","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/459249_3ac32038f6054b45bc9aee68317dff54_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":4,"ProductType":1},{"ProductId":"29e00378-caa1-4d09-b535-478f0d404297","Name":"特价秒杀！coach 男是纯皮多功能斜挎手提包！款式超赞！喜欢得快点下单！！尺寸40  38  9  ","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M05/C0/03/CgvUA1Z3fTmAMo-yAAD9RJRapUA174-lists_ls.jpg","Stock":6,"Price":1498.0,"MarketPrice":0.0,"SellerId":432730,"SellerName":"华美代购","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/432730_23bbab0c422e4f2faa967103d9465ee0_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":5,"ProductType":1},{"ProductId":"33a8ae2b-e5b1-45ed-8f6d-e577f1d49de5","Name":"超低秒杀价！coach 男士单肩包！经典印花logo设计！pvc拼皮更显时尚和高端！24 29  7喜欢的速度下单吧！","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M01/CD/F9/CgvUA1Z4-QqAXG2iAADcHiXSZ9k840-lists_ls.jpg","Stock":8,"Price":1218.0,"MarketPrice":0.0,"SellerId":432730,"SellerName":"华美代购","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/432730_23bbab0c422e4f2faa967103d9465ee0_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":6,"ProductType":1},{"ProductId":"2ca6e342-3474-48bc-a867-005b20000fa2","Name":"Coach 经典Swagger 中号27 的哦 金属质感金属 手机实在拍不出他的美 参考官网图片 小号国内都有3950 这里是中号 折扣超低聚划算 优惠券立减125","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M07/BA/81/CgvUBVZ2mJqACjSrAADPGIkqRx0011-lists_ls.jpg","Stock":10,"Price":2600.0,"MarketPrice":0.0,"SellerId":535089,"SellerName":"维尼熊","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/535089_59b5710107ec4058b2d6ca6426e4330e_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":7,"ProductType":1},{"ProductId":"3dbcadb3-601f-4a7b-81e7-53f520b66527","Name":"Mk mini Ava 可以放6+  奶茶色 黑色 樱桃红 藏蓝色 紫色 尺寸：19 13 7.5 断货的节奏哦！","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M01/C9/91/CgvUA1Z4iySAWlWtAADD0LLWGAo924-lists_ls.jpg","Stock":2,"Price":1200.0,"MarketPrice":0.0,"SellerId":521468,"SellerName":"stepheny","SellerLogo":"http://p8.img.ymatou.com/G02/M01/9C/3A/CgvUBVY5kn6ARstIAABQs79sc6U791_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":8,"ProductType":1},{"ProductId":"479493fd-c134-4dd2-821f-bbc1d6999775","Name":"【MichaelKors】百搭的拉链款双肩背包🎒减龄神器！大肆流行的秋冬季节！25x30cm真皮材质～🍷黑色/樱花粉1999，矢车菊/灰玫瑰1680","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M08/B3/A2/CgvUA1Z1KdqAGJR_AACAzhicHMQ295-lists_ls.jpg","Stock":4,"Price":1699.0,"MarketPrice":0.0,"SellerId":2426877,"SellerName":"败家媳妇麦包包","SellerLogo":"http://p7.img.ymatou.com/G01/M03/03/FE/CgrTBFXebx-AcvwOAACNdU7qlUw139_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":9,"ProductType":1},{"ProductId":"53271b83-120b-418d-9d61-ac73ae02f1ba","Name":"MK中号水桶包 棕色可选~高圆圆同款哦^_^尺寸大约24*22*13cm","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M01/C9/BE/CgvUA1Z4kb6AFZocAAFu-zcMdRs259-lists_ls.jpg","Stock":2,"Price":1450.0,"MarketPrice":0.0,"SellerId":443006,"SellerName":"美国E购","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/443006_0561ace2bf24420c9a70696fac147aad_m.png","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":10,"ProductType":1},{"ProductId":"2dd32066-07ba-4298-9d14-aefa538bacb3","Name":"tory 专柜 圣诞折扣，📢 十字纹真皮 1399","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M04/CD/7A/CgvUBVZ4-9GASSYxAAEkDeaThTI593-lists_ls.jpg","Stock":5,"Price":1399.0,"MarketPrice":0.0,"SellerId":421045,"SellerName":"亚平宁风暴","SellerLogo":"http://p7.img.ymatou.com/G02/M01/9C/0B/CgvUBVY5j_CAQWPyAABybtf4RQk183_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":11,"ProductType":1},{"ProductId":"70e98864-d741-418f-880b-7b4793c9199a","Name":"tory 专柜 圣诞折扣📢大号长款手拿包 荔枝纹软皮 两色都是很火爆的 1250到手","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M06/CD/2D/CgvUBFZ4-16AXXOPAAC4BLH_NEM293-lists_ls.jpg","Stock":5,"Price":1250.0,"MarketPrice":0.0,"SellerId":421045,"SellerName":"亚平宁风暴","SellerLogo":"http://p7.img.ymatou.com/G02/M01/9C/0B/CgvUBVY5j_CAQWPyAABybtf4RQk183_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":12,"ProductType":1},{"ProductId":"0c500f40-7fce-4eca-b4dc-4dd69a12926a","Name":"【圣诞狂购，诞诞有礼，下单用券】潮鞋！Gucci 男士真皮一脚蹬 只有一双 42.5=us9.5码","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M07/CB/A1/CgvUBVZ4zl-Ab6r8AACYiF857oo607-lists_ls.jpg","Stock":1,"Price":1198.0,"MarketPrice":0.0,"SellerId":441917,"SellerName":"danadana","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/441917_0fb10935ffd84e118872b1d64f4c30e0_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":13,"ProductType":1},{"ProductId":"2b62b16a-a20f-46a2-bcd7-dfd3a4fa21c5","Name":"【圣诞狂购，诞诞有礼，下单用券】Gucci logo印花心性扣女士腰带 宽4cm 尺码：90 95","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M0B/CB/BA/CgvUBVZ40ZSAPNWTAACoxLDQQ7Y029-lists_ls.jpg","Stock":2,"Price":1288.0,"MarketPrice":0.0,"SellerId":441917,"SellerName":"danadana","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/441917_0fb10935ffd84e118872b1d64f4c30e0_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":14,"ProductType":1},{"ProductId":"410d9808-562f-44fe-a742-9afde8609186","Name":"  【圣诞狂购，诞诞有礼，下单用券】Gucci 马衔扣真皮女士高跟鞋 85 毫米鞋跟 方形细高跟 尺码38 一双","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M02/CB/56/CgvUBFZ4zaKAEjwPAAB_MHkAI_g098-lists_ls.jpg","Stock":1,"Price":1389.0,"MarketPrice":0.0,"SellerId":441917,"SellerName":"danadana","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/441917_0fb10935ffd84e118872b1d64f4c30e0_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":15,"ProductType":1}]
        },
        '2':{
            Products: [{"ProductId":"5d1f67ab-f459-460a-82c8-7ee98ec866d5","Name":"mk长款钱包，好多色，难得颜色这么全哈，十字纹牛皮，送人自用非常好！直邮包邮包税699","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M08/C6/05/CgvUBFZ4DAWADGhYAACbGh9yRAY167-lists_ls.jpg","Stock":31,"Price":599.0,"MarketPrice":0.0,"SellerId":504951,"SellerName":"小c北美漂流季","SellerLogo":"http://p10.img.ymatou.com/G02/M09/41/ED/CgvUA1ZDp-KAaiMrAABllXmPE_c231_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":1,"ProductType":1},{"ProductId":"175739e0-c4c9-4b19-90d7-aac04b7b2a48","Name":"火了一整年的爆款💥Nike Roshe Run 成人版女款 舒适潮鞋 非大童版😀us6 适合35.5 36 us6.5适合36.5 us7适合37 us7.5适合38 us8适合39 脚背厚偏大半码哦🎉US6、US6.5是链接上面的价格 其他号码全部699💥","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M01/BB/0A/CgvUBVZ2qiCAP8jAAACQ2PgOzx8336-lists_ls.jpg","Stock":160,"Price":619.0,"MarketPrice":0.0,"SellerId":5213397,"SellerName":"sanqingzai","SellerLogo":"http://p10.img.ymatou.com/G02/M04/53/43/CgvUBFYXANiAPfoVAACtoGLL7k0779_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":2,"ProductType":1},{"ProductId":"f4ab9115-b66a-48a5-9eb6-1dd10c084184","Name":"三叶草 adidas originals 阿迪达斯 男款logo黑色棉袄 ","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M04/C6/09/CgvUBFZ4DEOAEynwAACLSXcxbEQ896-lists_ls.jpg","Stock":50,"Price":650.0,"MarketPrice":0.0,"SellerId":1135185,"SellerName":"易美代购","SellerLogo":"http://p7.img.ymatou.com/G02/M07/5D/D6/CgvUA1YXhSCAfeY0AAA_1dr7GxM765_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":3,"ProductType":1},{"ProductId":"8b8dd4b2-598a-4def-a0a9-d714acc08c1e","Name":"【圣诞特价精选】三叶草 stan smith 绿尾 35.5-39到货 国内37就是欧码36.5其他尺码都一样 定金使用优惠码MUS69立减69 到手价530","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M02/BB/14/CgvUBVZ2q5WAeq2HAADVvP_KoEY201-listb_lb.jpg","Stock":999,"Price":599.0,"MarketPrice":0.0,"SellerId":531643,"SellerName":"我们血拼吧","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/531643_2d8dbfde664248279913fdc9ff7db782_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":4,"ProductType":1},{"ProductId":"17f5d77e-28d2-48de-bc57-a5e9b90f089b","Name":"范思哲 Versace 男士全羊毛围巾 意大利制造 黑色 绿色 酒红  蓝色","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M09/CB/AC/CgvUBVZ4z--AM5HeAADISm1xLwo011-lists_ls.jpg","Stock":60,"Price":599.0,"MarketPrice":0.0,"SellerId":648441,"SellerName":"懒人美国品牌折扣","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/648441_07e15588dc3d41099b2701e3722832f7_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":5,"ProductType":1},{"ProductId":"ba10e71e-dd78-4b02-a125-1f76f615e430","Name":"【爆款好礼🎁】COACH男士🚹新款全牛皮单肩/斜挎包。三色，尺寸30*30～😍😍爆款～特价限时抢～👏手慢无","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M08/CD/FB/CgvUA1Z4-S6AZP9jAACoy5MJiKI955-lists_ls.jpg","Stock":20,"Price":1000.0,"MarketPrice":0.0,"SellerId":1592506,"SellerName":"西瓜美国代购","SellerLogo":"http://p9.img.ymatou.com/G02/M05/34/39/CgvUA1Yl8eeAWud-AABDcUrEE1E852_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":6,"ProductType":1},{"ProductId":"288b8b52-dd14-485f-a7bb-79a1b33bdcf3","Name":"【 圣诞惊喜价🎁 638 】三叶草 Adidas Originals Moscow系列保暖夹克","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M03/CA/31/CgvUBFZ4sxGAJy1pAABvK9USkYc371-lists_ls.jpg","Stock":9,"Price":638.0,"MarketPrice":0.0,"SellerId":526344,"SellerName":"bigapple888","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/526344_6e621accaa8a450585b7d3836e976308_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":7,"ProductType":1},{"ProductId":"64332eda-e582-4fcd-a3f3-e40653c0bd1e","Name":"圣诞节新款抢购价！Timberland天木兰经典款防水工装靴大童女款黄靴TB012909713(鞋子偏大，建议选择小半码或一码)","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M0B/BF/E7/CgvUBVZ3i66AaJLpAADOETvcx_4159-lists_ls.jpg","Stock":20,"Price":899.0,"MarketPrice":0.0,"SellerId":568334,"SellerName":"maomaozai","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/568334_19d66686241c46bbb040b889dfb6350c_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":8,"ProductType":1},{"ProductId":"7c99d2e7-50c8-445f-b4a3-5a998511040a","Name":"Mk真皮斜挎链条包，链子可拆。黄色特价850，其它颜色950直邮包税，可放6+","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M02/C6/C8/CgvUBVZ4FRKAKyUfAAGzdkTqzCU621-lists_ls.jpg","Stock":10,"Price":850.0,"MarketPrice":0.0,"SellerId":508200,"SellerName":"xiaozhudaren","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/508200_04006b9b43184c0c9b6b26794825c589_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":9,"ProductType":1},{"ProductId":"a0d054e1-fc65-4d2c-a6d8-572653d7a3b3","Name":"Mk真皮斜挎包，链子可拆，可放6+。超赞！","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M03/C6/BA/CgvUBVZ4FB6AI8fSAAEue4ffE84203-lists_ls.jpg","Stock":4,"Price":950.0,"MarketPrice":0.0,"SellerId":508200,"SellerName":"xiaozhudaren","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/508200_04006b9b43184c0c9b6b26794825c589_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":10,"ProductType":1},{"ProductId":"ad38dc2c-03de-4604-b51f-de41a73b408b","Name":"Mk女包，降落伞面料配真皮，非常有质感！！谁用谁知道！绝对超值！黑色和藏蓝色。","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M05/C1/79/CgvUA1Z3no-AJMyOAAFdBuSUuMQ169-lists_ls.jpg","Stock":4,"Price":699.0,"MarketPrice":0.0,"SellerId":508200,"SellerName":"xiaozhudaren","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/508200_04006b9b43184c0c9b6b26794825c589_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":11,"ProductType":1},{"ProductId":"15e9f630-4f1e-412e-8fd0-dd946d323eb2","Name":"Coach亮皮小号波士顿，经典白搭款，手提，斜跨一手包。绝对多用型噢","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M0A/B2/A5/CgvUBFZ1JzqAOtroAAKHYQWJD4U492-lists_ls.jpg","Stock":4,"Price":958.0,"MarketPrice":0.0,"SellerId":5907253,"SellerName":"Sabrina妈妈","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/5907253_7921a26cdf4a4306b29288fd9c54f8ff_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":12,"ProductType":1},{"ProductId":"316e04aa-a059-4dc8-a49b-a422f5d9ecb9","Name":"Coach手提单肩斜跨三合一爆款，多用途，超低价","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M07/B3/80/CgvUBVZ1RXOAMt4jAAGkeejsE5o666-lists_ls.jpg","Stock":1,"Price":599.0,"MarketPrice":0.0,"SellerId":5907253,"SellerName":"Sabrina妈妈","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/5907253_7921a26cdf4a4306b29288fd9c54f8ff_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":13,"ProductType":1},{"ProductId":"01a76eec-0b7a-4179-bf36-9e0b09d3f827","Name":"【Coach 圣诞特价】Coach 豹纹大挎包 特价899直邮包税","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M02/C5/00/CgvUBVZ38Q2ADX_lAADApmf-SPE726-lists_ls.jpg","Stock":3,"Price":899.0,"MarketPrice":0.0,"SellerId":416876,"SellerName":"康涅狄格的小窝","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/416876_149bf66c72c04c4898865f9c6a65edcd_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":14,"ProductType":1},{"ProductId":"09d39905-70bb-4f21-a0fd-7eb796be323c","Name":"【Coach 圣诞特价】Coach 真皮信封钱包 特价599直邮包税","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M05/C6/39/CgvUA1Z3_F-Abwa_AACMeHOKXPE184-lists_ls.jpg","Stock":4,"Price":599.0,"MarketPrice":0.0,"SellerId":416876,"SellerName":"康涅狄格的小窝","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/416876_149bf66c72c04c4898865f9c6a65edcd_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":15,"ProductType":1}]
        },
        '3':{
            Products: [{"ProductId":"ffc571c0-464f-4538-9968-e8951fc9cf64","Name":"【刷爆整个朋友圈】经典YSL围巾～😍100%纯羊毛！🎺🎺男女同款～简单的ysl logo设计～❤️百搭、潮款、🌹美的不要不要的💓九色特价399～尺寸180*30。","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M01/BA/75/CgvUBFZ2oMuATMy3AABtsf-XfsA454-lists_ls.jpg","Stock":50,"Price":389.0,"MarketPrice":0.0,"SellerId":1592506,"SellerName":"西瓜美国代购","SellerLogo":"http://p9.img.ymatou.com/G02/M05/34/39/CgvUA1Yl8eeAWud-AABDcUrEE1E852_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":1,"ProductType":1},{"ProductId":"abb321c1-e3e4-4e8b-b603-d88f3aabdaf3","Name":"【圣诞特惠爆款商品】 Sonoma超级保暖豆豆鞋，S适合35-36码脚，M适合37-38码脚，L适合39-40码脚，XL适合41码脚。下单时备注亲的国内码数。继续超级大特价！","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M02/BD/B8/CgvUBVZ3UtKAG-iAAAJR_yWHzMA245-lists_ls.jpg","Stock":300,"Price":199.0,"MarketPrice":0.0,"SellerId":44100,"SellerName":"小多多妈妈","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/44100_84ed32852a314b9db6146c7e2773a5e2_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":2,"ProductType":1},{"ProductId":"6530e913-aede-41ca-8fc1-089db53eb484","Name":"【圣诞特惠爆款商品】 Calvin Klein女士小脚牛仔裤，一直卖的不错，口碑100%好！要的亲们，赶紧下手吧。现场拍摄有灯光色差，美女上身图款是浅蓝色的，两色相差不大。赞！","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M06/BC/F4/CgvUA1Z22hKARkLGAAGDpRCJHzo446-lists_ls.jpg","Stock":200,"Price":299.0,"MarketPrice":0.0,"SellerId":44100,"SellerName":"小多多妈妈","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/44100_84ed32852a314b9db6146c7e2773a5e2_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":3,"ProductType":1},{"ProductId":"d96e7a54-a138-4759-8522-9a9ea7dd530e","Name":"Tommy Hilfiger 卫衣 【秒杀50套 原价500+】男士 无帽 加绒 加厚 套头卫衣 百搭 时尚必备 绝对的百搭 这个冬天 酷酷的 保暖 ","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M09/C9/4D/CgvUA1Z4gSiAd7hGAACBNRCnCxc044-lists_ls.jpg","Stock":50,"Price":299.0,"MarketPrice":0.0,"SellerId":5109621,"SellerName":"美国城_良心代购","SellerLogo":"http://p10.img.ymatou.com/G02/M0A/67/52/CgvUBFZswXGAWWiJAABedwlCl1k045_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":4,"ProductType":1},{"ProductId":"8e80dbd2-0bfa-4a04-af8d-b8b32a3ab69a","Name":"Levis 牛仔裤 男 511。513  修身 潮男 性感  小狼泰勒的最爱 Levis 型男都爱穿 因为剪裁不一样 牛仔裤做到极致的也只有李维斯了 511。513 同款随机发","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M09/CC/62/CgvUBFZ46myANgCLAADAYAa82JQ519-lists_ls.jpg","Stock":50,"Price":299.0,"MarketPrice":0.0,"SellerId":5109621,"SellerName":"美国城_良心代购","SellerLogo":"http://p10.img.ymatou.com/G02/M0A/67/52/CgvUBFZswXGAWWiJAABedwlCl1k045_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":5,"ProductType":1},{"ProductId":"87e6edf0-971f-4417-8819-efb5b4e97be6","Name":"🎄🎅圣诞超值特价 蔲驰 Coach 零钱包 小手包 多色 199秒杀","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M0B/CC/12/CgvUA1Z4yFWAAIw2AADbT362Z7k014-lists_ls.jpg","Stock":20,"Price":200.0,"MarketPrice":0.0,"SellerId":447869,"SellerName":"DTDY美国代购","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/447869_bb3454fbe9644fb79c7f9f011bb6f5bb_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":6,"ProductType":1},{"ProductId":"4ca57698-0567-4ba8-8bad-a105d7417249","Name":"Adidas Originals 三叶草 潮童 小童版舒适跑鞋～S85628 玫红5C-8C；D69383 灰色黄带5C-8C;C77733 玫红迷彩5C-9C无6C；C77732 白色迷彩8C-9C，🎉亲们拍下备注颜色鞋码","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M00/BD/2C/CgvUBFZ3R7OAIVDQAAC_TIkXz7k789-lists_ls.jpg","Stock":115,"Price":246.0,"MarketPrice":0.0,"SellerId":5213397,"SellerName":"sanqingzai","SellerLogo":"http://p10.img.ymatou.com/G02/M04/53/43/CgvUBFYXANiAPfoVAACtoGLL7k0779_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":7,"ProductType":1},{"ProductId":"912edae9-5253-451b-a8ef-da38e8a141f1","Name":"【秒杀】飞利浦Philips 2300电动剃须刀。型号6955XL/41KH。快速充电，全球通用电压。充电时也可使用。带修鬓器","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M0B/CB/53/CgvUBVZ4xhOATi_UAAC5WPsX3jM234-lists_ls.jpg","Stock":10,"Price":298.0,"MarketPrice":0.0,"SellerId":536711,"SellerName":"Nicolqq","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/536711_89f315cf10a44923bf08463475b48756_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":8,"ProductType":1},{"ProductId":"70b0474c-642b-4a06-99a3-22d0bbac51ed","Name":"Juicy Couture 秒杀特价 天鹅绒上衣 外套  后背大logo款","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M03/CA/1D/CgvUA1Z4nZuADq_PAACn7DGmuxo744-lists_ls.jpg","Stock":92,"Price":299.0,"MarketPrice":0.0,"SellerId":648441,"SellerName":"懒人美国品牌折扣","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/648441_07e15588dc3d41099b2701e3722832f7_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":9,"ProductType":1},{"ProductId":"a9b949f0-50ed-4a51-9e82-02f630d81e9b","Name":"Calvin Klein CK男士短款全皮钱包 礼盒装 内图在盒子右上方","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M01/CB/F7/CgvUBVZ42EWASgyBAACK9ex4ZxA344-lists_ls.jpg","Stock":95,"Price":328.0,"MarketPrice":0.0,"SellerId":648441,"SellerName":"懒人美国品牌折扣","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/648441_07e15588dc3d41099b2701e3722832f7_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":10,"ProductType":1},{"ProductId":"e8c75cc8-e7b1-4fc3-8414-3d7a8c0c9100","Name":"tommy 女士全棉 麻花毛衣 v领显瘦款 ","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M0B/CA/22/CgvUA1Z4nhmAPRfCAABj11MnCxI067-lists_ls.jpg","Stock":45,"Price":299.0,"MarketPrice":0.0,"SellerId":648441,"SellerName":"懒人美国品牌折扣","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/648441_07e15588dc3d41099b2701e3722832f7_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":11,"ProductType":1},{"ProductId":"4848e97d-3197-4fa8-92c3-84a6cce3c049","Name":"【✨圣诞🎄狂欢🎉🎉🎉】WMNS NIKE IN-SEASON TE 4 成人女士轻跑悠闲鞋  特制款 配置超舒适鞋垫 穿上去很修腿","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M0B/CA/E9/CgvUA1Z4ryeACkzsAAEB8hVDA8s322-lists_ls.jpg","Stock":25,"Price":299.0,"MarketPrice":0.0,"SellerId":512860,"SellerName":"霆妈逛加州","SellerLogo":"http://p9.img.ymatou.com/G01/M01/05/5E/CgrTBFXejdeADW5wAABCF5DAp_s118_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":12,"ProductType":1},{"ProductId":"b1e648c0-bb88-4eda-8375-74d131e51693","Name":"【✨圣诞🎄狂欢🎉🎉🎉】等了半年  这款美国2015年最潮的roshrun 童鞋 终于打折了 配亲子鞋的好机会来了 给你的宝宝一个洋气可爱的童年记忆","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M0B/CA/8C/CgvUBFZ4ugmAULTwAACnqxVQ-nk200-lists_ls.jpg","Stock":15,"Price":349.0,"MarketPrice":0.0,"SellerId":512860,"SellerName":"霆妈逛加州","SellerLogo":"http://p9.img.ymatou.com/G01/M01/05/5E/CgrTBFXejdeADW5wAABCF5DAp_s118_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":13,"ProductType":1},{"ProductId":"d5dc7b7e-d674-4c66-91c5-98ee973b0389","Name":"【✨圣诞🎄狂欢🎉🎉🎉】Columbia 男士 捉绒衣 保暖舒适 款式百搭适合各年龄阶段 衣服平铺测量胸围 M122 L130 XL136 XXL146 （备注两个颜色，避免没货哦）","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M09/C3/50/CgvUBFZ30I-ASCn4AACS_I24M3Y717-lists_ls.jpg","Stock":10,"Price":209.0,"MarketPrice":0.0,"SellerId":512860,"SellerName":"霆妈逛加州","SellerLogo":"http://p9.img.ymatou.com/G01/M01/05/5E/CgrTBFXejdeADW5wAABCF5DAp_s118_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":14,"ProductType":1},{"ProductId":"17e3884d-5d2f-4f83-ad71-167302705fb8","Name":"三叶草 adidas originals 阿迪达斯 女款logo运动外套 黑色/红色 155/165/170 ","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M05/C3/2B/CgvUBVZ3xZyAMfO7AACjj_Fp6Bc504-lists_ls.jpg","Stock":50,"Price":299.0,"MarketPrice":0.0,"SellerId":1135185,"SellerName":"易美代购","SellerLogo":"http://p7.img.ymatou.com/G02/M07/5D/D6/CgvUA1YXhSCAfeY0AAA_1dr7GxM765_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":15,"ProductType":1},{"ProductId":"afcd0af9-d95b-4bb5-a1a8-429c5a2a2fde","Name":"三叶草 adidas originals 阿迪达斯 男款缩腿运动裤 ","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M0A/BE/22/CgvUBVZ3XpGAMUKPAADAdnnPLMo791-listb_lb.jpg","Stock":50,"Price":299.0,"MarketPrice":0.0,"SellerId":1135185,"SellerName":"易美代购","SellerLogo":"http://p7.img.ymatou.com/G02/M07/5D/D6/CgvUA1YXhSCAfeY0AAA_1dr7GxM765_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":16,"ProductType":1},{"ProductId":"81a17d24-613c-4bd2-a374-533d97907ff6","Name":"三叶草 adidas originals 阿迪达斯 男款logo羊毛外套 ","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M07/BD/F1/CgvUBFZ3YFeAUONZAACJWed62uE447-lists_ls.jpg","Stock":50,"Price":499.0,"MarketPrice":0.0,"SellerId":1135185,"SellerName":"易美代购","SellerLogo":"http://p7.img.ymatou.com/G02/M07/5D/D6/CgvUA1YXhSCAfeY0AAA_1dr7GxM765_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":17,"ProductType":1},{"ProductId":"a8bb7309-f9c9-49bd-99ce-138617c78b04","Name":"【陈冠希同款】三叶草 adidas originals 阿迪达斯 男款蛇纹superstar 炫酷版 ","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M0B/CB/BB/CgvUBVZ40bGARM3tAADpIzeB-mA895-lists_ls.jpg","Stock":50,"Price":499.0,"MarketPrice":0.0,"SellerId":1135185,"SellerName":"易美代购","SellerLogo":"http://p7.img.ymatou.com/G02/M07/5D/D6/CgvUA1YXhSCAfeY0AAA_1dr7GxM765_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":18,"ProductType":1},{"ProductId":"5dc38bf0-4f8d-4cf7-9d6f-8bb3437f9831","Name":"圣诞节抢购价！skechers斯凯奇D LITES黑白粉休闲慢跑鞋时尚运动鞋韩国明星同款","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M05/AB/66/CgvUBVZz0ZOAEw8jAAFH_wDYlEQ679-lists_ls.jpg","Stock":30,"Price":429.0,"MarketPrice":0.0,"SellerId":568334,"SellerName":"maomaozai","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/568334_19d66686241c46bbb040b889dfb6350c_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":19,"ProductType":1},{"ProductId":"fe128a6e-6dfc-4545-a9f3-686b6ce81d85","Name":"Coach 女士针织手套 手指部分可以操作触摸屏。粉色豹纹款。","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M03/CD/84/CgvUA1Z472yAYiFDAABv9T1364A612-listb_lb.jpg","Stock":5,"Price":199.0,"MarketPrice":0.0,"SellerId":314343,"SellerName":"ABC_全球购","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/314343_957fd51fceb1415d89ca3c2b741d1441_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":20,"ProductType":1},{"ProductId":"0006f152-3c90-4819-801f-76ac21ae2159","Name":"Lego 乐高城市系列 机场消防车组合 男孩子的最爱 适合5-12岁的小朋友 326片","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M04/C9/00/CgvUA1Z4bBaAR8d2AADb6_tY60g843-listb_lb.jpg","Stock":1,"Price":429.0,"MarketPrice":0.0,"SellerId":1274715,"SellerName":"miaojing84","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/1274715_12f1cc47b73a403082c630010fd5ed30_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":21,"ProductType":1},{"ProductId":"0393d08e-2949-4773-a96c-1f18d427a855","Name":"美肌神器—玉兰油Pro-X微晶亮肤仪, 含一支机身，1个棉头，1个刷头，2节电池，1支20ml微晶热能按摩啫喱以及1支20ml去暗哑亮泽洁面乳，让你实现在家美容的梦想","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M09/BF/64/CgvUA1Z3bPCAe-rgAAB2WpAmFjU837-lists_ls.jpg","Stock":6,"Price":299.0,"MarketPrice":0.0,"SellerId":1274715,"SellerName":"miaojing84","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/1274715_12f1cc47b73a403082c630010fd5ed30_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":22,"ProductType":1},{"ProductId":"1975b49c-f82a-4662-90a9-3ff539195f57","Name":"正品瑞士军刀双肩包 送人自用都很高大上 黑色/蓝色 15.6寸电脑绰绰有余 三年保修十年不会坏 容量超大 出去游玩背上再好不过了","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M0B/BE/E3/CgvUBVZ3cFiAKFkvAAB7GbBM8G0680-lists_ls.jpg","Stock":4,"Price":399.0,"MarketPrice":0.0,"SellerId":1274715,"SellerName":"miaojing84","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/1274715_12f1cc47b73a403082c630010fd5ed30_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":23,"ProductType":1},{"ProductId":"1b3dc691-c50a-4bf7-a214-c74061b6c873","Name":"森海塞尔和阿迪达斯强强联手 OCX 685i 运动型耳机 耳塞式立体声耳机 强劲的声音重现和饱满的低音响应","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M00/CB/54/CgvUBFZ4zWmAVmb0AABFnkCB3Lo780-listb_lb.jpg","Stock":3,"Price":299.0,"MarketPrice":0.0,"SellerId":1274715,"SellerName":"miaojing84","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/1274715_12f1cc47b73a403082c630010fd5ed30_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":24,"ProductType":1},{"ProductId":"695aa8c5-675d-4de4-83c9-3565310b6260","Name":"Philips飞利浦Sonicare HX5612声波电动牙刷 节日套装 额外赠送一个刷头 声波专利技术 内含2个刷头+充电底座 每秒震动3.1W次 去除菌斑 需要电压转换器 （淘宝10元有售）","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M07/B9/90/CgvUA1Z2WkeAK66rAAA46Kcgp0A621-lists_ls.jpg","Stock":5,"Price":299.0,"MarketPrice":0.0,"SellerId":1274715,"SellerName":"miaojing84","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/1274715_12f1cc47b73a403082c630010fd5ed30_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":25,"ProductType":1}]
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

    var module = {
        /**
         * 获得活动商品
         * @param  {string} aid 活动编号
         * @param  {string} pid 模块编号
         */
        activityList: function (aid, pid) {
            if (aid === '0') {
                productData[pid].Products.length % 2 == 1 && productData[pid].Products.pop();  //商品数量为单数时去掉最后一个
                var html = ejs.render($('#active-tpl2').html(), productData[pid]);
                $('#' + pid).html(html);
                lazyLoad.check();
            }
            else {
                getActivityJsonP(aid, pid, 50, function (data) {
                    if (data && data.Products) {
                        var html = ejs.render($('#active-tpl').html(), data);
                        $('#' + pid).html(html);
                        lazyLoad.check();
                    }else{
                        $('[data-arguments="'+aid+','+pid+'"]').parents(".hot-wrapper").hide();
                    }
                });
            }

        },

        /**
         * 获得活动商品
         * @param  {string} aid 活动编号
         * @param  {string} pid 模块编号
         */
        activeModule:function(aid,pid){
            getActivityJsonP(aid,pid,100,function(data){
                if(data && data.Products){
                    data.Products.length % 2 == 1 && data.Products.pop();  //商品数量为单数时去掉最后一个
                    var html = ejs.render($('#active-tpl').html(), data);
                    $('[data-arguments="'+aid+','+pid+'"]').parent().html(html);
                    lazyLoad.check();
                }else{
                    // debugger;
                    $('[data-arguments="'+aid+','+pid+'"]').parents(".hot-wrapper").hide();
                }
            });
        },
        //模块打点空方法
        noop: function () {

        }
    }

    var getActivityJsonP = function (aid, pid, pageSize, callback) {
        var callbackName = 'ymatou_at_' + aid + '_' + pid;
        pageSize = pageSize || 10;
        jsonpGetData('http://api.evt.ymatou.com/ActivityTemplate/Products/aid_' + aid + '/pid_' + pid + '/ps_' + pageSize, callback, callbackName);
    }

    /**
     * 检查坐标变更tab的active 位置
     */
/*    var checkCoordinate = function () {
        var li = $('#bf-tab ul li'),
            active = li.filter('.active'),
            coor = $('.coordinate');
        if(!active[0]){
            return;
        }
        var left = active.offset().left,
            width = active.width();
        //这里注意去写分离 减少重绘
        coor.removeClass('first')
            .removeClass('last')
            .css({
                width: width,
                left: left
            });

        if (active.index() === 0) {
            coor.addClass('first');
        }

        if (active.index() === li.size()-1) {
            coor.addClass('last');
        }
    }*/

    var checkAxis = function () {
        if (stopCheck) {
            return;
        }
        var $axle = $('.J-bf-axie'),
            doc = document.documentElement,
            view = {
                l: (window.pageXOffset || doc.scrollLeft),
                t: 0,
                b: window.innerHeight,
                r: (window.innerWidth || doc.clientWidth)
            } //视口位置

        $axle.each(function (index, el) {
            var box = el.getBoundingClientRect();
            if ((box.top >= view.t && box.top < view.b || box.bottom >= view.t && box.bottom < view.b || box.bottom > view.b && box.top < view.t) && box.left >= view.l && box.left < view.r) {
                $('#bf-tab li').removeClass('active').filter('[data-href="' + el.id + '"]').addClass('active');
                // checkCoordinate();
                return false;
            }
        });
    }
    var stopCheck = false;
    var scrollChackeStatus = false; //scroll 检查频率控制
    $(document).on('click', '.J-open', function () {
            var $this = $(this);

            YmtApi.open({
                url: $this.attr('data-url'),
                title: $this.attr('data-title'),
                isNew: true,
            });
        }).on('click', '#bf-tab li', function () {
            var $this = $(this);
            $('#bf-tab li').removeClass('active');
            $this.addClass('active');
            location.hash = $this.attr('data-href');
            stopCheck = true;
            setTimeout(function () {
                stopCheck = false;
            }, 800)
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
        }).on('scroll', function () {
            if (!scrollChackeStatus) {
                scrollChackeStatus = true;

                var top = document.documentElement.scrollTop || document.body.scrollTop,
                    bottom = window.innerHeight/2;//首屏

                if (top > bottom) {
                    $('#bf-tab').removeClass('show');
                    $('.ymt-butler').addClass('show')
                }
                else {
                    $('#bf-tab').addClass('show');
                    $('.ymt-butler').removeClass('show')
                }

                checkAxis();
                setTimeout(function () {
                    scrollChackeStatus = false;
                }, 250);
            }

        }).on('click', '.ymt-butler', function () { //洋管家
            if (YmtApi.utils.hasLogin()) {
                var auth = YmtApi.utils.getAuthInfo();;
                var UserId = auth.UserId || 0;
                var index = UserId % 10;
                //客服组
                var customServiceIdList = ["5771600", "5771700", "5771737", "5771792", "5771899", "5771996", "5772067", "5772141", "5772204", "5772284"];

                YmtApi.openChatDetail({
                    SessionId: UserId + '_' + customServiceIdList[index],
                    ToId: customServiceIdList[index],
                    ToLoginId: '洋管家' //auth.UserId
                        // ToLogoUrl:''
                });
            }
            else {
                YmtApi.toLogin();
            }
        });

    lazyLoad.init({
        offset: 200,
        callback: function (elem) {
            //注册模块懒加载
            var $this = $(elem);
            if ($this.hasClass('J-module-Hold')) {
                var moduleName = $this.attr('data-module'),
                    args = ($this.attr('data-arguments') || '').split(',');

                console.log(moduleName)

                moduleName && isFuntion(module[moduleName]) && module[moduleName].apply(module, args);
                $this.removeClass('J-module-Hold').addClass('module-load-end');
            }

        }
    });

})();
