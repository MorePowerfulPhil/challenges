import { clamp } from '../../../../tasks/1_warmup/clamp'

export const getPercentageFromValue = (value: number, min: number, max: number) => {
  const clampedValue = clamp(value, min, max)
  const valueDifference = max - min
  const valuePercentage = (clampedValue - min) / valueDifference

  return valuePercentage || 0
}
