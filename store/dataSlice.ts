import type { PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { DataResponse } from '../types/data'
import { RootState } from './store'

export interface DataState {
    data: DataResponse
    isLoading: boolean
    error: string | undefined
}

const initialState: DataState = {
    data: {
        countriesRevenues: [],
        products: [],
        topClients: [],
        topCountries: [],
        totalQuantity: undefined,
        totalRevenue: undefined,
        yearlyRevenues: [],
        orderSizes: [],
        orderStatuses: [],
        revenuesComparison: [],
    },
    isLoading: true,
    error: undefined,
}

export const fetchData = createAsyncThunk(
    'data/fetchData',
    async (filters: {
        activeMonthFilters: string[]
        activeYearFilters: string[]
        activeProductFilters: string[]
    }) => {
        const res = await fetch('/api/getData', {
            method: 'POST',
            body: JSON.stringify(filters),
        })
        const data: DataResponse = await res.json()
        return data
    }
)

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        test: () => {},
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(
            fetchData.fulfilled,
            (state, action: PayloadAction<DataResponse>) => {
                state.isLoading = false
                state.data = action.payload
            }
        )
        builder.addCase(fetchData.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
            console.error(state.error)
        })
    },
})

export const { test } = dataSlice.actions

export const productsSelector = (state: RootState) => state.data.data?.products
export const yearlyRevenuesSelector = (state: RootState) =>
    state.data.data?.yearlyRevenues

export const topClientsSelector = (state: RootState) =>
    state.data.data.topClients
export const topCountriesSelector = (state: RootState) =>
    state.data.data.topCountries
export const countriesRevenuesSelector = (state: RootState) =>
    state.data.data.countriesRevenues
export const totalRevenueSelector = (state: RootState) =>
    state.data.data.totalRevenue
export const totalQuantitySelector = (state: RootState) =>
    state.data.data.totalQuantity
export const revenuesComparisonSelector = (state: RootState) =>
    state.data.data.revenuesComparison
export const orderStatusesSelector = (state: RootState) =>
    state.data.data.orderStatuses
export const orderSizesSelector = (state: RootState) =>
    state.data.data.orderSizes
export const isLoadingSelector = (state: RootState) => state.data.isLoading
export default dataSlice.reducer
