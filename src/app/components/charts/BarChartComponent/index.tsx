'use client'
import React from 'react'
import { useAppSelector } from '../../../../../store/store'
import {
    isLoadingSelector,
    productsSelector,
} from '../../../../../store/dataSlice'
import { BarChart, Text } from '@tremor/react'
import { TfiCar as CarIcon } from 'react-icons/tfi'
import LoadingSpinner from '../../atoms/LoadingSpinner'

const BarChartComponent: React.FC = () => {
    const products = useAppSelector(productsSelector)
    return (
        <div className="flex flex-col row-span-1 md:col-span-4 card">
            <div className="flex items-center justify-center mb-12 space-x-4">
                <Text className="text-base text-center uppercase  tracking-[2px]">
                    Number of products sold in a given period of time
                </Text>
                <CarIcon
                    size={22}
                    className="relative bottom-[2px] flex-shrink-0"
                />
            </div>
            <BarChart
                className="flex-grow"
                categories={['quantity']}
                index="product"
                colors={['orange']}
                showLegend={false}
                layout="vertical"
                data={products}
                noDataText="Loading..."
            />
        </div>
    )
}

export default BarChartComponent
