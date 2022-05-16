<template>
  <div>
      <!-- 顶部搜索框 -->
    <Search/>
    <!-- 歌曲排行列表 -->
    <MusicList/>
    <!-- 歌手推荐列表 -->
    <SingerList/>
    <!-- 底部导航栏 -->
    <Tabbar/>
  </div>
</template>

<script>
import Search from "@/components/Search.vue"
import MusicList from "./components/MusicList.vue"
import Tabbar from "@/components/Tabbar.vue"
import SingerList from "./components/SingerList.vue"

export default {
name:"Find",
 components:{
Search,
MusicList,
Tabbar,
SingerList,
 }
}
</script>

<style>

</style>