import React from "react";
import '../css/css/style.css';
import Logo from '../assets/icones/open-book.png';
import Button from "../composants/button";
import Footer from "../composants/footer";

export default function Acceuil() {

    return (
        <>
            <img src={Logo} className="reception__logo" alt="Journal personnel permettant le suivie de vos aventures"/>
            <p className="reception__title">Journal de Quêtes</p>
            <div className="reception__navigation">
                <Button strings="Nouveau Profil" URL="NewSave"/>
                <Button strings="Charger un Profil" URL="LoadSave"/>
            </div>
            <Footer/>
        </>
    );
}