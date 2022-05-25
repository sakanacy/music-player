<template>
  <div>
      <!-- 顶部搜索框 -->
    <Search/>
    <!-- 歌曲排行列表 -->
    <MusicList/>
    <!-- 歌手推荐列表 -->
    <SingerList/>
    <div id="page-bottom">
      <!-- 音乐播放框 -->
      <MinePlayer/>
    <!-- 底部导航栏 -->
    <Tabbar :active="active"/>
    </div>
  </div>
</template>

<script>
import Search from "@/components/Search.vue"
import MusicList from "./components/MusicList.vue"
import Tabbar from "@/components/Tabbar.vue"
import SingerList from "./components/SingerList.vue"
import MinePlayer from "@/components/Mine_Player.vue"

export default {
name:"Find",
 components:{
Search,
MusicList,
Tabbar,
SingerList,
MinePlayer
 },
   mounted(){
  },
 data() {
    return {
      active:1,
    };
  },
}
</script>

<style>

</style>