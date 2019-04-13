<template>
  <span style="position: relative">
     <img width="85%" :src="src"/>
     <div class="bottomDiv flex" style="cursor: pointer">
       <div  class="flex-1" style="text-align: center">{{title}}</div>
       <div  style="text-align:center;width:60px;" class="iconfont icon-iconfront-6"></div>
     </div>
  </span>
</template>

<script>
  export default {
    props:{
      src:String,
      title:String,
    },
    data(){
      return{

      }
    },
  }
</script>

<style scoped>
.bottomDiv{
  position:absolute;
  bottom: 4px;
  height: 45px;
  width: 100%;
  background-color: rgba(159, 159, 159, 0.3);
  line-height: 35px;
  color: white;
}
</style>