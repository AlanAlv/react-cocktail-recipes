import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

// Create context
export const ModalContext = createContext();

const ModalProvider = (props) => {
    
    // Provider State
    const [ recipeId, saveRecipeId ] = useState(null);

    return(
        <ModalContext.Provider
            value={{saveRecipeId}}
        >
            {props.children}
        </ModalContext.Provider>
    );
}

export default ModalProvider;