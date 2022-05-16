<template>
  <div>
    <!-- 底部导航栏 -->
    <Tabbar :active="active"/>
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar.vue";
export default {
name:"User",
    components:{
        Tabbar,
    },
     
    data() {
    return {
      active:2,
    };
  }, 
  mounted(){
  },
};
</script>

<style>
</style>