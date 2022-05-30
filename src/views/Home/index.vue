<template>
  <div>
    <!-- 顶部导航栏 -->
    <TopNav />
    <!-- 轮播图 -->
    <Swipe />
    <!-- 每日新歌 -->
    <div class="newSong-content">
      <div style="padding:5px 16px">
        <van-row type="flex" justify="space-between" align="center">
  <van-col class="newSong-title" span="10">新歌推荐</van-col>
  <van-col class="newSong-more" span="3">更多></van-col>
</van-row>
        </div>
      <div class="newSong-box">
        <MusicItem :MusicList="newSongs" />
      </div>
    </div>

    <div id="page-bottom">
      <!-- 底部导航栏 -->
      <!-- <Tabbar :active="active"/> -->
    </div>
  </div>
</template>

<script>
import TopNav from "@/components/TopNav.vue";
import Swipe from "./components/Swipe.vue";
import MusicItem from "@/components/MusicItem.vue";
import { getNewSongAPI } from "@/api/index";

export default {
  name: "Home",
  components: {
    TopNav,
    Swipe,
    MusicItem,
  },
  data() {
    return {
      newSongs: [],
    };
  },
  methods: {
    async getNewSong() {
      let res = await getNewSongAPI();
      // 查看获取数据
      console.log("每日新歌");
      console.log(res);
      res.data.result.forEach((item) => {
        let id = item.id;
        let name = item.name;
        let ar = [{ name: item.song.artists[0].name }];
        this.newSongs.push({ id, name, ar });
      });
      console.log(this.newSongs);
    },
        // 播放所有歌曲
    playAll(){

    }
  },
  mounted() {
    this.getNewSong();
  },
};
</script>

<style lang="less" scoped>
.newSong-content {
  .newSong-title{
    font-weight: bold;
    font-size: 20px;
  }
  .newSong-more{
    font-size: 13px;
    color: gray;
  }
  .newSong-box {
    background-color: white;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
   
  }
}
</style>