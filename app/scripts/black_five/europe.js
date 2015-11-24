/* global ejs: true,YmtApi:true */

/**
 * 欧洲馆
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
            Products: [{"ProductId":"68ebc2ea-07db-4b85-b27b-318cbcf5b5de","Name":"【爆款特价】欧米茄最新007限量款机械男表231.10.42.21.03.004，至臻同轴全防磁机芯，全尺寸自动陀饰有镀铑空枪膛线设计，邦德家族盾徽密布于蓝色41.5MM表盘，公价6000欧","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M05/36/87/CgvUA1ZUFGiAdizpAADewdwEiTU681-lists_ls.jpg","Stock":10,"Price":32000.0,"MarketPrice":0.0,"SellerId":4753210,"SellerName":"德国阿Q德国QJJ","SellerLogo":"http://p8.img.ymatou.com/G02/M0A/F1/44/CgvUA1YhESmAE0DCAAFmLsPiCcA482_m.jpg","CountryName":"德国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Germany.png","SortIndex":1,"ProductType":1},{"ProductId":"be831182-5669-4f2c-bca2-c7ed78892cdb","Name":"小香一包难求！真不是有钱就能买到的超级限购！！半年只能买一个经典款找了N多人才寻到一个！中号boy黑色 金扣/银扣。28900元","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M08/27/26/CgvUA1ZR60-ADrKgAACPhVLrXKg465-lists_ls.jpg","Stock":3,"Price":28900.0,"MarketPrice":0.0,"SellerId":1594786,"SellerName":"佩佩英国购","SellerLogo":"http://p9.img.ymatou.com/G02/M0B/8A/5D/CgvUA1YIYzaAWGrPAABFHQ0HihA279_m.jpg","CountryName":"英国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/England.png","SortIndex":2,"ProductType":1},{"ProductId":"13c21bdf-76eb-490d-bdaa-5c0aeb066fdd","Name":"LV alma BB （老花/棋盘格）女神蕾哈娜、安以轩明星同款，大小适中，配背带，可拎可挎可背，怎么搭配都非常时尚！💰6950","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M09/2E/E0/CgvUBVZTGRyAeuCMAABcaFFI7Yg308-lists_ls.jpg","Stock":3,"Price":6950.0,"MarketPrice":0.0,"SellerId":3635770,"SellerName":"lushan991","SellerLogo":"http://p6.img.ymatou.com/G02/M01/71/F2/CgvUA1ZGcnuAYuwsAABchmy8yKk269_m.jpg","CountryName":"英国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/England.png","SortIndex":4,"ProductType":1},{"ProductId":"63265e5c-284a-4e9c-a9c0-06efad652dc3","Name":"超级爆款！巴宝莉羊毛大衣！黑色红色折上折！只要3800一件！疯抢的节奏！红色还有8-10-12-14码！黑色还有4-6-12码！下单备注身高体重腰围胸围寻码！","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M06/10/16/CgvUBVZPTk2AQwnoAABQWttZLlY193-lists_ls.jpg","Stock":2,"Price":3800.0,"MarketPrice":0.0,"SellerId":1586409,"SellerName":"拉拉在英国","SellerLogo":"http://p7.img.ymatou.com/G02/M07/14/51/CgvUBFYS4o-AJHGOAAA9QpSK6gU829_m.jpg","CountryName":"英国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/England.png","SortIndex":8,"ProductType":1},{"ProductId":"76e5f824-0f58-45c9-bcd7-b13b64383065","Name":"【McCartney 链条包】VIP八折仅此一天【拼邮】","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M0B/0A/EF/CgvUBFZO7JWAKGfYAADXmD8j2-4225-lists_ls.jpg","Stock":1,"Price":5300.0,"MarketPrice":0.0,"SellerId":2194141,"SellerName":"fchau","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/2194141_ac0782439c7245a5bafbdd6f796dd975_m.jpg","CountryName":"英国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/England.png","SortIndex":9,"ProductType":1},{"ProductId":"fe0b47f1-3581-4cc6-8e9b-484fda722745","Name":"Hermes爱马仕经典珐琅瓷手镯窄版～普通H头现在惊爆价💥💥3999¥包直邮包税到手～难得颜色这么全，总有一款适合你","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M03/C4/F2/CgvUA1ZK-5CAb8EcAABznjAx6WU005-lists_ls.jpg","Stock":5,"Price":3999.0,"MarketPrice":0.0,"SellerId":2244788,"SellerName":"楽楽meatballrikki","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/2244788_35599d2e9559435a9abc23eba935c92c_m.png","CountryName":"英国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/England.png","SortIndex":13,"ProductType":1},{"ProductId":"736ee7fb-7e0d-4891-bd39-9ed6f11db628","Name":"【爆款】chloe 高圆圆同款！女包 小猪包 drew  小号 尺寸：20*17*6.5cm ··黑色 红色！各1只！出完无··国内不少于15000","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M02/F9/57/CgvUBFZNm1iAAvqUAACqmRrFwEE788-lists_ls.jpg","Stock":1,"Price":7500.0,"MarketPrice":0.0,"SellerId":6746995,"SellerName":"summerluxury","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/6746995_3dcfb8bb7a304c488cf6b4daf2624b8f_m.jpg","CountryName":"意大利","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Italy.png","SortIndex":16,"ProductType":1},{"ProductId":"b3c17d51-ca14-434d-b29e-089706e2c860","Name":"celine最经典包包女王 电光蓝中号box 难买无敌 仅一只 奶奶最推荐 国内售价28000+ 现在裸价21900 电光蓝也快绝了！买不到了！","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M03/21/FE/CgvUBVZRnvyAZ7yDAAB42JDwNRI174-lists_ls.jpg","Stock":1,"Price":21900.0,"MarketPrice":0.0,"SellerId":1608680,"SellerName":"娜如奶奶","SellerLogo":"http://p6.img.ymatou.com/G02/M06/3D/B6/CgvUBFYVsDKAAPBtAACoKBJuzVg628_m.jpg","CountryName":"俄罗斯","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Russia.png","SortIndex":19,"ProductType":1},{"ProductId":"1641f092-1458-4c39-a5ac-a23487134418","Name":"最复古-RIMOWA CLASSIC FLIGHT铝镁合金登机箱行李箱，复古的设计，彰显品格，万箱朝拜。20-32寸尺寸齐全","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M08/E2/DF/CgvUA1ZMQp2Ae9p8AABPUqQuHCg751-lists_ls.jpg","Stock":2,"Price":4580.0,"MarketPrice":0.0,"SellerId":1594967,"SellerName":"非常德国","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/1594967_1c27afc74c7d4e3da426e5a1259cc679_m.jpg","CountryName":"德国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Germany.png","SortIndex":20,"ProductType":1},{"ProductId":"288112a9-06fb-4ad6-8b22-042d989b8221","Name":"Bottega Veneta 翻盖+拉链 长款钱夹 手拿包 可放6plus 多色可选   ","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M08/05/40/CgvUBVZOhQ6AH_P8AAB2w2DDSe0636-lists_ls.jpg","Stock":30,"Price":3500.0,"MarketPrice":0.0,"SellerId":6991154,"SellerName":"Goitaly1998","SellerLogo":"http://p7.img.ymatou.com/G02/M00/C3/7F/CgvUBFY7oYuAS5n1AAAsb_J798M333_m.jpg","CountryName":"意大利","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Italy.png","SortIndex":22,"ProductType":1},{"ProductId":"152b274d-f273-487d-beac-99d02e72291d","Name":"【爆款】0元代购！Burberry经典款饺子包打折村新到数量很少有拉链再等就没货了码头售价最低而且直邮不挣钱只挣信誉甩货就像不要钱各种裸价爽到你尖叫\r\n","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M09/FE/AD/CgvUBVZN3FeACMl_AABbk1Jw6_Q454-lists_ls.jpg","Stock":4,"Price":3980.0,"MarketPrice":0.0,"SellerId":6808550,"SellerName":"otaobuy","SellerLogo":"http://p7.img.ymatou.com/G02/M04/21/87/CgvUA1Ykr9iAGL0CAABMHCjIlPo490_m.jpg","CountryName":"英国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/England.png","SortIndex":23,"ProductType":1},{"ProductId":"4d600f1d-1751-4358-93c0-e541cfd87d02","Name":"爆款lv秋冬限量版Alma BB 带肩带 挂饰很可爱，有色彩鲜艳、富有趣味的图案，注定会成为收藏家的宠儿。尺寸25*19*12，精美绝伦，10900！","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M0A/FA/87/CgvUBFZNqa-AbHh9AADM5h1cAI4538-lists_ls.jpg","Stock":2,"Price":10900.0,"MarketPrice":0.0,"SellerId":1594768,"SellerName":"代购小旋风2015","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/1594768_46359bd66f3b4b0cb25d8d787e0345bd_m.jpg","CountryName":"英国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/England.png","SortIndex":24,"ProductType":1}]
        },
        '2':{
            Products: [{"ProductId":"7870d128-def6-4b8d-ac98-5d65501384e9","Name":"🔥爆款🔥Bottega Veneta /BV长款拉链钱夹 内有隔层 🎉多色可选","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M02/2D/17/CgvUBFZS73uAWWCtAADkToq-8yw938-lists_ls.jpg","Stock":50,"Price":3499.0,"MarketPrice":0.0,"SellerId":6991154,"SellerName":"Goitaly1998","SellerLogo":"http://p7.img.ymatou.com/G02/M00/C3/7F/CgvUBFY7oYuAS5n1AAAsb_J798M333_m.jpg","CountryName":"意大利","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Italy.png","SortIndex":1,"ProductType":1},{"ProductId":"786dfd1c-2e0d-41b2-8819-01a186423584","Name":"Emilie钱包，可刻字","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M01/27/FA/CgvUBFZSXniAId3xAABlgpK7Y8k674-lists_ls.jpg","Stock":5,"Price":2800.0,"MarketPrice":0.0,"SellerId":797180,"SellerName":"Linlin英国代购","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/797180_7380cb5a82e04272aac0d3340b547d7d_m.BMP","CountryName":"英国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/England.png","SortIndex":2,"ProductType":1},{"ProductId":"38137430-a5cc-4a95-8a3c-f1977b5c7121","Name":"Prada 黑色全拉链十字纹皮夹 男士 暗标 拼邮回国 国内顺丰到付","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M0B/2B/FB/CgvUA1ZSu1uABJnYAADoLIo__Mk519-listb_lb.jpg","Stock":6,"Price":2680.0,"MarketPrice":0.0,"SellerId":484025,"SellerName":"千遍一律","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/484025_972489b6fce64fc483ee6bc81f1d7420_m.jpg","CountryName":"英国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/England.png","SortIndex":3,"ProductType":1},{"ProductId":"c4de50f8-29ed-4070-bd8d-d17316711f1c","Name":"【爆款】Bally男士小肩包，Oakview，黑五特特价2510，直邮包税！直邮包税！直邮包税！27号采购，30号发货，7-10天到手","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M07/2D/B6/CgvUBVZS-p2AR0ALAACTEf3__tM421-lists_ls.jpg","Stock":9,"Price":2510.0,"MarketPrice":0.0,"SellerId":6522246,"SellerName":"英国比斯特奢侈品代购","SellerLogo":"http://p9.img.ymatou.com/G02/M00/C6/90/CgvUBFY7-PGAHxi-AABuIQTZQaU038_m.jpg","CountryName":"英国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/England.png","SortIndex":5,"ProductType":1},{"ProductId":"9db175bf-9599-4dbe-a2fe-be39ac46937d","Name":"🎉GUCCI 专柜正品🎉 双面围巾🔥100%羊毛🔥 20x175cm🎵 可搭配同款印花包包和鞋子🌹 潮到爆💦💦💦 2280","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M08/2D/38/CgvUBFZS83mAAzFbAAE85jhWun4185-lists_ls.jpg","Stock":49,"Price":2280.0,"MarketPrice":0.0,"SellerId":6991154,"SellerName":"Goitaly1998","SellerLogo":"http://p7.img.ymatou.com/G02/M00/C3/7F/CgvUBFY7oYuAS5n1AAAsb_J798M333_m.jpg","CountryName":"意大利","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Italy.png","SortIndex":6,"ProductType":1},{"ProductId":"861dbf81-6fc3-4af6-acca-e4d02c7567f1","Name":"【爆款】菲拉格慕男款皮带，拉丝银头，双面用，一棕一黑。宽3.5CM，长95-120CM每5CM一个码，可剪。留下您的腰围。或对应最后一张尺码表。默认110CM。","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M09/C7/68/CgvUA1ZLFG-AG7ukAACkSn7V34o621-lists_ls.jpg","Stock":24,"Price":2250.0,"MarketPrice":0.0,"SellerId":2550247,"SellerName":"susanslash","SellerLogo":"http://p10.img.ymatou.com/G02/M01/11/C2/CgvUBFXsBIiAQFQrAAAz43_1FpI246_m.jpg","CountryName":"西班牙","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Spain.png","SortIndex":7,"ProductType":1},{"ProductId":"9a4f97b8-e0c3-4b38-a7bb-93514763444d","Name":"Miumiu 人气单品 🎉卖出去至少100幅 单日评论200多条 60/15 女士 收到的客人都说好 不挑脸型 好看又舒服 国内邮费顺丰到付","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M0B/21/CA/CgvUBFZRn_qAd3-fAACiaqyfJnQ422-lists_ls.jpg","Stock":6,"Price":1670.0,"MarketPrice":0.0,"SellerId":546260,"SellerName":"yc290296439","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/546260_abee2e3218ae4f43b8e267351e9895a6_m.jpg","CountryName":"意大利","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Italy.png","SortIndex":8,"ProductType":1},{"ProductId":"0eb64b1e-047b-40c1-ba39-0c34e32aa5f6","Name":"Gucci黑色全皮长款暗扣钱包20x11cm～logo压纹，男女通用～包直邮包税","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M03/BE/0F/CgvUA1ZKvEGAIi2cAAHE85ayrOA899-listb_lb.jpg","Stock":18,"Price":2090.0,"MarketPrice":0.0,"SellerId":2008150,"SellerName":"Joannalx","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/2008150_10df2dd767d14b9a87419bf84282d024_m.JPG","CountryName":"英国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/England.png","SortIndex":9,"ProductType":1},{"ProductId":"03cc9560-1dc9-43be-9d71-110f6d371137","Name":"【Jimmy choo VP 包包5折、鞋子6折秒杀 】细跟高跟凉鞋","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M00/BE/EB/CgvUBFZKzFWAE9jwAAB_gPGxiWk839-listb_lb.jpg","Stock":3,"Price":3480.0,"MarketPrice":0.0,"SellerId":1901847,"SellerName":"够巴黎_gouparis","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/1901847_1d37441e4c4c4f05ba3bfe2597b874c5_m.jpg","CountryName":"法国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/France.png","SortIndex":19,"ProductType":1},{"ProductId":"93379be6-d3a2-4936-bf0b-cc4efed7d03a","Name":"【爆款】【儿童用品】RECARO瑞凯威，Moza Nova Is超级莫扎特~限量版，儿童安全座椅isofix接口，适合9个月至12岁9 - 36 kg的小朋友，德国制造，直邮\r\n","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M08/E9/6E/CgvUBFZMmqSAEjdPAABYtlEuRfQ849-lists_ls.jpg","Stock":10,"Price":2650.0,"MarketPrice":0.0,"SellerId":488692,"SellerName":"馨艺满满","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/488692_added502afbf4656b72df9c14eb53997_m.jpg","CountryName":"德国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Germany.png","SortIndex":21,"ProductType":1}]
        },
        '3':{
            Products: [{"ProductId":"2dab17ce-d4d8-4c6f-9d01-37fb052916d0","Name":"【爆款】【黑五秒杀特价】诺大侠英国代购Swing系列中款全拉链湖蓝色钱包。可以放下iphone 6plus手机，可以平放纸币。","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M08/2E/09/CgvUA1ZS8SeAbqlCAADXhMCOnik860-lists_ls.jpg","Stock":6,"Price":1500.0,"MarketPrice":0.0,"SellerId":5956175,"SellerName":"英国买手阿诺","SellerLogo":"http://p10.img.ymatou.com/G02/M09/5A/6A/CgvUA1XxkpuATCHqAABOmq2OXgk133_m.jpg","CountryName":"英国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/England.png","SortIndex":1,"ProductType":1},{"ProductId":"2a9f2f97-620e-4767-9570-6abafe6d2e9d","Name":"【贝海直邮.黑五】kenzo 虎头鞋；男女都有诶！超级火爆好穿，1279拼邮；1359贝海直邮","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M06/26/D7/CgvUA1ZR5GSAHeCMAACMK2Sfoo8854-lists_ls.jpg","Stock":3,"Price":1279.0,"MarketPrice":0.0,"SellerId":7270677,"SellerName":"CC君时尚小买手","SellerLogo":"http://p9.img.ymatou.com/G02/M07/79/67/CgvUA1Y3WXOAZKSyAABcIkEScRk629_m.jpg","CountryName":"法国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/France.png","SortIndex":3,"ProductType":1},{"ProductId":"0f033c52-8b30-4438-9906-1669f900becc","Name":"明星同款瑞典品牌   明星同款瑞典品牌Acne studio最新爆款羊羔毛围巾200cm*70cm人手必备，任意搭配，搭配出不同的风格，多色可选。 ","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M08/E9/9F/CgvUBFZMnPOAdPsOAABJurC1Dbg513-lists_ls.jpg","Stock":3,"Price":1199.0,"MarketPrice":0.0,"SellerId":1689936,"SellerName":"aprilice_yang","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/1689936_d37a41933cdf4c30940d4946e0db3750_m.jpg","CountryName":"瑞典","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Sweden.png","SortIndex":4,"ProductType":1},{"ProductId":"033a7590-7212-4953-b61d-14e412dde9b3","Name":"*【全国联保！全年最低】最经典【Match双心链】施华洛世奇以象征浓情爱意的交叉心为灵感，进口【镀金和镀白金】象征和谐爱情，国内1180元1062708","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M06/DB/CB/CgvUBFZMC1WAdi_bAACZBLao3w4854-lists_ls.jpg","Stock":83,"Price":565.0,"MarketPrice":0.0,"SellerId":1114660,"SellerName":"m181欧洲购","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/1114660_e295bb025ce842508102f6b507acd80c_m.jpg","CountryName":"德国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Germany.png","SortIndex":9,"ProductType":1},{"ProductId":"cbe790fd-c999-44b1-be32-077b3c8fab16","Name":"【爆款】0元代购！Burberry巴宝莉男士Polo衫短袖T恤特价中的特价每个颜色只有几件疯抢拍下备注颜色自己把握尺寸不退不换！","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M04/DB/48/CgvUBFZMBg-APz5FAABAYoT3UlE184-listb_lb.jpg","Stock":2,"Price":690.0,"MarketPrice":0.0,"SellerId":6808550,"SellerName":"otaobuy","SellerLogo":"http://p7.img.ymatou.com/G02/M04/21/87/CgvUA1Ykr9iAGL0CAABMHCjIlPo490_m.jpg","CountryName":"英国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/England.png","SortIndex":10,"ProductType":1},{"ProductId":"6bb7de05-9ae0-4671-8413-a502aaac74e9","Name":"6罐直邮 英国牛栏COW&GATE婴幼儿奶粉3段1-2岁 900g","PicUrl":"http://p9.img.ymatou.com/G02/upload/product/big/M06/9B/B6/CgvUBVX2lxGAb0dbAANfC6rNsFU875_s.jpg","Stock":190,"Price":852.00,"MarketPrice":1388.0,"SellerId":1570211,"SellerName":"欧淘","SellerLogo":"http://p10.img.ymatou.com/G02/M02/39/61/CgvUBVZDAWOAWOzvAABAJmOwQuY518_o.jpg","CountryName":"英国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/England.png","SortIndex":21,"ProductType":0}]
        },
        '4':{
            Products: [{"ProductId":"8592f70b-359a-4514-8437-30a36167dc0b","Name":"*【爆款】【全国联保！全年最低】经典【Swan天鹅项链】施华洛世奇的传奇工艺及纯洁永恒【进口镀四层24K真金】辨识度强！国内1100无折扣5063921/5121597/5007735","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M01/C2/37/CgvUBVZK5JOAWVmIAADFrKsyZrM817-lists_ls.jpg","Stock":22,"Price":535.0,"MarketPrice":0.0,"SellerId":1114660,"SellerName":"m181欧洲购","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/1114660_e295bb025ce842508102f6b507acd80c_m.jpg","CountryName":"德国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Germany.png","SortIndex":2,"ProductType":1},{"ProductId":"1bce2b18-44f0-4fcc-932f-bee48790f1de","Name":"厂家回馈低至五折！Lytess夜间10日瘦身裤/美体7分裤，集中减脂，去橘皮，紧致多项功能，在美梦中轻松享受瘦身效果！获43届美体大奖 这款高科技含量的产品是三效合一é324","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M09/CA/26/CgvUBFZLO_2ATa9YAAF6OMIuu_Q735-lists_ls.jpg","Stock":276,"Price":388.0,"MarketPrice":0.0,"SellerId":1368098,"SellerName":"巴黎宝贝药妆","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/1368098_34baf560a6554854b9c48f0f917cd4f7_m.png","CountryName":"法国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/France.png","SortIndex":3,"ProductType":1},{"ProductId":"04cda154-543b-43fd-8063-10f49ad4dc5f","Name":"*【爆款】零利出清【国内近900一分不少】施华洛世奇【全球联保】《星星的你》全智贤专属品，时髦的4GB USB盘&圆珠笔经典珍珠白套装,送领导和爱人的首选！1148300","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M06/E0/D3/CgvUBVZMNd-ATGwqAACYM3b_5UI510-lists_ls.jpg","Stock":16,"Price":535.0,"MarketPrice":0.0,"SellerId":1114660,"SellerName":"m181欧洲购","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/1114660_e295bb025ce842508102f6b507acd80c_m.jpg","CountryName":"德国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Germany.png","SortIndex":4,"ProductType":1},{"ProductId":"4937298f-1be5-4151-8fb9-bfb451c1fa39","Name":"【爆款】【最新纪念款】GOC IN C 升级版克罗心小熊热水袋 2015年全新插电式热水袋 可以用手机app调节温度 手机党也可以把手放在里面玩手机噢 两周内DHL发回 国内包邮转发","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M00/2D/2F/CgvUBFZS8lSAZgYyAADMchFeni4166-lists_ls.jpg","Stock":97,"Price":389.0,"MarketPrice":0.0,"SellerId":1485252,"SellerName":"aimaiuk","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/1485252_0c7d61635f544ce0bbeb1b3bead50cfe_m.jpg","CountryName":"英国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/England.png","SortIndex":5,"ProductType":1},{"ProductId":"3d0565ee-d680-49a3-9da4-f23247630a76","Name":"【黑五爆款限量秒杀】CALZADONIA 意大利国宝级打底裤，黑色前扣防皮裤，今年新款PUSH UP，有提臀收腹效果，比普通款加厚，建议尺码(S/27、28）（M/29、30）（L/31、32）","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M0A/2E/20/CgvUA1ZS8-OAH6rRAABeocOp7_k523-lists_ls.jpg","Stock":29,"Price":299.0,"MarketPrice":0.0,"SellerId":6571150,"SellerName":"意大利时尚买手","SellerLogo":"http://p8.img.ymatou.com/G02/M04/3A/CD/CgvUA1ZDD5KAE_TVAABh9LJrhzM438_m.jpg","CountryName":"意大利","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Italy.png","SortIndex":6,"ProductType":1},{"ProductId":"407fafee-e8b1-4f6a-b29c-2b26dc53483a","Name":"【爆款】GOC IN C * SSUR 联手打造小熊充电宝-粉色拳套拳击熊 又是一个创新细节设计 粉色拳套是不是太骚 尺寸是14X12X17 cm,充电宝容量8000毫安 2-3周DHL发回 国内包邮转发","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M02/F5/29/CgvUA1ZNZ6GANkSxAAByozVS914624-lists_ls.jpg","Stock":82,"Price":388.0,"MarketPrice":0.0,"SellerId":1485252,"SellerName":"aimaiuk","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/1485252_0c7d61635f544ce0bbeb1b3bead50cfe_m.jpg","CountryName":"英国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/England.png","SortIndex":7,"ProductType":1},{"ProductId":"745c1646-87ea-4ae7-a629-dee9965138cb","Name":"贝德玛卸妆水粉色500ml～两瓶包邮，拍两瓶～继续升温特价促销～两瓶包邮，拼箱回国哦～","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M03/B8/C1/CgvUA1ZKhFOAVF8iAABs6_K-mRU082-listb_lb.jpg","Stock":193,"Price":99.0,"MarketPrice":0.0,"SellerId":1900905,"SellerName":"peixiaopei97","SellerLogo":"http://p6.img.ymatou.com/G02/M0A/88/CB/CgvUA1YIH5mAXsq7AADP_Q-Djyk759_m.jpg","CountryName":"法国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/France.png","SortIndex":8,"ProductType":1},{"ProductId":"dcea8b0e-bf1b-4ecf-92df-75587a033de5","Name":"英国ANNAMITO瘦腿袜680D(连裤袜款).内层加微绒设计 热能波保暖 极致瘦腿效果，瘦身保暖一步到位。均码的，弹力很大，一般尺码的MM都可以穿。颜色留言。Y10","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M00/4B/A0/CgvUBFZEQuyAdxodAAFDov-Fj4Q060-lists_ls.jpg","Stock":73,"Price":89.0,"MarketPrice":0.0,"SellerId":1205650,"SellerName":"慕尼黑啤酒","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/1205650_076a7de3a7f84bc98c83f4204a497b9d_m.png","CountryName":"德国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Germany.png","SortIndex":9,"ProductType":1},{"ProductId":"460d2857-6ef7-460a-8ee6-17f38c88adc9","Name":"【黑五特价秒杀】calzedonia左岸潇款皮裤松紧款打底裤尺码S-L 版型略小于杨幂款 贴身 有弹力 超舒适 非偏远地区 圆通包邮 ","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M09/CA/6D/CgvUBVZLPAeAO9XtAACxFvg3cOs229-lists_ls.jpg","Stock":3,"Price":268.0,"MarketPrice":0.0,"SellerId":2158608,"SellerName":"小蘑菇意大利代购","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/2158608_e5371b8ad75d41bf946981c6ce88c4bc_m.jpg","CountryName":"意大利","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Italy.png","SortIndex":11,"ProductType":1},{"ProductId":"04cda154-543b-43fd-8063-10f49ad4dc5f","Name":"*【爆款】零利出清【国内近900一分不少】施华洛世奇【全球联保】《星星的你》全智贤专属品，时髦的4GB USB盘&圆珠笔经典珍珠白套装,送领导和爱人的首选！1148300","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M06/E0/D3/CgvUBVZMNd-ATGwqAACYM3b_5UI510-lists_ls.jpg","Stock":16,"Price":535.0,"MarketPrice":0.0,"SellerId":1114660,"SellerName":"m181欧洲购","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/1114660_e295bb025ce842508102f6b507acd80c_m.jpg","CountryName":"德国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Germany.png","SortIndex":13,"ProductType":1},{"ProductId":"eee1ccf8-8992-463f-998c-40ad3426c6ab","Name":"【爆款】【最新纪念款】GOC IN C 升级版克罗心小熊热水袋 2015年全新插电式热水袋 可以用手机app调节温度 手机党也可以把手放在里面玩手机噢 两周内DHL发回 国内包邮转发","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M03/F1/89/CgvUBVZNQXeAVv1lAADMchFeni4918-lists_ls.jpg","Stock":95,"Price":498.0,"MarketPrice":0.0,"SellerId":1485252,"SellerName":"aimaiuk","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/1485252_0c7d61635f544ce0bbeb1b3bead50cfe_m.jpg","CountryName":"英国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/England.png","SortIndex":14,"ProductType":1},{"ProductId":"904eef49-e33a-43ff-ada3-0d207f7527c3","Name":"【爆款】【迷你天使】Tangle angel迷你天使梳系列，环保PVC材质，防分叉，打结，静电，还能杀菌，按摩头皮毛血管，1周内DHL发回，国内包邮转发，尺寸15X7.5cm","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M0A/F6/FA/CgvUBFZNgXGAEKlIAABULWK0TvE582-lists_ls.jpg","Stock":65,"Price":158.0,"MarketPrice":0.0,"SellerId":1485252,"SellerName":"aimaiuk","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/1485252_0c7d61635f544ce0bbeb1b3bead50cfe_m.jpg","CountryName":"英国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/England.png","SortIndex":15,"ProductType":1},{"ProductId":"edeb09a7-770e-44e8-a998-075cb131727f","Name":"Nuxe欧树蜂蜜洁面啫喱乳200ML","PicUrl":"http://p7.img.ymatou.com/G02/upload/product/big/M03/64/02/CgvUA1YX4LaAUVoGAADSoETMOoA582_s.jpg","Stock":290,"Price":99.00,"MarketPrice":199.0,"SellerId":2712477,"SellerName":"悦购淘欧洲","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/original/2712477_00246db1a4b84b3a8a9921e83d4a3e8c_o.jpg","CountryName":"法国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/France.png","SortIndex":17,"ProductType":0},{"ProductId":"ae81fa13-9103-49ad-a326-7b02cd176cba","Name":"法国Bioderma贝德玛净妍卸妆水蓝水500ml","PicUrl":"http://pm3.img.ymatou.com/G02/upload/product/big/M0A/05/8C/CgvUBVZOidqAC8XgAAGchQsqj7I758_s.jpg","Stock":107,"Price":99.00,"MarketPrice":169.0,"SellerId":2712477,"SellerName":"悦购淘欧洲","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/original/2712477_00246db1a4b84b3a8a9921e83d4a3e8c_o.jpg","CountryName":"法国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/France.png","SortIndex":18,"ProductType":0},{"ProductId":"5170e164-a554-4ba2-a3dd-5090e91982c9","Name":"西班牙皇室御用Casmara卡蔓面膜(4种可选)","PicUrl":"http://p10.img.ymatou.com/upload/product/big/M01/CF/4D/CgrTA1XYaTeAOiQ9AAEHF8xGT3U570_s.jpg","Stock":724,"Price":109.00,"MarketPrice":199.0,"SellerId":2712477,"SellerName":"悦购淘欧洲","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/original/2712477_00246db1a4b84b3a8a9921e83d4a3e8c_o.jpg","CountryName":"法国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/France.png","SortIndex":19,"ProductType":0},{"ProductId":"cf408de1-e095-4e7d-87f2-cb926e243793","Name":"德国碧然德净水器3.5L Brita Marella 一壶1芯","PicUrl":"http://pm5.img.ymatou.com/G02/upload/product/big/M02/5C/4F/CgvUBVZFTQ6AebpTAANiqCea5I8048_s.jpg","Stock":2946,"Price":139.00,"MarketPrice":239.0,"SellerId":1500311,"SellerName":"跨境趣","SellerLogo":"http://pm3.img.ymatou.com/G02/M05/EA/A6/CgvUA1Y993CAVmwTAAALNqJdfd0884_o.png","CountryName":"荷兰","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Holland.png","SortIndex":20,"ProductType":0},{"ProductId":"8d87cdf2-1218-4abb-b0fa-f89ecff112cb","Name":"德国Salus铁元果蔬营养液500ml 补血补铁","PicUrl":"http://pm1.img.ymatou.com/G02/upload/product/big/M09/0F/DC/CgvUBFZAVvmALieTAAORFTRU2j8998_s.jpg","Stock":6131,"Price":117.00,"MarketPrice":199.0,"SellerId":7290487,"SellerName":"淘淘羊欧洲生活馆","SellerLogo":"http://pm3.img.ymatou.com/G02/M05/EA/A6/CgvUA1Y993CAVmwTAAALNqJdfd0884_o.png","CountryName":"德国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Germany.png","SortIndex":21,"ProductType":0},{"ProductId":"222ae2bd-c52c-4ca1-80ca-e9aaebebf63e","Name":"德国Brita 碧然德滤水壶滤芯6只装","PicUrl":"http://pm3.img.ymatou.com/G02/upload/product/big/M04/9F/CE/CgvUA1Y5sDyAUg01AAHnQitk0vc445_s.jpg","Stock":1248,"Price":169.00,"MarketPrice":389.0,"SellerId":7290487,"SellerName":"淘淘羊欧洲生活馆","SellerLogo":"http://pm3.img.ymatou.com/G02/M05/EA/A6/CgvUA1Y993CAVmwTAAALNqJdfd0884_o.png","CountryName":"德国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Germany.png","SortIndex":23,"ProductType":0},{"ProductId":"58472dc0-e0e0-4b5b-bf69-65d97a6055d1","Name":"Fairy超浓缩洗洁精900ml","PicUrl":"http://pm5.img.ymatou.com/G02/upload/product/big/M06/B0/E9/CgvUBVY6x3mABZ-QAARBa8XvepQ004_s.jpg","Stock":499,"Price":58.00,"MarketPrice":88.0,"SellerId":5331894,"SellerName":"HomeStory","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/original/5331894_e2e9d6ed6e4e4eba98e754acdf707673_o.jpg","CountryName":"西班牙","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Spain.png","SortIndex":24,"ProductType":0},{"ProductId":"f84cd531-68e3-425d-8e95-d0d9bdbb08ef","Name":"EVAX超薄轻柔棉面卫生护垫40片装","PicUrl":"http://pm5.img.ymatou.com/G02/upload/product/big/M03/B1/58/CgvUBVY6zKSAJb5mAAVEt7ZWJmY885_s.jpg","Stock":151,"Price":38.00,"MarketPrice":48.0,"SellerId":5331894,"SellerName":"HomeStory","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/original/5331894_e2e9d6ed6e4e4eba98e754acdf707673_o.jpg","CountryName":"西班牙","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Spain.png","SortIndex":25,"ProductType":0},{"ProductId":"192863cf-de90-4ca7-a3d1-d810d516721a","Name":"【保税】德国维蕾德WELEDA金盏花婴儿护臀霜 尿疹膏75ml","PicUrl":"http://p9.img.ymatou.com/G02/upload/product/big/M02/4E/4A/CgvUBFYDy3SAIArWAAFy-y7BNkY423_s.jpg","Stock":13,"Price":52.00,"MarketPrice":89.0,"SellerId":531966,"SellerName":"Babynovo官方旗舰店","SellerLogo":"http://pm3.img.ymatou.com/G02/M05/EA/A6/CgvUA1Y993CAVmwTAAALNqJdfd0884_o.png","CountryName":"德国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Germany.png","SortIndex":26,"ProductType":0},{"ProductId":"0cca87e1-5de5-4b1e-828c-5af9a8f91160","Name":"德国APTAMIL爱他美精选全段奶粉3罐装","PicUrl":"http://p6.img.ymatou.com/G02/upload/product/big/M05/BB/AF/CgvUBFYd5IeAPzr8AAUdjf8kyiY429_s.jpg","Stock":1600,"Price":387.0000,"MarketPrice":599.0,"SellerId":1500311,"SellerName":"跨境趣","SellerLogo":"http://pm3.img.ymatou.com/G02/M05/EA/A6/CgvUA1Y993CAVmwTAAALNqJdfd0884_o.png","CountryName":"荷兰","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Holland.png","SortIndex":27,"ProductType":0}]
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
         * @param  {string} modId 模块编号
         */
        activityList: function (aid, pid,modId) {
            console.log(aid,pid,modId)
            if(aid === '0'){
                console.log(productData[pid])
                var html = ejs.render($('#active-tpl').html(), productData[pid]);
                $('#'+modId).html(html);
            }else{
                getActivityJsonP(aid, pid, 50, function (data) {
                    if (data && data.Products) {
                        var html = ejs.render($('#active-tpl').html(), data);
                         $('#'+modId).html(html);
                    }
                });
            }

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
    var checkCoordinate = function () {
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
        $('.ymt-person').css({
            left: left
        })

        if (active.index() === 0) {
            coor.addClass('first');
        }

        if (active.index() === li.size()-1) {
            coor.addClass('last');
        }
    }

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
                $('#bf-tab li').removeClass('active')
                    .filter('[data-href="' + el.id + '"]')
                    .addClass('active');
                checkCoordinate();
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

        }).on('click', '#bf-tab li', function () {
            var $this = $(this);
            $('#bf-tab li').removeClass('active');
            $this.addClass('active');
            location.hash = $this.attr('data-href');

            stopCheck = true;
            setTimeout(function () {
                checkCoordinate();
            });

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
