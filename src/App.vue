<template>
<div>
  <div class="main">
    <router-view></router-view>
  </div>
   <!-- 底部播放器 -->
  <MinePlayer/>
</div>

</template>

<script>
import MinePlayer from "@/components/Mine_Player.vue";
export default {
  components: {
    MinePlayer
  },
};
</script>

<style>
.main{
  margin-bottom: 60px;
}
</style>
