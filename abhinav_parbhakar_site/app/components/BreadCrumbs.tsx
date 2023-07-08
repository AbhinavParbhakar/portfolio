'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

interface pathMapping{
    [key:string]:string
}

export default function BreadCrumbs(){
    var pathList:Array<string> = usePathname().split("/")
    

    if (pathList[pathList.length - 1] == ""){
        pathList.pop()
    }

    var count = 0
    var currentPath = "/"

    let pathEmoji:pathMapping = {"":"🏠","Projects":"👨‍💻","Experience":"👨‍💻","Education":"📖","Contact":"☎"}
    

    return(
    <div className="flex justify-center mt-2 md:hidden">
        {pathList.map((path:string)=>{
            if (count == 0){
                path = ""
                currentPath = currentPath + ""
                count++
                return <p key={count}>&nbsp;{pathEmoji[path]}&nbsp;<Link key={count} href={currentPath} className="underline text-blue-400">Home</Link>&nbsp;</p>
            }else if (count == (pathList.length - 1)){
                currentPath = currentPath + path + "/"
                if (count > 1){
                    count++
                    return <p key={count}>&nbsp;&#8594;&nbsp;{pathEmoji[path]}&nbsp;<Link key={count} href={currentPath} className="underline text-blue-400 inline" >{path.replaceAll("_"," ").split("-")[1]}</Link></p>
                }else{
                    count++
                    return <p key={count}>&nbsp;&#8594;&nbsp;{pathEmoji[path]}&nbsp;<Link key={count} href={currentPath} className="underline text-blue-400 inline" >{path}</Link></p>
                }
            }else{
                currentPath = currentPath + path + "/"
                count++
                return <p key={count}>&nbsp;&#8594;&nbsp;{pathEmoji[path]}&nbsp;<Link key={count} href={currentPath} className="underline text-blue-400">{path}</Link></p>
            }
        })}
    </div>
    )
}