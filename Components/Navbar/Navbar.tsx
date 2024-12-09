'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import {
    MagnifyingGlassIcon,
    LightBulbIcon,
    HeartIcon,
    ShoppingCartIcon,
    UserIcon,
} from '@heroicons/react/24/outline';
const menuItems = [
    'Art de la table',
    'Mobilier',
    'Nappage',
    'Matériel de salle',
    'Cuisine',
    'Barbecue',
    'Tente',
    'Chauffage',
    'Podium - Piste de danse',
    'Son et lumière',
    'Packs',
    'Consommables'
];

const subMenuItems = ['Son et lumière', 'Packs', 'Consommables'];

export default function LogoAndMenuItems() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="text-slate-500 shadow-2xl shadow-blue-950">
            {/* Desktop Navbar */}
            <div className="hidden md:block">
                <div className="bg-white py-2">
                    <div className="flex items-center justify-between w-full md:justify-around">
                        {/* Logo */}
                        <Link href="/">
                            <Image
                                width={60}
                                height={60}
                                src="https://pbs.twimg.com/profile_images/1823657033851170816/DwUBAylS_400x400.png"
                                alt="Logo"
                            />
                        </Link>

                        {/* Search Bar */}
                        <div className="flex-1 mx-4 relative hidden md:block max-w-96">
                            <input
                                type="text"
                                placeholder="Rechercher un produit"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none text-black focus:ring-2 focus:ring-blue-500"
                            />
                            <MagnifyingGlassIcon className="absolute right-2 top-2 h-5 w-5 text-gray-400"/>
                        </div>

                        {/* Desktop Buttons */}
                        <div className="hidden md:flex space-x-4">
                            <button
                                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600">
                                <LightBulbIcon className="h-5 w-5"/>
                                <span>Inspiration</span>
                            </button>
                            <button
                                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600">
                                <HeartIcon className="h-5 w-5"/>
                                <span>Favoris</span>
                            </button>
                            <button
                                className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-md text-sm font-medium hover:bg-blue-600">
                                <ShoppingCartIcon className="h-5 w-5"/>
                                <span>Panier</span>
                            </button>
                            <button
                                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600">
                                <UserIcon className="h-5 w-5"/>
                                <span>Compte</span>
                            </button>
                        </div>
                    </div>
                </div>
                    <div className="flex justify-center items-center bg-white py-4 shadow-md">
                        <ul className="flex flex-wrap justify-center space-x-6">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={`/shop#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="uppercase font-medium text-xs hover:text-blue-500"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Sub Menu */}

                </div>

                {/* Mobile Dropdown */}
                <div className="md:hidden flex justify-between w-full">
                    <Image
                        width={60}
                        height={60}
                        src="https://pbs.twimg.com/profile_images/1823657033851170816/DwUBAylS_400x400.png"
                        alt="Logo"
                    />
                    <button
                        onClick={toggleDropdown}
                        className="uppercase font-medium text-sm p-2 rounded-md w-full text-center"
                    >
                        {isDropdownOpen ? 'Close Menu' : <Menu/>}
                    </button>

                    {isDropdownOpen && (
                        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 p-6 overflow-y-auto">
                            <button
                                onClick={toggleDropdown}
                                className="text-gray-600 text-lg font-bold mb-4"
                            >
                                Close
                            </button>
                            <ul className="space-y-4">
                                {[...menuItems, ...subMenuItems].map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={`/shop#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="uppercase font-medium text-lg block"
                                            onClick={toggleDropdown}
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            );
            }
