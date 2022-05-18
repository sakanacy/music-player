import request from '@/utils/request'
// 热门搜索
export const hotSearch = () => request({
    url:"/search/hot",
})
// 关键字搜索
export const SearchResult = params => request({
    url:"/cloudsearch",
    params
})