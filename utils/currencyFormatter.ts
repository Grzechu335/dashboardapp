const currencyFormatter = (num: number | undefined) => {
    if (typeof num === 'undefined') return
    return num.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    })
}

export default currencyFormatter
