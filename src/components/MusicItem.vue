<template>
  <div>
    <div class="MusicItem-playAll" @click="playAll">
      <van-icon name="play-circle-o" size="20px" />
      <span>播放全部</span>
    </div>
    <van-cell-group>
      <van-cell
        v-for="(item, index) in MusicList"
        :key="index"
        :title="item.name"
        :label="item.ar[0].name"
        class="musicItem-scroll"
      >
        <template #right-icon>
          <!-- 播放图标 -->
          <van-icon
            @click="musicPlay(index)"
            name="play-circle-o"
            color="#7b7b7b"
            size="25px"
          />
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import { List } from "vant";
export default {
  name: "MusicItem",
  data() {
    return {
      isplayAll: false,
    };
  },
  computed: {
    ...mapState(["playList"]),
  },
  props: {
    MusicList: List,
  },
  created() {
    console.log("列表歌曲");
    console.log(this.MusicList);
  },
  methods: {
    ...mapMutations(["updateplayList", "updateplayListIndex", "addplayList","updateIsPlay"]),
    musicPlay(id) {
      if (this.isplayAll) {
        this.updateplayListIndex(id);
      } else {
        this.addplayList(this.MusicList[id]);
        this.updateplayListIndex(this.playList.length-1);
      }
      this.updateIsPlay(true);
    },
    playAll() {
      this.updateplayList(this.MusicList);
      this.updateplayListIndex(0);
      this.updateIsPlay(true);
      this.isplayAll = true;
    },
  },
  mounted(){
  // 滚动出现动画效果
  window.addEventListener("scroll", this.scrollArea);
    this.$scrollReveal.reveal(".musicItem-scroll", {
      duration: 500,
      delay: 200,
      origin: "bottom",
      // 回滚的时候是否再次触发动画
      reset: false,
      // 在移动端是否使用动画
      mobile: true,
      distance: "10px",
      opacity: 0.001,
      easing: "linear",
      scale: 0.9,
    });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollArea);
  },
};
</script>

<style lang="less" scoped>
.MusicItem-playAll {
  background-color: white;
  padding: 5px 16px;
  font-size: 15px;
  display: flex;
  align-items: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  span {
    padding: 5px;
  }
}
</style>