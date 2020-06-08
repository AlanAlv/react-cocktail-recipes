import React, { useContext, useState} from 'react';
import { ModalContext } from '../context/ModalContext';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      [theme.breakpoints.down('sm')]: {
        width: '100%',  
      },
      [theme.breakpoints.up('sm')]: {
        width: 450,  
      },
      maxHeight: 800,
      overflowY: 'auto',
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

const Recipe = ({recipe}) => {

    // Modal config
    const [ modalStyle ] = useState(getModalStyle);
    const [ open, setOpen ] = useState(false);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }


    // Destructure context
    const { info, saveRecipeId, saveInfo } = useContext(ModalContext);

    // Shows and formats ingredients
    const showIngredients = info => {
        let ingredients = [];
        for(let i = 1; i < 16; i++){
            if(info[`strIngredient${i}`]){
                ingredients.push(
                    <li
                        key={i}
                    >
                        {info[`strIngredient${i}`]} {info[`strMeasure${i}`]}
                        
                    </li>
                )
            }
        }
        return ingredients;

    }

    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">
                    {recipe.strDrink}
                </h2>
                <img 
                    src={recipe.strDrinkThumb} 
                    alt={`${recipe.strDrink}`} 
                    className="card-img-top"
                />
                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={() => {
                            saveRecipeId(recipe.idDrink);
                            handleOpen();
                        }}
                    >
                        See Recipe
                    </button>
                    <Modal
                        open={open}
                        onClose={() => {
                            saveRecipeId(null);
                            saveInfo({});
                            handleClose();
                        }}
                    >
                        <div 
                            style={modalStyle}
                            className={classes.paper}
                        >
                            <h2>{info.strDrink}</h2>
                            <h3 className="mt-4">Instructions</h3>
                            <p>
                                {info.strInstructions}
                            </p>
                            <img 
                                src={info.strDrinkThumb} 
                                alt={`${info.strDrink}`} 
                                className="img-fluid mt-4"
                            />
                            <h3>Ingredients</h3>
                            <ul>
                                {showIngredients(info)}
                            </ul>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
     );
}
 
export default Recipe;