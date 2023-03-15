import React from "react";
import { useRef } from "react";
import { CreateCookie, ReadCookie } from "../js/utils";

export default function Creation() {

    const playerName = useRef("");

    function AddProfil() {
        
        let player = playerName.current.value;
        CreateCookie(player);
        console.log(document.cookie);
        console.log(ReadCookie());        
    }

    return (
        <>
            <form method="post" className="creation">
                <label for="name">Nom de la Sauvegarde :</label>
                <input type="text" id="name" name="user_name" className="creation__input" ref={playerName}/>
            </form>
            <button onClick={AddProfil} className="button button__navigation button__navigation--validation">Créer Sauvegarde</button>
        </>
    )
}