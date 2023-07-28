import { NextResponse } from 'next/server'
import {
    getCountriesRevenues,
    getOrderSizes,
    getOrderStatuses,
    getProductsQuantity,
    getRevenuesComparison,
    getTopClients,
    getTopCountries,
    getTotalQuantity,
    getTotalRevenue,
    getYearlyRevenues,
} from '../../../../utils/queries'
import { prisma } from '../../../../prisma/prismaClient'

export async function POST(req: Request) {
    try {
        const topClients = (await getTopClients()).map((client) => ({
            name: client.Client_s_name,
            revenue: Number(client._sum.Total),
        }))
        const topCountries = (await getTopCountries()).map((country) => ({
            country: country.Country,
            revenue: Number(country._sum.Total),
        }))
        const products = (await getProductsQuantity()).map((product) => ({
            product: product.Product,
            quantity: Number(product._sum.Quantity),
        }))

        const yearlyRevenues = await getYearlyRevenues()
        const countriesRevenues = (await getCountriesRevenues()).map(
            (country) => ({
                country: country.Country,
                revenue: Number(country._sum.Total),
            })
        )
        const totalRevenue = await getTotalRevenue().then((res) => {
            return Number(Object.entries(res)[0][1].Total)
        })

        const totalQuantity = await getTotalQuantity().then((res) => {
            return Number(Object.entries(res)[0][1].Quantity)
        })

        const orderSizes = await getOrderSizes().then((res) =>
            res.map((size) => ({
                size: size.Order_Size,
                count: size._count.Order_Size,
            }))
        )

        const orderStatuses = await getOrderStatuses().then((res) =>
            res.map((status) => ({
                status: status.Order_status,
                count: status._count.Order_status,
            }))
        )

        const revenuesComparison = await getRevenuesComparison().then((res) =>
            res.map((year) => ({
                year: Number(year.Order_year),
                revenue: Number(year._sum.Total),
            }))
        )
        return NextResponse.json({
            topClients,
            topCountries,
            products,
            yearlyRevenues,
            countriesRevenues,
            totalRevenue,
            totalQuantity,
            orderSizes,
            orderStatuses,
            revenuesComparison,
        })
    } catch (err) {
        console.log(err)
        return NextResponse.json(
            {},
            { status: 400, statusText: 'Something went wrong' }
        )
    }
}
