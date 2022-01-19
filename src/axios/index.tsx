import axios from "axios"

const instance: any = axios.create({
    baseURL: "http://192.168.0.8:3000/api/v1",
})

export default instance
