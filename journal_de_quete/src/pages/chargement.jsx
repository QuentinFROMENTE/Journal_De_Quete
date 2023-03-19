import React from "react";
import '../css/css/style.css';
import { ReadCookie } from "../js/utils";
import Button from "../composants/button";

export default function Chargement() {
        let profil = ReadCookie();
        const listProfils = profil.DATA.map((profilName) => 
            <Button strings={profilName.name} URL={profilName.name} cssAdditional="loadSave__link"/>
        );

    return (
        <>
            <p className="loadSave__selection">Selection du profil :</p>
            <div className="loadSave__link">
                {listProfils}
            </div>
        </>
    );
}