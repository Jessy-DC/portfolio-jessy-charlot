import React from "react";
import NavLink from "../UI/navlink";
import '../../styles/navbar/navbar.css'

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-items">
                <NavLink link="#home" class="items">Accueil</NavLink>
                <NavLink link="#about" class="items">A propos</NavLink>
                <NavLink link="#creations" class="items">Dernières réalisations</NavLink>
                <NavLink link="#contact" class="items">Me contacter</NavLink>
            </div>
        </div>
    )
}