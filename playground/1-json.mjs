import {addNewFile,readFile,bufferToObject} from '../nodes-app/util.mjs'
const book = {name:'book name',author:'book author',"age":"23"}
const bookJson = JSON.stringify(book)
addNewFile('book-json.json',bookJson)
const dataBuffer = readFile('book-json.json')
const object = bufferToObject(dataBuffer)
object.name='changed name'
object.author='changed author'
addNewFile('book-json.json',JSON.stringify(object))
console.log(object.name)
