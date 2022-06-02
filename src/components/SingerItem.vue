<template>
  <div class="Singer-box">
    <div
      class="Singer-item van-hairline--top singerItem-scroll"
      v-for="(item, index) in SingerList"
      :key="index"
      @click="gotoSinger(item.id)"
    >
      <van-image width="50" height="50" radius="5" :src="item.img1v1Url" />
      <div class="Singer-info">
        {{ item.name }}<span v-if="item.alias">({{ item.alias[0] }})</span>
      </div>
    </div>
  </div>
</template>

<script>
import { List } from "vant";
export default {
  name: "SingerItem",
  props: {
    SingerList: List,
  },
  created(){
console.log("歌手子组件")
console.log(this.SingerList)
  },
  methods: {
    gotoSinger(id) {
      this.$router.push({
        path:"/singer",
        query:{
          id:id
        }
      })
    },
  },
  mounted(){
  // 滚动出现动画效果
  window.addEventListener("scroll", this.scrollArea);
    this.$scrollReveal.reveal(".singerItem-scroll", {
      duration: 500,
      delay: 200,
      origin: "bottom",
      // 回滚的时候是否再次触发动画
      reset: false,
      // 在移动端是否使用动画
      mobile: true,
      distance: "10px",
      opacity: 0.001,
      easing: "linear",
      scale: 0.9,
    });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollArea);
  },
};
</script>

<style lang="less" scoped>
.Singer-box {
  background-color: white;
  padding: 5px 16px;
  font-size:18px;
  .Singer-item {
    display: flex;
    align-items: center;
    padding: 5px 0;
    .Singer-info{
        padding: 0 10px;
       span{
        color: gray;
    } 
    }
    
  }
}
</style>