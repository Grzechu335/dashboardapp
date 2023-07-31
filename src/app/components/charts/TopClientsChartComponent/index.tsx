'use client'
import { Text } from '@tremor/react'
import {
    isLoadingSelector,
    topClientsSelector,
} from '../../../../../store/dataSlice'
import { useAppSelector } from '../../../../../store/store'
import TopChartItem from '../../atoms/TopChartItem'
import { HiUserGroup as PeopleIcon } from 'react-icons/hi'
import LoadingSpinner from '../../atoms/LoadingSpinner'

const TopClientsChartComponent = () => {
    const topClients = useAppSelector(topClientsSelector)
    const isLoading = useAppSelector(isLoadingSelector)
    return (
        <div className="xl:row-span-1 xl:col-span-2 card col-span-full">
            <div className="flex items-center justify-center space-x-4 mb-14">
                <Text className="text-base text-center uppercase  tracking-[2px]">
                    Top 5 Clients
                </Text>
                <PeopleIcon
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
                    {topClients?.map((client) => (
                        <TopChartItem
                            key={client.name}
                            name={client.name}
                            revenue={client.revenue}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default TopClientsChartComponent
