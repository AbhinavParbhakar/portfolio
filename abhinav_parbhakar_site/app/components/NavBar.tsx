import Link from "next/link";

export default function NavBar(){
    return(
    <div className="hidden md:bg-yellow-300 md:flex md:flex-col">
        <div className="md:flex md:justify-center">
            <img src="../images/nav-bar-md.png" alt="nav bar image" />
        </div>
        <div className="hidden md:flex md:flex-auto md:justify-center md:space-x-10">
            <Link href="/" className="text-blue-400">Home</Link>
            <Link href="/Education"className="text-blue-400" >Education</Link>
            <Link href="/Experience" className="text-blue-400">Experience</Link>
            <Link href="/Projects" className="text-blue-400">Projects</Link>
        </div>
    </div>
    )
}