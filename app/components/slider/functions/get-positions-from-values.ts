import { SliderRange } from '../slider.interface'
import { getPositionFromValue } from './get-position-from-value'

export const getPositionsFromValues = (values: SliderRange, minValue: number, maxValue: number, clientRect: ClientRect | null) => ({
  min: getPositionFromValue(values.min, minValue, maxValue, clientRect),
  max: getPositionFromValue(values.max, minValue, maxValue, clientRect)
})
