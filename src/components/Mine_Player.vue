<template>
  <div>
    <!-- 底部迷你播放器，包含歌曲信息-->
    <div id="mine-player-box">
      <van-cell
        :icon="playList[playListIndex].al.picUrl"
        :title="playList[playListIndex].name"
        :label="playList[playListIndex].ar[0].name"
        @click="updateplayerShow"
        center
      >
        <!-- 右侧播放图标，点击播放/暂停歌曲-->
        <template #right-icon>
          <van-icon
            :name="isPlay ? 'pause-circle-o' : 'play-circle-o'"
            @click.stop="songPlay()"
            size="30px"
          />
        </template>
      </van-cell>
      <!-- 音乐播放器 -->
      <audio
        ref="audio"
        preload="true"
        :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"
        @timeupdate="updateTime"
        @ended="playEnd"
      ></audio>
    </div>
    <!-- 歌曲播放页面，底部弹出层实现 -->
    <div>
      <van-popup
        v-model="isplayerShow"
        position="bottom"
        :style="{ height: '100%' }"
      >
        <!-- 歌曲播放页详细内容 -->
        <MusicPlayer
          :musicList="playList[playListIndex]"
          :songPlay="songPlay"
          :updatemusicTime="updatemusicTime"
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
    ...mapState([
      "playList",
      "playListIndex",
      "isPlay",
      "playerShow",
      "playercurrentTime",
      "musicduration",
    ]),
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
  methods: {
    ...mapMutations([
      "updateIsPlay",
      "updateplayerShow",
      "updateplayercurrentTime",
      "updateplayListIndex",
      "updatemusicduration",
    ]),
    // 歌曲播放暂停控制
    songPlay() {
      if (this.$refs.audio.paused) {
        this.$refs.audio.play();
        this.updateIsPlay(true);
      } else {
        this.$refs.audio.pause();
        this.updateIsPlay(false);
      }
    },
    // 返回歌曲当前时间
    updateTime() {
      this.updateplayercurrentTime(this.$refs.audio.currentTime);
      // 测试当前播放时间
      // console.log(this.playercurrentTime)
    },
    // 返回歌曲总时长
    updatemusicTime() {
      this.updatemusicduration(this.$refs.audio.duration);
      // 测试当前歌曲总时长
      // console.log(this.musicduration)
    },
    // 歌曲播放结束自动播放下一首，播放结束显示暂停
    playEnd() {
      this.updateIsPlay(false);
      if (this.playListIndex < this.playList.length - 1) {
        this.updateplayListIndex(this.playListIndex + 1);
        this.updateIsPlay(true);
      }
    },
  },
  watch: {
    // 是否播放值改变，播放状态改变
    isPlay(val) {
      if (val) {
        this.$refs.audio.autoplay = true;
      }
    },
  },
  mounted() {
    this.updateTime();
  },
};
</script>

<style lang="less" scoped>
// 迷你播放器样式，固定在底部
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