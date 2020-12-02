export const maximizeVariety = (prices: number[], budget: number) => {
  const sortedPrices = Array.from(prices).sort((a, b) => a - b)
  let count = 0
  const newPrices = sortedPrices.reduce((group: number[], price: number) => {
    count = count + price

    if (count <= budget) {
      const index: number = prices.findIndex((num: number) => num === price)

      group.push(index)
    }

    return group
  }, [])

  return newPrices
}
