import React from 'react'

interface SliderNodeProps {
  testID: string
}

export const SliderNode = (props: SliderNodeProps) => <div data-testid={props.testID} />
