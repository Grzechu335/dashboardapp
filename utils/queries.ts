import { prisma } from '../prisma/prismaClient'
import { FiltersParams } from '../types/filtersFunctionParam'
import monthsInOrder from './monthsInOrder'
import prismaQueryFiltering from './prismaQueryFiltering'
import { PrismaClient, Prisma } from '@prisma/client'

export const getTopClients = async (filters: FiltersParams) => {
    const whereClause = prismaQueryFiltering(filters)
    return await prisma.order.groupBy({
        by: ['Client_s_name'],
        where: whereClause,
        _sum: {
            Total: true,
        },
        orderBy: {
            _sum: {
                Total: 'desc',
            },
        },
        take: 5,
    })
}

export const getTopCountries = async (filters: FiltersParams) => {
    const whereClause = prismaQueryFiltering(filters)
    return await prisma.order.groupBy({
        by: ['Country'],
        where: whereClause,
        _sum: {
            Total: true,
        },
        orderBy: {
            _sum: {
                Total: 'desc',
            },
        },
        take: 5,
    })
}

export const getProductsQuantity = async (filters: FiltersParams) => {
    const whereClause = prismaQueryFiltering(filters, {
        months: true,
        years: true,
    })
    return await prisma.order.groupBy({
        by: ['Product'],
        where: whereClause,
        _sum: {
            Quantity: true,
        },
        orderBy: {
            _sum: {
                Quantity: 'desc',
            },
        },
    })
}

export const getYearlyRevenues = async (filters: FiltersParams) => {
    const whereClause = prismaQueryFiltering(filters, {
        products: true,
        years: true,
    })
    const yearlyRevenues = await prisma.order.groupBy({
        by: ['Order_month'],
        _sum: {
            Total: true,
        },
        where: whereClause,
        orderBy: {
            Order_month: 'asc',
        },
    })
    const transformData = (data: any) => {
        const dataByMonth: any = {}
        data.forEach((item: any) => {
            dataByMonth[item.Order_month] = item._sum.Total
        })

        const transformedData = monthsInOrder.map((month) => ({
            _sum: {
                Total: dataByMonth[month] || '0.00',
            },
            Order_month: month,
        }))

        return transformedData
    }
    return transformData(yearlyRevenues).map((item) => ({
        month: item.Order_month,
        revenue: item._sum.Total,
    }))
}

export const getCountriesRevenues = async (filters: FiltersParams) => {
    const whereClause = prismaQueryFiltering(filters)
    return await prisma.order.groupBy({
        by: ['Country'],
        where: whereClause,
        _sum: {
            Total: true,
        },
        orderBy: {
            _sum: {
                Total: 'desc',
            },
        },
    })
}

export const getTotalRevenue = async (filters: FiltersParams) => {
    const whereClause = prismaQueryFiltering(filters)
    return await prisma.order.aggregate({
        _sum: {
            Total: true,
        },
        where: whereClause,
    })
}

export const getTotalQuantity = async (filters: FiltersParams) => {
    const whereClause = prismaQueryFiltering(filters)
    return await prisma.order.aggregate({
        _sum: {
            Quantity: true,
        },
        where: whereClause,
    })
}

export const getAllProducts = async () => {
    return await prisma.order.findMany({
        distinct: 'Product',
        select: {
            Product: true,
        },
    })
}

export const getAllYears = async () => {
    return await prisma.order.findMany({
        distinct: 'Order_year',
        select: {
            Order_year: true,
        },
    })
}

export const getOrderSizes = async (filters: FiltersParams) => {
    const whereClause = prismaQueryFiltering(filters)
    return await prisma.order.groupBy({
        by: ['Order_Size'],
        where: whereClause,
        _count: {
            Order_Size: true,
        },
    })
}

export const getOrderStatuses = async (filters: FiltersParams) => {
    const whereClause = prismaQueryFiltering(filters)
    return await prisma.order.groupBy({
        by: ['Order_status'],
        where: whereClause,
        _count: {
            Order_status: true,
        },
        orderBy: {
            _count: {
                Order_status: 'asc',
            },
        },
    })
}

export const getRevenuesComparison = async () => {
    return await prisma.order.groupBy({
        by: ['Order_year'],
        _sum: {
            Total: true,
        },
        orderBy: {
            Order_year: 'asc',
        },
    })
}
