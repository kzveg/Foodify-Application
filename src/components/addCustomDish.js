import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useDispatch } from "react-redux";


const AddCustomDish = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
    const strMeal = document.getElementById('margin-none');
    const strInstructions = document.getElementById('margin-dense');

    const addDish = () => {
        dispatch({
            type: 'ADD_DISH',
            payload: {
                data: [{
                    strMeal: strMeal.value,
                    strInstructions: strInstructions.value,
                    strMealThumb: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1479829522/bxpgav8mvdsibvxctd1d.jpg'
                }]
            }
        })
        setTitle('');
        setDescription('');
        alert('your dish has been successfully added')
    }
    const addTitleDish = (event) => {
        setTitle(event.target.value);
    };
    const addDescriptionDish = (event) => {
        setDescription(event.target.value);
    };

    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    '& .MuiTextField-root': { width: '45ch' },
                    margin: '30px',
                }}
            >
                <Card>
                    <CardContent>
                        <CardMedia
                            component="img"
                            height="300"
                            image='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1479829522/bxpgav8mvdsibvxctd1d.jpg'
                            alt="" />
                        <TextField
                            value={title}
                            label={'Dish title'}
                            id="margin-none" multiline
                            onChange={addTitleDish} />
                        <br />
                        <br />
                        <br />
                        <TextField
                            value={description}
                            label={'Dish description...'}
                            id="margin-dense" multiline
                            onChange={addDescriptionDish} />
                    </CardContent>
                    <Stack margin={'20px'}>
                        <Button variant="contained" onClick={addDish} > Add Custom Dish </Button>
                    </Stack>
                </Card >
            </Box >
        </div>
    )
}


export default AddCustomDish;