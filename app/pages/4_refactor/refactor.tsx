import React, { useState } from 'react'

import { Slider } from '../../components'
import { SliderRange } from '../../components/slider/slider.interface'
import css from './refactor.less'

export const RefactorTask = () => {
  // eslint-disable-next-line no-magic-numbers
  const [value, setValue] = useState<number | SliderRange>(120)

  return (
    <div className={css.wrapper}>
      <section style={{ flex: 7 }}>
        <h2>Refactoring</h2>
        <p>Refactor a class component into a functional one</p>
      </section>
      <aside style={{ flex: 3 }}>
        <h3>Results</h3>
        <div style={{ maxWidth: 300, padding: 12 }}>
          <Slider testID={'slider-node'} min={0} max={250} step={1} value={value} onChange={setValue} />
        </div>
        <h3>Bonus</h3>
        <p>
          This component currently uses styles written and integrated in SASS. As a bonus, rewrite the styles in LESS and use css-modules to
          integrate with the component.
        </p>
        <p>
          Note: Bundling for css modules is already configured, you simply need to change the file name, import, and then use the styles
          where appropriate.
        </p>
      </aside>
    </div>
  )
}
