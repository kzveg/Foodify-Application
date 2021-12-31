import React, { useEffect } from "react"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from "react-redux";
import { getData } from '../redux/actions'


function RandomDish() {
    let image
    const dispatch = useDispatch();
    const data = useSelector(state => state.dish.data)
    const receptsData = useSelector(state => state.dish.recepts)
    const dataDish = data.meals;

    useEffect(() => {
        dispatch(getData())
    }, [dispatch])

    if (dataDish !== undefined) {
        (dataDish[0].strMealThumb !== undefined) ? image = dataDish[0].strMealThumb :
            image = 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1479829522/bxpgav8mvdsibvxctd1d.jpg'
    }

    const ckip = () => {
        dispatch(
            getData()
        )
    }
    const addDish = () => {
        let tt = receptsData.filter(el => (el[0].idMeal === dataDish[0].idMeal))
        if (tt.length === 0) {
            dispatch({
                type: 'ADD_DISH',
                payload: { data: dataDish }
            })
        }
        else
            alert('sorry, but this dish is allready on the favourites list ')
    }

    return (
        (dataDish !== undefined) ?
            <div className="dishItems">
                <Card sx={{
                    maxWidth: 545,
                    margin: 2
                }}>
                    <CardMedia
                        component="img"
                        height="360"
                        image={image}
                        alt="" />
                    <CardContent >
                        <Typography gutterBottom variant="h5" component="div">
                            {dataDish[0].strMeal}
                        </Typography>
                        <Typography>
                            {dataDish[0].strInstructions}
                        </Typography>
                    </CardContent >
                    <CardActions>
                        <Button size="small" onClick={ckip} variant="outlined"  >Skip</Button>
                        <Button size="small" onClick={addDish} variant="outlined" color="error" >Like </Button>
                    </CardActions>
                </Card >
            </div >
            : <div> ... </div>
    )

}


export default RandomDish;