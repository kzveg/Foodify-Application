export const SHOW_RECEPT = 'SHOW_RECEPT';
export const ADD_DISH = 'ADD_DISH';

export const getData = () => dispatch => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(response => response.json())
        .then(data => dispatch({ type: 'GET_DISH_SUCCESSFULL', payload: { data: data } })
        );
}
