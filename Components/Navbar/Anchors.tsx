import Link from 'next/link';
import React from 'react';

export default function LogoAndMenuItems() {
    return (
        <div className="flex items-center text-slate-500 p-b-4">
            {/* Menu Items */}
            <ul className="flex md:space-x-6 max-sm:space-x-2">
                <li>
                    <Link
                        href="/shop"
                        className="uppercase font-medium text-xs md:text-xs max-sm:text-xs"
                    >
                        Art de la table
                    </Link>
                </li>
                <li>
                    <Link
                        href="/shop"
                        className="uppercase font-medium text-xs md:text-xs max-sm:text-xs"
                    >
                        Mobilier
                    </Link>
                </li>
                <li>
                    <Link
                        href="/shop"
                        className="uppercase font-medium text-xs md:text-xs max-sm:text-xs"
                    >
                        Nappage
                    </Link>
                </li>
                <li>
                    <Link
                        href="/shop"
                        className="uppercase font-medium text-xs md:text-xs max-sm:text-xs"
                    >
                        Matériel de salle
                    </Link>
                </li>
                <li>
                    <Link
                        href="/shop"
                        className="uppercase font-medium text-xs md:text-xs max-sm:text-xs"
                    >
                        Cuisine
                    </Link>
                </li>
                <li>
                    <Link
                        href="/shop"
                        className="uppercase font-medium text-xs md:text-xs max-sm:text-xs"
                    >
                        Barbecue
                    </Link>
                </li>
                <li>
                    <Link
                        href="/shop"
                        className="uppercase font-medium text-xs md:text-xs max-sm:text-xs"
                    >
                        Tente
                    </Link>
                </li>
                <li>
                    <Link
                        href="/shop"
                        className="uppercase font-medium text-xs md:text-xs max-sm:text-xs"
                    >
                        Chauffage
                    </Link>
                </li>
                <li>
                    <Link
                        href="/shop"
                        className="uppercase font-medium text-xs md:text-xs max-sm:text-xs"
                    >
                        Podium - Piste de danse
                    </Link>
                </li>
                <li>
                    <Link
                        href="/shop"
                        className="uppercase font-medium text-xs md:text-xs max-sm:text-xs"
                    >
                        Son et lumière
                    </Link>
                </li>
                <li>
                    <Link
                        href="/shop"
                        className="uppercase font-medium text-xs md:text-xs max-sm:text-xs"
                    >
                        Packs
                    </Link>
                </li>
                <li>
                    <Link
                        href="/shop"
                        className="uppercase font-medium text-xs md:text-xs max-sm:text-xs"
                    >
                        Consommables
                    </Link>
                </li>
            </ul>
        </div>
    );
}
