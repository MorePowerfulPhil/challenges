import React from 'react'

import css from './result.less'

interface ResultProps {
  success: boolean
  error?: string
  /**
   * Renders the text value, overridden by the `text` prop
   * when defined
   */
  children?: React.ReactNode
}

export const Result = ({ success, error }: ResultProps) => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <div className={css.icon} style={{ borderColor: success ? 'green' : 'red' }} />
    <div className={css.label}>{success ? 'Passed' : error}</div>
  </div>
)
