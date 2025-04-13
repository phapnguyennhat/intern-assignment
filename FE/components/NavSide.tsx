'use client'

import {  Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavSide() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 lg:hidden  ">
                {isOpen ? (
                    <X className="text-white dark:text-black" />
                ) : (
                    <Menu className="text-white dark:text-black" />
                )}
            </button>

            {/* Sidebar */}
            <div
                className={`fixed top-[72px] left-0 h-full w-64 bg-gradient-to-b from-yellow-400 dark:from-[#342d03] to-[#3b8589]   shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className=" pt-4">
                    <h2 className="text-xl  px-4 font-bold text-center text-white mb-4">Menu</h2>
                    <ul onClick={() => setIsOpen(false)} className="space-y-2">
                    <li><Link href="/" className={`block px-4 hover:bg-white/20 p-2 rounded text-white ${pathname === '/' ? 'bg-white/20' : ''}`}>Dashboard</Link></li>
                        <li><Link href="/searchscore" className={`block px-4 hover:bg-white/20 p-2 rounded text-white ${pathname === '/searchscore' ? 'bg-white/20' : ''}`}>Search Scores</Link></li>
                        <li><Link href="/report" className={`block px-4 hover:bg-white/20 p-2 rounded text-white ${pathname === '/report' ? 'bg-white/20' : ''}`}>Reports</Link></li>
                        <li><Link href="/setting" className={`block px-4 hover:bg-white/20 p-2 rounded text-white ${pathname === '/setting' ? 'bg-white/20' : ''}`}>Settings</Link></li>
                    </ul>
                </div>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/20 bg-opacity-50 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    );
}
