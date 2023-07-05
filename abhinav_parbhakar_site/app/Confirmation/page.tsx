import Link from "next/link"

export default function Confirmation(){
    return (
    <div className="flex justify-center">
    <title>Confirmation</title>
    <div className="flex flex-col items-center mt-40 max-w-md border-1 rounded-md border-black drop-shadow-md bg-slate-300 flex-wrap mx-4">
        <h1 className="flex text-orange-500"><b>Email Sent</b></h1>
        <hr className="border-black border-1 w-[100%]"/>
        <p className="flex font-sans px-2 py-2">Thank you for expressing interest in getting to know more about me. I&apos;ve recieved your email and will be reaching out to you within 24 hours.</p> <br />
        
    </div>
    </div>
    )
}