<template>
  <div>
    <van-tabbar v-model="toactive">
      <van-tabbar-item
        v-for="(item, index) in tabbarList"
        :key="index"
        :icon="item.icon"
        @click="goto(item.path)"
        >{{ item.name }}</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "Tabbar",
  props: {
    active: {type:Number,default:0},
  },
  data() {
    return {
        toactive:this.active,
      tabbarList: [
        { icon: "wap-home-o", name: "主页", path: "/home"},
        { icon: "music-o", name: "发现", path: "/find"},
        { icon: "contact", name: "账号", path: "/user"},
      ],
    };
  },
  methods: {
    goto(path) {
      this.$router.push({ path: path });
    },
  },
};
</script>

<style>
</style>