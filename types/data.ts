export interface DataResponse {
    topClients: TopClient[]
    topCountries: CountriesRevenue[]
    products: Product[]
    yearlyRevenues: YearlyRevenue[]
    countriesRevenues: CountriesRevenue[]
    totalRevenue: number | undefined
    totalQuantity: number | undefined
    orderSizes: OrderSize[]
    orderStatuses: OrderStatus[]
    revenuesComparison: RevenuesComparison[]
}

export interface CountriesRevenue {
    country: string
    revenue: number
}

export interface Product {
    product: string
    quantity: number
}

export interface TopClient {
    name: string
    revenue: number
}

export interface YearlyRevenue {
    month: string
    revenue: string
}

export interface OrderSize {
    size: string
    count: number
}

export interface OrderStatus {
    status: 'Supplied' | 'Canceled' | 'Sent' | 'Waiting for payment'
    count: number
}

export interface RevenuesComparison {
    year: number
    revenue: number
}
