<template>
  <div>
      <van-search
  v-model="value"
  shape="round"
  placeholder="请输入搜索关键词"
  input-align="center"
/>
  </div>
</template>

<script>
export default {
name:"Search",
data(){
    return{
        value:"",
    }
}
}
</script>

<style>

</style>