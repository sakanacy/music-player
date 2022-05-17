<template>
  <div>
    <van-search
      v-model="value"
      left-icon=""
      right-icon="search"
      shape="round"
      placeholder="请输入搜索关键词"
      input-align="center"
      >
      <template #left>
        <van-icon color="black" name="arrow-left" size="18" @click="goback()" />
      </template>
    </van-search>
  </div>
</template>

<script>
export default {
  name: "SearchPage",
  data() {
    return {
      value: "",
    };
  },
  methods:{
      goback(){
          this.$router.go(-1);
      }
  }
};
</script>

<style>
</style>