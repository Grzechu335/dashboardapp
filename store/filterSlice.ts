import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'
import { Filters } from '../types/filtersType'

export interface FilterState {
    isLoading: boolean
    isError: string | undefined
    activeMonthFilters: string[]
    yearFilters: string[]
    activeYearFilters: string[]
    productFilters: string[]
    activeProductFilters: string[]
}

const initialState: FilterState = {
    isError: undefined,
    isLoading: false,
    activeMonthFilters: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
    ],
    yearFilters: [],
    activeYearFilters: [],
    productFilters: [],
    activeProductFilters: [],
}

export const fetchFilters = createAsyncThunk(
    'filters/fetchFilters',
    async () => {
        const res = await fetch('/api/getFilters', {
            method: 'GET',
        })
        const data: Filters = await res.json()
        return data
    }
)

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        changeActiveMonthFilter: (state, action: PayloadAction<string[]>) => {
            if (action.payload.length === 0) return
            state.activeMonthFilters = action.payload
        },
        changeActiveYearFilter: (state, action: PayloadAction<string[]>) => {
            if (action.payload.length === 0) return
            state.activeYearFilters = action.payload
        },
        changeActiveProductFilter: (state, action: PayloadAction<string[]>) => {
            if (action.payload.length === 0) return
            state.activeProductFilters = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFilters.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(
            fetchFilters.fulfilled,
            (state, action: PayloadAction<Filters>) => {
                state.productFilters = action.payload.allProducts
                state.activeProductFilters = action.payload.allProducts
                state.yearFilters = action.payload.allYears
                state.activeYearFilters = action.payload.allYears
                state.isLoading = false
            }
        )
        builder.addCase(fetchFilters.rejected, (state, action) => {
            state.isError = action.error.message
            console.error(state.isError)
            state.isLoading = false
        })
    },
})

export const {
    changeActiveMonthFilter,
    changeActiveYearFilter,
    changeActiveProductFilter,
} = filtersSlice.actions

export const activeMonthFiltersSelector = (state: RootState) =>
    state.filters?.activeMonthFilters

export const activeYearFiltersSelector = (state: RootState) =>
    state.filters?.activeYearFilters
export const activeProductFiltersSelector = (state: RootState) =>
    state.filters?.activeProductFilters
export const allYearsSelector = (state: RootState) => state.filters?.yearFilters
export const allProductsSelector = (state: RootState) =>
    state.filters?.productFilters
export default filtersSlice.reducer
