import axios from "axios";
const instance = axios.create({})

instance.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    return Promise.reject(error);
});

export const getWeather =  async (city)=>{
    const URL=`https://restapi.amap.com/v3/weather/weatherInfo?key=a00ae064493f775885f1205b050618c3&&city=${city}`
    return await instance.get(URL)
}
