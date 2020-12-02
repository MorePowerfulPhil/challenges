import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'

import '../4_refactor/slider-node.scss'

interface ISliderNode {
  min?: number
  max?: number
  label: string
  percentage: number
  onDrag: (event: React.MouseEvent, key: string) => void
  type: string
  testID: string
}

export const SliderNode: React.FC<ISliderNode> = ({ label, percentage, onDrag, type, testID = '123' }: ISliderNode) => {
  const [mouseIsDown, setMouseIsDown] = useState(false)

  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sliderRef.current) {
      return
    }

    sliderRef.current.ownerDocument.addEventListener('mousemove', handleMouseMove)
    sliderRef.current.ownerDocument.addEventListener('mouseup', handleMouseUp)
    sliderRef.current.ownerDocument.addEventListener('mousedown', handleMouseDown)

    sliderRef.current.ownerDocument.addEventListener('touchmove', handleMouseMove)
    sliderRef.current.ownerDocument.addEventListener('touchend', handleMouseUp)
    sliderRef.current.ownerDocument.addEventListener('touchstart', handleMouseDown)

    return () => {
      if (!sliderRef.current) {
        return
      }
      sliderRef.current.ownerDocument.removeEventListener('mousemove', handleMouseMove)
      sliderRef.current.ownerDocument.removeEventListener('mouseup', handleMouseUp)
      sliderRef.current.ownerDocument.removeEventListener('mousedown', handleMouseDown)

      sliderRef.current.ownerDocument.removeEventListener('touchmove', handleMouseMove)
      sliderRef.current.ownerDocument.removeEventListener('touchend', handleMouseUp)
      sliderRef.current.ownerDocument.removeEventListener('touchstart', handleMouseDown)
    }
  }, [mouseIsDown])

  const handleMouseMove = (event) => {
    if (!mouseIsDown) {
      return
    }

    onDrag(event, type)
  }

  const handleMouseDown = () => {
    setMouseIsDown(true)
  }

  const handleMouseUp = () => {
    setMouseIsDown(false)
  }

  const getStyle = () => {
    const multiplier = 100
    const leftPercent = (percentage || 0) * multiplier

    return {
      left: `${leftPercent}%`
    }
  }

  const getLabelPosition = () => {
    const startPercent = 0.2
    const endPercent = 0.8

    return percentage <= startPercent ? 'left' : percentage < endPercent ? 'center' : 'right'
  }

  const style = getStyle()
  const labelClasses = classNames('slider-node__label', `slider-node__label--${getLabelPosition()}`)

  return (
    <>
      <div className='slider-node'>
        <div className='slider-node__label slider-node__label--center'>0 cal</div>
        <div className='slider-node__handle' />
      </div>
      <div className='slider-node' style={style} ref={sliderRef}>
        <div className={labelClasses}>{label}</div>
        <div data-testid={`${testID}.handle`} className='slider-node__handle' />
      </div>
    </>
  )
}
