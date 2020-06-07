import React, { useContext } from 'react';
import { CategoriesContext } from '../context/CategoriesContext'

const Form = () => {

    const { categories }  = useContext(CategoriesContext);

        console.log(categories);

    return ( 
        <form
            className="col-12"
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
                    />
                </div>
                <div className="col-md-4">
                    <select 
                        className="form-control"
                        name="category"
                    >
                        <option value="">-- Select category --</option>
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