<template>
  <div>
    <van-nav-bar left-arrow @click-left="$router.go(-1)" />
    <!-- 背景图片 -->
    <img :src="detail.cover" class="bgimg" />
    <!-- 歌手信息 -->
    <div class="List-top-info">
      <van-row type="flex" justify="space-between" gutter="10">
        <van-col span="16">
          <van-image
            width="100%"
            fit="contain"
            :src="detail.cover"
            radius="10"
          />
        </van-col>
        <van-col span="8" style="text-align: center">
          <p>{{ detail.name }}</p>
          <span>单曲数：{{ detail.musicSize }}</span
          ><br />
          <span>专辑数：{{ detail.albumSize }}</span
          ><br />
          <span>MV数：{{ detail.mvSize }}</span>
        </van-col>
      </van-row>
    </div>
    <!-- 歌手相关信息 -->
    <div class="singer-info">
      <van-tabs>
        <van-tab title="热门单曲">
          <MusicItem :MusicList="songsList" />
        </van-tab>
        <van-tab title="歌手简介">
          <div>
            <span>{{ detail.briefDesc }}</span>
          </div>
        </van-tab>
        <van-tab title="相似歌手">
          <SingerItem :SingerList="simiSinger" />
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import {
  getSingerSongsAPI,
  getSingerDetailAPI,
  getSimiSingerAPI,
} from "@/api/index";
import MusicItem from "@/components/MusicItem.vue";
import SingerItem from "@/components/SingerItem.vue";
export default {
  name: "Singer",
  components: {
    MusicItem,
    SingerItem,
  },
  data() {
    return {
      id: this.$route.query.id,
      songsList: [],
      detail: {},
      simiSinger: [],
    };
  },
  methods: {
    // 获取歌手热门歌曲
    async getSingerSongs() {
      let res = await getSingerSongsAPI(this.id);
      // console.log("热门歌曲");
      // console.log(res);
      this.songsList = res.data.songs;
    },
    // 获取歌手详情
    async getSingerDetail() {
      let res = await getSingerDetailAPI(this.id);
      // console.log("详情");
      // console.log(res);
      this.detail = res.data.data.artist;
    },
    // 获取相似歌手
    async getSimiSinger() {
      let res = await getSimiSingerAPI(this.id);
      // console.log("相似歌手");
      // console.log(res);
      this.simiSinger = res.data.artists;
    },
  },
  mounted() {
    this.getSingerSongs();
    this.getSingerDetail();
    this.getSimiSinger();
  },
  watch: {
    // 路由刷新
    $route(to, from) {
      this.$router.go(0);
    },
  },
};
</script>

<style lang="less" scoped>
.van-hairline--bottom::after {
  border: none;
}
.bgimg {
  width: 100%;
  height: 250px;
  position: fixed;
  z-index: -1;
  filter: blur(25px);
}
.List-top-info {
  padding: 10px 10px;
  padding-bottom: 20px;
  p {
    margin: 0;
    margin-bottom: 6px;
    padding: 0;
    color: white;
    font-size: 20px;
    font-weight: bold;
  }
  span {
    color: rgb(200, 200, 200);
    font-size: 15px;
  }
}
.singer-info {
  background-color: white;
  color: gray;
  font-size: 20px;
}
</style>