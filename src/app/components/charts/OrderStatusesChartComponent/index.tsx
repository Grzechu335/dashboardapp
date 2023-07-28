'use client'
import { DonutChart, Text } from '@tremor/react'
import React from 'react'
import { useAppSelector } from '../../../../../store/store'
import { orderStatusesSelector } from '../../../../../store/dataSlice'

type Props = {}

const OrderStatusesChartComponent = (props: Props) => {
    const orderStatuses = useAppSelector(orderStatusesSelector)

    return (
        <div className="flex flex-col items-center justify-between col-span-2 row-span-1 card">
            <div className="flex items-center justify-center space-x-4">
                <Text className="text-base text-center uppercase  tracking-[2px]">
                    Order Statuses
                </Text>
            </div>
            <div className="flex w-full justify-evenly">
                {orderStatuses.map((status, idx) => {
                    let color: 'green' | 'red' | 'orange' | 'lime' | 'sky' =
                        'green'
                    if (status.status === 'Canceled') color = 'red'
                    else if (status.status === 'Waiting for payment')
                        color = 'orange'
                    else if (status.status === 'Sent') color = 'sky'
                    else color = 'lime'
                    return (
                        <>
                            <div
                                key={status.status}
                                className="min-w-[60px] flex flex-col"
                            >
                                <DonutChart
                                    className="h-[100px]"
                                    data={[status]}
                                    category="count"
                                    index="status"
                                    colors={[color]}
                                />
                                <Text className="text-center">
                                    {status.status}
                                </Text>
                            </div>
                            {idx !== orderStatuses.length - 1 && (
                                <span className="bg-zinc-700 w-[1px] h-[60%] my-auto" />
                            )}
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default OrderStatusesChartComponent
