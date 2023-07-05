'use client'

import { post } from "../interface";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface postProps{
    item:post
}

interface monthMapping{
    [key:number]:string
}

const Post: React.FC<postProps> = ({item}) => {
    const imgPath = "/" + item.title + ".png"
    const bulletPoints:Array<string> = item.description.split('.')
    const months:monthMapping = {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December',
        13:'Currently Employed'
    };
    
    var desiredPath:string = usePathname() + "/" + item.employer + "-" + item.title
    desiredPath = desiredPath.replaceAll(" ","_")

    return (
    <div className="flex flex-row m-4 border-t-4 drop-shadow-sm max-w-5xl">
    <div className="flex flex-col flex-wrap">
            <h3 className="text-orange-500 font-sans"><strong>{item.employer}</strong></h3>
            <h4 className="text-blue-500 font-sans"><i>{item.title}</i></h4>
            <p className="font-sans">{months[item.start_month]}, {item.start_year} - {months[item.end_month]}, {item.end_year}</p>
            <div className="ml-5">
                <ul className="list-disc">
                    {bulletPoints.map((point:string) => {
                        if (point != ""){
                            return <li key={item.id} className="font-sans">{point}.</li>
                        }
                    })}
                </ul>
                <Link href={desiredPath} className="underline text-blue-400 font-sans">Find out more</Link>
            </div>
    </div>
    <div className="hidden lg:flex lg:w-[35vw] lg:h-[14vw] mt-2 ml-2 justify-center">
    <img src={imgPath} alt={item.employer} className="w-full h-full"/>
    </div>
    
    
    </div>
    )
}

export default Post;