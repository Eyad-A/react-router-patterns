import React from "react";
import { Link } from "react-router-dom";

function Color({hex, color, history}) {
    if (!hex) {
        history.push("/colors");
    }

    return (
        <div style={{ backgroundColor: hex }}>
            <p>{color}</p>
            <p><Link to="/">Go Back</Link></p>
        </div>
    );
}

export default Color;