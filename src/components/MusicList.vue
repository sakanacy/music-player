<template>
  <div>
    <van-cell-group>
      <van-cell
        v-for="(item, index) in ResultList"
        :key="index"
        :title="item.name"
        :label="item.ar[0].name"
      >
        <template #right-icon>
          <van-icon @click="musicPlay()" name="play-circle-o" color="#7b7b7b" size="30px"/>
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import { List } from "vant";
export default {
  name: "MusicList",
  props: {
    ResultList: List,
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>