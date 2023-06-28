'use client'

import { post } from "../interface";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface postProps{
    item:post
}

interface monthMapping{
    [key:number]:string
}

const Post: React.FC<postProps> = ({item}) => {
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
    
    const desiredPath:string = usePathname() + "/" + item.id

    return (
    <div className="flex flex-col flex-auto m-3 border-t-4 drop-shadow-sm max-w-md">
            <h3 className="text-orange-400"><strong>{item.employer}</strong></h3>
            <h4 className="text-blue-400"><i>{item.title}</i></h4>
            <p>{months[item.start_month]}, {item.start_year} - {months[item.end_month]}, {item.end_year}</p>
            <div className="ml-5">
                <ul className="list-disc">
                    {bulletPoints.map((point:string) => {
                        if (point != ""){
                            return <li key={item.id}>{point}.</li>
                        }
                    })}
                </ul>
            </div>
            
            <Link href={desiredPath}>Find out more</Link>
    </div>
    )
}

export default Post;