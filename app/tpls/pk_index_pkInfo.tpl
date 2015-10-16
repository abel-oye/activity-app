<div class="pk-info-wrapper">
  <img class="pk-flag"  src="/images/pk.png" alt="">
  <div class="pk-left-wrapper">
    <div class="pk-pro-wrapper">
      <div class="pk-pro-title">
        <h3>{{= RedProductName }}</h3>
        <span class="sub-title">{{= RedProductSubTitle }}</span>
      </div>
      <div class="pk-pro-sling">
        <span class="pk-sling"></span>
        <span class="pk-sling"></span>
      </div>
      <div class="pk-pro-body J-open" data-url="http://item.app.ymatou.com/forYmatouApp/product/pid?pid={{=RedProductId}}">
        <img src="{{=RedProductImage}}" alt="">
        <div class="pk-pro-info">
          <span class="country"><img src="{{= RedCountryIcon }}" alt="">{{= RedCountry }}</span>
          <span class="price">&yen;{{=RedProductPrice}}</span>
        </div>

      </div>
    </div>
    <div class="pk-recommend-reason">
      <div class="pk-vote-show">
       <div class="pk-sling-wrapper">
         <span class="pk-sling"></span>
       </div>

       <div class="pk-sling-wrapper">
         <span class="pk-sling"></span>
       </div>
      </div>
      <div class="pk-recommend-info">
        <div class="title">
          <img src="{{= RedHeadImage }}" alt="">
        </div>
        <div class="pk-recommend-desc">{{=RedProductRecommend}}</div>
      </div>
    </div>
  </div>
  <div class="pk-right-wrapper">
    <div class="pk-pro-wrapper">
      <div class="pk-pro-title">
        <h3>{{=BlueProductName}}</h3>
        <span class="sub-title">{{=BlueProductSubTitle}}</span>
      </div>
      <div class="pk-pro-sling">
        <span class="pk-sling"></span>
        <span class="pk-sling"></span>
      </div>
      <div class="pk-pro-body J-open" data-url="http://item.app.ymatou.com/forYmatouApp/product/pid?pid={{=BlueProductId}}">
        <img src="{{=BlueProductImage}}" alt="">
        <div class="pk-pro-info">
          <span class="country"><img src="{{=BlueCountryIcon}}" alt="">{{=BlueCountry}}</span>
          <span class="price">&yen;{{=BlueProductPrice}}</span>
        </div>

      </div>
    </div>
    <div class="pk-recommend-reason">
      <div class="pk-vote-show">
        <div class="pk-sling-wrapper">
          <span class="pk-sling"></span>
        </div>
        <div class="pk-sling-wrapper">
          <span class="pk-sling"></span>
        </div>
      </div>
      <div class="pk-recommend-info">
        <div class="title">
          <img src="{{= BlueHeadImage }}" alt="">
        </div>
        <div class="pk-recommend-desc">{{=BlueProductRecommend}}</div>
      </div>
    </div>
  </div>
</div>
