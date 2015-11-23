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
            Products: [{"ProductId":"1400064f-3e0b-4920-8eee-a2fc2b571af2","Name":"【黑五抢遍美国不打烊】ToryBurch亮皮波士顿，颜色都集齐了呢[害羞]有肩带。黑五预售价 2600，晒单返现150，使用码头优惠券后只要2150到手！十分有气质的一款","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M02/1F/2E/CgvUBVZRcFWAE35iAACYkFYV2pE828-lists_ls.jpg","Stock":10,"Price":2750.0,"MarketPrice":0.0,"SellerId":1542434,"SellerName":"appleyu","SellerLogo":"http://p8.img.ymatou.com/G01/M00/65/D8/CgrTAlXpNpKAT5BSAAA8MgMaZ54359_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":1,"ProductType":1},{"ProductId":"3691790d-b2fa-49f7-873d-ac8b0d00a96f","Name":"【黑五抢遍全球不打烊】Tiffany蒂凡尼经典蓝心💙粉心❤️全银项链！女人一辈子一定要有一个小蓝盒！用洋码头优惠卷立减100！只需788必须开抢！数量有限","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M09/1F/B1/CgvUA1ZRbrqAEI2oAAA66LoCDBg150-lists_ls.jpg","Stock":28,"Price":999.0,"MarketPrice":0.0,"SellerId":413235,"SellerName":"xan411","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/413235_5d182d0f907344a6977f04e500b642e8_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":2,"ProductType":1},{"ProductId":"946dd762-46ea-4cd6-831d-1c4a220d45dd","Name":"【不抢就没有了】哥伦比亚 女款三合一冲锋衣 自发热恒温 内搭可以拆卸单穿 一衣三穿～性价比高哦～","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M04/20/6E/CgvUBVZRhK2AKFvbAACVNKIwDcQ244-lists_ls.jpg","Stock":19,"Price":920.0,"MarketPrice":0.0,"SellerId":459249,"SellerName":"yu8750","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/459249_3ac32038f6054b45bc9aee68317dff54_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":4,"ProductType":1},{"ProductId":"cb7a5000-8775-4c79-ab2d-8bb9b1de8551","Name":"（用码头优惠券立减100！！）Banana Republic毛衫，面料含25%精纺羊毛，毛领非常舒适，可拆卸，灰色，黑色两色 ","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M03/1E/F2/CgvUBFZRcLKAEQfEAABiniFRSZw250-lists_ls.jpg","Stock":20,"Price":1199.0,"MarketPrice":0.0,"SellerId":553318,"SellerName":"橡树结满小星星","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/553318_82b8617ed3ac434587cc03171537a837_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":6,"ProductType":1},{"ProductId":"4e7d5433-b4af-4651-812a-dd630710a80a","Name":"【不抢就没啦】（用洋码头优惠卷立减100，只需999必须开抢）Tiffany经典蓝心💙❤粉心手链！女人一辈子一定要有一个小蓝盒！","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M08/21/06/CgvUA1ZRhEuAGNN6AABYntmKskI464-lists_ls.jpg","Stock":30,"Price":1199.0,"MarketPrice":0.0,"SellerId":413235,"SellerName":"xan411","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/413235_5d182d0f907344a6977f04e500b642e8_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":8,"ProductType":1},{"ProductId":"91950b9e-ac9c-4695-b4b3-a7803be5cad1","Name":"Mk ava系列超级经典款是十字纹牛皮 可以斜挎 中号 特价","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M07/25/63/CgvUBFZR2OKAK68bAAG-vguYKjQ197-lists_ls.jpg","Stock":20,"Price":1980.0,"MarketPrice":0.0,"SellerId":4706439,"SellerName":"洋老板特价每日直播","SellerLogo":"http://p8.img.ymatou.com/G02/M09/94/B7/CgvUBFYrH0GADVggAAXDdKvmQWM619_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":15,"ProductType":1},{"ProductId":"ce31c4d2-06f6-498c-ba70-9d715d47919f","Name":"【再不抢就木有啦】【swagger 20小号出❤️新色啦，用洋码头优惠券只需1899，还不快抢】✨Coach Swagger 20小号，红色、藏蓝、白色、粉拼，尺寸：20 15 10cm左右","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M00/21/33/CgvUBFZRlFyASaKyAABHTdzdtLs314-lists_ls.jpg","Stock":42,"Price":2099.0,"MarketPrice":0.0,"SellerId":413235,"SellerName":"xan411","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/413235_5d182d0f907344a6977f04e500b642e8_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":16,"ProductType":1},{"ProductId":"d972b671-8b67-4ac6-b44a-6473b70dff37","Name":"【再不抢就没有啦】polo 拉夫劳伦 男装 男士加厚款 经典款 麻花毛衣 小马标","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M02/1E/AA/CgvUBVZRZp-Afv74AACKhbavOLA716-lists_ls.jpg","Stock":80,"Price":499.0,"MarketPrice":0.0,"SellerId":648441,"SellerName":"懒人美国品牌折扣","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/648441_07e15588dc3d41099b2701e3722832f7_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":17,"ProductType":1},{"ProductId":"25d522e3-8736-4cba-822f-6e42c1aac0ae","Name":"Adidas Extaball W B35352 BLK 超酷的配色哈 看实物哦 价格也是可爱的不得了哈😘😘颜色是后面的那个彩色的哈😘😘","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M01/1F/AD/CgvUBFZRfQ6AP6GWAADHN8yXnMc929-lists_ls.jpg","Stock":36,"Price":499.0,"MarketPrice":0.0,"SellerId":5213397,"SellerName":"sanqingzai","SellerLogo":"http://p10.img.ymatou.com/G02/M04/53/43/CgvUBFYXANiAPfoVAACtoGLL7k0779_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":19,"ProductType":1},{"ProductId":"0308422a-dae4-487b-a190-6a1cb54da95b","Name":"【再不抢就没有啦】coach 男女同款印花logo休闲鞋 36-43 可以配情侣款哟 黑五特价","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M01/1E/1F/CgvUBFZRYGmAGJrHAACeM_Mghw8691-lists_ls.jpg","Stock":78,"Price":599.0,"MarketPrice":0.0,"SellerId":648441,"SellerName":"懒人美国品牌折扣","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/648441_07e15588dc3d41099b2701e3722832f7_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":21,"ProductType":1},{"ProductId":"053d27c9-dcf9-4616-b907-99e37c56f414","Name":"Adidas Superstar Foundation J B23641 WHT经典的不能再经典的全白色板鞋 美的不要不要的哈","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M06/20/19/CgvUBVZRf8WAXVX8AAB6Kdj5Upo538-lists_ls.jpg","Stock":36,"Price":599.0,"MarketPrice":0.0,"SellerId":5213397,"SellerName":"sanqingzai","SellerLogo":"http://p10.img.ymatou.com/G02/M04/53/43/CgvUBFYXANiAPfoVAACtoGLL7k0779_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":24,"ProductType":1},{"ProductId":"005fd717-1104-4e09-aa75-7c4a8403d235","Name":"历史新价😱冰点上新🎉 和码头一起陪着粉丝疯😘Roshe 511881 010白底黑勾黑带男款💥💥来一双哇😘情侣款呀😻这样的价格不出手🙀后悔的一溜溜的哦 拍下留言US号码哈","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M0B/20/69/CgvUBFZRh6OAW04SAACQloBza6w775-lists_ls.jpg","Stock":19,"Price":636.0,"MarketPrice":0.0,"SellerId":5213397,"SellerName":"sanqingzai","SellerLogo":"http://p10.img.ymatou.com/G02/M04/53/43/CgvUBFYXANiAPfoVAACtoGLL7k0779_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":25,"ProductType":1},{"ProductId":"73dfe4be-3d08-465b-948e-046096eda7e0","Name":"【再不抢就没有啦】juicy 女装 女士天鹅绒套装 居家休闲运动 淑女必备款","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M06/1D/DF/CgvUBVZRVP6AGKDKAABDXoUT0Es733-lists_ls.jpg","Stock":99,"Price":649.0,"MarketPrice":0.0,"SellerId":648441,"SellerName":"懒人美国品牌折扣","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/648441_07e15588dc3d41099b2701e3722832f7_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":26,"ProductType":1},{"ProductId":"ab4e4f8e-a25b-4b39-b935-bec7b9538985","Name":"Michael Kors白色板鞋，牛皮鞋面，正价海t报款，799纽约直邮！ ","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M05/1F/CA/CgvUA1ZRcCyAVWhsAAA3RAbramA363-lists_ls.jpg","Stock":99,"Price":799.0,"MarketPrice":0.0,"SellerId":413235,"SellerName":"xan411","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/413235_5d182d0f907344a6977f04e500b642e8_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":28,"ProductType":1},{"ProductId":"16c00ab1-151f-4cb7-bdc6-25285eec31e9","Name":"Nike Air Max 90 Essential 王珞丹 同款黑白奥利奥气垫休闲跑鞋 女款 616730-012","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M09/1F/B5/CgvUBFZRfZGAf_wpAABowOCkgfM470-lists_ls.jpg","Stock":35,"Price":818.0,"MarketPrice":0.0,"SellerId":5213397,"SellerName":"sanqingzai","SellerLogo":"http://p10.img.ymatou.com/G02/M04/53/43/CgvUBFYXANiAPfoVAACtoGLL7k0779_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":29,"ProductType":1},{"ProductId":"55dce613-b05d-43c1-8943-16b9bffc714e","Name":"【黑五抢遍全球不打烊】Ck男士成人内裤，95％棉5％弹力，腰围：M(81-86)L(91-97)XL(102-107)内裤全黑 腰边两色系：蓝灰黑 红红灰。尽量按要求颜色采购 缺色随机发","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M0B/20/68/CgvUA1ZRek6ADm-2AAC7_b2yumg826-lists_ls.jpg","Stock":97,"Price":188.0,"MarketPrice":0.0,"SellerId":413235,"SellerName":"xan411","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/413235_5d182d0f907344a6977f04e500b642e8_m.jpg","CountryName":"美国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/America.png","SortIndex":30,"ProductType":1}]
        },
        '2': {
            Products: [{"ProductId":"2c8670f5-4f53-40bc-a9f2-360bd8d348fc","Name":"【黑五日本折上折】EMS直邮 奥尔滨体验套装！健康水110ml+渗透乳110g，奥尔滨的水可以单用，但是乳必须配合水一起用，而且先乳后水哟，下单请备注要哪种乳，几号乳，直邮价","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M01/29/24/CgvUA1ZSadCAUUFWAAFdvS4Epm8817-lists_ls.jpg","Stock":490,"Price":448.0,"MarketPrice":0.0,"SellerId":549772,"SellerName":"东京story","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/549772_0a984b0da5b14d149eb1eaab02551e44_m.JPG","CountryName":"日本","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Japan.png","SortIndex":1,"ProductType":1},{"ProductId":"92800189-1a2f-4ee8-94b8-7c8d18fe9777","Name":"【韩国新品牌】来自法国的原料时尚女人必备的香水/高雅细腻,以清新的香氛传达个人特色。可以反映出女性优雅的个人特色,低调而性感的香气，则充分呈现出十足的女人味。拼邮","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M08/2B/AD/CgvUBVZSwwiAIHQjAAD_CadXepU399-lists_ls.jpg","Stock":500,"Price":128.0,"MarketPrice":0.0,"SellerId":6179705,"SellerName":"娜娜美丽日记","SellerLogo":"http://p8.img.ymatou.com/G02/M05/C2/47/CgvUBVZK5RyATCEoAABZt8ST5is680_m.jpg","CountryName":"韩国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Korea.png","SortIndex":2,"ProductType":1},{"ProductId":"eefc0825-a0dd-4604-8812-ee7ab73781be","Name":"【日本黑五折上折】超级好吃的日本Calbee卡乐比水果果仁谷物营养麦片！既可以当零食，又可以当早点！可以直接吃，也可以加上牛奶酸奶等、4种水果4种谷物3种果实800g","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M05/20/74/CgvUBVZRhQqAFeygAAC3ZLrB5NM898-listb_lb.jpg","Stock":412,"Price":85.0,"MarketPrice":0.0,"SellerId":1105826,"SellerName":"和趣美食","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/1105826_e24594b3e37e46e4995b8a2af8b82997_m.jpg","CountryName":"日本","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Japan.png","SortIndex":3,"ProductType":1},{"ProductId":"46bdbb0c-d63a-4785-a855-c3e43421c864","Name":"【韩国黑五折上折】WHOO后津率享贵妇级专享套盒，调理女人因气血失调造成的皮肤粗糙暗黄松弛失去光泽，回复美白细腻，紧致水润的皮肤状态，25岁到40岁左右佳品！","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M05/C9/EF/CgvUBVZLNwiALJCqAADLZ5I5bVE208-listb_lb.jpg","Stock":99,"Price":888.0,"MarketPrice":0.0,"SellerId":5806593,"SellerName":"柚子在首尔","SellerLogo":"http://p9.img.ymatou.com/G02/M05/33/35/CgvUA1Yl6TWAYu69AAB7FcWITFY687_m.jpg","CountryName":"韩国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Korea.png","SortIndex":4,"ProductType":1},{"ProductId":"e107b417-d967-4f34-9adc-2129c12d9fcb","Name":"【黑五日本折上折】CPB水磨美容液170ml沁肌紧肤蜜，提供给具有高度美容意识的女性,针对粉刺,毛孔和凸凹不平,让皮肤变得有光泽,水磨是精华水，不是化妆水，用在水乳中间","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M07/20/78/CgvUBVZRhTqAUof-AACUMKLh5BQ402-listb_lb.jpg","Stock":9998,"Price":488.0,"MarketPrice":0.0,"SellerId":483101,"SellerName":"王太在日本","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/483101_5afbe8807bc440db943370ec85e22f61_m.jpg","CountryName":"日本","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Japan.png","SortIndex":5,"ProductType":1},{"ProductId":"cd00013f-d301-46c3-8e35-9e955812e726","Name":"【日本黑五折上折】刚刚人肉背回!北海道特供ROYCE生巧 2盒包邮顺丰 神奇的巧克力，真正入口即化~~可可味、香槟味、白巧、抹茶味 黑巧 轩尼诗 口味超全的!拍下自行备注哦~~","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M01/21/5D/CgvUA1ZRiHGAN5pAAAB86NLrjtE689-listb_lb.jpg","Stock":479,"Price":80.0,"MarketPrice":0.0,"SellerId":1105826,"SellerName":"和趣美食","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/1105826_e24594b3e37e46e4995b8a2af8b82997_m.jpg","CountryName":"日本","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Japan.png","SortIndex":7,"ProductType":1},{"ProductId":"1ca94b97-75aa-41ed-bcce-9e0d1afaeef7","Name":"【韩国黑五折上折】【来自星星的你同款气垫】IOPE气垫BB霜～一正一替，随时随地补妆，打造自然清透的完美底妆～C系列遮瑕好！21号自然偏白，23号自然色，拍下备注哦","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M01/E1/51/CgvUBVZMOfaAOBV7AABh0hL1OIU589-lists_ls.jpg","Stock":839,"Price":188.0,"MarketPrice":0.0,"SellerId":5806593,"SellerName":"柚子在首尔","SellerLogo":"http://p9.img.ymatou.com/G02/M05/33/35/CgvUA1Yl6TWAYu69AAB7FcWITFY687_m.jpg","CountryName":"韩国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Korea.png","SortIndex":8,"ProductType":1},{"ProductId":"3b130b7d-24a5-410c-8a0a-c1c4fa08e04b","Name":"【黑五日本折上折】三宅一生  baobao  6×6  白色  34cm*34cm    2015年款  EMS直邮","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M01/21/AF/CgvUBVZRmO6AN4mgAAC3Lf4BPMY067-lists_ls.jpg","Stock":99,"Price":1860.0,"MarketPrice":0.0,"SellerId":527583,"SellerName":"日本东京代购","SellerLogo":"http://p6.img.ymatou.com/G02/M0A/76/C5/CgvUA1Y3OVuAWlIwAABwt55WyOA582_m.jpg","CountryName":"日本","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Japan.png","SortIndex":9,"ProductType":1},{"ProductId":"29d0b37d-5ec7-49b1-bc17-9f490c07199c","Name":"【韩国黑五折上折】【一件包邮包邮包税】韩国正品瘦腿袜SEXY SECRET秋冬款加绒三倍加厚美腿塑形打底裤  均码弹力强   不起球  非常保暖","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M0B/DF/72/CgvUA1ZMJOqAZ_wiAACBarnLpm8804-lists_ls.jpg","Stock":368,"Price":66.0,"MarketPrice":0.0,"SellerId":3594946,"SellerName":"miumiumiumiu","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/3594946_a84b4b25da8048de8f2263695e6e5966_m.jpg","CountryName":"韩国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Korea.png","SortIndex":10,"ProductType":1},{"ProductId":"16853173-1eb8-4782-b7f5-f61172b7c3be","Name":"【黑五日本折上折整点秒杀】【单拍不发货，需搭配正价商品】HABA鲨烷美容油 保湿滋润修复皮脂膜抗敏感SQ油 15毫升","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M06/24/A5/CgvUA1ZRwQmACNdUAABQlWBAZMg731-lists_ls.jpg","Stock":49,"Price":198.0,"MarketPrice":0.0,"SellerId":1502522,"SellerName":"丽娜在日本","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/1502522_604719a220704a8d82bf52cb37a63353_m.jpg","CountryName":"日本","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Japan.png","SortIndex":11,"ProductType":1},{"ProductId":"4a70c961-9487-47e7-b73a-a35a1d6d4bd2","Name":"【特价秒杀】CLIO珂莱欧亮肤霜排毒素颜霜一秒钟美白霜50ml保湿，控制水油平衡，缓和皮肤外界刺激，镇静皮肤","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M04/0D/F5/CgvUBVZPJh-AXOsdAACSkw4bOR8645-lists_ls.jpg","Stock":975,"Price":168.0,"MarketPrice":0.0,"SellerId":3594946,"SellerName":"miumiumiumiu","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/3594946_a84b4b25da8048de8f2263695e6e5966_m.jpg","CountryName":"韩国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Korea.png","SortIndex":12,"ProductType":1},{"ProductId":"72534e62-aa5c-4510-9144-a228eb003e54","Name":"【黑五日本折上折】全场任意两单拼邮 这个冬天不会冷！厚木ATSUGI 秋冬羊毛450D连裤袜打底袜，尺码M，L可供选择，详情请看图片，黑色蓝色可选，下单备注好哟","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M07/29/7F/CgvUBFZSipmAKqb8AAC9mAbmR2M880-lists_ls.jpg","Stock":499,"Price":155.0,"MarketPrice":0.0,"SellerId":549772,"SellerName":"东京story","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/549772_0a984b0da5b14d149eb1eaab02551e44_m.JPG","CountryName":"日本","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Japan.png","SortIndex":13,"ProductType":1},{"ProductId":"96a9214e-3087-46c7-aa5f-65dec206cfb6","Name":"【圣诞限量】《黑五折上折》最新2015聖誕限量版Laneige兰芝BB气垫粉 正裝+替換,轻易贴装补湿舒缓，升级遮瑕，美白亮泽，防晒防水6大功效极品","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M08/DD/AA/CgvUA1ZME_yAMfunAAEDj1oNP6M968-listb_lb.jpg","Stock":79,"Price":188.0,"MarketPrice":0.0,"SellerId":2158831,"SellerName":"韩国潮流馆","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/2158831_72fdc22e27ff4a978231524564bd831f_m.jpg","CountryName":"韩国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Korea.png","SortIndex":14,"ProductType":1},{"ProductId":"5bb18a8e-4f2b-4843-9556-fa9da86cfcea","Name":"【黒五折上折】【日本直邮】100%正品保证/曰本保湿美容好帮手！HITACHI CM—N3000一W/24.7×7.9×9.3cmx531g/溫泠W Head/皮肤水分增1.3倍！","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M09/9E/36/CgvUA1ZJHHaABtjqAAHKSs1q5co002-listb_lb.jpg","Stock":97,"Price":1560.0,"MarketPrice":0.0,"SellerId":1505251,"SellerName":"兄弟联日本代购","SellerLogo":"http://p6.img.ymatou.com/G02/M0B/78/5E/CgvUBFYGxpOAMOaSAARqARXY4-k574_m.jpg","CountryName":"日本","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Japan.png","SortIndex":15,"ProductType":1},{"ProductId":"72534e62-aa5c-4510-9144-a228eb003e54","Name":"【黑五日本折上折】全场任意两单拼邮 这个冬天不会冷！厚木ATSUGI 秋冬羊毛450D连裤袜打底袜，尺码M，L可供选择，详情请看图片，黑色蓝色可选，下单备注好哟","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M07/29/7F/CgvUBFZSipmAKqb8AAC9mAbmR2M880-lists_ls.jpg","Stock":499,"Price":155.0,"MarketPrice":0.0,"SellerId":549772,"SellerName":"东京story","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/549772_0a984b0da5b14d149eb1eaab02551e44_m.JPG","CountryName":"日本","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Japan.png","SortIndex":17,"ProductType":1},{"ProductId":"8405eddc-b99b-443a-be08-05ff2b8e21cd","Name":"【日本黑五折上折】日本 HABA润泽柔肤水 G露 Lotion 提亮肤色 美白 补水 滋润 180ml  需单独运费8元","PicUrl":"http://pc1.img.ymatou.com/G02/shangou/M02/20/DB/CgvUBFZRjomAOoTEAACU2XgZdQM670-lists_ls.jpg","Stock":195,"Price":98.0,"MarketPrice":0.0,"SellerId":469831,"SellerName":"anet","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/469831_f4354e05d9c0415ba230b940bc6a12a0_m.jpg","CountryName":"日本","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Japan.png","SortIndex":18,"ProductType":1},{"ProductId":"3f3773c6-c612-49ad-a842-5099ee1a231f","Name":"【黑五折上折】秒杀268！原价338！单拍补20元运费！IPSA大名鼎鼎的流金水200ml，保湿、预防成人粉刺、去闭口白头很管用，而且买手只用后皮肤感觉变软变嘭了。JPF00529","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M07/21/4A/CgvUBFZRljiAAsdDAADKzfaliIM672-listb_lb.jpg","Stock":97,"Price":338.0,"MarketPrice":0.0,"SellerId":520462,"SellerName":"HII1东京的苹果","SellerLogo":"http://p7.img.ymatou.com/G02/M07/BE/41/CgvUA1Y7ShiAKrBXAABaEYzopEk981_m.jpg","CountryName":"日本","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Japan.png","SortIndex":19,"ProductType":1},{"ProductId":"7a2c846b-29f1-4a19-99c0-22737061e0fe","Name":"【黑五日本折上折】：两件拼邮转发、心机多色腮红，分两个色号，RD100为橘色系、自然柔和，PK200粉色系、粉色提亮肤色。掩饰黑眼圈，营造层次感！","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M04/C9/E3/CgvUBFZLOXGASb-sAAB5p6cHD7Y788-lists_ls.jpg","Stock":450,"Price":188.0,"MarketPrice":0.0,"SellerId":501750,"SellerName":"董太大嘴呆猴日本淘","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/501750_9632c8605a524593af57f449eea42532_m.JPG","CountryName":"日本","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Japan.png","SortIndex":20,"ProductType":1}]
        },
        '3': {
            Products: [{"ProductId":"15c2e55b-2578-4cb6-8cab-fae21fb416cd","Name":"【爆款】Prada 十字纹玫粉色折叠按扣皮夹  拼邮回国 国内顺丰到付","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M07/FA/58/CgvUBFZNp6GANsFoAACHKmwqbAQ589-lists_ls.jpg","Stock":3,"Price":2880.0,"MarketPrice":0.0,"SellerId":484025,"SellerName":"千遍一律","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/484025_972489b6fce64fc483ee6bc81f1d7420_m.jpg","CountryName":"英国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/England.png","SortIndex":4,"ProductType":1},{"ProductId":"7870d128-def6-4b8d-ac98-5d65501384e9","Name":"🔥爆款🔥Bottega Veneta /BV长款拉链钱夹 内有隔层 🎉多色可选","PicUrl":"http://pc3.img.ymatou.com/G02/shangou/M02/2D/17/CgvUBFZS73uAWWCtAADkToq-8yw938-lists_ls.jpg","Stock":50,"Price":3499.0,"MarketPrice":0.0,"SellerId":6991154,"SellerName":"Goitaly1998","SellerLogo":"http://p7.img.ymatou.com/G02/M00/C3/7F/CgvUBFY7oYuAS5n1AAAsb_J798M333_m.jpg","CountryName":"意大利","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Italy.png","SortIndex":5,"ProductType":1},{"ProductId":"b3c17d51-ca14-434d-b29e-089706e2c860","Name":"celine最经典包包女王 电光蓝中号box 难买无敌 仅一只 奶奶最推荐 国内售价28000+ 现在裸价21900 电光蓝也快绝了！买不到了！","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M03/21/FE/CgvUBVZRnvyAZ7yDAAB42JDwNRI174-lists_ls.jpg","Stock":1,"Price":21900.0,"MarketPrice":0.0,"SellerId":1608680,"SellerName":"娜如奶奶","SellerLogo":"http://p6.img.ymatou.com/G02/M06/3D/B6/CgvUBFYVsDKAAPBtAACoKBJuzVg628_m.jpg","CountryName":"俄罗斯","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Russia.png","SortIndex":7,"ProductType":1},{"ProductId":"9db175bf-9599-4dbe-a2fe-be39ac46937d","Name":"🎉GUCCI 专柜正品🎉 双面围巾🔥100%羊毛🔥 20x175cm🎵 可搭配同款印花包包和鞋子🌹 潮到爆💦💦💦 2280","PicUrl":"http://pc2.img.ymatou.com/G02/shangou/M08/2D/38/CgvUBFZS83mAAzFbAAE85jhWun4185-lists_ls.jpg","Stock":50,"Price":2280.0,"MarketPrice":0.0,"SellerId":6991154,"SellerName":"Goitaly1998","SellerLogo":"http://p7.img.ymatou.com/G02/M00/C3/7F/CgvUBFY7oYuAS5n1AAAsb_J798M333_m.jpg","CountryName":"意大利","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/Italy.png","SortIndex":10,"ProductType":1},{"ProductId":"fe0b47f1-3581-4cc6-8e9b-484fda722745","Name":"Hermes爱马仕经典珐琅瓷手镯窄版～普通H头现在惊爆价💥💥3999¥包直邮包税到手～难得颜色这么全，总有一款适合你","PicUrl":"http://pc5.img.ymatou.com/G02/shangou/M03/C4/F2/CgvUA1ZK-5CAb8EcAABznjAx6WU005-lists_ls.jpg","Stock":5,"Price":3999.0,"MarketPrice":0.0,"SellerId":2244788,"SellerName":"楽楽meatballrikki","SellerLogo":"http://p5.img.ymatou.com/upload/userlogo/middle/2244788_35599d2e9559435a9abc23eba935c92c_m.png","CountryName":"英国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/England.png","SortIndex":13,"ProductType":1},{"ProductId":"63265e5c-284a-4e9c-a9c0-06efad652dc3","Name":"超级爆款！巴宝莉羊毛大衣！黑色红色折上折！只要3800一件！疯抢的节奏！红色还有8-10-12-14码！黑色还有4-6-12码！下单备注身高体重腰围胸围寻码！","PicUrl":"http://pc4.img.ymatou.com/G02/shangou/M06/10/16/CgvUBVZPTk2AQwnoAABQWttZLlY193-lists_ls.jpg","Stock":4,"Price":3800.0,"MarketPrice":0.0,"SellerId":1586409,"SellerName":"拉拉在英国","SellerLogo":"http://p7.img.ymatou.com/G02/M07/14/51/CgvUBFYS4o-AJHGOAAA9QpSK6gU829_m.jpg","CountryName":"英国","CountryId":0,"CountryFlag":"http://img.ymatou.com/app/flag/circle/England.png","SortIndex":16,"ProductType":1}]
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
                    bottom = window.innerHeight;//首屏

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
