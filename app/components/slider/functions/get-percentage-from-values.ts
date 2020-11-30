import { SliderRange } from '../slider.interface'
import { getPercentageFromValue } from './get-percentage-from-value'

export const getPercentagesFromValues = (values: SliderRange, min: number, max: number) => ({
  min: getPercentageFromValue(values.min, min, max),
  max: getPercentageFromValue(values.max, min, max)
})
