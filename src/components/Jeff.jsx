import React, { useState } from 'react';
import logoJeff from './img/logoJeff.png';
import cpnJeff from './img/cpn.png';
import croquisJeff from './img/croquis.png';
import itwJeff from './img/itw.png';
import parcoursJeff from './img/parcours.png';
import matriceJeff from './img/matrice.png';

import './styles/jeff.css';

function Jeff() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div id="alignLogoBrand">
                {' '}
                <img
                    id="jeffLogo"
                    src={logoJeff}
                    alt="logo JeffdeBruges"
                    onClick={() => setIsOpen(!isOpen)}
                ></img>{' '}
                <h2 className="open" onClick={() => setIsOpen(!isOpen)}>
                    Jeff de Bruges
                </h2>{' '}
            </div>
            {isOpen && (
                <div id="jeffBody" onClick={() => setIsOpen(!isOpen)}>
                    <h1 id="titreCentre"> Jeff de Bruges</h1>
                    <span className="close">X</span>
                    <h2 className="titre2">Projet et contexte</h2>
                    <div id="projet">
                        <div className="projet-contexte">
                            <p>
                                <h4>Sujet: </h4>Jeff de Bruges,enseigne
                                d'industrie agroalimentaire commercialisant
                                confiseries et chocolats
                            </p>
                            <p>
                                <h4>Durée:</h4>4 jours
                            </p>
                            <p>
                                <h4>Méthodologie: </h4>Design Sprint.
                            </p>

                            <p>
                                <h4>Objectif:</h4>guider l'utilisateur
                                souhaitant acheter du chocolat en ligne{' '}
                            </p>
                        </div>
                        <div className="projet-contexte">
                            <p>
                                <h4>Equipe:</h4> 4 apprenants UX Designers à 2
                                mois de formation
                            </p>
                            <p>
                                <h4>Mon rôle:</h4>
                                interviewer de test utilisateur et UX designer
                            </p>
                            <h4>Les outils utilisés: </h4>en télétravail lié aux
                            circonstances sanitaires, nous avons utilisé
                            <ul>
                                <li>
                                    <strong>Discord:</strong> communication
                                    entre collègues
                                </li>
                                <li>
                                    <strong>Miro:</strong> tableau blanc pour
                                    les réflexions collectives
                                </li>
                                <li>
                                    <strong>Trello:</strong> partage de
                                    parcours, tri de post-it
                                </li>
                                <li>
                                    <strong>Figma:</strong> prototypage
                                </li>
                                <li>
                                    <strong>Zoom:</strong> test utilisateur à
                                    distance
                                </li>
                            </ul>
                            <p>
                                <h4>Ce que j'améliorerais:</h4>fluidité du
                                parcours
                            </p>
                            <p>
                                <h4>Ce que j'ai apprécié:</h4> équipe dynamique
                                et investie,projet gourmand, challenge d'un
                                produit peu aisé à vendre en ligne
                            </p>
                        </div>
                    </div>
                    <h2 className="titre2">Process Design Sprint</h2>
                    <div>
                        <h3 className="titre3">
                            JOUR 1: COMPRENDRE/CHALLENGER
                        </h3>
                        <h4 className="titre4">Test application mobile</h4>

                        <div className="setupColumn">
                            <div className="adjust50">
                                TEST D'EMPATHIE: nous avons testé le site mobile
                                Jeff de Bruges pour déceler les potentielles
                                problématiques rencontrées par l'utilisateur.
                                Puis,nous avons regroupé sous forme de "Comment
                                pourrions-nous?" (CPN) les remarques qui
                                revenaient le plus souvent.
                                <p>
                                    Ceci nous a orienté vers une approche
                                    centrée sur
                                    <strong>
                                        {' '}
                                        {''}l'achat en ligne{' '}
                                    </strong>et{' '}
                                    <strong>la personnalisation</strong>.
                                </p>
                            </div>{' '}
                            <img id="cpn" src={cpnJeff} alt="cpn"></img>
                        </div>
                        <div>
                            <h4 className="titre4">
                                Les challenges que nous avons adoptées
                            </h4>
                            <span>Comment pourrions-nous:</span>
                            <ul>
                                <li>
                                    <strong>
                                        "conseiller l'achat de chocolat sans
                                        goûter?
                                    </strong>
                                </li>
                                <li>
                                    <strong>
                                        "personnaliser aux goûts de
                                        l'utilisateur?"
                                    </strong>
                                </li>
                                <li>
                                    <strong>"fluidifier la navigation?"</strong>
                                </li>
                            </ul>
                        </div>
                        <h4 className="titre4">
                            Conception parcours utilisateur et vote
                        </h4>
                        <div className="setupColumn">
                            <img
                                id="parcours"
                                src={parcoursJeff}
                                alt="parcours"
                            ></img>
                            <div className="adjust50">
                                En groupe, nous avons défini{' '}
                                <strong>un persona</strong> et{' '}
                                <strong>un parcours utilisateur </strong>tenant
                                compte du tunnel de conversion
                                (avant/pendant/après).{' '}
                                <p>
                                    Basé sur ces éléments,chacun a imaginé un
                                    parcours plus détaillé. Nous avons partagé
                                    nos parcours, voté pour le plus adéquate et
                                    complété avec les éléments qui nous
                                    semblaient pertinents dans les autres
                                    parcours.
                                </p>
                            </div>
                        </div>

                        <h3 className="titre3">
                            JOUR 2: CREER/DIVERGER et DECIDER
                        </h3>
                        <h4 className="titre4">Réalisation d'un benchmark</h4>
                        <div>
                            Par le biais d'un benchmark, nous sommes allées
                            piocher des idées sur d'autres sites
                            (chocolatier,café, pâtissier,etc) et partagé des
                            fonctionnalités intéréssantes ou inspirantes.
                        </div>
                        <h4 className="titre4">
                            Réalisation de croquis et vote
                        </h4>
                        <div className="setupColumn">
                            <div className="adjust50">
                                A partir du parcours utilisteur et du benchmark,
                                chacun a concrétisé sa vision en réalisant le
                                parcours détaillé sour forme de croquis détaillé
                                du parcours. Nous avons ensuite voté pour le
                                croquis le plus adapté aux problématiques
                                définies le JOUR 1. Nous y avons ajouté des
                                parties complémentaires issues des autres
                                croquis afin de compléter le parcours final.
                            </div>
                            <img id="croquis" src={croquisJeff} alt="cpn"></img>
                        </div>
                        <p>
                            <i>
                                <strong>En tant qu'interviewer,</strong> j'ai
                                mis en place un formulaire de recrutement avec
                                une ou deux questions me permettant de cibler
                                les cinq testeurs nécessaires à la cohérence de
                                nos feedbacks (ensuite publié sur les réseaux
                                sociaux).J'ai récupéré les réponses et
                                sélectionné les personnes proches de notre
                                persona.
                            </i>
                        </p>

                        <h3 className="titre3">JOUR 3: PROTOTYPER</h3>
                        <h4 className="titre4">
                            Répartion des tâches et prototypage
                        </h4>
                        <p>
                            L'ensemble du parcours à tester est réalisé sur
                            Figma, sur cette seule journée.
                        </p>
                        <p>
                            <i>
                                <strong>En tant qu'interviewer,</strong> j'ai
                                préparé le guide d'interview nous permettant
                                d'obtenir les remarques pertinentes pour nos
                                problématiques. Les 5 rendez-vous ont été
                                confirmé par e-mail, dans lequel j'ai apporté
                                des précisions sur le déroulement du test. J'ai
                                rédigé un GoogleDoc/PDF de mode d'emploi de
                                l'application ZOOM sur mobile, fourni aux
                                testeurs avant le test.{' '}
                            </i>
                        </p>
                        <h3 className="titre3">JOUR 4: TESTER/VALIDER</h3>
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
                        <p>
                            <i>
                                <strong>En tant qu'interviewer,</strong> mon but
                                a été de laisser l'utilisateur exprimer son avis
                                et rebondir sur ces remarques pour comprendre
                                les points de frictions, pourquoi et comment y
                                remédier. En trame de fond, je garde en tête les
                                problématiques que sont "pallier à
                                l'impossibilité de goûter", "personnaliser en
                                fonction des goûts personnels" et "fluidifier le
                                parcours".
                            </i>
                        </p>
                        <h4 className="titre4">Feedbacks équipe</h4>
                        <div>
                            Sur Trello, les autres UX Designers prennent
                            simultanément des notes de toutes les remarques
                            (positives et négatives) de chaque testeur. A la fin
                            des tests, les remarques sont regroupées et étudiées
                            selon leur redondance.
                            <img id="itw" src={itwJeff} alt="itw"></img>
                            <h4 className="titre4">Apprentissage</h4>
                            <div>
                                Plusieurs points ont été fréquemment souligné
                                par les 5 utilisateurs:
                                <ul>
                                    <li>
                                        <strong>
                                            {' '}
                                            Une incohérence dans l'indicateur de
                                            navigation( ou "fil d'ariane"),avec
                                            des étapes répétitives
                                        </strong>
                                    </li>
                                    <li>
                                        <strong>
                                            {' '}
                                            Un parcours surpenant: l'utilisateur
                                            s'attend à voir une proposition de
                                            chocolat immédiatement, avant de
                                            remplir une sélection par filtre
                                        </strong>
                                    </li>
                                    <li>
                                        <strong>
                                            {' '}
                                            Un wording pas toujours explicite
                                        </strong>
                                    </li>
                                </ul>
                                <h4 className="titre4">
                                    Matrice de priorisation de la version 2
                                </h4>
                                <div className="setupColumn">
                                    <img
                                        id="matrice"
                                        src={matriceJeff}
                                        alt="matrice"
                                    ></img>
                                    <div className="adjust50">
                                        Pour améliorer notre version, nous avons
                                        priorisé les changement à effectuer sur
                                        Figma.Nous nous sommes centrés sur 2
                                        critères:{' '}
                                        <strong>
                                            le bénéfice apporté à l'utilsateur
                                        </strong>{' '}
                                        et{' '}
                                        <strong>
                                            la difficulté de la tâche à
                                            accomplir
                                        </strong>
                                        .
                                        <p>
                                            Les tâches figurants en haut à
                                            gauche de la matrice étant
                                            prioritaire.Le code couleur est
                                            adopté pour répartir les tâches de
                                            chacun
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className="titre2">Tester le prototype</h2>
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
                            Au bout de 4 jours, le temps nous a évidemment
                            manqué pour élaborer une version 2. J'ai donc
                            prototypé{' '}
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
                </div>
            )}
        </>
    );
}

export default Jeff;
