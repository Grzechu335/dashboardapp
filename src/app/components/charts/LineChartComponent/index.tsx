import { LineChart, Text } from '@tremor/react'
import React from 'react'
import { useAppSelector } from '../../../../../store/store'
import {
    isLoadingSelector,
    yearlyRevenuesSelector,
} from '../../../../../store/dataSlice'
import { AiOutlineLineChart as ChartIcon } from 'react-icons/ai'
import currencyFormatter from '../../../../../utils/currencyFormatter'
import LoadingSpinner from '../../atoms/LoadingSpinner'

const LineChartComponent = () => {
    const yearlyRevenues = useAppSelector(yearlyRevenuesSelector)
    const isLoading = useAppSelector(isLoadingSelector)
    const maxValueOnChart = Math.max(
        ...yearlyRevenues.map((item) => item.revenue)
    )
    const minValueOnChart = Math.min(
        ...yearlyRevenues.map((item) => item.revenue)
    )
    const avgValueOnChart =
        yearlyRevenues.reduce((acc, cur) => (acc += Number(cur.revenue)), 0) /
        yearlyRevenues.length
    return (
        <div className="flex flex-col row-span-1 md:col-span-4 card h-[400px] md:h-auto">
            <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                    <Text className="text-base text-center uppercase  tracking-[2px]">
                        Yearly revenue
                    </Text>
                    <ChartIcon
                        size={22}
                        className="relative bottom-[2px]"
                    />
                </div>
                <div className="items-center text-[10px] hidden space-x-6 text-sm text-center md:flex">
                    <p className="block text-green-600 uppercase tracking-[1.2px]">
                        Max revenue <br />{' '}
                        {isLoading ? (
                            <span>Loading...</span>
                        ) : (
                            <span className="font-bold tracking-normal">
                                {currencyFormatter(maxValueOnChart)}
                            </span>
                        )}
                    </p>
                    <p className="block text-yellow-600 uppercase tracking-[1.2px]">
                        Avg revenue <br />{' '}
                        {isLoading ? (
                            <span>Loading...</span>
                        ) : (
                            <span className="font-bold tracking-normal">
                                {currencyFormatter(avgValueOnChart)}
                            </span>
                        )}
                    </p>
                    <p className="block text-red-600 uppercase tracking-[1.2px]">
                        Min revenue <br />{' '}
                        {isLoading ? (
                            <span>Loading...</span>
                        ) : (
                            <span className="font-bold tracking-normal">
                                {currencyFormatter(minValueOnChart)}
                            </span>
                        )}
                    </p>
                </div>
            </div>
            <div className="flex-grow px-2">
                <LineChart
                    className="p-2 md:w-full md:h-full"
                    maxValue={maxValueOnChart}
                    data={yearlyRevenues}
                    index="month"
                    valueFormatter={(value) => `${value} $`}
                    categories={['revenue']}
                    showLegend={false}
                    curveType="monotone"
                    noDataText="Loading..."
                />
            </div>
        </div>
    )
}

export default LineChartComponent
