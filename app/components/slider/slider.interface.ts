export interface SliderProps extends CommonProps {
  min: number
  max: number
  value: number | SliderRange
  onChange: (value: number | SliderRange) => void
  step: number
  fromLabel?: string
  toLabel?: string
  allowSameValues?: boolean
  disabled?: boolean
}

export interface SliderRange {
  min: number
  max: number
  [key: string]: number
}

export type MoveEvent = React.MouseEvent<HTMLDivElement> | MouseEvent | TouchEvent
