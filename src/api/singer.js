import request from '@/utils/request'

// 获取歌手热门歌曲
export const getSingerSongs = (id) => request({
    method: "GET",
    url: `/artist/top/song?id=${id}`
})
// 获取歌手详情
export const getSingerDetail = (id) => request({
    method: "GET",
    url: `/artist/detail?id=${id}`
})
// 获取相似歌手
export const getSimiSinger = (id) => request({
    method: "GET",
    url: `/simi/artist?id=${id}`
})
