'use client'
import { useEffect } from 'react'
import Charts from './components/templates/Charts'
import Filters from './components/templates/Filters'
import { useAppDispatch } from '../../store/store'
import { fetchData } from '../../store/dataSlice'

export default function Home() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])
    return (
        <main className="w-full h-full">
            <Charts />
        </main>
    )
}
