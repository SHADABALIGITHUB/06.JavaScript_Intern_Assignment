"use client";

import Anchor from '@/Components/Navbar/Anchors';
import Logo_Search_btn from "@/Components/Navbar/Logo_Search_btn";

export default function Navbar() {

    return (
        <nav
            className="bg-white flex flex-col justify-between items-center drop-shadow-md"
        >
            <Logo_Search_btn/>
            <Anchor/>


        </nav>
    );
}