import React from 'react'
import classNames from 'classnames'

import './slider-node.scss'
export class SliderNode extends React.Component {
  state = {
    mouseIsDown: false
  }

  node = React.createRef()

  componentDidMount() {
    this.node.current.ownerDocument.addEventListener('mousemove', this.handleMouseMove)
    this.node.current.ownerDocument.addEventListener('mouseup', this.handleMouseUp)
    this.node.current.ownerDocument.addEventListener('mousedown', this.handleMouseDown)

    this.node.current.ownerDocument.addEventListener('touchmove', this.handleMouseMove)
    this.node.current.ownerDocument.addEventListener('touchend', this.handleMouseUp)
    this.node.current.ownerDocument.addEventListener('touchstart', this.handleMouseDown)
  }

  componentWillUnmount() {
    this.node.current.ownerDocument.removeEventListener('mousemove', this.handleMouseMove)
    this.node.current.ownerDocument.removeEventListener('mouseup', this.handleMouseUp)
    this.node.current.ownerDocument.removeEventListener('mousedown', this.handleMouseDown)

    this.node.current.ownerDocument.removeEventListener('touchmove', this.handleMouseMove)
    this.node.current.ownerDocument.removeEventListener('touchend', this.handleMouseUp)
    this.node.current.ownerDocument.removeEventListener('touchstart', this.handleMouseDown)
  }

  handleMouseMove = (event) => {
    if (!this.state.mouseIsDown) {
      return
    }

    this.props.onDrag(event, this.props.type)
  }

  handleMouseDown = () => {
    this.setState({
      mouseIsDown: true
    })
  }

  handleMouseUp = () => {
    this.setState({
      mouseIsDown: false
    })
  }

  getStyle = () => {
    const percentage = (this.props.percentage || 0) * 100

    return {
      left: `${percentage}%`
    }
  }

  getLabelPosition = () => {
    const { percentage } = this.props

    return percentage <= 0.2 ? 'left' : percentage < 0.8 ? 'center' : 'right'
  }

  render() {
    const style = this.getStyle()
    const labelClasses = classNames('slider-node__label', `slider-node__label--${this.getLabelPosition()}`)

    return (
      <div className='slider-node' style={style} ref={this.node}>
        <div className={labelClasses}>
          {this.props.label}
        </div>
        <div data-testid={`${this.props.testID}.handle`} className={'slider-node__handle'}/>
      </div>
    )
  }
}