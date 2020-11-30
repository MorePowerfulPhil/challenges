import React from 'react'
import { render } from '@testing-library/react'

import { SliderNode } from '../../tasks/3_refactor/slider-node'

const TESTID = 'slider-node'
const TESTID_LABEL = `${TESTID}.label`
const TESTID_HANDLE = `${TESTID}.handle`

const mockType = 'type'
const mockLabel = 'mock label'
const mockPercentage = 0.2

describe('SliderNode', () => {
  test('should render with defaults', () => {
    const { getByTestId } = render(<SliderNode testID={TESTID} label={mockLabel} percentage={mockPercentage} type={mockType} />)

    expect(getByTestId(TESTID_LABEL).textContent).toEqual(mockLabel)
    expect(getByTestId(TESTID_LABEL).classList).toContain('label')
    expect(getByTestId(TESTID_HANDLE).classList).toContain('handle')
  })

  test.each([
    [0, '0%'],
    [0.2, '20%'],
    [0.534, '53%'],
    [1, '100%']
  ])(`should set %s as the left offset percentage %s`, (percentage, expected) => {
    const { getByTestId } = render(<SliderNode testID={TESTID} label={mockLabel} percentage={percentage} type={mockType} />)

    expect(getByTestId(TESTID).style.left).toEqual(expected)
  })

  test.each([
    ['left', 0],
    ['left', 0.1289],
    ['left', 0.2],
    ['center', 0.21],
    ['center', 0.5],
    ['center', 0.7999],
    ['right', 0.8],
    ['right', 0.9],
    ['right', 1]
  ])('should set label style %s when percentage is %s', (expected, percentage) => {
    const { getByTestId } = render(<SliderNode testID={TESTID} label={mockLabel} percentage={percentage} type={mockType} />)

    expect(getByTestId(TESTID_LABEL).classList).toContain(expected)
  })

  test.todo('should check node when mouse down')

  test.todo('should NOT check node when mouse up')

  test.todo('should call onDrag when pressed and mouse moved')

  test.todo('should NOT call onDrag when NOT pressed and mouse moved')

  test.todo('should NOT call onDrag when pressed and onDrag undefined')
})
