'use client'
import { Text } from '@tremor/react'
import React from 'react'
import {
    PolarAngleAxis,
    PolarGrid,
    Radar,
    RadarChart,
    ResponsiveContainer,
} from 'recharts'
import { useAppSelector } from '../../../../../store/store'
import { revenuesComparisonSelector } from '../../../../../store/dataSlice'

type Props = {}

const AnnualRevenueComparisonChartComponent = (props: Props) => {
    const revenueComparison = useAppSelector(revenuesComparisonSelector)

    return (
        <div className="flex-col hidden w-full h-full col-span-1 row-span-1 card xl:flex">
            <ResponsiveContainer className="!text-xs w-full h-full">
                <RadarChart data={revenueComparison}>
                    <PolarGrid opacity={0.1} />
                    <PolarAngleAxis dataKey="year" />
                    <Radar
                        dataKey="revenue"
                        stroke="#e722ff"
                        fillOpacity={0}
                        fontSize={12}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AnnualRevenueComparisonChartComponent
