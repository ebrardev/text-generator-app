import {createSlice} from '@reduxjs/toolkit';
export const textSlice = createSlice({
    name: 'text',
    initialState: {
        items: [],
    }
})

export default textSlice.reducer;