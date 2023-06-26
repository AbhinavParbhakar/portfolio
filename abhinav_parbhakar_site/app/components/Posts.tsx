import { post } from "../interface";
import React from "react";

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
        12: 'December'
    };
    
    return (
    <div className="flex flex-col m-3 border-t-4 drop-shadow-md max-w-md">
            <h3>{item.employer}</h3>
            <h4><i>{item.title}</i></h4>
            <p><strong>{months[item.start_month]} - {months[item.end_month]}, {item.year}</strong></p>
            <div>
                <ul className="list-disc">
                    {bulletPoints.map((point:string) => {
                        return <li >{point}.</li>
                    })}
                </ul>
            </div>
    </div>
    )
}

export default Post;