import { post } from "@/app/interface"
import { type } from "os"

export default async function name({params}:{params: { path:string}}) {
    let data = await getPageDetails(params.path)
}

async function getPageDetails(path:string) {
    var types:Array<string> = path.split("-")
    var body = {'type':types[0],'id':parseInt(types[1])}
    var response = await fetch("",{method:"POST",headers:{'content-type':'application/json'},body:JSON.stringify(body),mode:'cors'})
}