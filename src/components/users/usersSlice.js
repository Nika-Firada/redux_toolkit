import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:'0', name: "Nika Firada"},
    {id:'1', name: "Gio Bliadz"},
    {id:'2', name: "David Wiqara"},
]

const userslice = createSlice({
    name:'users',
    initialState,
    reducers: {}
})

export const selectAllusers = (state) => state.users;
export default userslice.reducer