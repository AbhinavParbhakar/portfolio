import { post } from "../interface"
import Post from '../components/Posts'

export default async function Experience(){
    let items:Array<post>= await name()
    return(
    <div className="flex flex-col justify-between items-center mt-4">
        <h1><b>Work Experience</b>
        </h1>
        <div className="flex flex-row max-w-[60vw] flex-wrap">
            {items.map((item:post)=>{
                return <Post key={item.id} item={item}/>
            })}
        </div>
    </div>
    )
}

async function name() {
    const request:object = {"type":"work"}
    let response = await fetch("https://7buwhdoti2.execute-api.us-east-2.amazonaws.com/Alpha",{body:JSON.stringify(request),mode:'cors',headers:{'content-type':'application/json'},next:{revalidate:86400},method:'POST'})
    let data = await response.json()
    const body:Array<post> = data.body
    return body
}