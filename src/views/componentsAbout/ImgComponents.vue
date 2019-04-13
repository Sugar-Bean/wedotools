<template>
  <span style="width: 100%;position: relative">
    <img style="width: 100%;height: 100%" :src="src"/>
    <div class="title-position">
      <div class="titleB" @click="$emit('changeRouter')" style="cursor: pointer">{{bigTitle}}</div>
      <div class="titleS" @click="$emit('changeRouter')" style="cursor: pointer">{{smallTitle}}</div>
    </div>
  </span>
</template>

<script>
  export default {
    props:{
      bigTitle:String,
      smallTitle:String,
      src:String,
    },
    data(){
      return{

      }
    }
  }
</script>

<style scoped>
  .title-position{
    position: absolute;
    bottom: 40px;
    transform: translateX(-50%);
    left: 50%;
  }
  .titleB{
    color: whitesmoke;
    font-size: 25px;
    text-align: center;
  }
  .titleS{
    color: whitesmoke;
    font-size: 15px;
    text-align: center;
  }
</style>