import React from "react";

export default function NavLink(props) {
    return (
        <a href={props.link} onClick={props.onClick} className={props.class}>{props.children}</a>
    )
}