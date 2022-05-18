<template>
  <div id="mine-player-box">
      <van-image
  round
  width="2rem"
  height="2rem"
  :src="img"
  @click="gotoPlayer"
/>
  </div>
</template>

<script>
export default {
name:"MinePlayer",
data(){
    return{
        img:"",
    }
},
methods:{
    gotoPlayer(){

    }
}
}
</script>

<style>
#mine-player-box{
    position:absolute;
    right: 0;
    bottom: 0;
}
</style>