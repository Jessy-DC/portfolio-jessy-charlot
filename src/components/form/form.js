import React from "react";

export default function FormContact() {
    return (
        <div className="form-contact">
            <h2 className="form-title">Vous avez un projet ou vous souhaitez tout simplement échanger ? Contactez-moi !</h2>
            <form id="contact" className="form-content">
                <div className="form-name">
                    <label>Nom</label>
                    <input id="lastName" type="text" className="input-form" />
                </div>
                <div className="form-email">
                    <label>Email</label>
                    <input id="email" type="email" className="input-form" />
                </div>
                <div className="form-message">
                    <label>Votre message</label>
                    <textarea id="message" className="textarea-message" />
                </div>
                <div className="form-submit">
                    <button className="is-rounded" type="submit">Envoyer</button>
                </div>
            </form>
        </div>
    )
}