/**
 * @class ExampleComponent
 */

import * as React from 'react'
import styles from './styles.css'

interface IProps {
  children: React.ReactNode
  data?: {
    [key: string]: string | number | boolean
  }
  handler?: () => void
}

const DataAttrButton: React.FC<IProps> = (props: IProps) => {
  const { children, data, handler } = props

  return (
    <button className={styles.button} onClick={handler} {...data}>
      {children}
    </button>
  )
}

export default DataAttrButton