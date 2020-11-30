import { SliderProps, SliderRange } from '../slider.interface'
// Converts the props into a range value
export const getValueFromProps = (props: SliderProps, isMultiValue: boolean) => {
  if (isMultiValue && 'object' === typeof props.value) {
    return { ...props.value } as SliderRange
  }

  return {
    min: props.min,
    max: props.value as number
  }
}
