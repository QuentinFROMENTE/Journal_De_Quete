import React from "react";
import '../css/css/style.css';
import { ReadCookie } from "../js/utils";
import Button from "../composants/button";
import NavigationShort from "../composants/navigationShort";

export default function Chargement() {
        let profil = ReadCookie();
        const listProfils = profil.DATA.map((profilName) => 
            <Button strings={profilName.name} URL={profilName.name} cssAdditional="loadSave__link"/>
        );

    return (
        <>
            <NavigationShort string="Selection du profil :"/>
            <div className="loadSave__link">
                {listProfils}
            </div>
        </>
    );
}