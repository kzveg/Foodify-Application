import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useSelector } from "react-redux";
import Favourites from './favourites';
import CancelPresentationTwoToneIcon from '@mui/icons-material/CancelPresentationTwoTone';


function ShowRecept() {
    let image
    const receptData = useSelector(state => state.dish.showRecept)
    const [state, setState] = useState(true)
    const myFavouritRacepts = () => {
        setState(!state)
    }

    if (receptData !== undefined) {
        (receptData[0].strMealThumb !== undefined) ? image = receptData[0].strMealThumb :
            image = 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1479829522/bxpgav8mvdsibvxctd1d.jpg'
    }

    return (
        <div >
            {state ?
                <div className="showRecept">
                    <Card sx={{ maxWidth: 545 }}  >
                        <div className="close" >
                            <CancelPresentationTwoToneIcon
                                fontSize="medium"
                                onClick={myFavouritRacepts} />
                        </div>
                        <CardMedia
                            component="img"
                            height="360"
                            image={image}
                            alt=""
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {receptData[0].strMeal}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" >
                                {receptData[0].strInstructions}
                            </Typography >
                        </CardContent >
                    </Card >
                </div>
                : <Favourites />}
        </div>
    )
}


export default ShowRecept;