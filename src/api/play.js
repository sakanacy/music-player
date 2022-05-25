import request from '@/utils/request'
// 获取播放详情
export const getSongById = (id) => request({
    url:`/song/detail?ids=${id}`,
    method:"GET"
})
// 获取歌词
export const getLyricById = (id) =>request({
    url:`/lyric?id=${id}`,
    method:"GET"
})