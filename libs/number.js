export const formatNumber = (number) => {
    return Intl.NumberFormat('en-US').format(number?.toFixed(2))
}