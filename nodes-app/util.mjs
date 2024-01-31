import { writeFileSync ,readFileSync} from 'node:fs';

const  saveFile =(fileName, data)=>{
    writeFileSync(fileName,data)
}
const readFile = (fileName)=>{
    try{
        const fileDataBuffer=  readFileSync(`./${fileName}`)
        return bufferToData(fileDataBuffer)
    }catch (e) {
        return saveFile('book-json.json',JSON.stringify([]))
    }

}
const bufferToData = (buffer)=>{
    const jsonData = buffer.toString()
    return JSON.parse(jsonData)
}
export  {saveFile,readFile}
