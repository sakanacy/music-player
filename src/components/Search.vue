<template>
  <!-- 顶部搜索框 -->
  <div>
    <van-nav-bar>
      <template #right>
        <van-icon color="black" name="search" size="18" @click="gotoSearch()" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {};
  },
  methods: {
    gotoSearch() {
      this.$router.push({ path: "/search" });
    },
  },
};
</script>

<style>
</style>