import useHttpLoader from '../../../hooks/useHttpLoader'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import authActions from '../auth.actions'
import styles from '../auth.module.css'
import TextInput from '../../../shared/TextInput/TextInput'
import SubmitFooter from '../../../shared/SubmitFooter/SubmitFooter'
import { UserWithPassword } from '../auth.types'

interface ICreateUser extends UserWithPassword {
  passwordRepeat: string
}

const Signup = () => {
  const { wait, loading } = useHttpLoader()
  const dispatch = useDispatch()

  const [errorMessage, setErrorMessage] = useState('')
  const [user, setUser] = useState<ICreateUser>({
    email: '',
    password: '',
    name: '',
    id: '',
    created_at: 0,
    passwordRepeat: '',
  })

  const handleChange = (val: string, name: string) => {
    if (loading) return

    setUser({ ...user, [name]: val })
  }

  const handleSubmit = () => {
    const err = validate(user)
    if (err) return setErrorMessage(err)

    const onLoad = () => {
      setErrorMessage('')
      setUser({ email: '', password: '', name: '', id: '', created_at: 0, passwordRepeat: '' })
    }

    const onError = (err) => {
      setErrorMessage(err.message)
    }

    const { passwordRepeat, ...createInfo } = user
    wait(dispatch(authActions.createUser(createInfo)) as any, onLoad, onError)
  }

  return (
    <div className={styles.container}>
      <TextInput value={user.name} title={'Name'} name={'name'} onChange={handleChange} />
      <TextInput value={user.email} title={'Email'} name={'email'} onChange={handleChange} type={'email'} />
      <TextInput value={user.password} title={'Password'} name={'password'} onChange={handleChange} type={'password'} />
      <TextInput
        value={user.passwordRepeat}
        title={'Repeat password'}
        name={'passwordRepeat'}
        onChange={handleChange}
        type={'password'}
      />
      <SubmitFooter onSubmit={handleSubmit} submitTitle={'Sign up'} loading={loading} errorMessage={errorMessage} />
    </div>
  )
}

const validate = (user: ICreateUser): string | null => {
  if (user.password.length < 4 || user.password.length > 10) return 'Password must contain from 4 to 10 characters'
  if (!user.password.match(/[A-Z]/)) return 'Password must contain at least one capital letter'
  if (!user.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return 'Email must be valid'
  if (user.password !== user.passwordRepeat) return 'Password must be the same'

  return null
}

export default Signup
