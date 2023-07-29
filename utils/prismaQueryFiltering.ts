import { FiltersParams } from '../types/filtersFunctionParam'
import { Months } from '../types/monthsEnum'

const prismaQueryFiltering = (
    filters: FiltersParams,
    params?: { years?: boolean; months?: boolean; products?: boolean }
) => {
    const { activeMonthFilters, activeProductFilters, activeYearFilters } =
        filters
    let whereClause = {} as any
    if (
        activeYearFilters.length > 0 &&
        activeMonthFilters.length > 0 &&
        activeProductFilters.length > 0
    ) {
        if (typeof params === 'undefined') {
            whereClause.Order_year = {
                in: activeYearFilters,
            }
            whereClause.Order_month = {
                in: activeMonthFilters.map((month) => Months[Number(month)]),
            }
            whereClause.Product = {
                in: activeProductFilters,
            }
        } else {
            const { months, products, years } = params
            years &&
                (whereClause.Order_year = {
                    in: activeYearFilters,
                })
            months &&
                (whereClause.Order_month = {
                    in: activeMonthFilters.map(
                        (month) => Months[Number(month)]
                    ),
                })
            products &&
                (whereClause.Product = {
                    in: activeProductFilters,
                })
        }
    }
    return whereClause
}

export default prismaQueryFiltering
