import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playList:[
      {
        id:"1413863166",
        name:"想去海边",
        ar:[{name:"夏日入侵企划"}],
        al:{picUrl:"http://p4.music.126.net/sLWN-iePq4ESOMPER0IWgQ==/109951164602081973.jpg"}
      }
    ],
    playListIndex:0,
    isPlay:false,
    playerShow:false,
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
    updateplayerShow(state,value){
      state.playerShow=value
    }
  },
  actions: {
  },
  modules: {
  }
})
