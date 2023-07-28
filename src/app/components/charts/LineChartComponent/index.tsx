import { LineChart, Text } from '@tremor/react'
import React from 'react'
import { useAppSelector } from '../../../../../store/store'
import { yearlyRevenuesSelector } from '../../../../../store/dataSlice'
import { AiOutlineLineChart as ChartIcon } from 'react-icons/ai'

const LineChartComponent = () => {
    const yearlyRevenues = useAppSelector(yearlyRevenuesSelector)

    return (
        <div className="flex flex-col row-span-1 md:col-span-4 card">
            <div className="flex items-center justify-center mb-12 space-x-4">
                <Text className="text-base text-center uppercase  tracking-[2px]">
                    Yearly revenue
                </Text>
                <ChartIcon
                    size={22}
                    className="relative bottom-[2px]"
                />
            </div>
            <div className="flex-grow">
                <LineChart
                    data={yearlyRevenues}
                    index="month"
                    categories={['revenue']}
                    showLegend={false}
                />
            </div>
        </div>
    )
}

export default LineChartComponent
