import { getPercentageFromValue } from './get-percentage-from-value'

export const getPositionFromValue = (value: number, minValue: number, maxValue: number, clientRect: ClientRect | null) => {
  const width = (clientRect && clientRect.width) || 0
  const valuePercentage = getPercentageFromValue(value, minValue, maxValue)

  return valuePercentage * width
}
