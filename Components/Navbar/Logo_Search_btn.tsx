import Link from 'next/link';
import { MagnifyingGlassIcon, LightBulbIcon, HeartIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
    return (

            <div className="flex items-center justify-around w-full">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <img src="https://pbs.twimg.com/profile_images/1823657033851170816/DwUBAylS_400x400.png" alt="Logo" className="h-20" />
                    {/*<span className="text-xl font-semibold">MyShop</span>*/}
                </Link>

                {/* Search Bar */}
                <div className="flex-1 mx-4 relative max-w-96">
                    <input
                        type="text"
                        placeholder="Rechercher un produit"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none text-black focus:ring-2 focus:ring-blue-500"
                    />
                    <MagnifyingGlassIcon className="absolute right-2 top-2 h-5 w-5 text-gray-400" />
                </div>

                {/* Buttons Section */}
                <div className="flex">
                    {/* Inspiration Button */}
                    <button className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 focus:outline-none">
                        <LightBulbIcon className="h-5 w-5" />
                        <span>Inspiration</span>
                    </button>

                    {/* Favorites Button */}
                    <button className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 focus:outline-none">
                        <HeartIcon className="h-5 w-5" />
                        <span>Mes Favoris</span>
                    </button>

                    {/* Cart Button */}
                    <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 rounded-md text-sm font-medium text-white hover:text-grey-600 focus:outline-none">
                        <ShoppingCartIcon className="h-5 w-5" />
                        <span>Panier</span>
                    </button>

                    {/* User Button */}
                    <button className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 focus:outline-none">
                        <UserIcon className="h-5 w-5" />
                        <span>Compte</span>
                    </button>
                </div>
            </div>

    );
}
