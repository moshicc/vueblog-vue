import axios from 'axios'
import Element from 'element-ui'
import router from './router'
import store from './store/index'
//给axios请求添加前缀
axios.defaults.baseURL = 'http://localhost:8080'


//添加axios 前置拦截 后置拦截

//前置拦截
axios.interceptors.request.use(config => {
    console.log("===========前置拦截器============")
    return config
})

//后置拦截
axios.interceptors.response.use(response => {
    let res = response.data;

    console.log("==========后置拦截器=============")
    console.log(res.code)
    console.log("=======================")
    if(res.code == 200){
        return response
    }else{
        //错误弹框
        Element.Message.error('这是一条错误信息！',{duration: 3 * 1000})
        return Promise.reject(response.data.msg)

    }
},
error => {
        console.log(error)
        if(error.response.data){
            error.message = error.response.data.msg
        }
        
        if(error.response.status === 401){
            store.commit("REMOVE_INFO")
            router.push("/login")
        }
        Element.Message.error(error.message,{duration: 3 * 1000})
        return Promise.reject(error)
  

}

)


