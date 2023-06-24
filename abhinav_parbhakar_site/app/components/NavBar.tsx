'use client'

import Link from "next/link";
import { useState } from "react";
import {usePathname} from "next/navigation";

export default function NavBar(){
    var pathList:Array<string> = usePathname().split("/")
    const [burgerState,setBurgerState]  = useState(true)
    function setBurger(){
        setBurgerState(!burgerState)
    }
    return(
    <div className="bg-slate-300 flex flex-col justify-center drop-shadow-md">
        <div className="md:hidden flex justify-center ">
            <button className="rounded-md border-2 border-white-300 drop-shadow-lg" onClick={setBurger}>
                {burgerState ? <img className="max-h-9 max-w-9"src="/hamburg-open.png" alt="" />:<img className="max-h-9 max-w-9"src="/hamburg-close.png" alt=""></img>}
            </button>
        </div>
        <div className="flex justify-center">
        {!burgerState ? 
            (<div className="flex flex-col md:hidden justify-center">
                <Link href="/" className="text-orange-400 hover:text-orange-300  font-mono px-8" onClick={setBurger}>Home</Link>
                <Link href="/Education"className="text-orange-400 hover:text-orange-300  font-mono px-3" onClick={setBurger}>Education</Link>
                <Link href="/Experience" className="text-orange-400 hover:text-orange-300  font-mono px-2" onClick={setBurger}>Experience</Link>
                <Link href="/Projects" className="text-orange-400 hover:text-orange-300  font-mono px-4" onClick={setBurger}>Projects</Link>
            </div>):<></>}
        </div>
        <div className="flex justify-center">
        {burgerState ?
            <div className="flex justify-center md:hidden">
                <img src="/navBar_small.png" alt="nav bar image" className="max-h-24 max-w-24"/>
            </div>:<></>
        }
        </div>
        <div className="md:flex md:justify-center hidden">
            <img src="/navPic.png" alt="nav bar image" className="max-h-24 max-w-24"/>
        </div>
        <div className="hidden md:flex md:flex-auto md:justify-center md:space-x-10">
            <Link href="/" className="text-orange-400 hover:text-orange-300 overline font-mono">Home</Link>
            <Link href="/Education"className="text-orange-400 hover:text-orange-300 overline font-mono" >Education</Link>
            <Link href="/Experience" className="text-orange-400 hover:text-orange-300 overline font-mono">Experience</Link>
            <Link href="/Projects" className="text-orange-400 hover:text-orange-300 overline font-mono">Projects</Link>
        </div>
    </div>
    )
}