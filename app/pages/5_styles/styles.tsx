import React, { useState } from 'react'

import { Slider } from '../../components'
import { SliderRange } from '../../components/slider/slider.interface'
import css from './styles.less'

export const StyleTask = () => {
  // eslint-disable-next-line no-magic-numbers
  const [value, setValue] = useState<number | SliderRange>(120)

  return (
    <div className={css.wrapper}>
      <section style={{ flex: 7 }}>
        <h2>Styles</h2>
        <p>The styles in the previous of the slider do not match the intended designs.</p>
        <h3>Task</h3>
        <p>
          Update the <b>SliderNode</b> styles to match the designs below.
        </p>
        <div className={css.reference} />
      </section>
      <aside style={{ flex: 3 }}>
        <h3>Results</h3>
        <div style={{ maxWidth: 300, padding: 6 }}>
          <Slider testID={'slider-node'} min={0} max={250} step={1} value={value} onChange={setValue} />
        </div>
        <div className={css.reference} />
      </aside>
    </div>
  )
}
