<template>
  <div id="mine-player-box">
      <van-row type="flex" justify="space-around">
  <van-col span="5">
      <van-image
  round
  width="1rem"
  height="1rem"
  :src="img"
  @click="gotoPlayer"
>
<template v-slot:error>暂无播放</template>
      </van-image>
  </van-col>
  <van-col span="5">
      <van-icon name="arrow-left" />
  </van-col>
  <van-col span="5">
      <van-icon v-if="isplay" name="play" />
      <van-icon v-else name="pause" />
  </van-col>
  <van-col span="5">
      <van-icon name="arrow" />
  </van-col>
</van-row>
      
  </div>
</template>

<script>

export default {
name:"MinePlayer",
data(){
    return{
        img:"",
        isplay:true,

    }
},
methods:{
    gotoPlayer(){
        this.$router.push({ path: "/play" });
    }
}
}
</script>

<style>
#mine-player-box{
    text-align: center;

}
</style>