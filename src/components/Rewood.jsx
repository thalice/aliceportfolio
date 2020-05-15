import React, { useState } from 'react';

function Rewood() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <h2 onClick={() => setIsOpen(!isOpen)}>Rewood</h2>
            {isOpen && (
                <div id="body">
                    <div id="portfolioBody">
                        <h3> Promod</h3>
                        <img id="logo" src="image/logoJeff.png"></img>{' '}
                        <div id="projet-contexte">
                            <h4>Projet et contexte</h4>
                            <p>
                                <strong>Sujet: </strong>Jeff de Bruges,enseigne
                                d'une industrie agroalimentaire commercialisant
                                confiseries et chocolats
                            </p>
                            <p>
                                <strong>Durée:</strong>4 jours
                            </p>
                            <p>
                                <strong>Méthodologie: </strong>Design Sprint
                            </p>
                            <p>
                                <strong>Rôle:</strong> UX Designer et
                                interviewer de test utilisateur
                            </p>
                        </div>
                        <div>
                            <p>
                                Equipe de 4 apprenants UX Designers à 2 mois de
                                formation, l'objectif est de guider
                                l'utilisateur souhaitant acheter du chocolat en
                                ligne,à offrir.
                            </p>
                            <p>Nos challenges étaient donc:</p>
                            <ul>
                                <li>
                                    comment pourrions-nous conseiller sur
                                    l'achat de chocolat sans goûter?
                                </li>
                                <li>
                                    comment pourrions-nous personnaliser le
                                    filtre en fonction des goûts de
                                    l'utilisateur?
                                </li>
                            </ul>
                        </div>
                        <h4>Tester le prototype</h4>
                        <div>
                            <p>
                                Je vous invite à essayer ici le prototype
                                utilisé pour les tests utilisateurs (pas de
                                compte nécessaire).N'hésitez pas à me faire des
                                retours par mail afin d'améliorer le prototypage
                            </p>
                        </div>
                        <h4>Process Design Sprint</h4>
                        <div>
                            <h5>
                                JOUR 1: COMPRENDRE/CHALLENGER et CREER/DIVERGER
                            </h5>
                            <h5>JOUR 2: DECIDER</h5>
                            <p>
                                En tant qu'interviewer,j'ai mis en place un
                                formulaire de recrutement pour cibler des
                                testeurs
                            </p>
                            <h5>JOUR 3: PROTOTYPER</h5>
                            <p>
                                L'ensemble du parcours à tester est réalisé sur
                                Figma, sur cette seule journée.
                            </p>
                            <p>
                                En tant qu'interviewer, j'ai dans cette même
                                journée préparé le guide d'interview pour cibler
                                les questions à poser.
                            </p>
                            <h5>JOUR 4: TESTER/VALIDER</h5>
                        </div>
                        <h2> ETUDE DE CAS PRO</h2>
                    </div>
                </div>
            )}
        </>
    );
}

export default Rewood;
