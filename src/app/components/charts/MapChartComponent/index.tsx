'use client'
import { Text } from '@tremor/react'
import React from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import { BsGlobe as GlobeIcon } from 'react-icons/bs'
import { useAppSelector } from '../../../../../store/store'
import {
    countriesRevenuesSelector,
    totalQuantitySelector,
    totalRevenueSelector,
} from '../../../../../store/dataSlice'
import currencyFormatter from '../../../../../utils/currencyFormatter'
import { RiMoneyDollarCircleLine as DollarIcon } from 'react-icons/ri'
import { FiPackage as PackageIcon } from 'react-icons/fi'

const MapChartComponent = () => {
    const countriesRevenues = useAppSelector(countriesRevenuesSelector)
    const totalRevenue = useAppSelector(totalRevenueSelector)
    const totalQuantity = useAppSelector(totalQuantitySelector)
    return (
        <div className="flex flex-col row-span-1 p-2 xl:overflow-hidden md:col-span-4 card">
            <div className="flex items-center justify-center mb-6 space-x-4">
                <Text className="text-base text-center uppercase  tracking-[2px]">
                    Global Distribution
                </Text>
                <GlobeIcon
                    size={22}
                    className="relative bottom-[2px]"
                />
            </div>
            <div className="flex items-center justify-start w-full h-full">
                <div className="flex flex-col items-center w-full space-y-8 text-center xl:text-start xl:w-fit">
                    <div className="flex-col items-center justify-center w-full space-y-2">
                        <div className="flex items-center justify-center space-x-4">
                            <Text className="uppercase tracking-[1.2px]  whitespace-nowrap">
                                Total Revenue
                            </Text>
                            <DollarIcon size={20} />
                        </div>
                        <p>{currencyFormatter(totalRevenue)}</p>
                    </div>
                    <div className="flex-col items-center justify-center w-full space-y-2">
                        <div className="flex items-center justify-center space-x-4">
                            <Text className="uppercase tracking-[1.2px] whitespace-nowrap">
                                Total Quantity
                            </Text>
                            <PackageIcon size={20} />
                        </div>
                        <p> {totalQuantity}</p>
                    </div>
                </div>
                <ComposableMap className="hidden w-full h-full xl:block">
                    <Geographies geography="map.json">
                        {({ geographies }) =>
                            geographies.map((geo) => {
                                const data = countriesRevenues?.find(
                                    (c) => c.country === geo.properties.name
                                )
                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill={data ? '#f97315' : ''}
                                    />
                                )
                            })
                        }
                    </Geographies>
                </ComposableMap>
            </div>
        </div>
    )
}

export default MapChartComponent
