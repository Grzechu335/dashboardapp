'use client'
import { DonutChart, Text } from '@tremor/react'
import React from 'react'
import { useAppSelector } from '../../../../../store/store'
import { orderStatusesSelector } from '../../../../../store/dataSlice'
import classNames from 'classnames'

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
            <div className="flex flex-col flex-grow w-full space-y-4 md:space-y-0 md:flex-row justify-evenly">
                {orderStatuses.map((status, idx) => {
                    let color: string = 'text-yellow-600'
                    if (status.status === 'Canceled') color = 'text-red-600'
                    else if (status.status === 'Waiting for payment')
                        color = 'text-orange-600'
                    else if (status.status === 'Sent') color = 'text-sky-600'
                    else color = 'text-green-600'
                    return (
                        <React.Fragment key={status.status}>
                            <div
                                className={classNames(
                                    'flex flex-col items-center justify-center w-full h-full',
                                    `${color}`
                                )}
                            >
                                <p className="mb-2 font-bold">{status.count}</p>
                                <p className="text-sm text-center">
                                    <span> {status.status}</span>
                                </p>
                            </div>
                            {idx !== orderStatuses.length - 1 && (
                                <span className="bg-zinc-600 md:w-[1px] mx-auto h-[2px] w-[70%] md:h-[70%] md:my-auto" />
                            )}
                        </React.Fragment>
                    )
                })}
            </div>
        </div>
    )
}

export default OrderStatusesChartComponent
