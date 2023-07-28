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
        <div className="flex-col justify-between hidden col-span-1 row-span-1 card xl:flex">
            <div className="flex items-center justify-center space-x-4">
                <Text className="text-base text-center uppercase  tracking-[2px]">
                    Annual Revenue Comparison
                </Text>
            </div>
            <ResponsiveContainer className="!text-xs">
                <RadarChart
                    outerRadius={50}
                    data={revenueComparison}
                >
                    <PolarGrid opacity={0.1} />
                    <PolarAngleAxis
                        dataKey="year"
                        className="text-xs"
                    />
                    <Radar
                        dataKey="revenue"
                        stroke="#e722ff"
                        fillOpacity={0}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AnnualRevenueComparisonChartComponent
