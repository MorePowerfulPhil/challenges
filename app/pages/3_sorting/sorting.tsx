/* eslint-disable no-magic-numbers */
import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { maximizeVariety } from '../../../tasks/3_sorting/maximize-variety'
import { Result } from '../../components'
import css from './sorting.less'

type ProductVarietyScenario = [number[], number, number[]]

const productPriceLists: ProductVarietyScenario[] = [
  [[1, 5, 7, 10], 7, [0, 1]],
  [[13, 7, 1, 15, 14.99, 2], 31, [0, 2, 3, 5]],
  [[1, 5, 7, 10], 24, [0, 1, 2, 3]]
]

const bonusProductPriceLists: ProductVarietyScenario[] = [
  [[14, 7, 5, 10], 5, [2]],
  [[14, 7, 7.95, 10], 22, [2, 3]]
]

const strictEqual = (arr: number[], compare: number[]) =>
  arr.length === compare.length && arr.reduce((result, withItem, idx) => result && compare[idx] === withItem, true)

export const SortingTask = () => (
  <div className={css.wrapper}>
    <section style={{ flex: 7 }}>
      <h2>Sorting</h2>
      <p>Our customer likes to budget their weekly spending, yet maximite the variety of items they can buy.</p>

      <h3>Task</h3>
      <p>
        Given the customers budget, and a list of product prices, sort and filter the list so that our customer gets the maximum variety of
        products for their given budget.
      </p>

      <SyntaxHighlighter style={atomDark} language={'javascript'}>
        maximizeVariety(prices, budget)
      </SyntaxHighlighter>

      <p>The output should be an array of indexes, where the indexes correspond to the prices in the input price array.</p>

      <h3>Bonus</h3>
      <p>Our customer comes first, and we&apos;ve filled their stomach to the max, now it&apos;s time to fill our pockets!</p>
      <p>
        Optimise your picking algorithm, so that we use the maximum amount of the customers budget, while still meeting all prior
        requirements.
      </p>
    </section>
    <aside style={{ flex: 3 }}>
      <h3>Results</h3>
      {productPriceLists.map(([prices, budget, expected], idx) => {
        const result = maximizeVariety(prices, budget)

        return <Result key={idx} success={strictEqual(result, expected)} error={`Failed`} />
      })}
      <h3>Bonus Results</h3>
      {bonusProductPriceLists.map(([prices, budget, expected], idx) => {
        const result = maximizeVariety(prices, budget)

        return <Result key={idx} success={strictEqual(result, expected)} error={`Failed`} />
      })}
    </aside>
  </div>
)
