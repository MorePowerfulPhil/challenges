import React from 'react'

declare module '*/slider-node' {
  interface SliderNodeProps {
    testID: string
    name: string
    percentage: number
    label: string
    onDrag: () => void
  }

  export const SliderNode = ({ testID, name, percentage, label, onDrag }: SliderNodeProps) => React.JSXElement
}
