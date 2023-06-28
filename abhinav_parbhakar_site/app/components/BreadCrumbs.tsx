'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

interface pathMapping{
    [key:string]:string
}

export default function BreadCrumbs(){
    var pathList:Array<string> = usePathname().split("/")

    var count = 0

    let pathEmoji:pathMapping = {"":"🏠","Projects":"👨‍💻","Experience":"🧑‍💼","Education":"📖"}
    let pathURL:pathMapping = {"":"/","Projects":"/Projects","Experience":"/Experience","Education":"/Education"}

    return(
    <div className="flex justify-center mt-2 md:hidden">
        {pathList.map((path:string)=>{
            if (count < pathList.length){
                if (path == "" && count == 0){
                    count++
                    let currentPath = "Home"
                    return <Link href= {pathURL[path]}>{pathEmoji[path]} {currentPath} </Link>
                }else if (path != ""){
                    count++
                    if (count > 0){
                        return <Link href= {pathURL[path]}>&nbsp;&#8594; {pathEmoji[path]} {path}</Link>
                    }else{
                        return <Link href= {pathURL[path]}>{pathEmoji[path]} {path}</Link>
                    }   
                }
            }else{
                return <Link href={usePathname()}>{pathList[pathList.length - 1]}</Link>
            }
        })}
    </div>
    )
}