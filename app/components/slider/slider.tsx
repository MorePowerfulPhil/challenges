import React, { useRef, useState } from 'react'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { SliderNode } from '../../../tasks/4_refactor/slider-node'
import {
  getPercentagesFromValues,
  getPositionFromEvent,
  getPositionsFromValues,
  getStepValueFromValue,
  getValueFromPosition,
  getValueFromProps,
  length
} from './functions'
import { MoveEvent, SliderProps, SliderRange } from './slider.interface'
import css from './slider.less'

const PERCENTAGE_MULTIPLIER = 100

export const Slider = (props: SliderProps) => {
  const parentRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  const [lastKeyMoved, setLastKeyMoved] = useState<string | null>(null)

  const isMultiValue = () => props.value !== null && typeof props.value === 'object'

  const getKeys = () => (isMultiValue() ? ['min', 'max'] : ['max'])

  const getTrackClientRect = () => trackRef.current && trackRef.current.getBoundingClientRect()

  const isWithinSliderRange = (values: SliderRange) => {
    if (isMultiValue()) {
      return values.min >= props.min && values.max <= props.max && props.allowSameValues
        ? values.min <= values.max
        : values.min < values.max
    }

    return values.max >= props.min && values.max <= props.max
  }

  const hasStepDifference = (values: SliderRange) => {
    const currentValues = getValueFromProps(props, isMultiValue())

    return length(values.min, currentValues.min) >= props.step || length(values.max, currentValues.max) >= props.step
  }

  const shouldUpdate = (values: SliderRange) => isWithinSliderRange(values) && hasStepDifference(values)

  const updateValues = (values: SliderRange) => {
    if (!shouldUpdate(values)) {
      return
    }

    props.onChange(isMultiValue() ? values : values.max)
  }

  const updatePositions = (positions: SliderRange) => {
    const values = {
      min: getValueFromPosition(positions.min, props.min, props.max, getTrackClientRect()),
      max: getValueFromPosition(positions.max, props.min, props.max, getTrackClientRect())
    }

    const transformedValues = {
      min: getStepValueFromValue(values.min, props.step),
      max: getStepValueFromValue(values.max, props.step)
    }

    updateValues(transformedValues)
  }

  const updatePosition = (key: string, position: number) => {
    const values = getValueFromProps(props, isMultiValue())
    const positions = getPositionsFromValues(values, props.min, props.max, getTrackClientRect())

    positions[key] = position
    setLastKeyMoved(key)
    updatePositions(positions)
  }

  const handleNodeDrag = (event: MoveEvent, key: string) => {
    if (props.disabled) {
      return
    }

    const position = getPositionFromEvent(event, getTrackClientRect())

    requestAnimationFrame(() => updatePosition(key, position))
  }

  const renderSliderNodes = () => {
    const values = getValueFromProps(props, isMultiValue())
    const percentages = getPercentagesFromValues(values, props.min, props.max)
    const keys = props.allowSameValues && lastKeyMoved === 'min' ? getKeys().reverse() : getKeys()

    return keys.map((key: string) => {
      const value = values[key]
      const percentage = percentages[key]

      let { min, max } = props

      if (key === 'min') {
        max = values.max
      } else {
        min = values.min
      }

      return (
        <SliderNode
          key={key}
          min={min}
          max={max}
          label={`${value}${value === max ? '+' : ''} cal`}
          percentage={percentage}
          onDrag={handleNodeDrag}
          type={key}
        />
      )
    })
  }

  const values = getValueFromProps(props, isMultiValue())

  const percentages = getPercentagesFromValues(values, props.min, props.max)

  const activeTrackStyle = {
    width: `${(percentages.max - percentages.min) * PERCENTAGE_MULTIPLIER}%`,
    left: `${percentages.min * PERCENTAGE_MULTIPLIER}%`
  }

  return (
    <div data-testid={props.testID} className={css.wrapper} ref={parentRef}>
      <div data-testid={`${props.testID}.track`} ref={trackRef} className={css.track}>
        <div data-testid={`${props.testID}.inner`} className={css.inner}>
          <div data-testid={`${props.testID}.range`} className={css.range} style={activeTrackStyle} />
          {renderSliderNodes()}
        </div>
      </div>
    </div>
  )
}
