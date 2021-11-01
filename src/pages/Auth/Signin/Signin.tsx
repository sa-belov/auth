import styles from '../auth.module.css'
import { useState } from 'react'
import TextInput from '../../../shared/TextInput/TextInput'
import SubmitFooter from '../../../shared/SubmitFooter/SubmitFooter'
import { useDispatch } from 'react-redux'
import authActions from '../auth.actions'
import useHttpLoader from '../../../hooks/useHttpLoader'

const Signin = () => {
  const { wait, loading } = useHttpLoader()
  const dispatch = useDispatch()
  const [errorMessage, setErrorMessage] = useState('')
  const [user, setUser] = useState<{ email: string; password: string }>({ email: '', password: '' })

  const handleChange = (val: string, name: string) => {
    setUser({ ...user, [name]: val })
  }

  const onLoad = () => {
    setUser({ email: '', password: '' })
    setErrorMessage('')
  }

  const onError = (err) => {
    setErrorMessage(err.message)
  }

  const handleSubmit = () => {
    wait(dispatch(authActions.login(user)) as any, onLoad, onError)
  }

  return (
    <div className={styles.container}>
      <TextInput value={user.email} title={'Email'} name={'email'} onChange={handleChange} type={'email'} />
      <TextInput value={user.password} title={'Password'} name={'password'} onChange={handleChange} type={'password'} />
      <SubmitFooter onSubmit={handleSubmit} submitTitle={'Sign in'} loading={loading} errorMessage={errorMessage} />
    </div>
  )
}

export default Signin
