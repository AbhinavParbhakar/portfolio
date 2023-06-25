'use client'

import { usePathname } from "next/navigation";
export default function BreadCrumbs(){
    var pathList:Array<string> = usePathname().split("/")
    console.log(pathList)
    return(<></>)
}