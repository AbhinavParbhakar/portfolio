import { NextRequest, NextResponse } from "next/server";
import { transporter } from "../configs/nodeMailer";
import { formData } from "../interface";
import { Options } from "nodemailer/lib/dkim";

export function GET(request:NextRequest){
    return NextResponse.json({'body':"This is a working API"})
}

function createEmailText(data:formData):string{
    let emailArray:Array<string> = ["Contact Name: ","Contact Email: ","Contact Message: "]
    let inputArray:Array<string> = [data.name,data.email,data.message]
    let returnString = ""

    let i = 0

    while (i < emailArray.length){
        returnString = returnString + emailArray[i] + inputArray[i] + "\n"
        i++
    }
    return returnString
}

export async function POST(request:NextRequest){
    let requestBody:formData = await request.json()
    console.log(requestBody)
    const messageConfig = {
        from:process.env.EMAIL_NAME,
        to:requestBody.email,
        subject:"Contact Message from Abhinav Parbhakar Portfolio",
        text:createEmailText(requestBody)
    }

    try {
        await transporter.sendMail(messageConfig)
        return NextResponse.json({message:"Email sent succesfully"})
    } catch (error) {
        return NextResponse.json({message:"Something went wrong"})
    }
}