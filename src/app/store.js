import { configureStore } from '@reduxjs/toolkit';
import { dishReducer } from '../redux/reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'persist-key',
    storage
}
const persistedReducer = persistReducer(persistConfig, dishReducer)

export const store = configureStore({
    reducer: {
        dish: persistedReducer
    },
});

export const persistor = persistStore(store)