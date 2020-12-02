export const maximizeVariety = (prices, budget) => {

  const sortedPrices = Array.from(prices).sort((a,b) => a-b);
  let count = 0;
  const newPrices = sortedPrices.reduce( (group, price) => {
    count = count + price;

    if( count <= budget ){
      const index = prices.findIndex( num => num === price)
      group.push(index)
    }
    return group    
  }, [] );
  
  return newPrices
} 