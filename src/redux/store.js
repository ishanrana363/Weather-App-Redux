import { configureStore } from '@reduxjs/toolkit';

import  wetherSlice  from './wether/wetherSlice';

const store = configureStore({
    reducer: {
        wetherData:wetherSlice
    }
});

export default store;