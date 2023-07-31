'use client'
import { DonutChart, Text } from '@tremor/react'
import React from 'react'
import { useAppSelector } from '../../../../../store/store'
import { orderStatusesSelector } from '../../../../../store/dataSlice'

type Props = {}

const OrderStatusesChartComponent = (props: Props) => {
    const orderStatuses = useAppSelector(orderStatusesSelector)

    return (
        <div className="flex flex-col items-center col-span-2 row-span-1 card">
            <div className="flex items-center justify-center mb-4 space-x-4">
                <Text className="text-base text-center uppercase  tracking-[2px]">
                    Order Statuses
                </Text>
            </div>
            <div className="flex flex-grow w-full justify-evenly">
                {orderStatuses.map((status, idx) => {
                    let color: 'green' | 'red' | 'orange' | 'lime' | 'sky' =
                        'green'
                    if (status.status === 'Canceled') color = 'red'
                    else if (status.status === 'Waiting for payment')
                        color = 'orange'
                    else if (status.status === 'Sent') color = 'sky'
                    else color = 'lime'
                    return (
                        <React.Fragment key={status.status}>
                            <div className="flex flex-col items-center w-full h-full">
                                <DonutChart
                                    className="w-full h-full pb-2"
                                    data={[status]}
                                    category="count"
                                    index="status"
                                    colors={[color]}
                                />
                                <Text className="text-xs text-center">
                                    {status.status}
                                </Text>
                            </div>
                            {idx !== orderStatuses.length - 1 && (
                                <span className="bg-zinc-700 w-[1px] h-[70%] my-auto" />
                            )}
                        </React.Fragment>
                    )
                })}
            </div>
        </div>
    )
}

export default OrderStatusesChartComponent
