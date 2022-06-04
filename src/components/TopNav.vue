<template>
  <!-- 顶部标题栏 -->
  <div class="van-hairline--bottom topTab">
    <van-tabs
      v-model="active"
      title-inactive-color="black"
      title-active-color="red"
      line-width="0"
      line-height="0"
    >
      <van-tab title="首页" to="/home" > </van-tab>
      <van-tab title="发现" to="/find" > </van-tab>
      <van-tab to="/search">
        <template #title> <van-icon name="search" size="20px" /></template>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "TopNav",
  props: {
    index: Number,
  },
  data() {
    return {
      active: this.index,
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.van-tabs__nav.van-tabs__nav--line{
  padding-bottom: 0 !important;
}

</style>