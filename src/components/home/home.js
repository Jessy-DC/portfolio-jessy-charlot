import React from "react";
import Photo from "./photo";
import '../../styles/home/home.css'

export default function Home() {
    return (
        <div id="home" className="home">
            <h1 className="home-title">Développeur Front-end</h1>
            <p>Je réalise avec vous vos projets web</p>
            <Photo />
        </div>
    )
}