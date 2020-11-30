import { round } from '../../tasks/2_numbers/round'

const MOCK_ROUND_UP = [
  // input, output, decimal places
  [2.7, 3, 0],
  [2.75, 2.8, 1],
  [1.005, 1.01, 2]
]

const MOCK_ROUND_DOWN = [
  // input, output, decimal places
  [2.2, 2, 0],
  [2.22, 2.2, 1],
  [2.0, 2, 0],
  [2.0, 2, 1]
]

const MOCK_NO_ROUND = [
  // input, output, decimal places
  [2, 2, 0],
  [2, 2, 1],
  [2.0, 2.0, 1],
  [2.7, 2.7, 1],
  [2.2, 2.2, 1]
]

describe('Rounding function', () => {
  test.each(MOCK_NO_ROUND)('should not round %j', (input, output, decimals) => {
    expect(round(input, decimals)).toBe(output)
  })

  test.each(MOCK_ROUND_UP)('should round %d up to %d (%i dp)', (input, output, decimals) => {
    expect(round(input, decimals)).toBe(output)
  })

  test.each(MOCK_ROUND_DOWN)('should round %d down to %d (%i dp)', (input, output, decimals) => {
    expect(round(input, decimals)).toBe(output)
  })
})
