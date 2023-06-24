'use client'

import Link from "next/link";
import { useState } from "react";

export default function NavBar(){
    const [burgerState,setBurgerState]  = useState(true)
    return(
    <div className="bg-slate-300 flex flex-col justify-center">
        <div className="flex-col justify-center md:hidden">
            <button className="flex rounded-md border-4 border-orange-400" onClick={() =>{setBurgerState(!burgerState)}}>
                {burgerState ? <img className="max-h-9 max-w-9"src="/hamburger.png" alt="" />:<img className="max-h-9 max-w-9"src="closeHamburger.png" alt=""></img>}
            </button>
            {!burgerState ? 
            (<div className="flex flex-col justify-between">
                <Link href="/" className="text-orange-400 hover:text-orange-300 overline font-mono">Home</Link>
                <Link href="/Education"className="text-orange-400 hover:text-orange-300 overline font-mono" >Education</Link>
                <Link href="/Experience" className="text-orange-400 hover:text-orange-300 overline font-mono">Experience</Link>
                <Link href="/Projects" className="text-orange-400 hover:text-orange-300 overline font-mono">Projects</Link>
            </div>):
            <></>}
        </div>
        <div className="flex justify-center">
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