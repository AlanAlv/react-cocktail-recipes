import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

// Create context
export const ModalContext = createContext();

const ModalProvider = (props) => {
    
    // Provider State
    const [ recipeId, saveRecipeId ] = useState(null);

    // CallAPI
    useEffect(() => {
        const getRecipe = async () => {
            if(!recipeId) return;
                
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeId}
            `;

            const result = await axios.get(url);
            console.log(result.data.drinks[0]);
        }
        getRecipe()

    }, [recipeId])

    return(
        <ModalContext.Provider
            value={{saveRecipeId}}
        >
            {props.children}
        </ModalContext.Provider>
    );
}

export default ModalProvider;