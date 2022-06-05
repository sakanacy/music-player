<template>
<!-- 用户页面，暂未实现 -->
  <div>
    <!-- 顶部用户信息界面 -->
    <div id="user-info">
      <van-image
        round
        width="2.5rem"
        height="2.5rem"
        :src="userImg"
        @click="toLogin"
      >
        <template v-slot:error>点击登陆</template>
      </van-image>
      <p>{{ userName }}</p>
    </div>
    <div id="page-bottom">
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
  components: {
  },

  data() {
    return {
      active: 2,
      userImg: "",
      userName: "",
    };
  },
  created() {
    if (localStorage.getItem("userName") != null) {
    }
  },
  methods: {
    toLogin() {
      if (this.userImg == "") {
        this.$router.push({ path: "/login" });
      }
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
#user-info {
  text-align: center;
  height: 4rem;
  border-bottom: 1px solid gary;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin: 5px;
  background-color: antiquewhite;
}
.van-image {
  margin-top: 10px;
}
</style>>
