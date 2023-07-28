import type { PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { DataResponse } from '../types/data'
import { RootState } from './store'

export interface UIState {
    mapStatus: boolean
    filtersStatus: boolean
}

const initialState: UIState = {
    mapStatus: true,
    filtersStatus: false,
}

export const UISlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        toggleMap: (state) => {
            state.mapStatus = !state.mapStatus
        },
        toggleFilters: (state) => {
            state.filtersStatus = !state.filtersStatus
        },
    },
})

export const { toggleMap, toggleFilters } = UISlice.actions

export const mapStatusSelector = (state: RootState) => state.UI.mapStatus
export const filtersStatusSelector = (state: RootState) =>
    state.UI.filtersStatus

export default UISlice.reducer
