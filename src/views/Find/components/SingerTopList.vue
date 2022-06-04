<template>
  <div>
    <div style="padding: 5px 16px">
      <van-row type="flex" justify="space-between" align="center">
        <van-col class="title" span="10">歌手榜单</van-col>
        <van-col class="more" span="3">更多></van-col>
      </van-row>
    </div>
    <van-tabs type="card" color="gray">
      <van-tab title="华语">
        <div class="topList-content">
          <SingerItem :SingerList="HYSinger" />
        </div>
      </van-tab>
      <van-tab title="欧美">
        <div class="topList-content">
          <SingerItem :SingerList="OMSinger" />
        </div>
      </van-tab>
      <van-tab title="日本">
        <div class="topList-content">
          <SingerItem :SingerList="RBSinger" />
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { getSingerTopListAPI } from "@/api/index";
import SingerItem from "@/components/SingerItem.vue";
export default {
  name: "SingerTopList",
  components: {
    SingerItem,
  },
  data() {
    return {
      HYSinger: "",
      OMSinger: "",
      RBSinger: "",
    };
  },
  methods: {
    // 获取各个榜单歌手列表
    async getSingerTop() {
      let res1 = await getSingerTopListAPI({
        type: 1,
      });
      this.HYSinger = res1.data.list.artists.slice(0, 10);
      let res2 = await getSingerTopListAPI({
        type: 2,
      });
      this.OMSinger = res2.data.list.artists.slice(0, 10);
      let res4 = await getSingerTopListAPI({
        type: 4,
      });
      this.RBSinger = res4.data.list.artists.slice(0, 10);
    },
  },
  mounted() {
    this.getSingerTop();
  },
};
</script>

<style lang="less" scoped>
.topList-content {
  margin: 0 16px;
  overflow: scroll;
  height: 400px;
}
.title {
  font-weight: bold;
  font-size: 20px;
}
.more {
  font-size: 13px;
  color: gray;
}
</style>