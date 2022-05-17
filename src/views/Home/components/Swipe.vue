<template>
  <div class="swipe-box">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image.pic" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { bannerAPI } from "@/api";
export default {
  name: "swipe",
  async created() {
    // 通过轮播图接口获取图片列表
    const res = await bannerAPI();
    console.log(res);
    this.images = res.data.banners;
  },
  data() {
    return {
      images: [],
    };
  },
};
</script>

<style>
.van-swipe .van-swipe-item {
  width: 100%;
  height: 4rem;
}
.van-swipe-item img {
  width: 100%;
  height: 100%;
  border-radius: 0.2rem;
}
.swipe-box {
  margin: 5px 10px;
}
.swipe-box img {
  display: inline-block;
  width: 100%;
  height: 4rem;
}
</style>