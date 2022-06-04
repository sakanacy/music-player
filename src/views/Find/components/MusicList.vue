<template>
  <div class="MusicList-box">
    <!-- 推荐歌单 -->
    <div style="padding: 5px 0">
        <van-row type="flex" justify="space-between" align="center">
          <van-col class="title" span="10">推荐歌单</van-col>
          <van-col class="more" span="3">更多></van-col>
        </van-row>
      </div>
      <!-- 循环显示歌单列表 -->
    <div class="MusicList">
      <van-row type="flex" gutter="15" justify="space-between">
        <van-col span="8" v-for="(item, index) in MusicList" :key="index">
          <!-- 点击进入歌单详情页面 -->
          <router-link
            :to="{
              path: '/MusicList',
              query: {
                id: item.id,
              },
            }"
          >
          <!-- 歌单图片 -->
            <div class="MusicList-Item">
              <van-image
                width="100%"
                fit="contain"
                :src="item.picUrl"
                radius="10"
              />
              <!-- 歌单标题 -->
              <span class="van-multi-ellipsis--l2">{{ item.name }}</span>
            </div>
          </router-link>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import { recommendMusicListAPI } from "@/api/index";
export default {
  name: "MusicList",
  data() {
    return {
      MusicList: [],
    };
  },
  async mounted() {
    const res = await recommendMusicListAPI();
    //   测试歌单数据
    // console.log(res);
    this.MusicList = res.data.result;
  },
};
</script>

<style lang="less" scoped>
.MusicList-box {
  padding: 5px 16px;
}
.MusicList-Item span {
  font-size: 14px;
  color: gray;
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