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

    let pathEmoji:pathMapping = {"":"🏠","Projects":"👨‍💻","Experience":"🧑‍💼","Education":"📖"}
    

    return(
    <div className="flex justify-center mt-2 md:hidden">
        {pathList.map((path:string)=>{
            currentPath  = currentPath + "/" + pathList[count]
            return <p>{pathEmoji[pathList[count]]}&nbsp;<Link href={currentPath}>&nbsp;&#8594;</Link></p>
            })
        }
    </div>
    )
}