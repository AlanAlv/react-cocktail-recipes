import React, { useContext, useState } from 'react';
import { CategoriesContext } from '../context/CategoriesContext';
import { RecipesContext } from '../context/RecipesContext';

const Form = () => {

    const { categories }  = useContext(CategoriesContext);
    const { searchRecipes, saveCall } = useContext(RecipesContext)

    const [ search, saveSearch] = useState({
        name: '',
        category: ''
    });

    // Read form
    const getRecipeData = e => {
        saveSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

    return ( 
        <form
            className="col-12"
            onSubmit={ e => {
                e.preventDefault();   
                searchRecipes(search);
                saveCall(true);
            }}
        >
            <fieldset>
                <legend>Search by category or ingredient</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                        type="text" 
                        name="name" 
                        className="form-control"
                        placeholder="Search by ingredient"
                        onChange={getRecipeData}
                    />
                </div>
                <div className="col-md-4">
                    <select 
                        className="form-control"
                        name="category"
                        onChange={getRecipeData}
                    >
                        <option value="">-- Select category --</option>
                        {categories.map(category => (
                            <option 
                                key={category.strCategory}
                                value={category.strCategory}
                            >
                                {category.strCategory}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                        type="submit" 
                        className="btn btn-block btn-primary"
                        value="Search Cocktails"/>
                </div>
            </div>
        </form>
     );
}
 
export default Form;