import { ChangeEvent, CSSProperties, HTMLProps } from 'react'
import styles from './input.module.css'

interface IProps {
  value: string
  title: string
  required?: boolean

  type?: HTMLProps<HTMLInputElement>['type']
  name?: string
  onChange: (val: string, name?: string) => void

  style?: CSSProperties
}

const TextInput = (props: IProps) => {
  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    props.onChange(ev.target.value, props.name)
  }

  return (
    <div className={styles.inputBlock}>
      <label className={styles.label}>{props.title}</label>
      <input
        className={styles.input}
        value={props.value}
        onChange={handleChange}
        required={props.required ?? false}
        type={props.type ?? 'text'}
      />
    </div>
  )
}

export default TextInput
