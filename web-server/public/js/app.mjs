async function fetchData(code=110101) {
    try {
        const response = await fetch(`https://restapi.amap.com/v3/weather/weatherInfo?key=a00ae064493f775885f1205b050618c3&&city=${code}`);
        const data = await response.json(); // 调用 .json() 方法之前使用 await 关键字
        if (!(data.lives[0]?.length||data.lives?.length)) {
            messageOne.textContent='please input right code'
        } else {
            console.log(22)
            messageOne.textContent=data.lives[0].province+'-'+data.lives[0].city
        }
    } catch (error) {
        console.error(error);
    }
}

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const messageOne = document.querySelector('#message-1')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const code = search.value
    fetchData(code);
})
