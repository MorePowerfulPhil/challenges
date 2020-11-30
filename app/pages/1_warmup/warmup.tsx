/* eslint-disable no-magic-numbers */
import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { clamp } from '../../../tasks/1_warmup/clamp'
import { Result } from '../../components'
import css from './warmup.less'

export const WarmupTask = () => (
  <div className={css.wrapper}>
    <section style={{ flex: 7 }}>
      <h2>Warmup</h2>
      <h4>Let&apos;s get you started with a simple business function.</h4>
      <p>
        We often share these across our entire application, so even thought they are simple, they&apos;re integral to the entire
        application. A mistake here could propagate into bugs everywhere!
      </p>
      <p>
        To further iterate their importance, the tasks you will face in later challenges will actually implement the code you write here.
      </p>
      <h3>Task</h3>
      <p>Create a function which limits a value between the minimum, and maximum value range.</p>

      <SyntaxHighlighter style={atomDark} language={'javascript'}>
        clamp(input, min, max)
      </SyntaxHighlighter>

      <h4>Bonus</h4>
      <p>
        The final three test cases attempt to break the clamp logic by incorrectly using the interface. They assign a maximum value to the
        min argument, while assigning a minimum value to the max argument.
      </p>
      <p>
        Improve the clamp function by sorting the arguments for min and max so that it will produce the correct clamped value, even when the
        input arguments are not in logical order.
      </p>
    </section>

    <aside style={{ flex: 3 }}>
      <h3>Results</h3>
      <div className={css.results}>
        {[
          [2.7, 3, 0, 0],
          [2.75, 1, 2.5, 2.5],
          [1.005, 1.01, 1.006, 1.006],
          [2.2, 0, 2, 2],
          [2.22, 2.2, 1, 1],
          [2.0, 0, 2, 2],
          [2.0, 1, 2.0, 2],
          [2, 2, 2, 2],
          [0.1, 1, 1, 1],
          [2.000001, 1, 2.0, 2],
          [2.7000000000001, 1, 2.7, 2.7],
          [0.1, 1, 2.2, 1]
        ].map(([input, min, max, expected], idx) => {
          const result = clamp(input, min, max)

          return (
            <Result
              key={idx}
              success={result === expected}
              error={`Expected ${result} to equal ${expected} because the input ${input} is`}
            />
          )
        })}
      </div>
      <h3>Bonus Results</h3>
      <div className={css.results}>
        {[
          [0.1, 4, 1, 1],
          [1, 3, 0, 1],
          [7.3, 7, 1, 7]
        ].map(([input, min, max, expected], idx) => {
          const result = clamp(input, min, max)

          return (
            <Result
              key={idx}
              success={result === expected}
              error={`Expected ${result} to equal ${expected} because the input ${input} is`}
            />
          )
        })}
      </div>
    </aside>
  </div>
)
