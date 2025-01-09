import { configureStore } from '@reduxjs/toolkit';

import  wetherSlice  from './wether/wetherSlice';
import { thunk } from 'redux-thunk';
import { createLogger } from 'redux-logger';
const logger = createLogger()

const store = configureStore({
    reducer: {
        wetherData:wetherSlice
    },
    middleware : getDefaultMiddleware  =>
    getDefaultMiddleware().concat(thunk,logger)

});

export default store;