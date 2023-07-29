'use client'
import { AnimatePresence, motion as m } from 'framer-motion'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../store/store'
import { filtersStatusSelector } from '../../../../store/UISlice'
import { MultiSelect, MultiSelectItem, Select, SelectItem } from '@tremor/react'
import {
    changeActiveMonthFilter,
    changeActiveYearFilter,
    activeMonthFiltersSelector,
    activeYearFiltersSelector,
    allYearsSelector,
    activeProductFiltersSelector,
    allProductsSelector,
    changeActiveProductFilter,
} from '../../../../store/filterSlice'
import { months } from '../../../../utils/filters'

const Filters = () => {
    const filerStatus = useAppSelector(filtersStatusSelector)
    const activeMonthFilters = useAppSelector(activeMonthFiltersSelector)
    const activeYearFilters = useAppSelector(activeYearFiltersSelector)
    const activeProductFilters = useAppSelector(activeProductFiltersSelector)
    const allProducts = useAppSelector(allProductsSelector)
    const allYears = useAppSelector(allYearsSelector)
    const dispatch = useAppDispatch()
    return (
        <AnimatePresence>
            {filerStatus && (
                <m.aside
                    initial={{
                        x: -500,
                    }}
                    animate={{
                        x: 0,
                    }}
                    exit={{
                        x: -500,
                    }}
                    transition={{
                        duration: 0.5,
                    }}
                    className="fixed left-0 top-0 w-[400px] h-screen bg-zinc-700 z-[900] rounded-r-tremor-default"
                >
                    <div className="xl:ml-[100px] p-3 space-y-6">
                        {/* Month filters ==================== */}
                        <MultiSelect
                            value={activeMonthFilters}
                            onValueChange={(value) =>
                                dispatch(changeActiveMonthFilter(value))
                            }
                        >
                            {months.map((item) => (
                                <MultiSelectItem
                                    key={item.month}
                                    value={String(item.value)}
                                >
                                    {item.month}
                                </MultiSelectItem>
                            ))}
                        </MultiSelect>
                        {/* Year filters========================= */}
                        <MultiSelect
                            value={activeYearFilters}
                            onValueChange={(value) =>
                                dispatch(changeActiveYearFilter(value))
                            }
                        >
                            {allYears.map((item) => (
                                <MultiSelectItem
                                    key={item}
                                    value={item}
                                >
                                    {item}
                                </MultiSelectItem>
                            ))}
                        </MultiSelect>
                        {/* Product filter ======================= */}
                        <MultiSelect
                            value={activeProductFilters}
                            onValueChange={(value) =>
                                dispatch(changeActiveProductFilter(value))
                            }
                        >
                            {allProducts.map((item) => (
                                <MultiSelectItem
                                    key={item}
                                    value={item}
                                >
                                    {item}
                                </MultiSelectItem>
                            ))}
                        </MultiSelect>
                    </div>
                </m.aside>
            )}
        </AnimatePresence>
    )
}

export default Filters
