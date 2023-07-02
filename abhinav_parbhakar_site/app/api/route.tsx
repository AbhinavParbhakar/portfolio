import { NextRequest, NextResponse } from "next/server";
import { transporter } from "../configs/nodeMailer";
import { formData } from "../interface";
import { Options } from "nodemailer/lib/dkim";

export function GET(request:NextRequest){
    return NextResponse.json({'body':"This is a working API"})
}

function createEmailText(data:formData){

}

export async function POST(request:NextRequest){
    let requestBody = await request.json()
    let body:formData = await request.json()

    const requestData = await requestBody.body
    const messageConfig = {
        from:process.env.EMAIL_NAME,
        to:process.env.EMAIL_NAME,
        subject:"Contact Message from Abhinav Parbhakar Portfolio",
        text:""
    }

    try {
        await transporter.sendMail(messageConfig)
        return NextResponse.json({message:"Email sent succesfully"})
    } catch (error) {
        return NextResponse.json({message:"Something went wrong"})
    }
    
    return NextResponse.json(body)
}