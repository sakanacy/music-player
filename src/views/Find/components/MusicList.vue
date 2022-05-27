<template>
  <div class="MusicList-box">
    <!-- 推荐歌单 -->
    <div>推荐歌单</div>
    <div class="MusicList">
      <van-row type="flex" gutter="15" justify="space-between">
        <van-col span="8" v-for="(item, index) in MusicList" :key="index">
          <router-link
            :to="{
              path: '/MusicList',
              query: {
                id: item.id,
              },
            }"
          >
            <div class="MusicList-Item">
              <van-image
                width="100%"
                fit="contain"
                :src="item.picUrl"
              />
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
    console.log("推荐歌单");
    //   测试歌单数据
    console.log(res);
    this.MusicList = res.data.result;
  },
  methods: {
  },
};
</script>

<style lang="less" scoped>
.MusicList-box {
  padding: 10px;
}
.MusicList-Item span {
  font-size: 14px;
  color: gray;
}
</style>