const { createSlice } = require("@reduxjs/toolkit");

const STATUSES = Object.freeze({
    IDLE : 'idle',
    ERROR : 'error',
    LOADING : 'loading'
});

const initialState ={
    data:[],
    status:STATUSES.IDLE
};

const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        setProducts(state,action){

           state.data = action.payload;
        }
    }
})

export const {setProducts}=productSlice.actions;
export default productSlice.reducer;