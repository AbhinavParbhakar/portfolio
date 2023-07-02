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
    const incomingConfig = {
        from:process.env.EMAIL_NAME,
        to:process.env.EMAIL_NAME,
        subject:"Contact information from Portfolio form",
        text:createEmailText(requestBody)
    }

    const outgoingConfig = {
        from:process.env.EMAIL_NAME,
        to:requestBody.email,
        subject:"Contact Message from Abhinav Parbhakar Portfolio",
        text:"       Confirmation Email         \n\nThis is confirmation of your email to me, Abhinav Parbhakar.\nI will reach out to you as soon possible, thank you for reaching out to me\n\nRegards,\nAbhinav Parbhakar",
        html:"<div style='display: flex; flex-direction: column; align-items: center; max-width: 800px;'><div style='display: flex; justify-content: center; background-color: rgb(203 213 225); max-height: 96px;'><h1 style='color: rgb(251 146 60);'><strong>Email Confirmation</strong></h1></div><div style='display: flex; flex-direction: column; margin-top: 1rem;'><p>This is confirmation of your email to me, Abhinav Parbhakar. I will reach out to you as soon possible. Thank you for reaching out to me.</p><br /><p>Regards,</p><p>Abhinav</p></div></div>"
    }

    try {
        await transporter.sendMail(incomingConfig)
        await transporter.sendMail(outgoingConfig)
        return NextResponse.json({message:"Email(s) sent succesfully"})
    } catch (error) {
        return NextResponse.json({message:"Something went wrong"})
    }
}