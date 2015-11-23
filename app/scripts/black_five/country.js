/* global ejs: true,YmtApi:true */

/**
 * 国家馆
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
            Products:[{"ProductId":"11afa3af-300b-4535-9712-01882fc28441","Name":"Gucci大号单肩包，很大很大一款哦。水晶皮，合适的妹子值得入手哦，专柜5800，黑五白菜价到手，限量款秒杀！","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M01/D7/EA/CgvUBVZL5R2AbQUGAACoS1mqY3c212-lists_ls.jpg","Stock":1,"Price":3298.0,"MarketPrice":0.0,"SellerId":385362,"SellerName":"Easybuy美国代购","SellerLogo":"http://p8.img.ymatou.com/G02/M04/72/3B/CgvUA1Y3Cu-AYCNqAABSSwAKGbo377_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":1,"ProductType":1},{"ProductId":"776879a3-c446-4196-be81-4cc50f16e67c","Name":"【爆款】黑五秒杀团购宝格丽慈善款项链。925纯银，宝格丽家性价比最高的饰品。包装证书齐全，送人自用都超级合适哦！数量有限^ 年末好礼非他莫属❤️国内顺丰到付^","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M0B/09/BD/CgvUBFZO1QmAQrSHAACSG0JeTY4143-lists_ls.jpg","Stock":20,"Price":3600.0,"MarketPrice":0.0,"SellerId":1704774,"SellerName":"Hello_KiKi","SellerLogo":"http://p6.img.ymatou.com/G02/M0B/91/80/CgvUA1X15GGAM2pXAAA_FSYJIyI549_m.jpg","CountryName":"意大利","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Italy.png","SortIndex":2,"ProductType":2},{"ProductId":"03cc9560-1dc9-43be-9d71-110f6d371137","Name":"【Jimmy choo VP 包包5折、鞋子6折秒杀 】细跟高跟凉鞋","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M00/BE/EB/CgvUBFZKzFWAE9jwAAB_gPGxiWk839-listb_lb.jpg","Stock":3,"Price":3480.0,"MarketPrice":0.0,"SellerId":1901847,"SellerName":"够巴黎_gouparis","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/1901847_1d37441e4c4c4f05ba3bfe2597b874c5_m.jpg","CountryName":"法国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/France.png","SortIndex":3,"ProductType":3},{"ProductId":"fed260f2-e4fb-4f4b-9fc4-d1efde6fa5c3","Name":"【爆款】BV 全编织长款全拉链皮夹 拼邮回国 国内顺丰到付","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M07/C7/3C/CgvUBVZLGKiAYCxvAACiPptpOVk006-lists_ls.jpg","Stock":13,"Price":3499.0,"MarketPrice":0.0,"SellerId":484025,"SellerName":"千遍一律","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/484025_972489b6fce64fc483ee6bc81f1d7420_m.jpg","CountryName":"英国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/England.png","SortIndex":4,"ProductType":4},{"ProductId":"3278c62a-9eb6-419c-8613-b7a7d6c73cdd","Name":"Dior so real墨镜 有盒有袋。爆款抢翻天。包邮国际EMS+国内顺丰","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M05/F8/7A/CgvUBVZNjfmAHtfbAAAgIIAFMaI647-lists_ls.jpg","Stock":3,"Price":3499.0,"MarketPrice":0.0,"SellerId":515425,"SellerName":"猫儿本小妞","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/515425_bb513bbe70534a04908f1beba81bb6ed_m.jpg","CountryName":"澳大利亚","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Australia.png","SortIndex":5,"ProductType":5},{"ProductId":"288112a9-06fb-4ad6-8b22-042d989b8221","Name":"Bottega Veneta 翻盖+拉链 长款钱夹 手拿包 可放6plus 多色可选   ","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M08/05/40/CgvUBVZOhQ6AH_P8AAB2w2DDSe0636-lists_ls.jpg","Stock":2,"Price":3500.0,"MarketPrice":0.0,"SellerId":6991154,"SellerName":"Goitaly1998","SellerLogo":"http://p7.img.ymatou.com/G02/M00/C3/7F/CgvUBFY7oYuAS5n1AAAsb_J798M333_m.jpg","CountryName":"意大利","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Italy.png","SortIndex":6,"ProductType":6},{"ProductId":"9d08e7f6-28e4-434e-afb7-381523f1e245","Name":"【爆款】Gucci 帆布单肩斜跨帆布包 有拉链 拼邮回国 国内顺丰到付","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M08/0A/6B/CgvUA1ZO0cGAEhALAADK2w-TbZo253-lists_ls.jpg","Stock":6,"Price":3600.0,"MarketPrice":0.0,"SellerId":484025,"SellerName":"千遍一律","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/484025_972489b6fce64fc483ee6bc81f1d7420_m.jpg","CountryName":"英国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/England.png","SortIndex":7,"ProductType":7},{"ProductId":"44fd68e2-3ca5-43e0-b539-6963f40d0293","Name":"【黑五到手价3188元！】COACH SWAGGER 27 红色拼接 国内专柜6000元左右，使用码头黑五优惠券减300，ABC店内优惠券减400. ","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M0B/F3/26/CgvUBVZNV_-AUkxJAACWT9Fa7TA295-lists_ls.jpg","Stock":29,"Price":3888.0,"MarketPrice":0.0,"SellerId":314343,"SellerName":"ABC_全球购","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/314343_957fd51fceb1415d89ca3c2b741d1441_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":8,"ProductType":8},{"ProductId":"152b274d-f273-487d-beac-99d02e72291d","Name":"【爆款】0元代购！Burberry经典款饺子包打折村新到数量很少有拉链再等就没货了码头售价最低而且直邮不挣钱只挣信誉甩货就像不要钱各种裸价爽到你尖叫\r\n","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M09/FE/AD/CgvUBVZN3FeACMl_AABbk1Jw6_Q454-listb_lb.jpg","Stock":5,"Price":3980.0,"MarketPrice":0.0,"SellerId":6808550,"SellerName":"otaobuy","SellerLogo":"http://p7.img.ymatou.com/G02/M04/21/87/CgvUA1Ykr9iAGL0CAABMHCjIlPo490_m.jpg","CountryName":"英国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/England.png","SortIndex":9,"ProductType":9},{"ProductId":"d19ee08c-5548-48e3-9237-838a723e9c51","Name":"【不抢就没啦】Alexander Wang经典短靴：检验真理的唯一标准就是实践，检验一双好鞋的标准就是很多人买！玫瑰跟的大王短靴，入手即可帅！","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M04/F3/BC/CgvUA1ZNV7qAFGPJAABiD4SsUfY744-lists_ls.jpg","Stock":2,"Price":3980.0,"MarketPrice":0.0,"SellerId":2150832,"SellerName":"Tlady","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/2150832_cdb5f3f5806c404fa52e5c3cd4dc7005_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":10,"ProductType":10},{"ProductId":"032b19b8-bcbb-4f4d-8273-0a7e9cafc4fa","Name":"【不抢就没了】Gucci黑五专柜抢货折扣📢📢📢3990到手 全年最黑价 ，国内现货8000+，黑五特价3990人民币，使用洋码头优惠券立减300元，到手只要3690元！","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M02/F0/8A/CgvUBVZNNWmAe_iMAAAr23Kp6GY205-lists_ls.jpg","Stock":10,"Price":3990.0,"MarketPrice":0.0,"SellerId":433316,"SellerName":"保健特区","SellerLogo":"http://p10.img.ymatou.com/G02/M0B/77/74/CgvUBFYGtIeAENw_AACEpzYthEo254_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":11,"ProductType":11},{"ProductId":"fe0b47f1-3581-4cc6-8e9b-484fda722745","Name":"Hermes爱马仕经典珐琅瓷手镯窄版～普通H头现在惊爆价💥💥3999¥包直邮包税到手～难得颜色这么全，总有一款适合你","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M03/C4/F2/CgvUA1ZK-5CAb8EcAABznjAx6WU005-lists_ls.jpg","Stock":8,"Price":3999.0,"MarketPrice":0.0,"SellerId":2244788,"SellerName":"楽楽meatballrikki","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/2244788_35599d2e9559435a9abc23eba935c92c_m.png","CountryName":"英国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/England.png","SortIndex":12,"ProductType":12},{"ProductId":"03c93736-e0d0-4ba4-b3e0-035b9d33a959","Name":"【黑五抢遍美国不打烊】哭泣Gucci黑五专柜抢货折扣📢📢📢全年最黑价 不抢就没啦","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M03/FB/B5/CgvUA1ZNrYKAU7txAACFps9hdRA724-lists_ls.jpg","Stock":50,"Price":4090.0,"MarketPrice":0.0,"SellerId":421045,"SellerName":"亚平宁风暴","SellerLogo":"http://p7.img.ymatou.com/G02/M01/9C/0B/CgvUBVY5j_CAQWPyAABybtf4RQk183_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":13,"ProductType":13},{"ProductId":"5a21b932-87b6-475f-9748-f31994a2438c","Name":"【黑五抢遍美国不打烊】老友迹美代 3.1philip lim mini挎包。 觉得黑色略显普通。就来这款藏青色吧。也非常百搭。尺寸18x23x9cm .肩带长56cm","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M05/77/4B/CgvUBVZGysOAJ89wAACAe7z0_ec007-lists_ls.jpg","Stock":11,"Price":4299.0,"MarketPrice":0.0,"SellerId":2650155,"SellerName":"老友迹","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/2650155_de72c0c5f3b84ad388a0e5f96a2cf3c6_m.JPG","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":14,"ProductType":14},{"ProductId":"85324215-665a-45fc-b54f-2b5c9db133f3","Name":"【爆款】Gucci 牛皮波士顿桶包 木有肩带 拼邮回国 国内顺丰到付 ","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M04/C7/1B/CgvUBFZLGh-AARvCAACRmnG0zE0763-lists_ls.jpg","Stock":10,"Price":4499.0,"MarketPrice":0.0,"SellerId":484025,"SellerName":"千遍一律","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/484025_972489b6fce64fc483ee6bc81f1d7420_m.jpg","CountryName":"英国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/England.png","SortIndex":15,"ProductType":15},{"ProductId":"1641f092-1458-4c39-a5ac-a23487134418","Name":"最复古-RIMOWA CLASSIC FLIGHT铝镁合金登机箱行李箱，复古的设计，彰显品格，万箱朝拜。20-32寸尺寸齐全","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M08/E2/DF/CgvUA1ZMQp2Ae9p8AABPUqQuHCg751-lists_ls.jpg","Stock":5,"Price":4580.0,"MarketPrice":0.0,"SellerId":1594967,"SellerName":"非常德国","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/1594967_1c27afc74c7d4e3da426e5a1259cc679_m.jpg","CountryName":"德国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Germany.png","SortIndex":16,"ProductType":16},{"ProductId":"83913760-9fae-47f3-a769-bdaf60f6aeaf","Name":"【黑五抢遍美国不打烊】Canada Goose 员工折扣全美最低价最受欢迎的款2⃣️Trillium中长款不过膝！衣长80cm左右 模特160/48 穿xs 四级保暖抗寒-20度帽子可拆卸大爱狼帽","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M02/E8/85/CgvUA1ZMhGaAJAs1AACzAcTKVg8083-lists_ls.jpg","Stock":12,"Price":4798.0,"MarketPrice":0.0,"SellerId":4733,"SellerName":"BostonExpress","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/4733_56fd8ecdf6e2445cbf6e314f481db0d3_m.JPG","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":17,"ProductType":17},{"ProductId":"a27af252-fc0d-457c-960e-9dec2e3d20ee","Name":"【韩国黑五折上折】明星同款！～这款真的是港味十足哦，双肩限量版，全黑色，包身全部都是鉚钉修饰，包包一看就高大上！潮人必备哦~限量款，需要的亲抓紧哦","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M01/DB/3E/CgvUA1ZL_VuAJKsSAADi9pG_yUE705-lists_ls.jpg","Stock":30,"Price":4999.0,"MarketPrice":0.0,"SellerId":362161,"SellerName":"jacking26","SellerLogo":"http://p7.img.ymatou.com/G02/M02/44/AE/CgvUA1Xv_B-ARbfRAABQOs98xAE611_m.jpg","CountryName":"韩国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Korea.png","SortIndex":18,"ProductType":18},{"ProductId":"0e4f2bf0-7dcd-4173-b6c7-f6e193bd53aa","Name":"Gucci新款波士顿，帆布印花搭配真皮桶包，国内有售，亲们可以自己去看看价格哦。约32-22-18，配长带款。折后价最低5168可到手，堪比国内五折还要低！","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M01/D7/D4/CgvUBFZL5q2AA2kZAAEOOmmJ2BU653-lists_ls.jpg","Stock":3,"Price":5295.0,"MarketPrice":0.0,"SellerId":385362,"SellerName":"Easybuy美国代购","SellerLogo":"http://p8.img.ymatou.com/G02/M04/72/3B/CgvUA1Y3Cu-AYCNqAABSSwAKGbo377_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":19,"ProductType":19},{"ProductId":"58e8687b-ea61-42cb-8bcd-b5796ddf60ad","Name":"Adidas YZY Yeezy 350 Boost Moonrock 侃爷 超限量 灰椰子 11月14号发售 由卡戴珊大姐首次曝光…","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M07/02/2B/CgvUBFZOJRmAXOUpAAEY-lbRWs0583-lists_ls.jpg","Stock":2,"Price":5299.0,"MarketPrice":0.0,"SellerId":1423511,"SellerName":"美国洛杉矶代购狂人","SellerLogo":"http://p6.img.ymatou.com/G02/M04/5F/C4/CgvUBVXyL2KAVmxnAABqdyG5UvI537_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":20,"ProductType":20},{"ProductId":"3ee4efe1-d11f-4efc-a2f5-50dd6fcb4bc5","Name":"「拼邮转顺丰」Dior粉色长款钱包。漆皮材质，很亮，公主粉，最适合淑女的你，淑女必入一只。USH00198\n","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M0A/08/D2/CgvUA1ZOtt-AJv0xAACJggY06oI470-lists_ls.jpg","Stock":1,"Price":6900.0,"MarketPrice":0.0,"SellerId":451893,"SellerName":"Hiimart","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/451893_589fd6cd614547459e5d9f44dd222a39_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":23,"ProductType":23},{"ProductId":"736ee7fb-7e0d-4891-bd39-9ed6f11db628","Name":"【爆款】chloe 高圆圆同款！女包 小猪包 drew  小号 尺寸：20*17*6.5cm ··黑色 红色！各1只！出完无··国内不少于15000","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M02/F9/57/CgvUBFZNm1iAAvqUAACqmRrFwEE788-lists_ls.jpg","Stock":3,"Price":7500.0,"MarketPrice":0.0,"SellerId":6746995,"SellerName":"summerluxury","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/6746995_3dcfb8bb7a304c488cf6b4daf2624b8f_m.jpg","CountryName":"意大利","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Italy.png","SortIndex":24,"ProductType":24},{"ProductId":"6db4c605-1674-4a85-87f3-47b6133f8bfb","Name":"【黑五爆款】prada经典小号黑色十字纹杀手包bn2316 尺寸：26x17x10","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M02/C7/B2/CgvUBFZLIGeAEm7wAACUCkzewMg731-lists_ls.jpg","Stock":2,"Price":7600.0,"MarketPrice":0.0,"SellerId":2776062,"SellerName":"gxn141021","SellerLogo":"http://p9.img.ymatou.com/G01/M01/FD/67/CgrTA1XdoOqAHTTtAAA2yKpNEZw975_m.jpg","CountryName":"意大利","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Italy.png","SortIndex":25,"ProductType":25},{"ProductId":"901f3c8b-7c92-4021-a7c4-e0ba830629ad","Name":"LV alma bb 漆皮款 只此一次 如此低价，不买悔一生哈","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M06/C9/9C/CgvUBVZLM3uAbFjAAABsjIwuWW4161-lists_ls.jpg","Stock":3,"Price":9800.0,"MarketPrice":0.0,"SellerId":3635770,"SellerName":"lushan991","SellerLogo":"http://p6.img.ymatou.com/G02/M01/71/F2/CgvUA1ZGcnuAYuwsAABchmy8yKk269_m.jpg","CountryName":"英国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/England.png","SortIndex":27,"ProductType":27},{"ProductId":"4d600f1d-1751-4358-93c0-e541cfd87d02","Name":"爆款lv秋冬限量版Alma BB 带肩带 挂饰很可爱，有色彩鲜艳、富有趣味的图案，注定会成为收藏家的宠儿。尺寸25*19*12，精美绝伦，10900！","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M0A/FA/87/CgvUBFZNqa-AbHh9AADM5h1cAI4538-lists_ls.jpg","Stock":1,"Price":10900.0,"MarketPrice":0.0,"SellerId":1594768,"SellerName":"代购小旋风2015","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/1594768_46359bd66f3b4b0cb25d8d787e0345bd_m.jpg","CountryName":"英国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/England.png","SortIndex":28,"ProductType":28},{"ProductId":"bcea86fe-66a9-4785-8089-5ebc9b2643b5","Name":"【爆款】 Fendi 小怪兽系列 蓝眼睛 尼龙双肩背包 藏蓝色  男女同款 专柜一包难求 【黑色】 给力！超级折扣 不要8800 不要代购费 只有...‼️","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M0A/C8/13/CgvUA1ZLGxuAAcpCAAF6f0PeLIU894-lists_ls.jpg","Stock":3,"Price":6800.0,"MarketPrice":0.0,"SellerId":6685132,"SellerName":"嘎啦在意呆","SellerLogo":"http://p7.img.ymatou.com/G02/M0A/B2/8B/CgvUBVZKAA2ABMhkAABoy6XdxGU121_m.jpg","CountryName":"意大利","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Italy.png","SortIndex":29,"ProductType":29},{"ProductId":"2a91d953-7992-44ff-bddf-6c0c4d08efe7","Name":"loewe 巴塞罗那系列～ 下单请备注颜色～ 直邮","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M02/F8/CF/CgvUBFZNlMmALosTAADHSThM-tI798-lists_ls.jpg","Stock":3,"Price":16500.0,"MarketPrice":0.0,"SellerId":1446582,"SellerName":"xarar","SellerLogo":"http://p7.img.ymatou.com/G01/M02/F5/BE/CgrTAVXc9OqAPMM9AABNgsu2zQI707_m.jpg","CountryName":"法国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/France.png","SortIndex":30,"ProductType":30},{"ProductId":"60fa43ae-d2af-495c-8c9d-8a95c6304108","Name":"意大利皮草家族Caberlotto手工制作的皮草大衣原价代购","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M01/01/AC/CgvUBFZOCcWAYRWrAAD2AsLaBfY829-lists_ls.jpg","Stock":1,"Price":17600.0,"MarketPrice":0.0,"SellerId":6991154,"SellerName":"Goitaly1998","SellerLogo":"http://p7.img.ymatou.com/G02/M00/C3/7F/CgvUBFY7oYuAS5n1AAAsb_J798M333_m.jpg","CountryName":"意大利","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Italy.png","SortIndex":31,"ProductType":31},{"ProductId":"4809e0c7-b1d6-4bf3-a330-dfd57a1c875c","Name":"Celine超好看秋冬新色 此色仅一只 没货 要的快秒走 好看到爆 ","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M04/F0/3E/CgvUA1ZNKBmAT5J_AADiDrH4Oio581-lists_ls.jpg","Stock":1,"Price":19400.0,"MarketPrice":0.0,"SellerId":1608680,"SellerName":"娜如奶奶","SellerLogo":"http://p6.img.ymatou.com/G02/M06/3D/B6/CgvUBFYVsDKAAPBtAACoKBJuzVg628_m.jpg","CountryName":"俄罗斯","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Russia.png","SortIndex":33,"ProductType":33},{"ProductId":"2c100b54-b62e-4481-9a90-34e1a7a10967","Name":"celine秋冬新款micro 气场女王必备包款 怎么背都有范 仅一只 ","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M01/EF/7D/CgvUBFZNKlKAFDujAAB-umjKJJk633-listb_lb.jpg","Stock":1,"Price":19400.0,"MarketPrice":0.0,"SellerId":1608680,"SellerName":"娜如奶奶","SellerLogo":"http://p6.img.ymatou.com/G02/M06/3D/B6/CgvUBFYVsDKAAPBtAACoKBJuzVg628_m.jpg","CountryName":"俄罗斯","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Russia.png","SortIndex":34,"ProductType":34},{"ProductId":"3d645a59-096d-4655-9043-5ecdcabb6861","Name":"celine最经典包包女王 电光蓝中号box 难买无敌 仅一只 奶奶最推荐 国内售价28000+","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M06/EE/D4/CgvUBVZNGzWAUknWAAB5kSN3TNA149-lists_ls.jpg","Stock":1,"Price":22600.0,"MarketPrice":0.0,"SellerId":1608680,"SellerName":"娜如奶奶","SellerLogo":"http://p6.img.ymatou.com/G02/M06/3D/B6/CgvUBFYVsDKAAPBtAACoKBJuzVg628_m.jpg","CountryName":"俄罗斯","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Russia.png","SortIndex":35,"ProductType":35},{"ProductId":"d75abfc4-a6e8-4d8d-80fc-ffada51fc8e8","Name":"【爆款】卡地亚蓝气球28mm石英女表W69010Z4，公价4450欧","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M03/CA/0F/CgvUBFZLOxWAIuq-AAEoCMyrM4c621-lists_ls.jpg","Stock":2,"Price":22000.0,"MarketPrice":0.0,"SellerId":4753210,"SellerName":"德国阿Q德国QJJ","SellerLogo":"http://p8.img.ymatou.com/G02/M0A/F1/44/CgvUA1YhESmAE0DCAAFmLsPiCcA482_m.jpg","CountryName":"德国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Germany.png","SortIndex":36,"ProductType":36},{"ProductId":"10101596-5fb7-41fb-8113-bcded491fead","Name":"chanel小方包！26700元！相当个性的小香 宝蓝色更是今年的主打色！蓝色红色！","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M09/BF/68/CgvUA1ZKyI2AHJoHAADAcYc4C_g068-listb_lb.jpg","Stock":4,"Price":26700.0,"MarketPrice":0.0,"SellerId":1594786,"SellerName":"佩佩英国购","SellerLogo":"http://p9.img.ymatou.com/G02/M0B/8A/5D/CgvUA1YIYzaAWGrPAABFHQ0HihA279_m.jpg","CountryName":"英国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/England.png","SortIndex":37,"ProductType":37},{"ProductId":"962a483b-0b92-448c-9ed2-cfd5052af491","Name":"【爆款】Chanel最经典的boy中号 各种颜色 红 黑 紫，各种材质羊皮 牛皮 绒 ，金扣 银扣以及最新的渐变色！国内几乎买不到的货 要的速度！","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M0A/CB/20/CgvUBFZLRpOAODiVAACgB7VAg94220-lists_ls.jpg","Stock":4,"Price":28900.0,"MarketPrice":0.0,"SellerId":1594786,"SellerName":"佩佩英国购","SellerLogo":"http://p9.img.ymatou.com/G02/M0B/8A/5D/CgvUA1YIYzaAWGrPAABFHQ0HihA279_m.jpg","CountryName":"英国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/England.png","SortIndex":38,"ProductType":38},{"ProductId":"95acd9ff-682b-43cd-ab96-f567ff28488b","Name":"【韩国黑五折上折~MCM】中号拼色 十字纹牛皮 双拉链 杀手包 可手提 可单肩哦。好实用的一款哦～ 中号这个价位可以买到 我也是醉了～ \n","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M04/E1/8A/CgvUBVZMO9OAGXeXAAEMSF_MwrY630-listb_lb.jpg","Stock":20,"Price":2600.0,"MarketPrice":0.0,"SellerId":362161,"SellerName":"jacking26","SellerLogo":"http://p7.img.ymatou.com/G02/M02/44/AE/CgvUA1Xv_B-ARbfRAABQOs98xAE611_m.jpg","CountryName":"韩国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Korea.png","SortIndex":2,"ProductType":1},{"ProductId":"e9dcc61f-a0bc-46ab-96ed-c1f9752b0b58","Name":"唐嫣同款LV围巾～94%羊毛6%真丝，大logo花纹，长流苏装饰，橘红、宝石红、浅蓝、浅棕、深棕 五色可选～附全球联保小票，包直邮包税","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M01/06/3A/CgvUBVZOlNyAcymiAAA7qioDARc177-listb_lb.jpg","Stock":3,"Price":2600.0,"MarketPrice":0.0,"SellerId":2008150,"SellerName":"Joannalx","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/2008150_10df2dd767d14b9a87419bf84282d024_m.JPG","CountryName":"英国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/England.png","SortIndex":3,"ProductType":1},{"ProductId":"503b4ca3-4d4c-4870-91cb-91b73535a88a","Name":"【黑五抢遍美国不打烊】【代金券减300到手仅2350】Ferragamo蝴蝶结平底鞋 内里羊皮 外面漆皮 舒适优雅身份气质的体现 红金5-7.5码","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M07/EE/24/CgvUBFZNE8uAB6xYAAB6lr5L-wE771-lists_ls.jpg","Stock":24,"Price":2650.0,"MarketPrice":0.0,"SellerId":4733,"SellerName":"BostonExpress","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/4733_56fd8ecdf6e2445cbf6e314f481db0d3_m.JPG","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":4,"ProductType":1},{"ProductId":"57ed8dc1-ddac-490b-aac3-fa78022166c6","Name":"【爆款】Prada 十字纹中长款折叠按扣皮夹 颜色多 拼邮回国 国内顺丰到付 ","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M09/09/DF/CgvUBVZO0syAYzE5AACHrSDSz84025-lists_ls.jpg","Stock":19,"Price":2680.0,"MarketPrice":0.0,"SellerId":484025,"SellerName":"千遍一律","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/484025_972489b6fce64fc483ee6bc81f1d7420_m.jpg","CountryName":"英国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/England.png","SortIndex":5,"ProductType":1},{"ProductId":"00c6982a-ebfc-46de-862c-e76109813ac3","Name":"【黑五抢遍美国不打烊】✨Coach Swagger中号 27，牛皮黑色，尺寸：27 20 15cm左右  用券立减300哦！","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M06/E6/74/CgvUBVZMc1eAe_mZAABsaf0h0Is364-lists_ls.jpg","Stock":17,"Price":2780.0,"MarketPrice":0.0,"SellerId":413235,"SellerName":"xan411","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/413235_5d182d0f907344a6977f04e500b642e8_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":7,"ProductType":1},{"ProductId":"4073bd28-2569-4e72-ae6a-3e5b9545d7ef","Name":"【黑五抢遍美国不打烊】Tory burch 黑五抢货价 年度销量第一  名媛十足 flerming 链条双用 目测尺寸25*20左右  谁用谁美  到手价   好货下手请速度 手慢无货","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M09/F0/B5/CgvUBVZNN6CAZ9JqAAEQR6Rt908993-lists_ls.jpg","Stock":15,"Price":2799.0,"MarketPrice":0.0,"SellerId":421045,"SellerName":"亚平宁风暴","SellerLogo":"http://p7.img.ymatou.com/G02/M01/9C/0B/CgvUBVY5j_CAQWPyAABybtf4RQk183_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":8,"ProductType":1},{"ProductId":"c88b42a7-7317-41a3-b209-bc24ae1db225","Name":"【Jimmy choo VP 包包5折、鞋子6折秒杀 】8.5公分尖头高跟鞋","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M00/BD/BE/CgvUBFZKwXGAc4qyAACnnj-wqfY349-listb_lb.jpg","Stock":3,"Price":2850.0,"MarketPrice":0.0,"SellerId":1901847,"SellerName":"够巴黎_gouparis","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/1901847_1d37441e4c4c4f05ba3bfe2597b874c5_m.jpg","CountryName":"法国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/France.png","SortIndex":10,"ProductType":1},{"ProductId":"16ffe604-0d89-42d2-8c68-6d01c1e43b83","Name":"MiuMiu真皮大号托特包。意大利真皮。皮质有质感有光泽。大方实用。非常能装，携带轻便。无论你是妈咪还是职场女性，都需要一款实用的大包。 有图1图2两款颜色。2850","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M09/E6/55/CgvUBFZMdWOAGG6zAAIEnRfxCME107-lists_lb.jpg","Stock":2,"Price":2850.0,"MarketPrice":0.0,"SellerId":494697,"SellerName":"美晰BOX","SellerLogo":"http://p4.img.ymatou.com/upload/userlogo/middle/494697_e50b911561ac4c1680f5235045d7d2cd_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":11,"ProductType":1},{"ProductId":"d717600f-e705-4e71-bce4-1d841af30c51","Name":"【Jimmy choo VP 包包5折、鞋子6折秒杀 】细跟高跟鞋","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M06/BD/98/CgvUA1ZKuAqAZtY_AACBqsMtV5U514-listb_lb.jpg","Stock":3,"Price":2950.0,"MarketPrice":0.0,"SellerId":1901847,"SellerName":"够巴黎_gouparis","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/1901847_1d37441e4c4c4f05ba3bfe2597b874c5_m.jpg","CountryName":"法国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/France.png","SortIndex":12,"ProductType":1},{"ProductId":"1b03ce5b-3440-4709-bc5e-38bbaca136af","Name":"BV 粉色全编织 手袋 粉色哦 超划算 拼邮回国 国内顺丰到付","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M0A/BE/4C/CgvUA1ZKvoOACno4AACmMfwYveo685-lists_ls.jpg","Stock":20,"Price":3080.0,"MarketPrice":0.0,"SellerId":484025,"SellerName":"千遍一律","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/484025_972489b6fce64fc483ee6bc81f1d7420_m.jpg","CountryName":"英国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/England.png","SortIndex":14,"ProductType":1},{"ProductId":"122c2e75-b78e-41d8-9865-fd354a3631a4","Name":"【黑五抢遍美国不打烊】BV 礼盒小票全 黑五折扣3100到手","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M0B/FA/B3/CgvUA1ZNoXSAA5vbAAAxDCGpbrM135-listb_lb.jpg","Stock":1,"Price":3100.0,"MarketPrice":0.0,"SellerId":433316,"SellerName":"保健特区","SellerLogo":"http://p10.img.ymatou.com/G02/M0B/77/74/CgvUBFYGtIeAENw_AACEpzYthEo254_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":15,"ProductType":1},{"ProductId":"01b1420e-9ddc-459a-a0b7-393fa313c61f","Name":"【黑五抢遍美国不打烊】bv 全拉链钱包  美国黑五直接秒杀全球价格 肉粉色 只抢到两只","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M05/FA/42/CgvUBVZNo0KAF6jYAAApWo4WXCk569-listb_lb.jpg","Stock":2,"Price":3180.0,"MarketPrice":0.0,"SellerId":433316,"SellerName":"保健特区","SellerLogo":"http://p10.img.ymatou.com/G02/M0B/77/74/CgvUBFYGtIeAENw_AACEpzYthEo254_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":16,"ProductType":1},{"ProductId":"1f80239e-6899-41fe-993e-69e9b873c24e","Name":"Lv钱包 里面红红哒","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M07/EF/0E/CgvUBVZNHzeAZNrRAAEAZfmfcgI399-lists_ls.jpg","Stock":1,"Price":3250.0,"MarketPrice":0.0,"SellerId":1542359,"SellerName":"范小妞法国代购","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/1542359_09cddca0107648d9bf983cb1dd39848e_m.png","CountryName":"法国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/France.png","SortIndex":18,"ProductType":1},{"ProductId":"f56a5502-d2d8-4a30-a779-77b48a1701da","Name":"【黑五日本折上折】💕套装包直邮💕POLA第五代抗衰老套装：賦颜晨光化妆水120ml+乳液80ml  高机能化妆水 解决真皮层的糖化现象 直达真皮抗衰老 @国内专柜单品1999","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M09/C5/C2/CgvUA1ZLBTCAUIj6AABi9SmD8M4810-lists_ls.jpg","Stock":500,"Price":3998.0,"MarketPrice":0.0,"SellerId":574983,"SellerName":"日本寻宝的猪","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/574983_9a0d2cbdbcca41fdb8a9d54b515c2dec_m.jpg","CountryName":"日本","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Japan.png","SortIndex":36,"ProductType":1},{"ProductId":"93379be6-d3a2-4936-bf0b-cc4efed7d03a","Name":"【爆款】【儿童用品】RECARO瑞凯威，Moza Nova Is超级莫扎特~限量版，儿童安全座椅isofix接口，适合9个月至12岁9 - 36 kg的小朋友，德国制造，直邮\r\n","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M08/E9/6E/CgvUBFZMmqSAEjdPAABYtlEuRfQ849-lists_ls.jpg","Stock":10,"Price":2650.0,"MarketPrice":0.0,"SellerId":488692,"SellerName":"馨艺满满","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/488692_added502afbf4656b72df9c14eb53997_m.jpg","CountryName":"德国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Germany.png","SortIndex":43,"ProductType":1},{"ProductId":"99d3380b-4572-4d1d-8cce-97546500506a","Name":"【黑五抢遍美国不打烊】Tory burch 黑五抢货价 秋冬最新款背包 人见人爱花见花开目测尺寸25*28cm黑五 好货下手请速度 手慢无货","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M04/F1/F6/CgvUA1ZNPyKAFaAlAACTk2TmGa0534-lists_ls.jpg","Stock":20,"Price":2750.0,"MarketPrice":0.0,"SellerId":421045,"SellerName":"亚平宁风暴","SellerLogo":"http://p7.img.ymatou.com/G02/M01/9C/0B/CgvUBVY5j_CAQWPyAABybtf4RQk183_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":45,"ProductType":1}]
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
        //砍价团
        groupList: function () {
            jsonpGetData(YmtApi.utils.addParam('http://api.appactivity.ymatou.com/api/BargainGroup/Tuan/TopicJoinList?sign=828', {

            }), {
                success: function (data, code) {
                    if (data) {
                        //var html = ejs.render($('#group-tpl').html(), data);
                        //$('.bf-group-list').html(html);
                    }
                },
                error: function (err) {
                    //@TODO fuck 砍价团的接口格式不一致
                    if (err && err.RetCode == 200) {
                        var html = ejs.render($('#group-tpl').html(), err.RetData);
                        $('#group .bf-area-bd').html(html);

                        new Swiper('#group .bf-area-bd', {
                            pagination: '.bf-group-pagination',
                            loop: true,
                            autoplay: 3000,
                            onSlideChangeEnd: function () {
                                lazyLoad.check();
                            }
                        });
                    }
                }
            });
        },
        //全球好货
        getGoodsList: function () {
            jsonpGetData(YmtApi.utils.addParam('http://jsapi.app.ymatou.com/api/Polymeric/ForeignIndex', {
                pagepartIndex: 1,
                pagepartSize: 5
            }), {
                success: function (data, code) {
                    if (data) {
                        var html = ejs.render($('#goods-tpl').html(), data);
                        $('#bf_05 .bf-area-bd').html(html);

                        new Swiper('#bf_05 .goods-item', {
                            freeMode: true,
                            slidesPerView: 3.7,
                            onSlideChangeEnd: function () {
                                lazyLoad.check();
                            }
                        });
                    }
                },
                error: function (err) {

                }
            });
        },
        receivePk: function (packageId) { //领取大礼包
            var authInfo = YmtApi.utils.getAuthInfo(),
                deviceId = search.DeviceId || search.DeviceToken || '0000000';
            jsonpGetData(YmtApi.utils.addParam('http://ja.m.ymatou.com/api/Coupon/UserBatchReceiveCoupon?DeviceCode=' + deviceId + '&PackageId=' + packageId, {
                BuyerUserId: authInfo.UserId,
                AccessToken: authInfo.AccessToken
            }), {
                success: function (data) {
                    if (data) {
                        //showLog('恭喜您，价值&yen;555的全场通用券已到您的账户，开始买买买吧');
                        $('.receive-package-dialog').addClass('succ')
                    }
                },
                error: function (data) {
                    switch (data.BCode) {
                    case -1:
                        showLog('礼包不存在');
                        break;
                    case -2:
                        showLog('用户不存在');
                        break;
                    case -3:
                        showLog('该设备已达最大领取次数');
                        break;
                    case -4:
                        showLog('您已经领取过该礼包');
                        break;
                    }
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

    var stopCheck = false;

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
    var share = function () { //分享
        var $this = $(this),
            url = $this.attr('data-share-url'),
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
    }

    var scrollChackeStatus = false; //scroll 检查频率控制
    $(document).on('touchstart', function () {
            //当点击tab切换之后，不再做滚动检测，当用户再次手动点击触发
            //再次计算滚动切换tab位置
            stopCheck = false;
        }).on('click', '.J-open', function () {
            var $this = $(this);

            YmtApi.open({
                url: $this.attr('data-url'),
                title: $this.attr('data-title'),
                isNew: true,
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

        })
        .on('click', '.J-close', function () {
            var $this = $(this);

            $('.' + $this.attr('data-target')).removeClass('open').addClass('close');

        })
        .on('click', '#bf-tab li', function () {
            var $this = $(this);
            $('#bf-tab li').removeClass('active');
            $this.addClass('active');
            location.hash = $this.attr('data-href');

            stopCheck = true;
            setTimeout(function () {
                checkCoordinate();
            });

        }).on('click', '.J-open-receive', function () { //打开大礼包
            if (YmtApi.utils.hasLogin()) {
                $('#receive-package-bd').html($('#package-tpl').html());
                $('.receive-package').addClass('open');
            }
            else {
                YmtApi.toLogin();
            }
        }).on('click', '.J-share', share).on('click', '.ymt-butler', function () { //洋管家
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
        }).on('click', '.J-receive-pk', function () { //领取大礼包
            if (YmtApi.utils.hasLogin()) {
                share.apply(this);
                if (/iphone|ipad|ipod/i.test(navigator.userAgent)) {
                    module.receivePk(_pk_id);
                }
                else {
                    //@TODO android通过urlchange的方式如果协议ajax是同步触发，可能会导致
                    //ajax被终止。在ajax使用同步阻塞方法，比如alert也可以解决这个问题
                    setTimeout(function () {
                        module.receivePk(_pk_id);
                    }.bind(this), 100)
                }

            }
            else {
                YmtApi.toLogin();
            }
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
        }).on('click', '.J-open-ms', function () {
            var $this = $(this),
                pid = $this.attr('data-pid');
            if(!pid){
                return;
            }
            YmtApi.open({
                url: 'http://ms.item.app.ymatou.com/forYmatouApp/product/pid?pid=' + pid,
                title: '秒杀商品',
                isNew: true,
            });
        }).on('click', '.bf-coupon-entrance', function () {
            var url = $(this).attr('data-url');
            YmtApi.open({
                url: url
            })
        });

    lazyLoad.init({
        offset: 0,
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

    new Swiper('.bf-seckill .bf-area-bd', {
        pagination: '.bf-group-pagination',
        loop: true,
        autoplay: 7000,
        onSlideChangeStart: function () {
            lazyLoad.check();
        }
    });

})();
