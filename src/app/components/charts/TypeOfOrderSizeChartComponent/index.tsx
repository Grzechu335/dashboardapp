'use client'
import { DonutChart, Text } from '@tremor/react'
import React from 'react'
import { useAppSelector } from '../../../../../store/store'
import { orderSizesSelector } from '../../../../../store/dataSlice'

const TypeOfOrderSizeChartComponent = () => {
    const orderSizes = useAppSelector(orderSizesSelector)

    return (
        <div className="flex flex-col items-center w-full h-full col-span-1 row-span-1 space-y-2 card">
            <div className="flex items-center justify-center space-x-4">
                <Text className="text-base text-center uppercase  tracking-[2px]">
                    Type of Order Size
                </Text>
            </div>
            <DonutChart
                className="flex-grow"
                data={orderSizes}
                index="size"
                category="count"
            />
        </div>
    )
}

export default TypeOfOrderSizeChartComponent
