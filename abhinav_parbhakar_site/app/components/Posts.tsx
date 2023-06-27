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
        12: 'December',
        13:'Currently Employed'
    };
    
    return (
    <div className="flex flex-col m-3 border-t-4 drop-shadow-md max-w-md">
            <h3>{item.employer}</h3>
            <h4><i>{item.title}</i></h4>
            <p><strong>{months[item.start_month]}, {item.start_year} - {months[item.end_month]}, {item.end_year}</strong></p>
            <div className="ml-5">
                <ul className="list-disc">
                    {bulletPoints.map((point:string) => {
                        if (point != ""){
                            return <li key={item.id}>{point}.</li>
                        }
                    })}
                </ul>
            </div>
    </div>
    )
}

export default Post;