import React from "react";
import '../css/css/style.css';

export default function Button(props) {

    return (
            <a href={props.URL} className="button button__navigation">{props.strings}</a>
    )
}