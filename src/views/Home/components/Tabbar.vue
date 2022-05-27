<template>
  <!-- 底部导航栏 -->
  <div>
    <van-tabbar v-model="active" route>
      <van-tabbar-item
        v-for="(item, index) in tabbarList"
        :key="index"
        :to="item.path"
        :icon="item.icon"
        >{{ item.name }}</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "Tabbar",
  data() {
    return {
      active: "/home/index",
      tabbarList: [
        { icon: "wap-home-o", name: "主页", path: "/home/index" },
        { icon: "music-o", name: "发现", path: "/home/find" },
        { icon: "contact", name: "账号", path: "/home/user" },
      ],
    };
  },
  methods: {
  },
};
</script>

<style>
</style>