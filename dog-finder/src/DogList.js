import React from "react";
import { Link } from "react-router-dom";

function DogList({dogs}) {
    return (
        <div>
            {dogs.map(d => (
                <div key={d.name}>
                    <h3>
                        <Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
                    </h3>
                </div>    
            ))}
        </div>
    );
}
export default DogList;