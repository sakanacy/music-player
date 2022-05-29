<template>
  <div>
    <!-- 顶部搜索框 -->
    <van-search
      v-model="searchValue"
      left-icon=""
      right-icon="search"
      shape="round"
      placeholder="请输入搜索关键词"
      input-align="center"
    >
      <template #left>
        <van-icon color="black" name="arrow-left" size="20" @click="goback()" />
      </template>
    </van-search>
    <!-- 历史搜索和热门搜索 -->
    <div id="search-content" v-if="isshow">
      <!-- 热门搜索 默认显示-->
      <div class="keyword-box">
        <p>热门搜索</p>
        <ul>
          <li
            v-for="(item, index) in hotList"
            :key="index"
            @click="keySearch(item.first)"
          >
            {{ item.first }}
          </li>
        </ul>
        <br />
      </div>
      <br />
      <!-- 历史搜索 默认不显示 有搜索记录才显示-->
      <div class="keyword-box" v-show="historyShow">
        <p>历史搜索</p>
        <ul>
          <li
            v-for="(item, index) in historyList"
            :key="index"
            @click="keySearch(item)"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <!-- 搜索结果列表 -->
    <div id="result-Content" v-else>
      <MusicItem :MusicList="MusicList"/>
    </div>
  
  </div>
</template>

<script>
import { hotSearchAPI, SearchResultAPI } from "@/api";
import MusicItem from '@/components/MusicItem.vue'
export default {
  name: "Search",
  components: {
    MusicItem,
  },
  data() {
    return {
      searchValue: "",
      hotList: [],
      SingerList:[],
      MusicList: [],
      isshow: true,
      timer: null,
      historyList: [],
      historyShow: false,
      Id: "",
    };
  },
  async created() {
    // 获取热门搜索关键字
    const res = await hotSearchAPI();
    console.log(res);
    this.hotList = res.data.result.hots;
    console.log(this.hotList);
    // 检查是否有历史搜索记录
    if (localStorage.getItem("historyList") != null) {
      this.historyList = JSON.parse(localStorage.getItem("historyList"));
      this.historyShow = true;
    }
  },
  methods: {
    // 返回上一页面
    goback() {
      this.$router.go(-1);
    },
    // 点击已有搜索关键字 直接搜索
    
    async keySearch(keyword) {
      this.searchValue = keyword;
      // 搜索歌曲
      const res = await SearchResultAPI({
        type: 1,
        keywords: keyword,
      });
      // 搜索歌手
      const singers = await SearchResultAPI({
        type: 100,
        keywords: keyword,
      });
      // 搜索结果
      console.log(res);
      console.log(singers)
      this.MusicList = res.data.result.songs;
      // !!!!!!!!!没写完
      // this.SingerList =singers.data.
      // 显示搜索结果列表
      this.isshow = false;
      setTimeout(() => {
        clearTimeout(this.timer);
      });
      // 添加历史搜索记录
      let index = this.historyList.indexOf(keyword);
      if (index > -1) {
        this.historyList.splice(index, 1);
      }
      this.historyList.unshift(keyword);
      localStorage.setItem("historyList", JSON.stringify(this.historyList));
      this.historyShow = true;
      // 查看历史记录状态
      // console.log(this.historyList);
    },
    // 点击搜索结果,播放器播放对应歌曲
    musicPlay(id) {
    },
  },
  watch: {
    searchValue(val) {
      clearTimeout(this.timer);
      // 搜索值为空则显示热门搜索，清空搜索结果列表
      if (this.searchValue.length === 0) {
        this.isshow = true;
        return (this.MusicList = []);
      } else {
        // 防抖
        this.timer = setTimeout(async () => {
          // 获取搜索结果
          const res = await SearchResultAPI({
            type: 1,
            keywords: val,
          });
          console.log(res);
          this.MusicList = res.data.result.songs;
          // 显示搜索结果
          this.isshow = false;
          // 添加历史搜索记录
          let index = this.historyList.indexOf(val);
          if (index > -1) {
            this.historyList.splice(index, 1);
          }
          this.historyList.unshift(val);
          localStorage.setItem("historyList", JSON.stringify(this.historyList));
          this.historyShow = true;
        }, 500);
      }
    },
  },
};
</script>

<style lang="less" >
#search-content {
  margin: 0 10px;
}
.keyword-box {
  width: 100%;
  overflow: auto;
}
.keyword-box p {
  color: gray;
  font-size: 15px;
}
.keyword-box ul {
  list-style: none;
}
.keyword-box li {
  float: left;
  margin: 5px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 15px;
  font-size: 15px;
}
</style>