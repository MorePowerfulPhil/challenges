export const round = (value: number, decimals: number) => +(Math.round(Number(value + 'e+' + decimals)) + 'e-' + decimals)
