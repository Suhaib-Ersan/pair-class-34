import React, { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAllergies, faBed, faBoxes, faCaretSquareDown, faLandmark } from "@fortawesome/free-solid-svg-icons";

import "./footer.scss";

export default function Footer() {
    return (
        <footer className="footer">
            <div>
                <h1>To-Do</h1>
                <h5>for your every do-to need</h5>
            </div>
            <div>
                <h2>All Rights Reserved ASAC® 2021</h2>
            </div>
            <div className="footerContactUs">
                <FontAwesomeIcon icon={faAllergies} />
                <FontAwesomeIcon icon={faBed} />
                <FontAwesomeIcon icon={faBoxes} />
            </div>
        </footer>
    );
}
