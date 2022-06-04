<template>
  <div>
    <!-- 顶部导航栏 -->
    <TopNav :index="1" />
    <!-- 推荐歌单 -->
    <MusicList/>
        <!-- 歌手榜单 -->
    <SingerTopList />
  </div>
</template>

<script>
import TopNav from "@/components/TopNav.vue";
import MusicList from "./components/MusicList.vue";
import SingerTopList from './components/SingerTopList.vue'
export default {
  name: "Find",
  components: {
    TopNav,
    MusicList,
    SingerTopList
  },
  mounted() {},
  data() {
    return {};
  },
};
</script>

<style>
</style>