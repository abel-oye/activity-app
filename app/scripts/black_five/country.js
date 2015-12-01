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
        '1': {
            Products: [{"ProductId":"0027d6b8-77ae-4e3e-8658-b3402b4014d2","Name":"【不抢就没了】coach 女士双拉链手提包 美美的小花 可以斜挎 肩带能调节 两个月前1599 现在只要1058 还能使用100元码头优惠券 到手958哦","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M07/3E/6A/CgvUBVZVGcSADCtgAADJOtsGAuk053-lists_ls.jpg","Stock":3,"Price":1058.0,"MarketPrice":0.0,"SellerId":491841,"SellerName":"x9bull","SellerLogo":"http://p4.img.ymatou.com/upload/userlogo/middle/491841_0e6f649838c44a7bb768a7053459e138_m.png","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":1,"ProductType":1},{"ProductId":"1400064f-3e0b-4920-8eee-a2fc2b571af2","Name":"【黑五抢遍美国不打烊】ToryBurch亮皮波士顿，颜色都集齐了呢[害羞]有肩带。黑五预售价 2600，晒单返现150，使用码头优惠券后只要2150到手！十分有气质的一款","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M02/1F/2E/CgvUBVZRcFWAE35iAACYkFYV2pE828-lists_ls.jpg","Stock":9,"Price":2750.0,"MarketPrice":0.0,"SellerId":1542434,"SellerName":"appleyu","SellerLogo":"http://p8.img.ymatou.com/G01/M00/65/D8/CgrTAlXpNpKAT5BSAAA8MgMaZ54359_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":2,"ProductType":1},{"ProductId":"003c4453-600c-4c0c-a1e0-4e7a0221674c","Name":"ks 钻石扣粉色斜挎包 可放6p","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M05/11/0C/CgvUBVZPnp6Ab05QAAB5c-XOhaw060-listb_lb.jpg","Stock":1,"Price":428.0,"MarketPrice":0.0,"SellerId":782046,"SellerName":"USLV直通车","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/782046_e0bc27e9edbb40b9bdceb584009ed2f5_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":3,"ProductType":1},{"ProductId":"006d5e5f-a63d-461b-ab3f-cecd77a200d7","Name":"海鸥气质百搭V领针织衫 ！柔软保暖超级好穿的哦质地出了名的好！人民币 250 一条直邮哇！👯👯","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M06/04/23/CgvUA1ZOYTeAMXcIAABDzfE47hQ945-lists_ls.jpg","Stock":3,"Price":250.0,"MarketPrice":0.0,"SellerId":1559940,"SellerName":"jennyhu112086","SellerLogo":"http://p6.img.ymatou.com/G02/M06/35/B2/CgvUA1Yy946AAwHCAABZtr6dA9E519_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":5,"ProductType":1},{"ProductId":"00c3e2a2-cef5-4d76-b07b-4bc199fa00de","Name":"Charter Club超级超级赞的一款羊绒衫的～限时打折的哦～国内的羊绒衫随便一件都要2000+呀！100%的山羊绒呀！柔软不扎，去年买过的亲都👍","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M02/EC/84/CgvUA1ZMwpiAZrrGAABClik57kQ477-lists_ls.jpg","Stock":97,"Price":666.0,"MarketPrice":0.0,"SellerId":498949,"SellerName":"Superstar","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/498949_72d6a37646cc485182ecde431571161d_m.png","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":6,"ProductType":1},{"ProductId":"00c7e1e5-ee28-4b4b-9e40-c8b31ded97e9","Name":"【Levis 黑五折扣】Levis 女士带帽子的牛仔衣 ！！很帅气是不是！很多明星街拍都有这件！年度最低价599直邮包邮包税！","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M05/23/8B/CgvUBVZRuaWAXUg6AADIdAeeJxg103-lists_ls.jpg","Stock":4,"Price":599.0,"MarketPrice":0.0,"SellerId":504951,"SellerName":"小c北美漂流季","SellerLogo":"http://p10.img.ymatou.com/G02/M09/41/ED/CgvUA1ZDp-KAaiMrAABllXmPE_c231_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":7,"ProductType":1},{"ProductId":"00e1e3d3-ceac-4e81-bba0-a6574e960c93","Name":"🆕新款 超in超美丽 juicy couture天鹅绒套装 衣服套餐一：m裤子s 套二：衣服s裤子xs","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M0B/34/F3/CgvUBVZUANqAJ5EnAABz7fOBN8g936-lists_ls.jpg","Stock":6,"Price":578.0,"MarketPrice":0.0,"SellerId":6011,"SellerName":"天使爱购","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/6011_1634bff3ef014fd9841b152233ea5216_m.png","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":8,"ProductType":1},{"ProductId":"00e3ae01-c2f2-492f-b3b7-24f46c099047","Name":"Zippo超美打火机！美国制造，手工打磨！质量杠杠滴！所有zippo打火机都不带火油，需自行购买哦，款式顺序和图片一致。","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M0A/27/F6/CgvUBFZSXVOAB407AADQ_Qe8pKY123-lists_ls.jpg","Stock":7,"Price":298.0,"MarketPrice":0.0,"SellerId":536711,"SellerName":"Nicolqq","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/536711_89f315cf10a44923bf08463475b48756_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":9,"ProductType":1},{"ProductId":"00ec014a-89b5-4c49-9a14-9f4a7ccb7198","Name":"LONGCHAMP 珑骧 女款 Le Pilage 系列 荧光粉色尼龙饺子包小号短柄。商品售价780，使用优惠劵到手价530。","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M05/29/B4/CgvUBVZSiOeABYM4AACvNCGHe2w698-lists_ls.jpg","Stock":5,"Price":780.0,"MarketPrice":0.0,"SellerId":7009211,"SellerName":"iLuxNYC艾拉纽约","SellerLogo":"http://p9.img.ymatou.com/G02/M06/DD/D1/CgvUBVYfyICAGDe4AAAojky5V_A230_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":10,"ProductType":1},{"ProductId":"00fae87c-b461-42ec-8a39-7e8d939bea1f","Name":"（用码头优惠券立减50！）Loft毛衫，有爱的独特企鹅母子图案，可不是outlet的纯棉款哦！面料含30%羊毛，舒适保暖","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M02/2C/FB/CgvUBVZS4FeAJLwcAAB_-2qZcy4128-lists_ls.jpg","Stock":19,"Price":699.0,"MarketPrice":0.0,"SellerId":553318,"SellerName":"橡树结满小星星","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/553318_82b8617ed3ac434587cc03171537a837_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":11,"ProductType":1},{"ProductId":"0170ac82-207d-4538-a440-8e0a96f43bca","Name":"VS新款长袖棉长睡裙，面料非常柔软舒服，尺码XS-XL，建议选小一码","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M07/00/8F/CgvUA1ZN6yaAUSHSAADYylyK8Gw251-lists_ls.jpg","Stock":5,"Price":258.0,"MarketPrice":0.0,"SellerId":403672,"SellerName":"FriendsCircle","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/403672_946cf5c238fa46f0b80f0e91864e3b41_m.png","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":14,"ProductType":1},{"ProductId":"01abe46f-c28c-47fb-af1a-e12935c9fea8","Name":"Fossil 化石 BQ2091 男士石英表 表盘41MM ¥798直邮包税 全套原装表盒 11年全球联保","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M07/29/6F/CgvUA1ZScUyAddncAAFDQoP8u-g546-listb_lb.jpg","Stock":1,"Price":798.0,"MarketPrice":0.0,"SellerId":1275943,"SellerName":"珠珠美代","SellerLogo":"http://p9.img.ymatou.com/G02/M09/AC/EB/CgvUBVYKyDKATZqIAABOHdB7RVs455_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":15,"ProductType":1},{"ProductId":"02013838-dd0e-456e-843b-5d522864b564","Name":"😻秒杀😻～Ash全黑麂皮粗跟短靴36码一双！跟高8厘米左右哈！脚踝处全皮+金属扣搭配！超值秒杀哦！店里断码最后一双哦！","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M05/26/DD/CgvUBFZSA6aAYxQiAABv1rVQd6U857-lists_ls.jpg","Stock":1,"Price":998.0,"MarketPrice":0.0,"SellerId":536711,"SellerName":"Nicolqq","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/536711_89f315cf10a44923bf08463475b48756_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":16,"ProductType":1},{"ProductId":"022202e0-f10e-4c6e-bf1a-6b9e4d128129","Name":"【黑五抢遍美国不打烊】Ralph Lauren 新款特价～男士V领羊毛长袖 修身款 100%羊毛 ","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M04/DF/14/CgvUBFZMKZeAMn7JAACbkgYVQ9Q188-lists_ls.jpg","Stock":5,"Price":398.0,"MarketPrice":0.0,"SellerId":445174,"SellerName":"Serena美购","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/445174_04ab596c3759426fbec99939f907ac25_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":17,"ProductType":1},{"ProductId":"023f89a2-0104-4785-af40-7314bda6cdde","Name":"送礼最好看的钥匙圈。GUCCI 爱心可爱漆皮钥匙扣。秒抢啊。带礼盒哦。码头优惠卷再减50","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M0B/2A/C3/CgvUA1ZSl1OAbh4DAACZnepO9lA112-lists_ls.jpg","Stock":1,"Price":480.0,"MarketPrice":0.0,"SellerId":1349420,"SellerName":"超级无敌88","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/1349420_07e7312ec3d845d3aa978993cc9b94f5_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":18,"ProductType":1},{"ProductId":"02785002-5c61-405e-876b-a9958b0dbea2","Name":"【不抢就没了】✨Banana Republic🍌香蕉共和国✨限时特价🉐️【自留款】秋装新款圆领针织衫～舒适面料，修身显瘦款～","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M08/F5/08/CgvUBVZNbLiAC6NwAABvJ-OR0kA080-lists_ls.jpg","Stock":10,"Price":299.0,"MarketPrice":0.0,"SellerId":5559124,"SellerName":"奢侈女王USA_Luxury","SellerLogo":"http://p10.img.ymatou.com/G02/M0A/6F/F5/CgvUA1XzNkeAAk0TAABS9BLliH8726_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":20,"ProductType":1}]
        },
        '2': {
            Products: [{"ProductId":"2c8670f5-4f53-40bc-a9f2-360bd8d348fc","Name":"【黑五日本折上折】EMS直邮 奥尔滨体验套装！健康水110ml+渗透乳110g，奥尔滨的水可以单用，但是乳必须配合水一起用，而且先乳后水哟，下单请备注要哪种乳，几号乳，直邮价","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M01/29/24/CgvUA1ZSadCAUUFWAAFdvS4Epm8817-lists_ls.jpg","Stock":410,"Price":448.0,"MarketPrice":0.0,"SellerId":549772,"SellerName":"东京story","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/549772_0a984b0da5b14d149eb1eaab02551e44_m.JPG","CountryName":"日本","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Japan.png","SortIndex":1,"ProductType":1},{"ProductId":"f174329b-b741-4793-8355-68836f6b6a2c","Name":"【韩国专场黑五折上】冬款内增高反毛皮内有很厚的毛的运动鞋 黑色 稍微有点设计不同大致一样 蓝色 墨绿深蓝 四色可选下单备注36-40","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M03/30/3B/CgvUA1ZTLGyAZyPmAAB1V3CZ-T0822-lists_ls.jpg","Stock":40,"Price":219.0,"MarketPrice":0.0,"SellerId":5524656,"SellerName":"KOREAno1","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/5524656_23e66fc15b45467f868841a02c2c7dd4_m.jpg","CountryName":"韩国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Korea.png","SortIndex":2,"ProductType":1},{"ProductId":"eefc0825-a0dd-4604-8812-ee7ab73781be","Name":"【日本黑五折上折】超级好吃的日本Calbee卡乐比水果果仁谷物营养麦片！既可以当零食，又可以当早点！可以直接吃，也可以加上牛奶酸奶等、4种水果4种谷物3种果实800g","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M05/20/74/CgvUBVZRhQqAFeygAAC3ZLrB5NM898-listb_lb.jpg","Stock":0,"Price":85.0,"MarketPrice":0.0,"SellerId":1105826,"SellerName":"和趣美食","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/1105826_e24594b3e37e46e4995b8a2af8b82997_m.jpg","CountryName":"日本","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Japan.png","SortIndex":3,"ProductType":1},{"ProductId":"46bdbb0c-d63a-4785-a855-c3e43421c864","Name":"【韩国黑五折上折】WHOO后津率享贵妇级专享套盒，调理女人因气血失调造成的皮肤粗糙暗黄松弛失去光泽，回复美白细腻，紧致水润的皮肤状态，25岁到40岁左右佳品！","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M05/C9/EF/CgvUBVZLNwiALJCqAADLZ5I5bVE208-listb_lb.jpg","Stock":68,"Price":888.0,"MarketPrice":0.0,"SellerId":5806593,"SellerName":"柚子在首尔","SellerLogo":"http://p9.img.ymatou.com/G02/M05/33/35/CgvUA1Yl6TWAYu69AAB7FcWITFY687_m.jpg","CountryName":"韩国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Korea.png","SortIndex":4,"ProductType":1},{"ProductId":"e107b417-d967-4f34-9adc-2129c12d9fcb","Name":"【黑五日本折上折】CPB水磨美容液170ml沁肌紧肤蜜，提供给具有高度美容意识的女性,针对粉刺,毛孔和凸凹不平,让皮肤变得有光泽,水磨是精华水，不是化妆水，用在水乳中间","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M07/20/78/CgvUBVZRhTqAUof-AACUMKLh5BQ402-listb_lb.jpg","Stock":9951,"Price":488.0,"MarketPrice":0.0,"SellerId":483101,"SellerName":"王太在日本","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/483101_5afbe8807bc440db943370ec85e22f61_m.jpg","CountryName":"日本","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Japan.png","SortIndex":5,"ProductType":1},{"ProductId":"2d432b1b-fd09-4f70-bf82-bbe1ebe50029","Name":"【有个“女孩”叫陆心媛】韩国设计师名品陆心媛塑料护照夹 时尚更实惠。已被我家卖断很多款现在只有这些款 快来抢吧 手慢无","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M08/40/6A/CgvUA1ZVNiOAETBrAACqw3ENSPI602-lists_ls.jpg","Stock":37,"Price":89.0,"MarketPrice":0.0,"SellerId":5524656,"SellerName":"KOREAno1","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/5524656_23e66fc15b45467f868841a02c2c7dd4_m.jpg","CountryName":"韩国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Korea.png","SortIndex":6,"ProductType":1},{"ProductId":"cd00013f-d301-46c3-8e35-9e955812e726","Name":"【日本黑五折上折】北海道特供ROYCE生巧 2盒包邮顺丰 神奇的巧克力，真正入口即化~~可可味、香槟味、白巧、抹茶味 黑巧 轩尼诗 口味超全的!拍下自行备注哦~~","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M01/21/5D/CgvUA1ZRiHGAN5pAAAB86NLrjtE689-listb_lb.jpg","Stock":79,"Price":80.0,"MarketPrice":0.0,"SellerId":1105826,"SellerName":"和趣美食","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/1105826_e24594b3e37e46e4995b8a2af8b82997_m.jpg","CountryName":"日本","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Japan.png","SortIndex":7,"ProductType":1},{"ProductId":"1ca94b97-75aa-41ed-bcce-9e0d1afaeef7","Name":"【韩国黑五折上折】【来自星星的你同款气垫】IOPE气垫BB霜～一正一替，随时随地补妆，打造自然清透的完美底妆～C系列遮瑕好！21号自然偏白，23号自然色，拍下备注哦","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M01/E1/51/CgvUBVZMOfaAOBV7AABh0hL1OIU589-lists_ls.jpg","Stock":695,"Price":188.0,"MarketPrice":0.0,"SellerId":5806593,"SellerName":"柚子在首尔","SellerLogo":"http://p9.img.ymatou.com/G02/M05/33/35/CgvUA1Yl6TWAYu69AAB7FcWITFY687_m.jpg","CountryName":"韩国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Korea.png","SortIndex":8,"ProductType":1},{"ProductId":"3b130b7d-24a5-410c-8a0a-c1c4fa08e04b","Name":"【黑五日本折上折】三宅一生  baobao  6×6  白色  34cm*34cm    2015年款  EMS直邮","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M01/21/AF/CgvUBVZRmO6AN4mgAAC3Lf4BPMY067-lists_ls.jpg","Stock":57,"Price":1860.0,"MarketPrice":0.0,"SellerId":527583,"SellerName":"日本东京代购","SellerLogo":"http://p6.img.ymatou.com/G02/M0A/76/C5/CgvUA1Y3OVuAWlIwAABwt55WyOA582_m.jpg","CountryName":"日本","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Japan.png","SortIndex":9,"ProductType":1},{"ProductId":"29d0b37d-5ec7-49b1-bc17-9f490c07199c","Name":"韩国正品瘦腿袜SEXY SECRET秋冬款加绒三倍加厚美腿塑形打底裤  均码弹力强   不起球  非常保暖","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M0B/DF/72/CgvUA1ZMJOqAZ_wiAACBarnLpm8804-lists_ls.jpg","Stock":235,"Price":66.0,"MarketPrice":0.0,"SellerId":3594946,"SellerName":"miumiumiumiu","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/3594946_a84b4b25da8048de8f2263695e6e5966_m.jpg","CountryName":"韩国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Korea.png","SortIndex":10,"ProductType":1},{"ProductId":"8eb0dc6c-0510-4668-8cca-44b6cc7848f7","Name":"【黑五日本折上折】Haba鲨烷油美容油，保湿滋润，修复皮脂抗敏感SQ油，30毫升【单拍不发货，需搭配正价商品","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M05/38/A4/CgvUA1ZUOhSAT-MzAAB24x_fMfE799-listb_lb.jpg","Stock":24,"Price":148.0,"MarketPrice":0.0,"SellerId":1502522,"SellerName":"丽娜在日本","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/1502522_604719a220704a8d82bf52cb37a63353_m.jpg","CountryName":"日本","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Japan.png","SortIndex":11,"ProductType":1},{"ProductId":"a27de07b-0776-4961-877d-694460623448","Name":"【韩国黑五折上折】拼邮润膏洗发水100ml*3➕香水沐浴露180ml，四件套送礼自用都是超值呀","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M03/DC/F6/CgvUBVZME0uAC9jzAABDm9B6ack790-listb_lb.jpg","Stock":809,"Price":95.0,"MarketPrice":0.0,"SellerId":1760475,"SellerName":"阿莹正品韩妆","SellerLogo":"http://p8.img.ymatou.com/G01/M00/FC/C2/CgrTAlXdkl-ABL1NAABBGjAPJ8Q326_m.jpg","CountryName":"韩国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Korea.png","SortIndex":12,"ProductType":1},{"ProductId":"72534e62-aa5c-4510-9144-a228eb003e54","Name":"【黑五日本折上折】全场任意两单拼邮 这个冬天不会冷！厚木ATSUGI 秋冬羊毛450D连裤袜打底袜，尺码M，L可供选择，详情请看图片，黑色蓝色可选，下单备注好哟","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M07/29/7F/CgvUBFZSipmAKqb8AAC9mAbmR2M880-lists_ls.jpg","Stock":323,"Price":155.0,"MarketPrice":0.0,"SellerId":549772,"SellerName":"东京story","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/549772_0a984b0da5b14d149eb1eaab02551e44_m.JPG","CountryName":"日本","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Japan.png","SortIndex":13,"ProductType":1},{"ProductId":"96a9214e-3087-46c7-aa5f-65dec206cfb6","Name":"【圣诞限量】《黑五折上折》最新2015聖誕限量版Laneige兰芝BB气垫粉 正裝+替換,轻易贴装补湿舒缓，升级遮瑕，美白亮泽，防晒防水6大功效极品","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M08/DD/AA/CgvUA1ZME_yAMfunAAEDj1oNP6M968-listb_lb.jpg","Stock":99,"Price":188.0,"MarketPrice":0.0,"SellerId":2158831,"SellerName":"韩国潮流馆","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/2158831_72fdc22e27ff4a978231524564bd831f_m.jpg","CountryName":"韩国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Korea.png","SortIndex":14,"ProductType":1},{"ProductId":"2f13ac29-37bb-4614-96c2-b5be9d95a8d3","Name":"【黒五折上折】【日本直邮】曰本保湿美容好帮手！HITACHI CM—N3000一W/24.7×7.9×9.3cmx531g/溫泠W Head/皮肤水分增1.3倍！","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M0A/36/31/CgvUBFZUHh2ALzCyAAHKxDmUh-k194-listb_lb.jpg","Stock":17,"Price":1300.0,"MarketPrice":0.0,"SellerId":1505251,"SellerName":"兄弟联日本代购","SellerLogo":"http://p6.img.ymatou.com/G02/M0B/78/5E/CgvUBFYGxpOAMOaSAARqARXY4-k574_m.jpg","CountryName":"日本","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Japan.png","SortIndex":15,"ProductType":1},{"ProductId":"62d540db-8d97-4007-98a4-a16b1f0c7fd4","Name":"【黑五韩国专场】sum37呼吸时光能量套盒调节水油平衡收毛孔，全方位改善肤质，使皮肤光滑柔软，改善肤色的天然有机酸，因此可以使皮肤恢复透明光滑，肤色均匀。孕妇可用8A","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M08/2A/C7/CgvUBFZSssaAPFHgAAET2UJ2z60476-lists_ls.jpg","Stock":295,"Price":538.0,"MarketPrice":0.0,"SellerId":1828887,"SellerName":"小也韩妆","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/1828887_7bdecc2e79f8466889a167398ca28666_m.jpg","CountryName":"韩国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Korea.png","SortIndex":16,"ProductType":1},{"ProductId":"72534e62-aa5c-4510-9144-a228eb003e54","Name":"【黑五日本折上折】全场任意两单拼邮 这个冬天不会冷！厚木ATSUGI 秋冬羊毛450D连裤袜打底袜，尺码M，L可供选择，详情请看图片，黑色蓝色可选，下单备注好哟","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M07/29/7F/CgvUBFZSipmAKqb8AAC9mAbmR2M880-lists_ls.jpg","Stock":323,"Price":155.0,"MarketPrice":0.0,"SellerId":549772,"SellerName":"东京story","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/549772_0a984b0da5b14d149eb1eaab02551e44_m.JPG","CountryName":"日本","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Japan.png","SortIndex":17,"ProductType":1},{"ProductId":"8405eddc-b99b-443a-be08-05ff2b8e21cd","Name":"【日本黑五折上折】日本 HABA润泽柔肤水 G露 Lotion 提亮肤色 美白 补水 滋润 180ml  需单独运费8元","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M02/20/DB/CgvUBFZRjomAOoTEAACU2XgZdQM670-lists_ls.jpg","Stock":94,"Price":98.0,"MarketPrice":0.0,"SellerId":469831,"SellerName":"anet","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/469831_f4354e05d9c0415ba230b940bc6a12a0_m.jpg","CountryName":"日本","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Japan.png","SortIndex":18,"ProductType":1},{"ProductId":"3f3773c6-c612-49ad-a842-5099ee1a231f","Name":"【黑五折上折】秒杀268！原价338！单拍补20元运费！IPSA大名鼎鼎的流金水200ml，保湿、预防成人粉刺、去闭口白头很管用，而且买手只用后皮肤感觉变软变嘭了。JPF00529","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M07/21/4A/CgvUBFZRljiAAsdDAADKzfaliIM672-listb_lb.jpg","Stock":59,"Price":338.0,"MarketPrice":0.0,"SellerId":520462,"SellerName":"HII1东京的苹果","SellerLogo":"http://p7.img.ymatou.com/G02/M07/BE/41/CgvUA1Y7ShiAKrBXAABaEYzopEk981_m.jpg","CountryName":"日本","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Japan.png","SortIndex":19,"ProductType":1},{"ProductId":"52af0a42-a23f-49a7-94de-0c83c9b9aafc","Name":"【日本黑五折上折】资生堂心机多色腮红，崭新设计，以独特科技研发如奶油丝滑的零粉末腮红，有效突出脸颊轮廓，并修饰及提亮暗沉眼周，塑造自然透亮极具立体感的炫彩美妆。","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M00/49/BB/CgvUBFZWdECAB0NzAAClwRSD26M181-lists_ls.jpg","Stock":28,"Price":188.0,"MarketPrice":0.0,"SellerId":5014676,"SellerName":"樱花小朵","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/5014676_7566029ed11744af9b6afd2af38d34fc_m.jpg","CountryName":"日本","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Japan.png","SortIndex":20,"ProductType":1}]
        },
        '3': {
            Products: [{"ProductId":"1bce2b18-44f0-4fcc-932f-bee48790f1de","Name":"厂家回馈低至五折！Lytess夜间10日瘦身裤/美体7分裤，集中减脂，去橘皮，紧致多项功能，在美梦中轻松享受瘦身效果！获43届美体大奖 这款高科技含量的产品是三效合一é324","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M09/CA/26/CgvUBFZLO_2ATa9YAAF6OMIuu_Q735-lists_ls.jpg","Stock":260,"Price":388.0,"MarketPrice":0.0,"SellerId":1368098,"SellerName":"巴黎宝贝药妆","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/1368098_34baf560a6554854b9c48f0f917cd4f7_m.png","CountryName":"法国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/France.png","SortIndex":3,"ProductType":1},{"ProductId":"2a9f2f97-620e-4767-9570-6abafe6d2e9d","Name":"【贝海直邮.黑五】kenzo 虎头鞋；男女都有诶！超级火爆好穿，1279拼邮；1359贝海直邮","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M06/26/D7/CgvUA1ZR5GSAHeCMAACMK2Sfoo8854-lists_ls.jpg","Stock":3,"Price":1279.0,"MarketPrice":0.0,"SellerId":7270677,"SellerName":"CC君时尚小买手","SellerLogo":"http://p9.img.ymatou.com/G02/M07/79/67/CgvUA1Y3WXOAZKSyAABcIkEScRk629_m.jpg","CountryName":"法国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/France.png","SortIndex":4,"ProductType":1},{"ProductId":"38137430-a5cc-4a95-8a3c-f1977b5c7121","Name":"Prada 黑色全拉链十字纹皮夹 男士 暗标 拼邮回国 国内顺丰到付","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M0B/2B/FB/CgvUA1ZSu1uABJnYAADoLIo__Mk519-listb_lb.jpg","Stock":6,"Price":2680.0,"MarketPrice":0.0,"SellerId":484025,"SellerName":"千遍一律","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/484025_972489b6fce64fc483ee6bc81f1d7420_m.jpg","CountryName":"英国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/England.png","SortIndex":6,"ProductType":1},{"ProductId":"aefac57e-f0bf-4560-bd4a-6a8a0510c7dd","Name":"【LV全线代购，请提供货号】LV Speedy 25老花，5700元，用券后5400元。无肩带，配金色挂锁。货号：M41109，中国官网7250元，立省1550元～附全球联保小票，包直邮包税","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M06/BD/96/CgvUBVZKvYSAAY8oAAD0AUwLwJs472-listb_lb.jpg","Stock":2,"Price":5700.0,"MarketPrice":0.0,"SellerId":2008150,"SellerName":"Joannalx","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/2008150_10df2dd767d14b9a87419bf84282d024_m.JPG","CountryName":"英国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/England.png","SortIndex":7,"ProductType":1},{"ProductId":"b3c17d51-ca14-434d-b29e-089706e2c860","Name":"celine最经典包包女王 电光蓝中号box 难买无敌 仅一只 奶奶最推荐 国内售价28000+ 现在裸价21900 电光蓝也快绝了！买不到了！","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M03/21/FE/CgvUBVZRnvyAZ7yDAAB42JDwNRI174-lists_ls.jpg","Stock":1,"Price":21900.0,"MarketPrice":0.0,"SellerId":1608680,"SellerName":"娜如奶奶","SellerLogo":"http://p6.img.ymatou.com/G02/M06/3D/B6/CgvUBFYVsDKAAPBtAACoKBJuzVg628_m.jpg","CountryName":"俄罗斯","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Russia.png","SortIndex":8,"ProductType":1},{"ProductId":"2dab17ce-d4d8-4c6f-9d01-37fb052916d0","Name":"【爆款】【黑五秒杀特价】诺大侠英国代购Swing系列中款全拉链湖蓝色钱包。可以放下iphone 6plus手机，可以平放纸币。","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M08/2E/09/CgvUA1ZS8SeAbqlCAADXhMCOnik860-lists_ls.jpg","Stock":6,"Price":1500.0,"MarketPrice":0.0,"SellerId":5956175,"SellerName":"英国买手阿诺","SellerLogo":"http://p10.img.ymatou.com/G02/M09/5A/6A/CgvUA1XxkpuATCHqAABOmq2OXgk133_m.jpg","CountryName":"英国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/England.png","SortIndex":9,"ProductType":1},{"ProductId":"be831182-5669-4f2c-bca2-c7ed78892cdb","Name":"小香一包难求！真不是有钱就能买到的超级限购！！半年只能买一个经典款找了N多人才寻到一个！中号boy黑色 金扣/银扣。28900元","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M08/27/26/CgvUA1ZR60-ADrKgAACPhVLrXKg465-lists_ls.jpg","Stock":3,"Price":28900.0,"MarketPrice":0.0,"SellerId":1594786,"SellerName":"佩佩英国购","SellerLogo":"http://p9.img.ymatou.com/G02/M0B/8A/5D/CgvUA1YIYzaAWGrPAABFHQ0HihA279_m.jpg","CountryName":"英国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/England.png","SortIndex":10,"ProductType":1},{"ProductId":"9db175bf-9599-4dbe-a2fe-be39ac46937d","Name":"🎉GUCCI 专柜正品🎉 双面围巾🔥100%羊毛🔥 20x175cm🎵 可搭配同款印花包包和鞋子🌹 潮到爆💦💦💦 2280","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M08/2D/38/CgvUBFZS83mAAzFbAAE85jhWun4185-lists_ls.jpg","Stock":49,"Price":2280.0,"MarketPrice":0.0,"SellerId":6991154,"SellerName":"Goitaly1998","SellerLogo":"http://p7.img.ymatou.com/G02/M00/C3/7F/CgvUBFY7oYuAS5n1AAAsb_J798M333_m.jpg","CountryName":"意大利","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Italy.png","SortIndex":11,"ProductType":1},{"ProductId":"3d0565ee-d680-49a3-9da4-f23247630a76","Name":"【黑五爆款限量秒杀】CALZADONIA 意大利国宝级打底裤，黑色前扣防皮裤，今年新款PUSH UP，有提臀收腹效果，比普通款加厚，建议尺码(S/27、28）（M/29、30）（L/31、32）","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M0A/2E/20/CgvUA1ZS8-OAH6rRAABeocOp7_k523-lists_ls.jpg","Stock":18,"Price":299.0,"MarketPrice":0.0,"SellerId":6571150,"SellerName":"意大利时尚买手","SellerLogo":"http://p8.img.ymatou.com/G02/M04/3A/CD/CgvUA1ZDD5KAE_TVAABh9LJrhzM438_m.jpg","CountryName":"意大利","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Italy.png","SortIndex":12,"ProductType":1},{"ProductId":"dcea8b0e-bf1b-4ecf-92df-75587a033de5","Name":"英国ANNAMITO瘦腿袜680D(连裤袜款).内层加微绒设计 热能波保暖 极致瘦腿效果，瘦身保暖一步到位。均码的，弹力很大，一般尺码的MM都可以穿。颜色留言。Y10","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M00/4B/A0/CgvUBFZEQuyAdxodAAFDov-Fj4Q060-lists_ls.jpg","Stock":37,"Price":89.0,"MarketPrice":0.0,"SellerId":1205650,"SellerName":"慕尼黑啤酒","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/1205650_076a7de3a7f84bc98c83f4204a497b9d_m.png","CountryName":"德国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Germany.png","SortIndex":13,"ProductType":1},{"ProductId":"4937298f-1be5-4151-8fb9-bfb451c1fa39","Name":"【爆款】【最新纪念款】GOC IN C 升级版克罗心小熊热水袋 2015年全新插电式热水袋 可以用手机app调节温度 手机党也可以把手放在里面玩手机噢 两周内DHL发回 国内包邮转发","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M00/2D/2F/CgvUBFZS8lSAZgYyAADMchFeni4166-lists_ls.jpg","Stock":78,"Price":389.0,"MarketPrice":0.0,"SellerId":1485252,"SellerName":"aimaiuk","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/1485252_0c7d61635f544ce0bbeb1b3bead50cfe_m.jpg","CountryName":"英国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/England.png","SortIndex":15,"ProductType":1},{"ProductId":"13c21bdf-76eb-490d-bdaa-5c0aeb066fdd","Name":"LV alma BB （老花/棋盘格）女神蕾哈娜、安以轩明星同款，大小适中，配背带，可拎可挎可背，怎么搭配都非常时尚！💰6950","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M09/2E/E0/CgvUBVZTGRyAeuCMAABcaFFI7Yg308-lists_ls.jpg","Stock":2,"Price":6950.0,"MarketPrice":0.0,"SellerId":3635770,"SellerName":"lushan991","SellerLogo":"http://p6.img.ymatou.com/G02/M01/71/F2/CgvUA1ZGcnuAYuwsAABchmy8yKk269_m.jpg","CountryName":"英国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/England.png","SortIndex":18,"ProductType":1},{"ProductId":"c4de50f8-29ed-4070-bd8d-d17316711f1c","Name":"【爆款】Bally男士小肩包，Oakview，黑五特特价2510，直邮包税！直邮包税！直邮包税！27号采购，30号发货，7-10天到手","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M07/2D/B6/CgvUBVZS-p2AR0ALAACTEf3__tM421-lists_ls.jpg","Stock":9,"Price":2510.0,"MarketPrice":0.0,"SellerId":6522246,"SellerName":"英国比斯特奢侈品代购","SellerLogo":"http://p9.img.ymatou.com/G02/M00/C6/90/CgvUBFY7-PGAHxi-AABuIQTZQaU038_m.jpg","CountryName":"英国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/England.png","SortIndex":19,"ProductType":1},{"ProductId":"68ebc2ea-07db-4b85-b27b-318cbcf5b5de","Name":"【爆款特价】欧米茄最新007限量款机械男表231.10.42.21.03.004，至臻同轴全防磁机芯，全尺寸自动陀饰有镀铑空枪膛线设计，邦德家族盾徽密布于蓝色41.5MM表盘，公价6000欧","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M05/36/87/CgvUA1ZUFGiAdizpAADewdwEiTU681-lists_ls.jpg","Stock":10,"Price":32000.0,"MarketPrice":0.0,"SellerId":4753210,"SellerName":"德国阿Q德国QJJ","SellerLogo":"http://p8.img.ymatou.com/G02/M0A/F1/44/CgvUA1YhESmAE0DCAAFmLsPiCcA482_m.jpg","CountryName":"德国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Germany.png","SortIndex":21,"ProductType":1},{"ProductId":"7870d128-def6-4b8d-ac98-5d65501384e9","Name":"🔥爆款🔥Bottega Veneta /BV长款拉链钱夹 内有隔层 🎉多色可选","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M02/2D/17/CgvUBFZS73uAWWCtAADkToq-8yw938-lists_ls.jpg","Stock":50,"Price":3499.0,"MarketPrice":0.0,"SellerId":6991154,"SellerName":"Goitaly1998","SellerLogo":"http://p7.img.ymatou.com/G02/M00/C3/7F/CgvUBFY7oYuAS5n1AAAsb_J798M333_m.jpg","CountryName":"意大利","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Italy.png","SortIndex":22,"ProductType":1},{"ProductId":"745c1646-87ea-4ae7-a629-dee9965138cb","Name":"贝德玛卸妆水粉色500ml～两瓶包邮，拍两瓶～继续升温特价促销～两瓶包邮，拼箱回国哦～","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M03/B8/C1/CgvUA1ZKhFOAVF8iAABs6_K-mRU082-listb_lb.jpg","Stock":132,"Price":99.0,"MarketPrice":0.0,"SellerId":1900905,"SellerName":"peixiaopei97","SellerLogo":"http://p6.img.ymatou.com/G02/M0A/88/CB/CgvUA1YIH5mAXsq7AADP_Q-Djyk759_m.jpg","CountryName":"法国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/France.png","SortIndex":24,"ProductType":1}]
        },
        '4': {
            Products: [{"ProductId":"25df6dc2-8668-478e-bce7-bd7d096e59b8","Name":"贝拉米奶源产自获得有机认证的奶牛，并融入其他必需的营养成分，从而生产出世界一流的有机配方奶粉。1段适合0-6个月宝宝！包邮包税 460/2罐","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M01/20/15/CgvUBFZRg42AOxrnAACCImmN734060-lists_ls.jpg","Stock":10,"Price":460.0,"MarketPrice":0.0,"SellerId":570914,"SellerName":"KIKI澳洲海淘旗舰店","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/570914_04f4509db7914a748c3d06e49e90a151_m.jpg","CountryName":"澳大利亚","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Australia.png","SortIndex":3,"ProductType":1},{"ProductId":"b364ee21-257e-40c8-adf2-0e6883ba2e1f","Name":"金装爱他美3段适合1-2岁宝宝，含有比普通牛奶多十倍以上的铁质，并含有丰富维他命C，帮助吸收铁质，同时提供宝宝成长所需的钙质及蛋白质 538/2罐","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M05/20/3D/CgvUBVZRgiCAYJA9AAB_w4YZp0k758-lists_ls.jpg","Stock":10,"Price":538.0,"MarketPrice":0.0,"SellerId":570914,"SellerName":"KIKI澳洲海淘旗舰店","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/570914_04f4509db7914a748c3d06e49e90a151_m.jpg","CountryName":"澳大利亚","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Australia.png","SortIndex":4,"ProductType":1},{"ProductId":"27182693-be33-425c-a424-f8075b081642","Name":"Blackmores Folate叶酸90片 ，能帮助减少孕期胎儿的脊柱裂的风险，帮助产生健康的红细胞，维持孕妇的健康水平，适用人群：备孕、孕期以及哺乳期女性","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M00/1F/5B/CgvUBFZRd06AQ3JJAACKLJL-Kzs812-lists_ls.jpg","Stock":10,"Price":176.0,"MarketPrice":0.0,"SellerId":3819879,"SellerName":"澳洲康威","SellerLogo":"http://p8.img.ymatou.com/G02/M01/C2/AC/CgvUBFYMd9iARiL8AABNLR0ZTOY121_m.jpg","CountryName":"澳大利亚","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Australia.png","SortIndex":5,"ProductType":1},{"ProductId":"0bbe5672-65ac-4848-b1ab-ad3af3cea8c8","Name":"Ostelin kids 儿童高含量钙+维生素D梅子味咀嚼片，50粒。2-8岁每天两粒；8-13岁每天三粒。澳洲排名第一的维生素以及骨骼健康品牌","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M09/1F/11/CgvUBVZRbsuAaKDyAAA0x6wR-Vs532-listb_lb.jpg","Stock":100,"Price":88.0,"MarketPrice":0.0,"SellerId":540932,"SellerName":"澳洲小龙虾","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/540932_fca5243b74cb45b6bcce5c35a434c8ba_m.jpg","CountryName":"澳大利亚","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Australia.png","SortIndex":8,"ProductType":1},{"ProductId":"53dbf83f-9d7c-43ae-ac70-b40251b8e9b1","Name":"TWIST&GO果汁机，两个杯，每天一分钟就可以喝到最新鲜的果汁。不用洗机器，只需要清洗杯子，懒人必备。240满300包邮","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M09/1F/6B/CgvUBFZReIaARbU6AAFKR7mQcbk239-listb_lb.jpg","Stock":5,"Price":240.0,"MarketPrice":0.0,"SellerId":2352463,"SellerName":"墨尔本的翡翠","SellerLogo":"http://p6.img.ymatou.com/G01/M01/5E/F7/CgrTAVXoZQuAeOcEAABjaqVsAkM009_m.jpg","CountryName":"澳大利亚","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Australia.png","SortIndex":9,"ProductType":1},{"ProductId":"2ab6d111-7cbc-4de7-9b0a-65dde0553b5e","Name":"dermatixl神奇祛疤膏 15克去疤痕膏 烫伤凝胶 膜既能保持肌肤水分平衡，还能帮助处理由于术后、烧伤和其他伤害造成的皮肤疤痕。270/支满300包邮","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M0A/1F/E9/CgvUA1ZRceuAPp-LAADavjzMmr0095-listb_lb.jpg","Stock":6,"Price":270.0,"MarketPrice":0.0,"SellerId":2352463,"SellerName":"墨尔本的翡翠","SellerLogo":"http://p6.img.ymatou.com/G01/M01/5E/F7/CgrTAVXoZQuAeOcEAABjaqVsAkM009_m.jpg","CountryName":"澳大利亚","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Australia.png","SortIndex":10,"ProductType":1},{"ProductId":"2f748143-fb1a-4b97-a79e-5795f1a5983c","Name":"Prospan 小绿叶小儿止咳糖浆 200ml,两岁以下2.5毫升一天两次，2-5岁2.5毫升一天三次，6-16岁5毫升一天三次，成人一天三次","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M09/1F/32/CgvUBFZRdFaALF7NAAC50GQXkVo675-listb_lb.jpg","Stock":12,"Price":128.0,"MarketPrice":0.0,"SellerId":540932,"SellerName":"澳洲小龙虾","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/540932_fca5243b74cb45b6bcce5c35a434c8ba_m.jpg","CountryName":"澳大利亚","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Australia.png","SortIndex":11,"ProductType":1},{"ProductId":"475ffcd3-4313-473a-8faf-c6d7753650a7","Name":"【黑五特价】茱莉蔻玫瑰水套装 价值64澳币！一年一度的黑五大折扣！不要犹豫不要比价！全年最低！","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M06/CA/8D/CgvUBFZLQBKANygvAACEFthitks184-listb_lb.jpg","Stock":174,"Price":364.0,"MarketPrice":0.0,"SellerId":509873,"SellerName":"闹闹酱悉尼购","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/509873_de74a19f7e884a4d87de61af4ba9731f_m.JPG","CountryName":"澳大利亚","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Australia.png","SortIndex":12,"ProductType":1},{"ProductId":"7c3af525-424a-46a0-a56b-da4fdb8f8fe3","Name":"【黑五特价】茱莉蔻护手霜套装 价值116澳币！一年一度的黑五大折扣！不要犹豫不要比价！全年最低！","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M05/CB/40/CgvUBVZLRPGAbk2oAACNrRyQdYQ277-lists_ls.jpg","Stock":194,"Price":696.0,"MarketPrice":0.0,"SellerId":509873,"SellerName":"闹闹酱悉尼购","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/509873_de74a19f7e884a4d87de61af4ba9731f_m.JPG","CountryName":"澳大利亚","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Australia.png","SortIndex":13,"ProductType":1},{"ProductId":"5d92a0d5-44ba-446a-be21-477ad536761c","Name":"黑五大促！Aesop伊索玫瑰精露明星产品，25ML保湿效果奇好，敏感肌，用了没有不适，吸收很快马士革玫瑰精露有??提亮肤色,收缩毛孔,淡化痘印的作用…每次两滴！","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M01/20/12/CgvUBVZRf1CAEKHWAAC_jG7qNVk143-listb_lb.jpg","Stock":5,"Price":420.0,"MarketPrice":0.0,"SellerId":2352463,"SellerName":"墨尔本的翡翠","SellerLogo":"http://p6.img.ymatou.com/G01/M01/5E/F7/CgrTAVXoZQuAeOcEAABjaqVsAkM009_m.jpg","CountryName":"澳大利亚","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Australia.png","SortIndex":14,"ProductType":1}]
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

    /*
     *回到顶部
     */
    var goTop = function(acceleration, time) {
        acceleration = acceleration || 0.1;
        time = time || 16;
        var x1 = 0;
        var y1 = 0;
        var x2 = 0;
        var y2 = 0;
        var x3 = 0;
        var y3 = 0;
        if (document.documentElement) {
            x1 = document.documentElement.scrollLeft || 0;
            y1 = document.documentElement.scrollTop || 0;
        }
        if (document.body) {
            x2 = document.body.scrollLeft || 0;
            y2 = document.body.scrollTop || 0;
        }
        var x3 = window.scrollX || 0;
        var y3 = window.scrollY || 0;
        // 滚动条到页面顶部的水平距离
        var x = Math.max(x1, Math.max(x2, x3));
        // 滚动条到页面顶部的垂直距离
        var y = Math.max(y1, Math.max(y2, y3));
        // 滚动距离 = 目前距离 / 速度, 因为距离原来越小, 速度是大于 1 的数, 所以滚动距离会越来越小
        var speed = 1 + acceleration;
        window.scrollTo(Math.floor(x / speed), Math.floor(y / speed));
        // 如果距离不为零, 继续调用迭代本函数
        if (x > 0 || y > 0) {
            // var invokeFunction = "goTop(" + acceleration + ", " + time + ")";
            // window.setTimeout(window[invokeFunction], time);
            goTop();
        }
    };

    /*
     *回到顶部2
     */
     var gotoTop = function goTop(times){
         if(!!!times){
          $(window).scrollTop(0);
          return;
         }

         var sh=$('body').scrollTop();//移动总距离
         var inter=13.333;//ms,每次移动间隔时间
         var forCount=Math.ceil(times/inter);//移动次数
         var stepL=Math.ceil(sh/forCount);//移动步长
         var timeId=null;
         function ani(){
          !!timeId&&clearTimeout(timeId);
          timeId=null;
          //console.log($('body').scrollTop());
          if($('body').scrollTop()<=0||forCount<=0){//移动端判断次数好些，因为移动端的scroll事件触发不频繁，有可能检测不到有<=0的情况
           $('body').scrollTop(0);
           return;
          }
          forCount--;
          sh-=stepL;
          $('body').scrollTop(sh);
          timeId=setTimeout(function(){ani();},inter);
         }
         ani();
    }

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
            // console.log(aid,pid,modId)
            if(aid === '0'){
                // console.log(productData[pid])
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
/*        $('.ymt-person').css({
            left: left
        })*/

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
        }).on('click', '.J-go-top', function() {
            var scrollOffset = -$(window).scrollTop()-500,
                $this = $(this);
            window.scrollTo(0, 0);
            $this.css('transform', 'translate3d(0,' + scrollOffset + 'px, 0)');
            setTimeout(function () {
                $this.css({
                    transform: ''
                });
            }, 900);
        });




    lazyLoad.init({
        offset: 100,
        callback: function (elem) {
            //注册模块懒加载
            var $this = $(elem);
            if ($this.hasClass('J-module-Hold')) {
                var moduleName = $this.attr('data-module'),
                    args = ($this.attr('data-arguments') || '').split(',');

                // console.log(moduleName)

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
