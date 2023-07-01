import { post } from "@/app/interface"

export default async function name({params}:{params: { path:string}}) {
    let data:Array<post> = await getPageDetails(params.path)
    return(
    <div className="flex flex-col items-center">
        <title>{data[0]?.title}</title>
        <h1 className="flex justify-center mt-4"><b>{data[0]?.title}</b></h1>
        <div>
            
        </div>
    </div>
    )
}

async function getPageDetails(path:string) {
    var types:Array<string> = path.replaceAll("_"," ").split("-")
    var body = {'employer':types[0],'title':types[1]}
    var response = await fetch("https://7buwhdoti2.execute-api.us-east-2.amazonaws.com/Alpha",{method:"POST",headers:{'content-type':'application/json'},body:JSON.stringify(body),mode:'cors'})
    let data = await response.json()
    const posts:Array<post>= await data.body
    return posts
}