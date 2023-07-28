'use client'
import React from 'react'
import { BsGlobe as GlobeIcon } from 'react-icons/bs'
import { AiFillPieChart as ChartIcon } from 'react-icons/ai'
import { useAppDispatch, useAppSelector } from '../../../../store/store'
import { mapStatusSelector, toggleMap } from '../../../../store/UISlice'

const Header = () => {
    const dispatch = useAppDispatch()
    const mapStatus = useAppSelector(mapStatusSelector)
    return (
        <header className="fixed left-0 top-0 w-screen h-[80px] xl:h-screen xl:w-[100px] z-[999] text-white bg-zinc-800 p-4 xl:py-6">
            <div className="flex items-center w-full h-full xl:flex-col">
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
            </div>
        </header>
    )
}

export default Header
