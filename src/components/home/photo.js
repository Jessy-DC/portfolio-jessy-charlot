import React from "react";
import '../../styles/home/home.css'
import MyPhoto from '../../resources/qvbupq.jpg'

export default function Photo() {
    return (
        <div className="photo">
            <img src={MyPhoto} className="personal-photo" alt="myself"  />
        </div>
    )
}