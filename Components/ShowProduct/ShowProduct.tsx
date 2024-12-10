"use client";
import React, { useState } from 'react';
import HeartIcon from '@heroicons/react/24/outline/HeartIcon';
import Image from 'next/image';
import {Ruler,CircleSlash2,Minus,Plus } from 'lucide-react'


function ShowProduct() {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(parseInt(event.target.value));
    };

    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-4 text-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="text-center relative bg-neutral-200 flex items-center justify-center">
                        <Image src="/table.jpg" alt="No error" width={60} height={60}
                               className={`absolute top-4 left-2.5 grayscale `}/>
                        <Image src="/table.jpg" alt="No error" width={60} height={60}
                               className={`absolute top-20 left-2.5`}/>
                        <Image src="/table.jpg" alt="No error" width={60} height={60}
                               className={`absolute top-36 left-2.5`}/>
                        <Image alt="not working" width={600} height={600} src="/machine2.png"/>
                    </div>
                    <div className="lg:pl-8">
                        <h2 className="text-3xl font-bold mb-4">Cheese - Appareil à Raclette 1/2 Roue</h2>
                        <p className="text-gray-700 mb-4">39,50€ (pièce)</p>

                        <div className="flex items-center mb-4 text-gray-700 gap-3">
                            <Ruler/>
                            <span className="text-gray-500">20 <sup>cm</sup></span>
                            <CircleSlash2/>
                            <span className="text-gray-500">50 <sup>cm</sup></span>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-sm font-bold mb-2">Location appareil à raclette</h3>
                            <ul className="text-sm list-none list-inside">
                                <li>Raclette traditionnelle 1/2 roue</li>
                                <li>Réglable en hauteur</li>
                                <li>Appareil à raclette professionnel</li>
                                <li>Boîtier de chauffe horizontal réglable en hauteur</li>
                                <li>220V</li>
                                <li>900W</li>
                            </ul>
                        </div>

                        <div className="flex items-center mb-4 mt-16 justify-between">
                            <div className="flex min-w-32 justify-between border border-gray-300 px-2 py-2 w-16 text-center">

                                <Minus />
                                <h2 className={`font-bold`}>{quantity}</h2>
                                <Plus />

                             </div>

                            <button
                                className="bg-cyan-500 flex-1 hover:bg-cyan-500 min-w-1/2 text-white font-medium py-2 px-4 rounded ml-4">Ajouter
                                au panier
                            </button>
                        </div>


                    </div>
                </div>
                <div className={`flex`}>
                <div className="mb-4 mt-8 w-1/2">
                    <h3 className="text-xl font-bold mb-2">Description produit</h3>
                    <p className="text-gray-700">Feet vous propose à la location un/une "Jewel - grand
                        couteau/10pc" pour votre événement et ce dès 0,35 €/place (HTVA). Que ce soit pour votre
                        mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet d'une
                        sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence
                        "VAKGC". Nous sommes à votre disposition pour que les événements de nos clients, même en
                        last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d'autres
                        produits à louer de ce type dans la catégorie "Art de la Table".</p>
                </div>

                    <div className={`flex flex-col flex-1 mt-16 gap-3`}>
                <div className=" text-center bg-neutral-200 flex items-center justify-between p-3">
                    <h3 className="text-xl font-light mb-2">Livraison</h3>
                    <p className="text-gray-700"><Plus/> </p>
                </div>

                <div className=" text-center bg-neutral-200 flex items-center justify-between p-3">
                    <h3 className="text-xl font-light mb-2">Questions</h3>
                    <p className="text-gray-700"><Plus/> </p>
                </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowProduct;