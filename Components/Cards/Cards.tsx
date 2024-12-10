"use client";
import React,{useState} from "react";
import { Search } from 'lucide-react';
import Image from "next/image";

const Cards:React.FC=()=>{
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Search submitted:', searchQuery);
        // You can add your search logic here
    };
    return (
        <div className={`w-full flex max-h-64 gap-4`}>
        <Image width={100} height={100} className="flex-1 object-cover rounded-3xl" alt="working no"
              src="/screen.jpg"
        />
            <div className={`flex flex-col p-8 w-1/2 rounded-3xl bg-gradient-to-b from-pink-100 to-white shadow`}>

                <h5 className="md:text-3xl text-sm font-medium tracking-tight text-gray-900">
                    S’inscrire & économiser <span className={`text-cyan-400`}>10% </span>
                </h5>
                <p className="font-geist text-xs md:text-md font-medium leading-[22px] decoration-none text-[#BDA2B0]">
                    Office ipsum you must be muted. Synergize helicopter prioritize anyway job due harvest most
                    opportunity
                    didn't. Yet busy any meeting shark light marginalised 4-blocker message. Productize corporate nail
                    caught synergy highlights lunch. Company another pushback items dear or any.
                </p>

                <form className="flex items-center mt-1" onSubmit={handleSubmit}>
                    <label htmlFor="voice-search" className="sr-only">Search</label>
                    <div className="w-full">

                        <input
                            type="text"
                            id="voice-search"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                            placeholder="john doe"
                            value={searchQuery}
                            onChange={handleChange}

                        />
                    </div>
                    <button
                        type="submit"
                        className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-cyan-400 rounded-lg border hover:bg-cyan-500 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    >
                        <Search className="w-4 h-4 me-2"/>
                        S’inscrire
                    </button>
                </form>


            </div>

        </div>
    )
}

export default Cards;