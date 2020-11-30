/* eslint-disable no-magic-numbers */
import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { round } from '../../../tasks/2_numbers/round'
import { Result } from '../../components'
import css from './numbers.less'

export const NumberTask = () => (
  <div className={css.wrapper}>
    <section style={{ flex: 7 }}>
      <h2>Numbers</h2>
      <p>Make a function to round a given number to the specified decimal precision</p>
      <p>
        The file can be found in <i>./tasks/utils/round.js</i> and is implemented as such;
      </p>

      <SyntaxHighlighter style={atomDark} language={'javascript'}>
        round(input, decimals)
      </SyntaxHighlighter>

      <p>
        where <i>input</i> is the number to round, and <i>decimals</i> is the number of decimal places.
      </p>

      <h4>Bonus</h4>
      <p>
        JavaScript abstracts multiple number types, like integers and floats, under the one type, Number. This can have some strange and
        adverse side effects. For bonus credit, research the JavaScript Number type and fix the rounding errors in the bonus results
        section.
      </p>
    </section>
    <aside style={{ flex: 3 }}>
      <h3>Results</h3>
      <div className={css.results}>
        {[
          [2.7, 3, 0],
          [2.75, 2.8, 1],
          [2.2, 2, 0],
          [2.22, 2.2, 1],
          [2.0, 2, 0],
          [2.0, 2, 1],
          [2, 2, 0],
          [2, 2, 1],
          [2.0, 2.0, 1],
          [2.7, 2.7, 1],
          [2.2, 2.2, 1]
        ].map(([input, expected, precision], idx) => {
          const result = round(input, precision)

          return (
            <Result key={idx} success={result === expected}>
              {result} {expected}
            </Result>
          )
        })}
      </div>
      <h4>Bonus Results</h4>
      <div className={css.results}>
        {[[1.005, 1.01, 2]].map(([input, expected, precision], idx) => {
          const result = round(input, precision)

          return (
            <Result key={idx} success={result === expected}>
              {result} {expected}
            </Result>
          )
        })}
      </div>
    </aside>
  </div>
)
