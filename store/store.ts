import { configureStore } from '@reduxjs/toolkit'
import dataSlice from './dataSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import UISlice from './UISlice'
import filtersSlice from './filterSlice'

export const store = configureStore({
    reducer: {
        data: dataSlice,
        UI: UISlice,
        filters: filtersSlice,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
