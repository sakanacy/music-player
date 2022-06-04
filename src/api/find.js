import request from '@/utils/request'

// 封装网络请求
//获取推荐歌单
export const recommendMusicList = params => request({
    url: "/personalized?limit=6",
    params
})
// 获取歌单详情
export const getMusicItemList = (id) => request({
    method: "GET",
    url: `/playlist/detail?id=${id}`
})
// 获取歌单列表歌曲
export const getMusicListMusic = (id) => request({
    method: "GET",
    url: `/playlist/track/all?id=${id}&limit=10&offset=1`
})
// 获取歌手榜单
export const getSingerTopList = params => request({
    url:"/toplist/artist",
    params
})
