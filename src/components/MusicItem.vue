<template>
  <div >
    <div class="MusicItem-playAll" @click="playAll">
          <van-icon name="play-circle-o" size="20px" />
          <span>播放全部</span>
        </div>
      <van-cell-group>
        <van-cell
          v-for="(item, index) in MusicList"
          :key="index"
          :title="item.name"
          :label="item.ar[0].name"
        >
          <template #right-icon>
            <!-- 播放图标 -->
            <van-icon
              @click="
                musicPlay(item.id)
              "
              name="play-circle-o"
              color="#7b7b7b"
              size="25px"
            />
          </template>
        </van-cell>
      </van-cell-group>
  </div>
</template>

<script>
import { List } from 'vant'
export default {
name:"MusicItem",
props:{
    MusicList:List
},
created(){
  console.log("列表歌曲")
  console.log(this.MusicList)
},
methods:{
    musicPlay(id) {
        console.log(id)
    },
    playAll(){
      
    }
}
}
</script>

<style lang="less" scoped>
  .MusicItem-playAll {
    background-color: white;
    padding: 5px 16px;
    padding-top: 10px;
    font-size: 15px;
    display: flex;
    align-items: center;

    span {
      padding: 5px;
    }
  }
</style>