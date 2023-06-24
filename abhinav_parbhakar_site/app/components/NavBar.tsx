import Link from "next/link";

export default function NavBar(){
    return(
    <div className="bg-yellow-300 flex flex-col">
        <div className="">
            
        </div>
        <div className="">
            <Link href="/">Home</Link>
            <Link href="/Education">Education</Link>
            <Link href="/Experience">Experience</Link>
            <Link href="/Projects">Projects</Link>
        </div>
    </div>
    )
}