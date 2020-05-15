import React, { useState } from 'react';
import logoPromod from './img/logoPromod.jpg';

function Promod() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {' '}
            <div id="alignLogoBrand">
                <img
                    id="jeffLogo"
                    src={logoPromod}
                    alt="logo JeffdeBruges"
                    onClick={() => setIsOpen(!isOpen)}
                ></img>
                <h2 className="open" onClick={() => setIsOpen(!isOpen)}>
                    Promod
                </h2>{' '}
            </div>
            {isOpen && (
                <div id="jeffBody" onClick={() => setIsOpen(!isOpen)}>
                    <h1> Promod</h1>
                    <span className="close" onClick={() => setIsOpen(!isOpen)}>
                        X
                    </span>
                    <div id="projet-contexte">
                        <h2>Projet et contexte</h2>
                        <p>
                            <h3>Sujet: </h3>Promod,enseigne de prêt-à-porter
                            féminin en magasin et en ligne
                        </p>
                        <p>
                            <h3>Durée:</h3>4 jours
                        </p>
                        <p>
                            <h3>Méthodologie: </h3>Design Sprint
                        </p>
                        <p>
                            <h3>Objectif:</h3>guider l'utilisateur souhaitant
                            acheter du chocolat en ligne{' '}
                        </p>
                        <p>
                            <h3>Equipe:</h3> 4 apprenants UX Designers à 2 mois
                            de formation
                        </p>
                        <p>
                            <h3>Rôle:</h3>
                            interviewer de test utilisateur
                        </p>
                    </div>

                    <h2 className="h2">Tester le prototype</h2>
                    <div>
                        <p>
                            Je vous invite à essayer{' '}
                            <a
                                className="proto"
                                href=" https://www.figma.com/proto/KD6iuoymN68dpjSTrsSRxq/Jeff-de-Bruges-V1?node-id=31%3A148&scaling=scale-down"
                            >
                                ici le prototype utilisé
                            </a>{' '}
                            pour les tests utilisateurs (pas de compte
                            nécessaire).
                        </p>
                        <p>
                            A l'issu de la phase d'apprentissage, j'ai
                            personnellement prototypé
                            <a
                                className="proto"
                                href="https://www.figma.com/proto/VwVRyAOotmMbKtWUsTWrSR/Jeff?node-id=305%3A2186&scaling=min-zoom"
                            >
                                une seconde version que vous pouvez essayer ici.
                            </a>{' '}
                        </p>

                        <p>
                            <strong>Le parcours choisi:</strong> vous souhaitez
                            offrir une boîte de chocolat à votre grand-mère et
                            lui faire livrer chez elle{' '}
                        </p>
                    </div>
                    <h2 className="h2">T>Process Design Sprint</h2>
                    <div>
                        <h3>JOUR 1: COMPRENDRE/CHALLENGER et CREER/DIVERGER</h3>
                        <h4>Test application mobile.</h4>
                        <div>
                            Nous avons testé l'application pour déceler les
                            problématiques rencontrées par l'utilisateur. Ceci
                            nous a permis de fixer notre angle d'approche sur
                            des problématiques précises.
                        </div>{' '}
                        <img id="cpn" src="image/cpn.png" alt="cpn"></img>
                        <div>
                            <p>Les challenges que nous avons adoptées: </p>
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
                        <h4>Conception parcours utilisateur et vote</h4>
                        <div>
                            En groupe, nous avons défini un persona et convenu
                            des étapes de l'expérience utilisateurs
                            (avant/pendant/après). Puis individuellement, chacun
                            a imaginé un parcours précis basé sur les étapes
                            établies précédemment. A partir de ces parcours
                            individuels, nous nous sommes arrêtés sur un
                            parcours précis.
                        </div>
                        <img
                            id="parcours"
                            src="image/parcours.png"
                            alt="parcours"
                        ></img>
                        <h3>JOUR 2: DECIDER</h3>
                        <h4>Réalisation d'un benchmark</h4>
                        <div>
                            Individuellement,pour s'inspirer, chacun a fait un
                            benchmark sur des sites différents et partager ses
                            idées.
                        </div>
                        <h4>Réalisation de croquis et vote</h4>
                        <div>
                            Chacun à réaliser son croquis détaillé du parcours
                            utilisé, basé sur le parcours sur lequel nous nous
                            sommes arrêtés la veille et les "bonnes idées" du
                            benchmark réalisé juste avant. Nous avons ensuite
                            voté pour le croquis le plus adapté par rapport aux
                            problématiques définis le JOUR 1. Nous y avons
                            ajouté des parties intéréssantes sur les autres
                            croquis afin de compléter le parcours final
                        </div>
                        <img
                            id="croquis"
                            src="image/croquis.png"
                            alt="cpn"
                        ></img>
                        <p>
                            En tant qu'interviewer,j'ai mis en place un
                            formulaire de recrutement pour cibler des testeurs.
                            Ce formulaire a été publié sur les réseaux sociaux
                            de PopSchool et également pas nos camarades.J'ai
                            récupéré les réponses du formulaire de recrutement
                            et sélectionné les réponses les plus proches de
                            notre persona, nous avions besoin de 5 testeurs.
                        </p>
                        <h3>JOUR 3: PROTOTYPER</h3>
                        <h4>Répartion des tâches et prototypage</h4>
                        <p>
                            L'ensemble du parcours à tester est réalisé sur
                            Figma, sur cette seule journée.
                        </p>
                        <p>
                            En tant qu'interviewer, j'ai dans cette même journée
                            préparé le guide d'interview pour cibler les
                            questions à poser. Les 5 rendez-vous ont été
                            confirmé par e-mail, dans lequel j'ai apporté des
                            précisions sur le déroulement du test. J'ai rédigé
                            un GoogleDoc/PDF de mode d'emploi de l'application
                            ZOOM sur mobile, fourni aux testeurs avant le test.{' '}
                        </p>
                        <h3>JOUR 4: TESTER/VALIDER</h3>
                        <div>
                            Les tests utilisateurs mettent en avant les points
                            forts et les faiblesses de notre prototype. Par des
                            tests réguliers, nous pouvons rapidement et
                            facilement ré-ajuster notre version. Chaque test
                            dure env. 40 min. L'utilisateur a été invité à
                            commander une boîte de chocolat et la faire envoyer
                            à sa grand-mère. Les données correspondant au
                            parcours testé lui ont été indiquées au fur et à
                            mesure de l'expérience.
                        </div>
                        <h4>Feedback équipe</h4>
                        <div>
                            L'équipe prend des notes de toutes les remarques
                            (positives et négatives) de chaque utilisateur.
                            <img id="itw" src="image/itw.png" alt="itw"></img>
                            <h4>Apprentissage</h4>
                            <div>
                                Plusieurs points ont été fréquemment souligné
                                par les 5 utilisateurs:
                                <ul>
                                    <li>
                                        Une incohérence dans l'information de
                                        navigation "fil d'ariane", qui rend le
                                        parcours redondant
                                    </li>
                                    <li>
                                        Un parcours surpenant: l'utilisateur
                                        s'attend à voir une proposition de
                                        chocolat immédiatement, avant de remplir
                                        une sélection par filtre
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Promod;
