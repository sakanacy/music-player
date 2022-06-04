import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 播放歌曲列表
    playList:[
      {
        id:"1413863166",
        name:"想去海边",
        ar:[{name:"夏日入侵企划"}],
        al:{picUrl:"http://p4.music.126.net/sLWN-iePq4ESOMPER0IWgQ==/109951164602081973.jpg"}
      }
    ],
    // 当前播放歌曲
    playListIndex:0,
    // 是否播放
    isPlay:false,
    // 歌曲播放页面是否显示
    playerShow:false,
    // 歌曲当前播放时间
    playercurrentTime:0,
    // 当前播放歌曲总时长
    musicduration:0,
  },
  getters: {
  },
  mutations: {
    updateIsPlay:function(state,value){
      state.isPlay=value
    },
    updateplayList(state,value){
      state.playList=value
    },
    updateplayListIndex(state,value){
      state.playListIndex=value
    },
    addplayList(state,value){
      state.playList.push(value)
    },
    updateplayerShow(state){
      state.playerShow=!state.playerShow
    },
    updateplayercurrentTime(state,value){
      state.playercurrentTime=value
    },
    updatemusicduration(state,value){
      state.musicduration=value
    }
  },
  actions: {
  },
  modules: {
  }
})
