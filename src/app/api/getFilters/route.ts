import { NextResponse } from 'next/server'
import { getAllProducts, getAllYears } from '../../../../utils/queries'

export async function GET() {
    try {
        const allProducts = await getAllProducts().then((res) =>
            res.map((item) => item.Product)
        )
        const allYears = await getAllYears().then((res) =>
            res.map((item) => String(item.Order_year))
        )
        return NextResponse.json({ allProducts, allYears })
    } catch (err) {
        console.log(err)
        return NextResponse.json(
            {},
            { status: 400, statusText: 'Something went wrong' }
        )
    }
}
