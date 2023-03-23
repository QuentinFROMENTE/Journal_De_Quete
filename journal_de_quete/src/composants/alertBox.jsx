import React from "react";
import '../css/css/style.css';

export default function AlertBox (props) {

    return (
            <p className="alertbox">
                {props.string}
            </p>
    )
}