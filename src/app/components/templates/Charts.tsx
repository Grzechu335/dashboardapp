'use client'
import { mapStatusSelector } from '../../../../store/UISlice'
import { useAppSelector } from '../../../../store/store'
import BarChartComponent from '../charts/BarChartComponent'
import LineChartComponent from '../charts/LineChartComponent'
import MapChartComponent from '../charts/MapChartComponent'
import RestChartsComponent from '../charts/RestChartsComponent'
import TopClientsChartComponent from '../charts/TopClientsChartComponent'
import TopCountriesChartComponent from '../charts/TopCountriesChartComponent'

const Charts = () => {
    const mapStatus = useAppSelector(mapStatusSelector)
    return (
        <section className="w-full h-full">
            <div className="flex flex-col w-full h-full gap-4 xl:grid xl:grid-cols-8 xl:grid-rows-2">
                <TopClientsChartComponent />
                <TopCountriesChartComponent />
                <BarChartComponent />
                <LineChartComponent />
                {mapStatus ? <MapChartComponent /> : <RestChartsComponent />}
            </div>
        </section>
    )
}

export default Charts
