'use client'
import Link from "next/link"
import { usePathname } from "next/navigation";


export default function NavSideDesktop() {

    const pathname = usePathname();
    return (
        <>
            <div
                className={`fixed top-[68px] left-0 h-full w-64 bg-gradient-to-b from-[#f9d602]   dark:from-[#342d03] to-[#3b8589] shadow-lg transform transition-transform duration-300 ease-in-out z-50 lg:translate-x-0 translate-x-[-100%]`}
            >
                <div className=" pt-8">
                    <h2 className="text-xl text-white px-4 font-bold mb-4 text-center">Menu</h2>
                    <ul className="space-y-2">
                        <li><Link href="/" className={`block px-4 hover:bg-white/20 p-2 rounded text-white ${pathname === '/' ? 'bg-white/20' : ''}`}>Dashboard</Link></li>
                        <li><Link href="/searchscore" className={`block px-4 hover:bg-white/20 p-2 rounded text-white ${pathname === '/searchscore' ? 'bg-white/20' : ''}`}>Search Scores</Link></li>
                        <li><Link href="/report" className={`block px-4 hover:bg-white/20 p-2 rounded text-white ${pathname === '/report' ? 'bg-white/20' : ''}`}>Reports</Link></li>
                        <li><Link href="/setting" className={`block px-4 hover:bg-white/20 p-2 rounded text-white ${pathname === '/setting' ? 'bg-white/20' : ''}`}>Settings</Link></li>
                    </ul>
                </div>
            </div>


        </>
    )
}
