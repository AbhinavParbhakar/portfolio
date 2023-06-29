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
    var currentPath = ""

    let pathEmoji:pathMapping = {"":"🏠","Projects":"👨‍💻","Experience":"👨‍💻","Education":"📖","Contact":"☎"}
    

    return(
    <div className="flex justify-center mt-2 md:hidden">
        {pathList.map((path:string)=>{
            let page = pathList[count]
            count++
            currentPath  = currentPath + "/" + page
            if (count == pathList.length){
                return <p>&nbsp;{pathEmoji[page]}&nbsp;<Link href={currentPath} className="underline text-blue-400">{page}</Link></p>
            }else{
                return <p>&nbsp;{pathEmoji[page]}&nbsp;<Link href={currentPath}>{page}</Link>&nbsp;&#8594;</p>
            }
            })
        }
    </div>
    )
}