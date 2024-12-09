import React from 'react';
import {PlusIcon, ShoppingCartIcon, TrashIcon, TruckIcon} from '@heroicons/react/24/outline';

function IconsCard() {
    return (
        <div className="bg-white text-slate-900 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-2">On s'occupe de <span className={`text-cyan-400`}> tout </span>
                </h2>
                <p className="text-lg text-center text-gray-700 mb-3">
                    Office ipsum you must be muted, it meeting commitment busy pain.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                    <div className="text-center p-8 border border-gray-200 rounded-lg">
                        <PlusIcon className="w-12 h-12 text-pink-300 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Livraison & Reprise</h3>
                        <p className="text-gray-700">Selon vos besoins</p>
                    </div>

                    <div className="text-center p-8 border border-gray-200 rounded-lg">
                        <TrashIcon className="w-12 h-12 text-pink-300 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Nettoyage</h3>
                        <p className="text-gray-700">Selon vos besoins</p>
                    </div>

                    <div className="text-center p-8 border border-gray-200 rounded-lg">
                        <ShoppingCartIcon className="w-12 h-12 text-pink-300 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Commande Illimitée</h3>
                        <p className="text-gray-700">Tout est possible</p>
                    </div>

                    <div className="text-center p-8 border border-gray-200 rounded-lg">
                        <TruckIcon className="w-12 h-12 text-pink-300 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Transport & Enlèvement</h3>
                        <p className="text-gray-700">On s'occupe de tout</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IconsCard;