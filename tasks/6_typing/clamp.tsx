/**
 * Clamps a number between a specified minimum and maximum value,
 * effectively capping the output.
 *
 * @param value Value to clamp
 * @param min Minimum allowed value
 * @param max Maximum allowed value
 */

export const clamp = (value: number, min: number, max: number) => {
  const trueMin = min < max ? min : max
  const trueMax = max > min ? max : min

  if (value > trueMax) {
    return trueMax
  }

  if (value < trueMin) {
    return trueMin
  }

  return value
}
