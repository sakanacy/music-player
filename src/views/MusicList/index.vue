<template>
  <div>
      <van-nav-bar
  left-arrow
  @click-left="onClickLeft"
/>
  </div>
</template>

<script>
export default {
name:"MusicLisc",
data(){
    return{
        id:this.$route.query.id
    }
},
methods:{
    onClickLeft(){
        this.$router.go(-1)
    }
},
created(){
    console.log(this.id)
}
}
</script>

<style lang="less" scoped>

</style>