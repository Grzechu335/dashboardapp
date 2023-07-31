import { Text } from '@tremor/react'
import React from 'react'
import { useAppSelector } from '../../../../../store/store'
import {
    isLoadingSelector,
    topCountriesSelector,
} from '../../../../../store/dataSlice'
import TopChartItem from '../../atoms/TopChartItem'
import { FaMapMarkedAlt as MapIcon } from 'react-icons/fa'
import LoadingSpinner from '../../atoms/LoadingSpinner'

const TopCountriesChartComponent = () => {
    const topCountries = useAppSelector(topCountriesSelector)
    const isLoading = useAppSelector(isLoadingSelector)

    return (
        <div className="col-span-full xl:row-span-1 xl:col-span-2 card">
            <div className="flex items-center justify-center space-x-4 mb-14">
                <Text className="text-base text-center uppercase  tracking-[2px]">
                    Top 5 Countries
                </Text>
                <MapIcon
                    size={24}
                    className="mx-auto"
                />
            </div>
            {isLoading ? (
                <div className="relative h-full bottom-14">
                    <LoadingSpinner />
                </div>
            ) : (
                <div className="space-y-4">
                    {topCountries?.map((country) => (
                        <TopChartItem
                            key={country.country}
                            name={country.country}
                            revenue={country.revenue}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default TopCountriesChartComponent
