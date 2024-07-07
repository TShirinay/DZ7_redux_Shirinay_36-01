import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const  initialState ={
        date: [],
        titans: [],
        characters:[],
        status: 'idle',
        error: null
    }
export const getAddDateAxios = createAsyncThunk(
    'getAddDate',
    async () => {
        const response = await axios('https://hp-api.onrender.com/api/characters')
        return response.data
    }
)
export const getAddDateTitans = createAsyncThunk(
    'getAddDateTitans',
    async () => {
        const response = await axios('https://api.attackontitanapi.com/titans')
        return response.data
    }
)
export const getAddDateAttakPersons = createAsyncThunk(
    'getAddDateAttakPersons',
    async () => {
        const response = await axios('https://api.attackontitanapi.com/characters')
        return response.data
    }
)

const getDateSlice = createSlice({
    name:'getAxiosDate',
    initialState,
    reducers:{},
    extraReducers: (builder) =>{
        builder
            .addCase(getAddDateAxios.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getAddDateAxios.fulfilled, (state, action) => {

                state.date = action.payload
                state.status = 'succeeded'
            } )
            .addCase(getAddDateAxios.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            } )

        builder
            .addCase(getAddDateTitans.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getAddDateTitans.fulfilled, (state, action) => {

                state.titans = action.payload
                state.status = 'succeeded'
            } )
            .addCase(getAddDateTitans.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            } )

        builder
            .addCase(getAddDateAttakPersons.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getAddDateAttakPersons.fulfilled, (state, action) => {

                state.characters = action.payload
                state.status = 'succeeded'
            } )
            .addCase(getAddDateAttakPersons.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            } )
    }
})
export default getDateSlice.reducer