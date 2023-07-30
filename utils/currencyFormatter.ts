const currencyFormatter = (num?: number) => {
    return num?.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    })
}

export default currencyFormatter
