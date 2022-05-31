<template>
<div>
  <div id="mine-player-box">
    <van-cell :icon="playList[playListIndex].al.picUrl" :title="playList[playListIndex].name" :label="playList[playListIndex].ar[0].name" @click="gotoPlayer" center>
      <!-- 右侧播放图标 -->
      <template #right-icon>
        <van-icon
          :name="isPlay ? 'pause-circle-o' : 'play-circle-o'"
          @click.stop="songPlay()"
          size="30px"
        />
      </template>
    </van-cell>
    <audio
      ref="audio"
      preload="true"
      :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"
    ></audio>
  </div>
  <div>
    <van-popup v-model="playerShow" position="bottom" :style="{ height: '100%' }" />
  </div>
  </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
export default {
  name: "MinePlayer",
  computed:{
    ...mapState(['playList','playListIndex','isPlay','playerShow'])
  },
  data() {
    return {
      songUrl:"",
    };
  },
  watch: {
    musicId(val) {
      console.log("id"+val);
    },
  },
  methods: {
    ...mapMutations(['updateIsPlay','updateplayerShow']),
    gotoPlayer() {
      // this.$router.push({
      //   path: "/play",
      //   query: {
      //     id: this.musicId,
      //   },
      // });
      console.log("点击")
      this.updateplayerShow(true)
    },
    
    songPlay() {
      if(this.$refs.audio.paused){
        this.$refs.audio.play();
        this.updateIsPlay(true)
      }else{
        this.$refs.audio.pause()
        this.updateIsPlay(false)
      }
      
    },
  },
  watch:{
    isPlay(val){
      if(val){
        console.log("播放")
        this.$refs.audio.autoplay=true;
      }

    }
  },
  created(){
       
  },
  mounted(){
  }
};
</script>

<style lang="less" scoped>
#mine-player-box {
  width: 100%;
  text-align: center;
  position: fixed;
  bottom: 0;
  height: 60px;
}
.van-cell {
  height: 60px;
  padding: 0;
  padding-right:10px;
  border-top: 1px solid #ebedf09f;
}
.van-cell__left-icon{
  width: 60px;
  height: 60px;
  margin-right:0;
}
.van-icon__image{
  object-fit:cover;
}
</style>