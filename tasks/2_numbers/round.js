/**
 * Rounds the `value` to the desired number of decimal places.
 *
 * @param decimals Number of decimal places to round
 */
export const round = (value, decimals) => {
  return +( Math.round( value + "e+" + decimals) + "e-" + decimals)
}
