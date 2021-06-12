import React from "react"; 
import { useParams } from "react-router";
import DogDetails from "./DogDetails";

function FilterDogDetails({dogs}) {
    const {name} = useParams();

    if(name) {
        const currentDog = dogs.find(
            dog => dog.name.toLowerCase() === name.toLowerCase()
        );
        return <DogDetails dog={currentDog} />;
    }

    return null;
}

export default FilterDogDetails;