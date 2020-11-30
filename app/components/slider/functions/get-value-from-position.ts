import { getPercentageFromPosition } from './get-percentage-from-position'

export const getValueFromPosition = (position: number, minValue: number, maxValue: number, clientRect: ClientRect | null) => {
  if (!clientRect) {
    return 0
  }
  const sizePercentage = getPercentageFromPosition(position, clientRect)
  const valueDiff = maxValue - minValue

  return minValue + valueDiff * sizePercentage
}
