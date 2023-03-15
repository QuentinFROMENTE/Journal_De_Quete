import React from "react";
import '../css/css/style.css';
import Logo from '../assets/icones/open-book.png';
import Button from "../composants/button";
import Footer from "../composants/footer";
import { useState, useEffect } from "react";

export default function Acceuil() {
    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        if (document.cookie) {
            setIsSaved(true);
        }
    },[]);
    
    return (
        <>
            <img src={Logo} className="reception__logo" alt="Journal personnel permettant le suivie de vos aventures"/>
            <p className="reception__title">Journal de Quêtes</p>
            <div className="reception__navigation">
                {isSaved ? 
                <Button strings="Charger un Profil" URL="LoadSave"/>
                : null }
                <Button strings="Nouveau Profil" URL="NewSave"/>
            </div>
            <Footer/>
        </>
    );
}