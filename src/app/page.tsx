'use client'
import { useEffect } from 'react'
import Charts from './components/templates/Charts'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { fetchData } from '../../store/dataSlice'
import {
    activeMonthFiltersSelector,
    activeProductFiltersSelector,
    activeYearFiltersSelector,
    fetchFilters,
} from '../../store/filterSlice'

export default function Home() {
    const activeMonthFilters = useAppSelector(activeMonthFiltersSelector)
    const activeYearFilters = useAppSelector(activeYearFiltersSelector)
    const activeProductFilters = useAppSelector(activeProductFiltersSelector)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(
            fetchData({
                activeMonthFilters,
                activeProductFilters,
                activeYearFilters,
            })
        )
    }, [dispatch, activeMonthFilters, activeYearFilters, activeProductFilters])
    useEffect(() => {
        dispatch(fetchFilters())
    }, [dispatch])
    return (
        <main className="w-full h-full">
            <Charts />
        </main>
    )
}
