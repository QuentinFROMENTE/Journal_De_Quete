import React from "react";
import '../css/css/style.css';

export default function Footer() {

    return (
        <footer className="footer">
            <a className="footer__link" href="https://github.com/QuentinFROMENTE/Journal_De_Quete" target="_blank" rel="noreferrer">Lien GitHub</a>
            <a className="footer__link" href="about">À propos</a>
            <a className="footer__link" href="devlog">Versionnage</a>
        </footer>
    )

}