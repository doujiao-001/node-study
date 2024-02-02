import express from 'express'
import path from 'node:path';
import hbs from 'hbs'
import {getWeather} from "../utils/api.mjs";

const pathDir = path.resolve();
const publicPath = path.join(pathDir,'public')
const viewsPath = path.join(pathDir,'templates/views')
const partialsPath = path.join(pathDir,'templates/partials')

const URL='https://restapi.amap.com/v3/weather/weatherInfo?key=a00ae064493f775885f1205b050618c3&&city=510100'


const app =express()
app.set('view engine', 'hbs');
app.set('views', viewsPath);

hbs.registerPartials(partialsPath)

app.use(express.static(publicPath))


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'yp'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'yp'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'yp'
    })
})

app.get('/weather', async (req, res) => {
    const {city} = req.query
    if (city) {
      const data = await getWeather(city)
      return res.send(data)
    }else{
        return res.send({
            error: 'You must provide an address!'
        })
    }
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }

    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'yp',
        errorMessage: 'Help article not found.'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'yp',
        errorMessage: 'Page not found.'
    })
})
app.listen(3001,()=>{
    console.log('server is up')
})
