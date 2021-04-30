import React from "react";
import NavLink from "../UI/navlink";

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-items">
                <NavLink link="#home" class="items">Accueil</NavLink>
                <NavLink link="#creations" class="items">Réalisations</NavLink>
                <NavLink link="#contact" class="items">Contacter</NavLink>
            </div>
        </div>
    )
}