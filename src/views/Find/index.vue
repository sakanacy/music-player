<template>
  <div>
    <!-- 顶部导航栏 -->
    <TopNav />
    <!-- 推荐歌单 -->
    <MusicList/>
  </div>
</template>

<script>
import TopNav from "@/components/TopNav.vue";
import MusicList from "./components/MusicList.vue";
export default {
  name: "Find",
  components: {
    TopNav,
    MusicList,
  },
  mounted() {},
  data() {
    return {};
  },
};
</script>

<style>
</style>