<template>
  <div>
    <!-- 底部迷你播放器 -->
    <div id="mine-player-box">
      <van-cell
        :icon="playList[playListIndex].al.picUrl"
        :title="playList[playListIndex].name"
        :label="playList[playListIndex].ar[0].name"
        @click="updateplayerShow"
        center
      >
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
        @timeupdate="updateTime"
        @ended="playEnd"
      ></audio>
    </div>
    <!-- 歌曲播放页面 -->
    <div>
      <van-popup
        v-model="isplayerShow"
        position="bottom"
        :style="{ height: '100%' }"
      >
        <MusicPlayer
          :musicList="playList[playListIndex]"
          :songPlay="songPlay"
        />
      </van-popup>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import MusicPlayer from "@/components/MusicPlayer.vue";
export default {
  name: "MinePlayer",
  components: {
    MusicPlayer,
  },
  computed: {
    ...mapState(["playList", "playListIndex", "isPlay", "playerShow",'playercurrentTime']),
    isplayerShow: {
      // 解决computed计算属性和v-model双向绑定报错
      get() {
        return this.playerShow;
      },
      set() {},
    },
  },
  data() {
    return {
      songUrl: "",
    };
  },
  watch: {
    musicId(val) {
      console.log("id" + val);
    },
  },
  methods: {
    ...mapMutations([
      "updateIsPlay",
      "updateplayerShow",
      "updateplayercurrentTime",
      "updateplayListIndex",
    ]),
    songPlay() {
      if (this.$refs.audio.paused) {
        this.$refs.audio.play();
        this.updateIsPlay(true);
      } else {
        this.$refs.audio.pause();
        this.updateIsPlay(false);
      }
    },
    // 返回歌曲当前时间 每一秒钟赋值一次
    updateTime() {
      // this.interVal = setTimeout(() => {
      //     this.updatecurrentTime(this.$refs.audio.currentTime);
      //     console.log(this.$refs.audio.currentTime);
      //   }, 1000);
  this. updateplayercurrentTime(this.$refs.audio.currentTime)
  console.log(this.playercurrentTime)
    },
    playEnd() {
      this.updateIsPlay(false);
      if (this.playListIndex < this.playList.length - 1) {
        this.updateplayListIndex(this.playListIndex + 1);
        this.updateIsPlay(true);
      }
    },
  },
  watch: {
    isPlay(val) {
      if (val) {
        console.log("播放");
        this.$refs.audio.autoplay = true;
      }
    },
  },
  created() {},
  mounted() {
    this.updateTime();
  },
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
  padding-right: 10px;
  border-top: 1px solid #ebedf09f;
}
.van-cell__left-icon {
  width: 60px;
  height: 60px;
  margin-right: 0;
}
.van-icon__image {
  object-fit: cover;
}
</style>