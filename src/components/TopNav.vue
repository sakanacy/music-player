<template>
  <div class="topNav-box van-hairline--bottom" >
    <van-row type="flex" justify="space-between" size="20px">
      <van-col span="3"><van-icon name="ellipsis" /></van-col>
      <van-col span="3" class="active" >主页</van-col>
      <van-col span="3">发现</van-col>
      <van-col span="3">我的</van-col>
      <van-col span="3"><van-icon name="search" size="20px" @click="gotoSearch()"/></van-col>
    </van-row>
  </div>
</template>

<script>
export default {
    name:"TopNav",
      methods: {
    gotoSearch() {
      this.$router.push({ path: "/search" });
    },
  },

};
</script>

<style lang="less" scoped>
.topNav-box{
    padding: 8px;

    text-align: center;
    font-size: 17px;
    .active{
        font-weight: bold;
    }
}
</style>