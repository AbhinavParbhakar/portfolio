'use client'

import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context"
import { validate } from "email-validator"


function isNameInputValid(name:string):boolean{
    //test 1
    try{
        const testObj = name.match(/[^\w\s]+/)
    //if not null then something that we don't want is in there. 
        if (testObj == null){
            return true
        }else{
            return false
        }
    }catch {
        return false
    }

}

function isEmailInputValid(email:string):boolean{ 
    return validate(email)
}

function isMessageInputValid(message:string):boolean{
    try{
        const testObj = message.match(/[^\w'"-()\.\n\\:\'\"\,\s]+/)
    //if not null then something that we don't want is in there. 
        if (testObj == null){
            return true
        }else{
            return false
        }
    }catch {
        return false
    }
}

export default function Contact(){
    const [data,setFormData] = useState({name:"",email:"",message:""})
    const [loadingState,setLoadingState] = useState(false)
    const [errorState,setErrorState] = useState(false)
    const [buttonSubmitted,setButtonSubmitted] = useState(false)
    let router:AppRouterInstance = useRouter()


    const handleSubmit = async (event:FormEvent) =>{
        event.preventDefault()
        setButtonSubmitted(true)
        
        if (isEmailInputValid(data.email) && isNameInputValid(data.name) && isMessageInputValid(data.message)){
            if (errorState){
                setErrorState(false)
            }
            setLoadingState(true)

            let response = await fetch("/api",{method:"POST",headers:{'content-type':'application/json'},body:JSON.stringify(data)})
            if (response.ok){
                router.push("/Confirmation")
            }
            else{
                setLoadingState(false)
                setErrorState(true)
                setButtonSubmitted(false)
            }
        }else{
            setErrorState(true)
            setLoadingState(false)
            setButtonSubmitted(false)
        }

        
        setButtonSubmitted(false)


    }
    
    return (<>
            <title>Contact Me</title>
            
            <div className="flex flex-col mt-4 items-center">
                <h1 className="flex"><b>Contact Me </b></h1>
                {
                errorState ?
                    <h3 className="my-3 bg-red-600 text-white px-10 drop-shadow-md max-w-md rounded-lg">Error</h3>:<></>
                    }
                <h2 className="flex mt-3 mb-1">Please fill out the following form:</h2>
                <form className="flex flex-col justify-center items-center max-w-md"action="" onSubmit={handleSubmit}>
                    <h3 className="mt-3 text-orange-500"><b>Name</b></h3>
                    <input type="text" name="name" className="border-black border-2 rounded-lg text-center max-w-[100%]" placeholder="Your name" onChange={(e) =>{setFormData({...data,name:e.target.value})}}/>
                    <h3 className="mt-3 text-orange-500" ><b>Email</b></h3>
                    <input type="email" name="email" className="border-black border-2 rounded-lg text-center max-w-[100%]" placeholder="Your email" onKeyDown={(e) => {(e.key == " ") ? e.preventDefault() : null }} onChange={(e) =>{setFormData({...data,email:e.target.value})}}/>
                    <h3 className="mt-3 text-orange-500"><b>Message</b></h3>
                    <textarea name="message" className="border-black border-2 rounded-lg h-20 text-center max-w-[100%]"  placeholder="Your message" onChange={(e) =>{setFormData({...data,message:e.target.value})}}/>
                    {buttonSubmitted ? <div className="mt-3 px-2 drop-shadow-md bg-slate-300 rounded-lg hover:text-orange-500"><p className="text-blue-500"><b>Submit</b></p></div> : <button type="submit" className="mt-3 px-2 drop-shadow-md bg-slate-300 rounded-lg hover:text-orange-500"><p className="text-blue-500"><b>Submit</b></p></button>}
                </form> 
            </div>
        {loadingState ? 
        <h2 className="flex flex-col items-center justify-center mt-18 text-blue-500"><b>Sending Email...</b></h2>:<></>
        }
        </>
    
    )
}