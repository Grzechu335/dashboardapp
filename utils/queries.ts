import { prisma } from '../prisma/prismaClient'

export const getTopClients = async () => {
    return await prisma.order.groupBy({
        by: ['Client_s_name'],
        where: {
            Order_year: 2015,
        },
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

export const getTopCountries = async () => {
    return await prisma.order.groupBy({
        by: ['Country'],
        where: {
            Order_year: 2015,
        },
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

export const getProductsQuantity = async () => {
    return await prisma.order.groupBy({
        by: ['Product'],
        where: {
            Order_year: 2015,
        },
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

export const getYearlyRevenues = async () => {
    return await prisma.$queryRaw`
    SELECT EXTRACT(MONTH FROM "Order date") as month, SUM("Total") as revenue
    FROM "Order"
    WHERE EXTRACT(YEAR FROM "Order date") = 2016
    GROUP BY EXTRACT(MONTH FROM "Order date")
    ORDER BY month ASC;
  `
}

export const getCountriesRevenues = async () => {
    return await prisma.order.groupBy({
        by: ['Country'],
        where: {
            Order_year: 2015,
        },
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

export const getTotalRevenue = async () => {
    return await prisma.order.aggregate({
        _sum: {
            Total: true,
        },
        where: {
            Order_year: 2015,
        },
    })
}

export const getTotalQuantity = async () => {
    return await prisma.order.aggregate({
        _sum: {
            Quantity: true,
        },
        where: {
            Order_year: 2015,
        },
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

export const getOrderSizes = async () =>
    await prisma.order.groupBy({
        by: ['Order_Size'],
        where: {
            Order_year: 2015,
        },
        _count: {
            Order_Size: true,
        },
    })

export const getOrderStatuses = async () =>
    await prisma.order.groupBy({
        by: ['Order_status'],
        where: {
            Order_year: 2015,
        },
        _count: {
            Order_status: true,
        },
        orderBy: {
            _count: {
                Order_status: 'asc',
            },
        },
    })

export const getRevenuesComparison = async () =>
    await prisma.order.groupBy({
        by: ['Order_year'],
        _sum: {
            Total: true,
        },
        orderBy: {
            Order_year: 'asc',
        },
    })
