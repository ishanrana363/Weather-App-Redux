import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async (cityName) => {
    const apikey = "bf10b2170aae545cbaccfd498da296f5"
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apikey}`);
    const response = await data.json();
    return response
});

const initialState = {
    data: [],
    loading: false,
    error: null
}


export const wetherSlice = createSlice({
    name: 'weather',
    initialState: initialState,
    reducers: {
        removeData: (state) => {
            state.data = []
        }
    },
    extraReducers : builder =>{
        builder.addCase(fetchTodos.pending,(state,action)=>{
            state.loading = true
        })
        .addCase(fetchTodos.fulfilled,(state,action)=>{
            state.loading = false,
            state.data.push(action.payload)
        })
        .addCase(fetchTodos.rejected,(state,action)=>{
            state.loading = false,
            state.error = action.error.message
        })
    }
});



export const { removeData } = wetherSlice.actions;

export default wetherSlice.reducer;

