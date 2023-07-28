'use client'

import AnnualRevenueComparisonChartComponent from '../AnnualRevenueComparisonChartComponent'
import OrderStatusesChartComponent from '../OrderStatusesChartComponent'
import TypeOfOrderSizeChartComponent from '../TypeOfOrderSizeChartComponent'

const RestChartsComponent = () => {
    return (
        <div className="flex flex-col row-span-1 xl:col-span-4">
            <div className="flex flex-col w-full h-full grid-cols-2 grid-rows-2 gap-4 xl:grid">
                <TypeOfOrderSizeChartComponent />
                <AnnualRevenueComparisonChartComponent />
                <OrderStatusesChartComponent />
            </div>
        </div>
    )
}

export default RestChartsComponent
