import React from "react";
import {useParams} from 'react-router-dom';

export default function ListeTypeQuete(props){
    const {profilName, game} = useParams();
    return(
        <>
            <p>partie de {game} de {profilName}</p>
        </>
    )
}