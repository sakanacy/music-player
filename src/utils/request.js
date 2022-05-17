// 网络请求方法
// 导入axios
import axios from "axios"

// 自定义axios对象
const ajax =axios.create({
    baseURL:"http://localhost:3000"
})

export default ajax;