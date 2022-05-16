<template>
  <div>
    <!-- 顶部搜索框 -->
    <Search/>
    <!-- 轮播图 -->
    <Swipe/>
    <!-- 歌曲排行列表 -->
    <MusicList/>
    <!-- 音乐播放框 -->
    <MinePlayer/>
    <!-- 底部导航栏 -->
    <Tabbar/>
  </div>
</template>

<script>
import Swipe from "./components/Swipe.vue"
import Search from "@/components/Search.vue"
import MinePlayer from "@/components/Mine_Player.vue"
import MusicList from "./components/MusicList.vue"
import Tabbar from "@/components/Tabbar.vue"

export default {
  name: "Home",
  components: {
    Swipe,
    Search,
    MusicList,
    MinePlayer,
    Tabbar
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>