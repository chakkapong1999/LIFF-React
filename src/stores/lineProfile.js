import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userId: '',
    displayName: '',
    statusMessage: '',
    pictureUrl: ''
};

export const userSlice = createSlice({
    name: 'lineProfile',
    initialState,
    reducers: { //จัดการ state ตาม action ที่เกิดขึ้น
        setUserId: (state, action) => {
            state.userId = action.payload
        },
        setDisplayName: (state, action) => {
            state.displayName = action.payload
        },
        setStatusMessage: (state, action) => {
            state.statusMessage = action.payload
        },
        setPictureUrl: (state, action) => {
            state.pictureUrl = action.payload
        },
    }
})

export const { setUserId, setDisplayName, setStatusMessage, setPictureUrl } = userSlice.actions;
export default userSlice.reducer;
