<template>
  <div>
    <!-- 顶部导航栏 -->
    <TopNav/>
    <!-- 轮播图 -->
  <Swipe/>
    <div id="home-main">
      
    
    </div>
    <div id="page-bottom">
    <!-- 底部导航栏 -->
    <!-- <Tabbar :active="active"/> -->
    </div>
    
  </div>
</template>

<script>
import TopNav from '@/components/TopNav.vue'
import Swipe from './components/Swipe.vue'

export default {
  name: "Home",
  components: {
    TopNav,
    Swipe
  },
  mounted(){
  },
  data() {
    return {
      active:0,
    };
  },
};
</script>

<style>
</style>