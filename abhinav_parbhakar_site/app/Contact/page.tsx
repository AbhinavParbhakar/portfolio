'use client'

import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context"


export default function Contact(){
    const [data,setFormData] = useState({name:"",email:"",message:""})
    const [sentState,setSentState] = useState(false)
    const [loadingState,setLoadingState] = useState(false)
    let router:AppRouterInstance = useRouter()


    const handleSubmit = async (event:FormEvent) =>{
        event.preventDefault()
        setLoadingState(true)
        let response:Response = await fetch("/api",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(data)})
        if (response.ok){
            router.push("/Confirmation")
        }else{
            console.log(response.status)
        }

    }
    
    return (<>
            {!sentState ? 
            <div className="flex flex-col mt-4 items-center">
        <h1 className="flex"><b>Contact Me </b></h1>
        <title>Contact Me</title>
        <h2 className="flex mt-3 mb-1">Please fill out the following form:</h2>
        <form className="flex flex-col justify-center items-center max-w-md"action="" onSubmit={handleSubmit}>
            <h3 className="mt-3 text-orange-500"><b>Name</b></h3>
            <input type="text" name="name" className="border-black border-2 rounded-lg text-center max-w-[100%]" placeholder="Your name" onChange={(e) =>{setFormData({...data,name:e.target.value})}}/>
            <h3 className="mt-3 text-orange-500" ><b>Email</b></h3>
            <input type="email" name="email" className="border-black border-2 rounded-lg text-center max-w-[100%]" placeholder="Your email"  onChange={(e) =>{setFormData({...data,email:e.target.value})}}/>
            <h3 className="mt-3 text-orange-500"><b>Message</b></h3>
            <textarea name="message" className="border-black border-2 rounded-lg h-20 text-center max-w-[100%]"  placeholder="Your message" onChange={(e) =>{setFormData({...data,message:e.target.value})}}/>
            <button type="submit" className="mt-3 px-2 drop-shadow-md bg-slate-300 rounded-lg hover:text-orange-500"><p className="text-blue-500"><b>Submit</b></p></button>
        </form> 
        </div>
        : 
        <></>}
        {loadingState ? 
        <h2 className="flex flex-col items-center justify-center mt-20 text-blue-500"><b>Sending Email...</b></h2>:<></>
        }
        </>
    
    )
}