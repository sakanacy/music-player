<template>
  <div>
      <van-cell-group>
        <van-cell
          v-for="(item, index) in MusicList"
          :key="index"
          :title="item.name"
          :label="item.ar[0].name"
        >
          <template #right-icon>
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
}
}
</script>

<style>

</style>