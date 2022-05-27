import request from '@/utils/request'

// 封装网络请求
//获取推荐歌单
export const recommendMusicList = params =>request({
    url:"/personalized?limit=6",
    params
})