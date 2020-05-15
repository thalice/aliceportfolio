import React, { useEffect, useRef } from 'react';
import hole from './img/down.png';
import './styles/accueil.css';

function Accueil() {
    const node = useRef();
    useEffect(() => {
        wordflick(node.current);
    }, []);

    return (
        <div id="background">
            <div id="hello">Hello, je suis</div>
            <img src={hole} alt="AliceInWonderland" />
            <div className="gradient-text" id="node" ref={node}></div>
        </div>
    );
}
export default Accueil;

function wordflick(node) {
    let words = [
            'UX Designer',
            "plus réALICE qu'idéaliste.",
            'maman dévouée',
            'familiALICE et non traditionnaliste.',
            "voyageuse dans l'âme",
            'spirituALICE plutôt que matérialiste.',
        ],
        part,
        i = 0,
        offset = 0,
        len = words.length,
        forwards = true,
        skip_count = 0,
        skip_delay = 5,
        speed = 80;

    setInterval(() => {
        if (forwards) {
            if (offset >= words[i].length) {
                ++skip_count;
                if (skip_count == skip_delay) {
                    forwards = false;
                    skip_count = 0;
                }
            }
        } else {
            if (offset == 0) {
                forwards = true;
                i++;
                offset = 0;
                if (i >= len) {
                    i = 0;
                }
            }
        }
        part = words[i].substr(0, offset);
        if (skip_count == 0) {
            if (forwards) {
                offset++;
            } else {
                offset--;
            }
        }
        // console.log(part);
        node.innerHTML = part;
    }, speed);
}
