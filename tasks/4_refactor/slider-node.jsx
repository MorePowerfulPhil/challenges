import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import './slider-node.scss'

export const SliderNode = ({ min, max, label, percentage, onDrag, type, testID = "123"}) => {
  
  const [ mouseIsDown, setMouseIsDown ] = useState(false)

  const sliderRef = useRef(null)

  useEffect( () => {
    sliderRef.current.ownerDocument.addEventListener('mousemove', handleMouseMove)
    sliderRef.current.ownerDocument.addEventListener('mouseup', handleMouseUp)
    sliderRef.current.ownerDocument.addEventListener('mousedown', handleMouseDown) 
    
    sliderRef.current.ownerDocument.addEventListener('touchmove', handleMouseMove)
    sliderRef.current.ownerDocument.addEventListener('touchend', handleMouseUp)
    sliderRef.current.ownerDocument.addEventListener('touchstart', handleMouseDown)

    return () => {
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
    const leftPercent = (percentage || 0) * 100

    return {
      left: `${leftPercent}%`
    }
  }

  const getLabelPosition = () => {
    return percentage <= 0.2 ? 'left' : percentage < 0.8 ? 'center' : 'right'
  }

  const style = getStyle()
  const labelClasses = classNames('slider-node__label', `slider-node__label--${getLabelPosition()}`)

  return (
    <>
      <div className='slider-node'>
        <div className='slider-node__label slider-node__label--center'>
          0 cal
        </div>
        <div className='slider-node__handle' />
      </div>
      <div className='slider-node' style={style} ref={sliderRef} >
        <div className={labelClasses}>
          {label}
        </div>
        <div data-testid={`${testID}.handle`} className='slider-node__handle'/>
      </div>
    </>
  )
  
}