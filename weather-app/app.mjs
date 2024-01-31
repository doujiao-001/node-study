import axios from "axios";
const instance = axios.create({})

instance.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    return Promise.reject(error);
});

const URL='https://restapi.amap.com/v3/weather/weatherInfo?key=a00ae064493f775885f1205b050618c3&&city=510100'
const geoCodeURL = 'https://restapi.amap.com/v3/geocode/geo?key=a00ae064493f775885f1205b050618c3&&address=四川省成都市青羊区四川旅游学院青羊校区'
// instance.get(URL).then((res)=>{
//     console.log('current temperature is'+' '+res.lives[0].temperature)
// })
// instance.get(geoCodeURL).then((res)=>{
//     console.log('my position is'+' '+res.geocodes[0].location)
// }).catch(e=>{
//     console.log(11,e)
// })

const  locationToWeather=(address,callBack)=>{
    const geoCodeURL = `https://restapi.amap.com/v3/geocode/geo?key=a00ae064493f775885f1205b050618c3&&address=${address}`
    instance.get(geoCodeURL).then((res)=>{
        callBack(undefined,res.geocodes[0].location)
    }).catch(e=>{
        callBack(e,undefined)
    })
}
locationToWeather('四川省成都市青羊区四川旅游学院青羊校区',(err,res)=>{
})
locationToWeather('四川省成dkj进店都市川旅游学院青羊校区',(err,res)=>{
})
