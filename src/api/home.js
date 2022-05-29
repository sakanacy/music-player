import request from '@/utils/request'

// 封装网络请求
// 轮播图接口
export const banner = params => request({
    url:"/banner?type=2",
    params
})
// 获取每日新歌
export const getNewSong = params =>request({
    url:"/personalized/newsong",
    params
})