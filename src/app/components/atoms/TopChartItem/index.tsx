'use client'
import React from 'react'
import currencyFormatter from '../../../../../utils/currencyFormatter'
import { useAppSelector } from '../../../../../store/store'
import { totalRevenueSelector } from '../../../../../store/dataSlice'

type TopChartItemProps = {
    name: string
    revenue: number
}

const TopChartItem: React.FC<TopChartItemProps> = ({ name, revenue }) => {
    const totalRevenue = useAppSelector(totalRevenueSelector)
    return (
        <div className="grid h-8 grid-cols-5 p-2 text-xs transition-colors duration-200 rounded cursor-default hover:bg-white/5">
            <p className="inline-block col-span-2 pr-2 truncate border-r border-r-stone-600">
                {name}
            </p>
            <p className="inline-block col-span-2 text-center border-r border-r-stone-600">
                {currencyFormatter(revenue)}
            </p>
            <p className="inline-block text-end">
                {Number.parseFloat(
                    String((revenue / totalRevenue!) * 100)
                ).toFixed(2)}
                %
            </p>
        </div>
    )
}

export default TopChartItem
