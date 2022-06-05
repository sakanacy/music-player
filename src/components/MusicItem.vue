<template>
  <div>
    <!-- 歌曲列表播放全部按钮 -->
    <div class="MusicItem-playAll" @click="playAll">
      <van-icon name="play-circle-o" size="20px" />
      <span>播放全部</span>
    </div>
    <!-- 歌曲列表循环显示 -->
    <van-cell-group>
      <van-cell
        v-for="(item, index) in MusicList"
        :key="index"
        :title="item.name"
        :label="item.ar[0].name"
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
  methods: {
    ...mapMutations([
      "updateplayList",
      "updateplayListIndex",
      "addplayList",
      "updateIsPlay",
    ]),
    // 单曲播放按钮
    musicPlay(id) {
      // 如果已经播放列表全部，则直接切换点击歌曲
      if (this.isplayAll) {
        this.updateplayListIndex(id);
      } else {
        // 否则将点击歌曲加入当前列表最后，再切换歌曲
        this.addplayList(this.MusicList[id]);
        this.updateplayListIndex(this.playList.length - 1);
      }
      // 播放歌曲
      this.updateIsPlay(true);
    },
    // 播放所有歌曲，把列表歌曲加入播放列表
    playAll() {
      this.updateplayList(this.MusicList);
      this.updateplayListIndex(0);
      this.updateIsPlay(true);
      this.isplayAll = true;
      // console.log("播放全部")
      // console.log(this.playList)
    },
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