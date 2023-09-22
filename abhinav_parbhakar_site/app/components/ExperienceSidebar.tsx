import Link from "next/link"

export default function sidebar(){
    return(
        <div className="flex flex-col border-2 items-center drop-shadow-md justify-center w-full">
            <h2 className="flex bg-slate-300 text-blue-500 w-full mx-3 justify-center"><strong>Quick Links</strong></h2>
            <ul className="flex-col space-y-3 my-3 w-full">
                <li className="text-center">
                    <Link href="https://github.com/AbhinavParbhakar/" rel="nopener" target="_blank" className="underline">Github</Link>
                </li>
                <hr className="w-full"/>
                <li className="text-center">
                    <Link href="https://www.linkedin.com/feed/" rel="noopener" target="_blank" className="underline">LinkedIn</Link>
                </li>
                <hr />
                <li className="text-center">
                    <Link href="/Abhinav_parbhakar-Resume.pdf" rel="noopener" target="_blank" className="underline">Resume</Link>
                </li>
            </ul>
        </div>
    )
}