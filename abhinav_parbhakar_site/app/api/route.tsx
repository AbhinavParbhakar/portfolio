import { NextRequest, NextResponse } from "next/server";
import { transporter } from "../configs/nodeMailer";
import { formData } from "../interface";
import { readFileSync } from "fs";

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

function createEmailHtml():Buffer{
    const htmlContent:Buffer = readFileSync("../emailTemplate/template.html")
    return htmlContent
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
        html:createEmailHtml()
    }

    try {
        await transporter.sendMail(incomingConfig)
        await transporter.sendMail(outgoingConfig)
        return NextResponse.json({message:"Email(s) sent succesfully"})
    } catch (error) {
        return NextResponse.json({message:"Something went wrong"})
    }
}