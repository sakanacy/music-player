import { banner } from '@/api/home'
import { hotSearch, SearchResult } from '@/api/search'
import { getSongById, getLyricById } from '@/api/play'
// 获取轮播图
export const bannerAPI = banner
// 获取热门搜索
export const hotSearchAPI = hotSearch
// 搜索歌曲结果
export const SearchResultAPI = SearchResult
// 获取歌曲详情
export const getSongByIdAPI=getSongById
// 获取歌曲歌词
export const getLyricByIdAPI=getLyricById