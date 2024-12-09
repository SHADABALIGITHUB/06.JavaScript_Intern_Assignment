import React from 'react';
import { HeartIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
// import table from '@/public/table.jpg';


function SimilarItemsSection() {
    const item = [1, 2, 3, 4];
    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-4 text-slate-900">
                <h2 className="text-3xl font-bold text-left mb-4">Articles similaires</h2>
                <div className="flex items-center justify-between mb-4">
                    <button className="text-gray-700 hover:underline">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <a href="#" className="text-slate-500 hover:underline">Voir toute la collection</a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {item.map((item, index) => (
                        <div key={index} className="text-center p-8 border border-gray-200 rounded-lg relative">
                            <Image width={100} height={100} src="/table.jpg" alt="Product Image" className="w-full h-48 object-contain mb-4"/>
                            <h4 className="text-md absolute top-2 right-2.5 mb-2">Art de la table</h4>
                            <HeartIcon className="w-8 h-8 absolute top-2 left-2.5 text-blue-500 mx-auto mb-2"/>
                               <div className={`flex flex-col`}>
                                <div className={`flex justify-between`}>
                                    <h4 className="text-xl font-bold mb-2">Title</h4>
                                    <h4 className="text-gray-700">0€</h4>
                                </div>
                                <div className={`flex justify-between`}>

                                    <p className="text-xs text-gray-500">0,35€/Pièce · RÉF : VABGN5</p>
                                    <p className="text-xs text-gray-500">20 pièces</p>
                                </div>
                            </div>
                        </div>
                    ),)}

                    {/* Repeat the above card structure for the remaining items */}
                </div>

                <h2 className="text-3xl font-bold text-left mt-8 mb-6">Ces produits pourraient vous intéresser</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {item.map((item, index) => (
                        <div key={index} className="text-center p-8 border border-gray-200 rounded-lg relative">
                            <Image width={100} height={100} src="/table.jpg" alt="Product Image" className="w-full h-48 object-contain mb-4"/>
                            <h4 className="text-md absolute top-2 right-2.5 mb-2">Art de la table</h4>
                            <HeartIcon className="w-8 h-8 absolute top-2 left-2.5 text-blue-500 mx-auto mb-2"/>
                            <div className={`flex flex-col`}>
                                <div className={`flex justify-between`}>
                                    <h4 className="text-xl font-bold mb-2">Title</h4>
                                    <h4 className="text-gray-700">0€</h4>
                                </div>
                                <div className={`flex justify-between`}>

                                    <p className="text-xs text-gray-500">0,35€/Pièce · RÉF : VABGN5</p>
                                    <p className="text-xs text-gray-500">20 pièces</p>
                                </div>
                            </div>
                        </div>
                    ),)}
                </div>
            </div>
        </div>
    );
}

export default SimilarItemsSection;