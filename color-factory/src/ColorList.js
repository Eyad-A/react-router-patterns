import React from "react";
import { Link } from "react-router-dom";

function ColorList({ colors }) {
    const colorLinks = Object.keys(colors).map(colorName => (
        <li key={colorName}>
            <Link to={`/colors/${colorName}`}>{colorName}</Link>
        </li>
    ));

    return (
        <div>
            <div>
                <h1>Color Factory</h1>
            </div>
            <div>
                <h2><Link to="/colors/new">Add a color</Link></h2>
            </div>
            <div>
                <p>Please select a color</p>
                <ul>{colorLinks}</ul>
            </div>
        </div>
    );
}

export default ColorList;