import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link, Route, Routes as Switch } from 'react-router-dom'

import css from './app.less'
import { Home, NumberTask, RefactorTask, SortingTask, StyleTask, TypescriptTask, WarmupTask } from './pages'

const App = (
  <Router>
    <main className={css.wrapper}>
      <nav className={css.nav}>
        <Link to='/task/1' className={css.link}>
          Warmup
        </Link>
        <Link to='/task/2' className={css.link}>
          Numbers
        </Link>
        <Link to='/task/3' className={css.link}>
          Sorting
        </Link>
        <Link to='/task/4' className={css.link}>
          Refactor
        </Link>
        <Link to='/task/5' className={css.link}>
          Styles
        </Link>
        <Link to='/task/6' className={css.link}>
          Bonus
        </Link>
      </nav>
      <Switch>
        <Route path='/task/1' element={<WarmupTask />} />
        <Route path='/task/2' element={<NumberTask />} />
        <Route path='/task/3' element={<SortingTask />} />
        <Route path='/task/4' element={<RefactorTask />} />
        <Route path='/task/5' element={<StyleTask />} />
        <Route path='/task/6' element={<TypescriptTask />} />
        <Route element={<Home />} />
      </Switch>
    </main>
  </Router>
)

ReactDOM.render(App, document.getElementById('root'))
