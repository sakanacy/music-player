<template>
  <div id="mine-player-box">
    <van-cell :icon="musicPic" :title="musicname" :label="singer" @click="gotoPlayer" center>
      <!-- 右侧播放图标 -->
      <template #right-icon>
        <van-icon
          :name="isplay ? 'pause-circle-o' : 'play-circle-o'"
          @click="isPlay"
          size="25px"
        />
      </template>
    </van-cell>
    <audio
      ref="audio"
      preload="true"
      :src="musicLink"
    ></audio>
  </div>
</template>

<script>

export default {
  name: "MinePlayer",
  props: {
    musicId:String,
    musicPic: String,
    musicname: {
      type: String,
      default: "歌名",
    },
    singer: {
      type: String,
      default: "歌手",
    },
    musicLink:""
    // https://music.163.com/song/media/outer/url?id=1480380026.mp3
  },
  data() {
    return {
      isplay: true,
      
    };
  },
  watch: {
    musicId(val) {
      console.log("id"+val);
    },
  },
  methods: {
    gotoPlayer() {
      // this.$router.push({
      //   path: "/play",
      //   query: {
      //     id: this.musicId,
      //   },
      // });
    },
    isPlay() {
      this.isplay = !this.isplay;
      this.$refs.audio.play()
    },
  },
};
</script>

<style lang="less" scoped>
#mine-player-box {
  width: 100%;
  background-color: antiquewhite;
  text-align: center;
  position: fixed;
  bottom: 1.33333rem;
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
}
</style>