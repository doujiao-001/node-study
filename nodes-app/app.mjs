import {saveFile,readFile} from './util.mjs'
import chalk from 'chalk';
import yargs from 'yargs'

const handleAdd = (argv)=>{
        const fileData = readFile('book-json.json')
    debugger
        if(fileData.filter(item=>item.title===argv.title).length){
            return
        }
        fileData.push({title:argv.title,body:argv.body})
        saveFile('book-json.json',JSON.stringify(fileData))
}
const handleRemove = (argv)=>{
        const fileData = readFile('book-json.json')
        const index =  fileData.findIndex(ele=>ele.title===argv.title)
        if(index===-1){
            console.log(chalk(chalk.bgRed.bold('node not found')))
          return  saveFile('book-json.json',JSON.stringify(fileData))
        }
        console.log(chalk(chalk.bgGreen.bold('node removed')))
        fileData.splice(index,1)
        saveFile('book-json.json',JSON.stringify(fileData))
}
const handleRead = (argv)=>{
    const fileData = readFile('book-json.json')
    const goalData = fileData.find(item=>item.title==argv.title)
    if(goalData){
        console.log(chalk.bgCyan.strikethrough(goalData.title)+':'+goalData.body)
    }else {
        console.log(chalk.red('not found'))
    }
}
const handleList = (argv)=>{
    const fileData = readFile('book-json.json')
    if(fileData.length){
        fileData.map(item=> console.log(chalk.blue(item.title) ))
    }
}
const  argv = yargs(process.argv.splice(2))
argv
    .command('add', "add note",
        {
            title:{
                description:'this is title',
                demandOption:true,
                type:'string'
            },
            body:{
                description: 'body description',
                demandOption: true,
                type: 'string'
            }
        },
        handleAdd
    )
    .command('remove', "remove note",
        {
            title:{
                description:'this is title',
                demandOption:true,
                type:'string'
            }
        },
        handleRemove
    )
    .command('list', "list note",
        ()=>{},
        handleList
    )
    .command('read', "read note",
        {
            title:{
                description:'this is title',
                demandOption:true,
                type:'string'
            }
        },
        handleRead
    )
    .parse()
