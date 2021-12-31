import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ShowRecept from './showRecept';


function Favourites() {
    let recepts = <div></div>
    const receptsData = useSelector(state => state.dish.recepts)
    const [myRecepts, setMyRecepts] = useState(false)
    const dispatch = useDispatch();

    myRecepts ? recepts = <ShowRecept /> :
        recepts = receptsData.map(el => (
            <div className="dish" >
                <Card sx={{ maxWidth: 245 }} onClick={() => showRecept(el)}>
                    <CardMedia
                        component="img"
                        height="160"
                        image={el[0].strMealThumb}
                        alt="" />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary" >
                            {el[0].strMeal}
                        </Typography >
                    </CardContent >
                </Card >
            </div>
        ))

    const showRecept = (el) => {
        dispatch({
            type: 'SHOW_RECEPT',
            payload: { data: el }
        })
        setMyRecepts(!myRecepts)
    }

    return (
        <div className="myFvoriteDishs">
            {recepts}
        </div>
    )
}


export default Favourites;