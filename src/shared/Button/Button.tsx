import { ButtonHTMLAttributes, FC } from 'react'
import styles from './button.module.css'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  styleType: 'primary' | 'secondary'
}

const Button: FC<IProps> = ({ children, styleType = 'primary', ...props }) => {
  return (
    <button className={`${styles.button} ${styles[styleType]}`} {...props}>
      {children}
    </button>
  )
}

export default Button
