<template>
  <div>
    <div class="List-top">
      <!-- 背景图片 -->
      <img :src="playlist.coverImgUrl" alt="" class="bgimg" />
      <!-- 顶部导航栏 -->
      <van-nav-bar left-arrow @click-left="$router.go(-1)" />
      <!-- 歌单详情 -->
      <div class="List-top-info">
        <van-row type="flex" justify="space-between" gutter="8">
          <van-col span="8">
            <van-image
              width="100%"
              fit="contain"
              :src="playlist.coverImgUrl"
              radius="10"
            />
          </van-col>
          <van-col span="16">
            <p>{{ playlist.name }}</p>
            <span class="creatorContent" v-if="playlist.creator">
              <van-image
                round
                width="25px"
                fit="contain"
                :src="playlist.creator.avatarUrl"
                style="margin: 5px"
              />
              {{ playlist.creator.nickname }}
            </span>
            <span class="van-multi-ellipsis--l2">{{
              playlist.description
            }}</span>
          </van-col>
        </van-row>
      </div>
      <!-- 歌曲列表 -->
      <div class="MusicItem-box">
        <div class="MusicItem-playAll" @click="playAll">
          <van-icon name="play-circle-o" size="20px" />
          <span>播放全部</span>
        </div>
        <MusicItem :MusicList="songs" />
      </div>
    </div>
  </div>
</template>

<script>
import { getMusicItemListAPI, getMusicListMusicAPI } from "@/api/index.js";
import MusicItem from "@/components/MusicItem.vue";
export default {
  name: "MusicItemList",
  components: {
    MusicItem,
  },
  data() {
    return {
      id: this.$route.query.id,
      playlist: {},
      songs: [],
    };
  },
  methods: {
    async getMusicItemList(id) {
      let res = await getMusicItemListAPI(id);
      console.log("歌单详情");
      console.log(res);
      this.playlist = res.data.playlist;
    },
    async getMusicListMusic(id) {
      let res = await getMusicListMusicAPI(id);
      console.log("歌单列表歌曲");
      console.log(res);
      this.songs = res.data.songs;
    },
    // 播放所有歌曲
    playAll(){

    }
  },
  mounted() {
    this.getMusicItemList(this.id);
    this.getMusicListMusic(this.id);
  },
  created() {
    this.getMusicItemList(this.id);
  },
};
</script>

<style lang="less" scoped>
.van-hairline--bottom::after {
  border: none;
}
.List-top {
  position: relative;
  width: 100%;
}
.bgimg {
  width: 100%;
  height: 300px;
  position: fixed;
  z-index: -1;
  filter: blur(25px);
}
.List-top-info {
  padding: 10px 10px;
  padding-bottom: 20px;
  .creatorContent {
    display: flex;
    color: rgb(200, 200, 200);
    font-size: 15px;
    align-items: center;
  }
  p {
    margin: 0;
    margin-bottom: 6px;
    padding: 0;
    color: white;
    font-size: 16px;
    font-weight: bold;
  }
  span {
    color: rgb(200, 200, 200);
    font-size: 13px;
  }
}
.MusicItem-box {
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  .MusicItem-playAll {
    padding: 5px 16px;
    padding-top: 10px;
    font-size: 15px;
    display: flex;
    align-items: center;

    span {
      padding: 5px;
    }
  }
}
</style>