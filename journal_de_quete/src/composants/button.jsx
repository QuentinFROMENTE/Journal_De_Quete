import React from "react";
import '../css/css/style.css';

export default function Button(Props) {


    return (
            <a href={Props.URL} className="button button__navigation">{Props.strings}</a>
    )
}