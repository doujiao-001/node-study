const express =  require ('express')
const path = require("node:path");
const app = express()
const dirname=__dirname
console.log(dirname)
const publicPath = path.join(dirname,'../public')
console.log(publicPath)
app.use(express.static(publicPath))
app.get('/weather',(req, res)=>{
    res.send('hello weather')

})
app.listen(3002)
