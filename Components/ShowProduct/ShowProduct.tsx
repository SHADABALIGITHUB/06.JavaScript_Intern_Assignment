"use client";
import React, { useState } from 'react';
import HeartIcon from '@heroicons/react/24/outline/HeartIcon';
import Image from 'next/image';


function ShowProduct() {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(parseInt(event.target.value));
    };

    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-4 text-slate-900">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="text-center relative">
                        <Image src="/table.jpg" alt="No error" width={60} height={60} className={`absolute top-2 left-2.5`} />
                        <Image alt="not working" width={650} height={650} src="/machine.jpg" />
                    </div>
                    <div className="lg:pl-8">
                        <h2 className="text-3xl font-bold mb-4">Cheese - Appareil à Raclette 1/2 Roue</h2>
                        <p className="text-gray-700 mb-4">39,50€ (pièce)</p>

                        <div className="flex items-center mb-4">
                            <HeartIcon className="w-8 h-8 text-blue-500 mr-2" />
                            <span className="text-gray-500">REF: VABONS</span>
                        </div>

                        <div className="flex items-center mb-4">
                            <input type="number" min="1" value={quantity} onChange={handleQuantityChange} className="border border-gray-300 px-4 py-2 w-16 text-center" />
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-4">Ajouter au panier</button>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-xl font-bold mb-2">Location appareil à raclette</h3>
                            <ul className="list-disc list-inside">
                                <li>Raclette traditionnelle 1/2 roue</li>
                                <li>Réglable en hauteur</li>
                                <li>Appareil à raclette professionnel</li>
                                <li>Boîtier de chauffe horizontal réglable en hauteur</li>
                                <li>220V</li>
                                <li>900W</li>
                            </ul>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-xl font-bold mb-2">Description produit</h3>
                            <p className="text-gray-700">Feet vous propose à la location un/une "Jewel - grand couteau/10pc" pour votre événement et ce dès 0,35 €/place (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence "VAKGC". Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d'autres produits à louer de ce type dans la catégorie "Art de la Table".</p>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-xl font-bold mb-2">Livraison</h3>
                            <p className="text-gray-700">...</p>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-xl font-bold mb-2">Questions</h3>
                            <p className="text-gray-700">...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowProduct;