import React from 'react'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { SliderNode } from '../../../tasks/6_typing'
import css from './bonus.less'

export const TypescriptTask = () => (
  <div className={css.wrapper}>
    <section style={{ flex: 7 }}>
      <h2>Typescript</h2>
      <p>We use TypeScript to enforce strict types on normally loosely defined JavaScript.</p>

      <h3>Task</h3>
      <p>
        For a little bit of extra credit, convert all of the previous task files into Typescript, excluding the <i>Styles</i> task.
      </p>
    </section>
    <aside style={{ flex: 3 }}>
      <h3>Results</h3>
      <div style={{ maxWidth: 300, padding: 12 }}>
        <SliderNode testID={'slider-node'} />
      </div>
    </aside>
  </div>
)
