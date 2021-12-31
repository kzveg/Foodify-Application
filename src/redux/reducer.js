import { ADD_DISH, SHOW_RECEPT } from '../redux/actions';

const initialState = {
    data: [],
    recepts: [],
    showRecept: []
}

export const dishReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DISH_SUCCESSFULL':
            const item = action.payload.data
            return {
                data: item,
                recepts: state.recepts
            }
        case ADD_DISH:
            const dishData = action.payload.data
            return {
                data: state.data,
                recepts: [...state.recepts, dishData]
            }
        case SHOW_RECEPT:
            const recept = action.payload.data
            return {
                data: state.data,
                recepts: state.recepts,
                showRecept: recept
            }
        default:
            return state;
    }
}