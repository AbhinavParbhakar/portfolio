import { post } from "../interface"

export default async function Experience(){
    let items:Array<post>= await name()
    return(
    <div>
        <h1>
            Work Experience
        </h1>
        <p>
            {items[0].description}
        </p>
    </div>
    )
}

async function name() {
    const request:object = {"type":"work"}
    let response = await fetch("https://7buwhdoti2.execute-api.us-east-2.amazonaws.com/Alpha",{body:JSON.stringify(request),mode:'cors',headers:{'content-type':'application/json'},next:{revalidate:60},method:'POST'})
    let data = await response.json()
    const body:Array<post> = data.body
    return body
}