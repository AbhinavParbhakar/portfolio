import { post } from "../interface"
import Post from '../components/Posts'

export default async function Education(){
    let items:Array<post>= await name()
    return(
    <div className="flex flex-col justify-between items-center mt-4 flex-wrap">
        <h1><b>Education</b>
        </h1>
        <div className="flex flex-wrap justify-center md:flex md:flex-auto md:flex-nowrap md:justify-normal md:max-w-xl">
            {items.map((item:post)=>{
                return <Post key={item.id} item={item}/>
            })}
        </div>
    </div>
    )
}

async function name() {
    const request:object = {"type":"education"}
    let response = await fetch("https://7buwhdoti2.execute-api.us-east-2.amazonaws.com/Alpha",{body:JSON.stringify(request),mode:'cors',headers:{'content-type':'application/json'},next:{revalidate:81000},method:'POST'})
    let data = await response.json()
    const body:Array<post> = data.body
    return body
}