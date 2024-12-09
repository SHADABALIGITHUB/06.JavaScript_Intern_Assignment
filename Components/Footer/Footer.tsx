import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-gray-50 mt-8 p-6 text-gray-700">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                    <h3 className="font-semibold mb-2">Infos Pratiques</h3>
                    <ul className="text-sm">
                        <li>À propos</li>
                        <li>Livraisons & Reprises</li>
                        <li>Mode d'emploi</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-2">Légal</h3>
                    <ul className="text-sm">
                        <li>Mentions légales</li>
                        <li>CGU</li>
                        <li>CGV</li>
                        <li>Politique de confidentialité</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-2">Mon Compte</h3>
                    <ul className="text-sm">
                        <li>Accéder à mon compte</li>
                        <li>Ma liste d'envie</li>
                        <li>Créer un compte</li>
                        <li>Mot de passe oublié</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-2">Nous suivre</h3>
                    <ul className="text-sm flex space-x-4">
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}