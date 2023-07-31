'use client'
import React from 'react'
import { BsGlobe as GlobeIcon } from 'react-icons/bs'
import { AiFillPieChart as ChartIcon } from 'react-icons/ai'
import { FiFilter as FilterIcon } from 'react-icons/fi'
import { useAppDispatch, useAppSelector } from '../../../../store/store'
import {
    mapStatusSelector,
    toggleFilters,
    toggleMap,
} from '../../../../store/UISlice'

const Header = () => {
    const dispatch = useAppDispatch()
    const mapStatus = useAppSelector(mapStatusSelector)
    return (
        <header className="fixed left-0 xl:rounded-tr-tremor-default top-0 w-screen h-[80px] xl:h-screen xl:w-[100px] z-[999] text-white bg-zinc-800 p-4 xl:py-6 xl:border-r-[1px] xl:border-r-white/20 border-b-[1px] border-b-white/20 xl:border-b-0">
            <div className="flex items-center justify-between w-full h-full space-x-6 xl:justify-start xl:space-x-0 xl:space-y-10 xl:flex-col">
                {mapStatus ? (
                    <ChartIcon
                        size={42}
                        className="cursor-pointer"
                        onClick={() => dispatch(toggleMap())}
                    />
                ) : (
                    <GlobeIcon
                        size={42}
                        className="cursor-pointer"
                        onClick={() => dispatch(toggleMap())}
                    />
                )}
                <FilterIcon
                    size={36}
                    className="cursor-pointer"
                    onClick={() => dispatch(toggleFilters())}
                />
            </div>
        </header>
    )
}

export default Header
