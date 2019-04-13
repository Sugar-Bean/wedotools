<template>
  <div style="height: 100%">
    <swiper :options="swiperOptionv" style="height: 100%" ref="swiper">
      <swiper-slide style="height: 100%;background-image: url('./static/images/1.jpg') ">
        <div style="color: white;position:absolute;bottom: 9%;font-size: 23px;transform: translateX(-50%); left: 50%;">
          Welcome To The WEDO World
        </div>
        <div class="iconfont icon-jiantou_xia iconfont" style="cursor: pointer" @click="toNext" ></div>
      </swiper-slide>
      <!--轮播-->
      <swiper-slide style="height: 100%" >
          <div style="height:10%">
              <div style="height: 100%;" class="flex">
                <div style="width:500px;" class="flex flex-v flex-pack-center flex-align-center">
                  <img width="233" :src="'./static/images/logo.png'"/>
                </div>

                <el-tabs v-model="tabSelected" @tab-click="handleClick" style="width: 37%;margin: auto;top: 50%;">
                  <el-tab-pane label="Home" name="Home"></el-tab-pane>
                  <el-tab-pane label="Brand introduction" name="BrandIntroduction"></el-tab-pane>
                  <el-tab-pane label="Wedo shop" name="WedoShop"></el-tab-pane>
                  <el-tab-pane label="News" name="News"></el-tab-pane>
                  <el-tab-pane label="Knowledge" name="Knowledge"></el-tab-pane>
                  <el-tab-pane label="Contact us" name="ContactUs"></el-tab-pane>
                </el-tabs>

                <div style="width:500px;" class="flex flex-v flex-pack-center flex-align-center">
                  <el-input size="mini" class=""
                            style="width:250px;"
                            clearable
                            placeholder="请输入内容"
                            v-model="search_world"
                  >
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                  </el-input>
                </div>

              </div>
          </div>
          <swiper :options="swiperOptionh" style="height: 90%">
            <swiper-slide style="height: 100%" v-for="item in items" :key="item.id"> <img style="width: 100%" :src="item.src"/></swiper-slide>
            <div class="swiper-pagination swiper-pagination-h" slot="pagination"></div>
          </swiper>
      </swiper-slide>

      <swiper-slide style="height: 100%;">
        <div style="width: 70%;height: 80%;margin: auto;margin-top:5%;" class="flex flex-v">
          <div class="flex-1 flex"  style="height:40%;overflow: hidden">
            <img-components class="flex-1" :bigTitle="bigTitle" :smallTitle="smallTitle" :src="'./static/images/3.jpg'" @changeRouter="$router.push({name:'BrandIntroduction'})"></img-components>
            <div style="width: 80px"></div>
            <img-components class="flex-1" :bigTitle="bigTitle" :smallTitle="smallTitle" :src="'./static/images/4.jpg'" @changeRouter="$router.push({name:'BrandIntroduction'})"></img-components>
          </div>
          <div style="height: 50px"></div>
          <div class="flex-1" style="overflow: hidden;position: relative;color:#666666;">
            <img height="100%" width="100%" :src="'./static/images/5.jpg'"/>
            <div class="newsPicStyle flex flex-pack-center">
              <div class="flex flex-v flex-pack-center flex-align-center news-1">News</div>
              <div class="flex flex-v flex-pack-center flex-align-center news-2">
                <div v-for="item in 6" style="height: 30px" >Brand introduction Brand introduction </div>
              </div>
            </div>
            <div style="position:absolute;bottom:8px;right:5px;font-size: 15px;">more</div>
        </div>
          <!--<img  class="flex-1" :src="'./static/images/5.jpg'"/>-->
        </div>
      </swiper-slide>

      <swiper-slide style="height: 100%;background-color: #ececec">
        <div class="flex flex-v" style="height: 100%;width: 70%;margin: auto;">
          <div style="height: 45%;text-align: center;">
            <div class="fontStyle">WEDO Shop</div><br/>
            <div class="fontStyle2"></div>
          </div>
          <div class="flex-1">
            <el-row :gutter="10" >
              <el-col :span="6"><images-shop-components :src="'./static/images/6.jpg'" :title="'Brand Introduction'"/></el-col>
              <el-col :span="6"><images-shop-components :src="'./static/images/7.jpg'" :title="'Brand Introduction'"/></el-col>
              <el-col :span="6"><images-shop-components :src="'./static/images/8.jpg'" :title="'Brand Introduction'"/></el-col>
              <el-col :span="6"><images-shop-components :src="'./static/images/9.jpg'" :title="'Brand Introduction'"/></el-col>
            </el-row>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide style="height: 100%"><img height="100%" width="100%" :src="'./static/images/10.jpg'"/></swiper-slide>
      <swiper-slide style="height: 100%">
        <div class="flex" style="width: 70%;height: 80%;margin: auto;margin-top:5%;">
          <div class="flex-1" style="height: 100%"><img height="100%" :src="'./static/images/11.jpg'"/></div>
          <div style="width: 20px;"></div>
          <div class="flex-1 flex-v" style="height: 48%;width: 100%">
            <img-components class="flex-1" :bigTitle="bigTitle" :src="'./static/images/12.jpg'" @changeRouter="$router.push({name:'ContactUs'})"></img-components>
            <div style="height: 20px"></div>
            <img-components class="flex-1" :bigTitle="bigTitle" :src="'./static/images/13.jpg'" @changeRouter="$router.push({name:'ContactUs'})"></img-components>
          </div>
        </div>
      </swiper-slide>
      <!--结束页-->
      <swiper-slide style="height: 100%">
        <div class="flex flex-v" style="height: 100%">
          <div style="height: 70%;border:1px solid red;text-align: center;color:#666666">
            <div><img :src="''"></div>
            <div style="font-size: 20px">Strive To Serve You</div>
            <div style="font-size: 40px">400 - 0022 - 737</div>
          </div>
          <div style="background-color:#ececec;height: 30%;text-align: center">
            <img :src="'./static/images/logo.png'"/>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  import ImgComponents from "@/views/componentsAbout/ImgComponents"
  import ImagesShopComponents from "@/views/ImagesShopComponents"
  export default {
    components:{
      ImgComponents,ImagesShopComponents
    },
    data(){
      return{
        bigTitle:'Brand Introduction',
        smallTitle:'Brand Introduction Brand Introduction Brand Introduction',
        search_world:'',
        tabSelected:'Home',
         items:[
           {id:"1",src:"./static/images/2.jpg"},
           {id:"2",src:"./static/images/2.jpg"},
           {id:"3",src:"./static/images/2.jpg"},
           {id:"4",src:"./static/images/2.jpg"},
           {id:"5",src:"./static/images/2.jpg"},
           {id:"6",src:"./static/images/2.jpg"},
           {id:"7",src:"./static/images/2.jpg"},
         ],


        swiperOptionv: {
          direction: 'vertical',
          slidesPerView: 1,
          spaceBetween: 30,
          mousewheel: true,
          pagination: {
            el: '.swiper-pagination-v',
            clickable: true
          }
        },
        swiperOptionh: {
          pagination: {
            el: '.swiper-pagination-h',
            dynamicBullets: true,
            clickable: true,
          }
        }
      }
    },
    methods:{
      handleClick(){
         switch (this.tabSelected) {
           case 'Home': window.location.href="http://www.wedotools.com/";break;
           case 'BrandIntroduction': window.location.href="http://www.wedotools.com/class/view?id=1";break;
           case 'WedoShop': window.location.href="http://shop.wedotools.com/";break;
           case 'News': window.location.href="http://www.wedotools.com/class/view?id=3";break;
           case 'Knowledge': window.location.href="http://www.wedotools.com/class/view?id=4";break;
           case 'ContactUs': window.location.href="http://www.wedotools.com/class/view?id=6";break;
           default:window.location.href="http://www.wedotools.com/";
         }
      },
      toNext(){
        this.$refs.swiper.swiper.slideNext()
      }
    }
  }
</script>

<style scoped>
  .fontStyle{
    font-size: 50px;
    margin-top: 100px;
  }
  .fontStyle2{
    font-size: 20px;
    color: #666666;
  }
  /*>>>.el-card__body{*/
    /*padding: 0px;*/
  /*}*/
  .iconfont{
    color:white;
    font-size: 30px;
    transform: translateX(-50%);
    left: 50%;
    bottom: 4%;
    position:absolute;
  }

  /*>>>.el-input--mini .el-input__inner{*/
    /*height: 20px;*/
  /*}*/
  >>>.el-tabs__item:hover{
    color: #bc3843;
  }
  >>>.el-tabs__item.is-active{
    color: #bc3843;
  }
  >>>.el-tabs__active-bar{
    background-color: #bc3843;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .newsPicStyle{
    width: 60%;
    height: 80%;
    /*border: 1px solid red;*/
    position:absolute;
    right: 18px;
    top:20px;
  }
  .news-1{
    width: 200px;
    border-right: 1px solid #7c7c7c;
    font-size: 25px;
    top:10px;
  }
  .news-2{
    font-size: 15px;
    padding: 9px;
  }
</style>