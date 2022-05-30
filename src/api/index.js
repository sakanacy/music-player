import { banner,getNewSong } from '@/api/home'
import { hotSearch, SearchResult } from '@/api/search'
import { getSongById, getLyricById } from '@/api/play'
import { recommendMusicList,getMusicItemList,getMusicListMusic} from '@/api/find'
import {getSingerSongs,getSingerDetail,getSimiSinger} from '@/api/singer'
// 获取轮播图
export const bannerAPI = banner
// 获取热门搜索
export const hotSearchAPI = hotSearch
// 搜索歌曲结果
export const SearchResultAPI = SearchResult
// 获取歌曲详情
export const getSongByIdAPI=getSongById
// 获取推荐歌单
export const recommendMusicListAPI=recommendMusicList
// 获取歌单详情
export const getMusicItemListAPI=getMusicItemList
// 获取歌单歌曲
export const getMusicListMusicAPI=getMusicListMusic
// 获取每日新歌
export const getNewSongAPI=getNewSong
// 获取歌手热门歌曲
export const getSingerSongsAPI=getSingerSongs
// 获取歌手详情
export const getSingerDetailAPI=getSingerDetail
// 获取相似歌手
export const getSimiSingerAPI=getSimiSinger