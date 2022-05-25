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
  </div>
</template>

<script>
import { getSongByIdAPI } from "@/api";
export default {
  name: "MinePlayer",
  props: {
    musicId: Number,
    musicPic: String,
    musicname: {
      type: String,
      default: "歌名",
    },
    singer: {
      type: String,
      default: "歌手",
    },
  },
  data() {
    return {
      isplay: true,
    };
  },
  watch: {
    musicId(val) {
      console.log("id"+val);
      console.log("id2"+this.musicId)
    },
  },
  methods: {
    gotoPlayer() {
      this.$router.push({
        path: "/play",
        query: {
          id: this.musicId,
        },
      });
    },
    isPlay() {
      this.isplay = !this.isplay;
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