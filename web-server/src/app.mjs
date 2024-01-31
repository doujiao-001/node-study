import express from 'express'
import path from 'node:path';
import hbs from 'hbs'
import * as fs from "fs";

const pathDir = path.resolve();
const publicPath = path.join(pathDir,'public')
const app =express()
app.set('view engine', 'hbs');
app.use(express.static(publicPath))


app.get('',(req, res)=>{
    res.render('index',{
        title:'title test'
    })
})
app.get('/weather',(req, res)=>{
    // res.send('hello weather')
    res.render('index')

})
app.get('/help',(req, res)=>{
    // res.send('hello weather')
    res.render('help')

})
app.listen(3001,()=>{
    console.log('server is up')
})
