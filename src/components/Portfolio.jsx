import React from 'react';
import './styles/portfolio.css';
import Jeff from './Jeff';
import Promod from './Promod';
import Rewood from './Rewood';
import Voyagerz from './Voyagerz';
import Kokpit from './Kokpit';

function Portfolio() {
    return (
        <div id="portfolioBody">
            {' '}
            <div>
                <h1 className="titre1"> CAS PRATIQUES</h1>
                <p>
                    Exercices pratiques au cours de la formation au sein de
                    PopSchool.
                </p>

                <Jeff id="jeffPadding" />

                <Promod />
            </div>
            <div>
                <h1 className="titre1">ETUDES DE CAS PROFESSIONNELLES</h1>

                <h3>En cours de rédaction</h3>
                <p>
                    Etudes de cas en collaboration avec des entreprises:
                    création d'un parcours utilisateur ou refonte d'un site
                    existant.
                </p>
                <Rewood />
                <Voyagerz />
                <Kokpit />
            </div>
        </div>
    );
}
export default Portfolio;
