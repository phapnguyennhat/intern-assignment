import Link from "next/link"



export default function NavSideDesktop() {
    return (
        <>
           <div
                     className={`fixed top-[68px] left-0 h-full w-64 bg-gradient-to-b from-[#f9d602] to-[#3b8589] shadow-lg transform transition-transform duration-300 ease-in-out z-50 lg:translate-x-0 translate-x-[-100%]`}
            >
                <div className=" pt-4">
                    <h2 className="text-xl  px-4 font-bold mb-4">Menu</h2>
                    <ul  className="space-y-2">
                    <li><Link href="/" className="block px-4 hover:bg-white/20 p-2 rounded text-white">Dashboard</Link></li>
                        <li><Link href="/searchscore" className="block px-4 hover:bg-white/20 p-2 rounded text-white">Search Scores</Link></li>
                        <li><Link href="/report" className="block px-4 hover:bg-white/20 p-2 rounded text-white">Reports</Link></li>
                        <li><Link href="/setting" className="block px-4 hover:bg-white/20 p-2 rounded text-white">Settings</Link></li>
                    </ul>
                </div>
            </div>

           
        </>
    )
}
