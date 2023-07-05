'use client'

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function NavBar(){
    const [burgerState,setBurgerState]  = useState(true)
    function setBurger(){
        setBurgerState(!burgerState)
    }
    return(
    <div className="bg-slate-300 flex flex-col justify-center drop-shadow-md max-w-[100vw] ">
        <div className="md:hidden flex justify-center mt-5">
            <button className="rounded-md border-2 bg-yellow-50 border-black drop-shadow-xl" onClick={setBurger}>
                <img className="max-h-6 max-w-9" src="/navHamburger-colorful.png" alt=""  />
            </button>
        </div>
        <div className="flex justify-center">
        {!burgerState ? 
            (<div className="flex flex-col md:hidden justify-center items-center">
                <Link href="/" className="text-blue-500 hover:text--300  font-mono " onClick={setBurger}><b>Home</b></Link>
                <Link href="/Education"className="text-blue-500 hover:text-orange-300  font-mono " onClick={setBurger}><b>Education</b></Link>
                <Link href="/Experience" className="text-blue-500 hover:text-orange-300  font-mono " onClick={setBurger}><b>Experience</b></Link>
                <Link href="/Contact" className="text-blue-500 hover:text-orange-300  font-mono " onClick={setBurger}><b>Contact Me</b></Link>
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
            <Link href="/" className="text-blue-500 hover:text-orange-300 overline font-mono"><b>Home</b></Link>
            <Link href="/Education"className="text-blue-500 hover:text-orange-300 overline font-mono" ><b>Education</b></Link>
            <Link href="/Experience" className="text-blue-500 hover:text-orange-300 overline font-mono"><b>Experience</b></Link>
            <Link href="/Contact" className="text-blue-500 hover:text-orange-300 overline font-mono"><b>Contact Me</b></Link>
        </div>
    </div>
    )
}