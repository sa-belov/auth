import { useState } from 'react'
import TextInput from '../../../shared/TextInput/TextInput'
import SubmitFooter from '../../../shared/SubmitFooter/SubmitFooter'
import styles from '../auth.module.css'
import { useDispatch } from 'react-redux'
import useHttpLoader from '../../../hooks/useHttpLoader'
import authActions from '../auth.actions'

interface IResetPasswordState {
  oldPassword: string
  newPassword: string
  newPasswordRepeat: string
}

const ResetPassword = () => {
  const { wait, loading } = useHttpLoader()
  const dispatch = useDispatch()
  const [errorMessage, setErrorMessage] = useState('')
  const [state, setState] = useState<IResetPasswordState>({ oldPassword: '', newPassword: '', newPasswordRepeat: '' })

  const handleChange = (val: string, name: string) => {
    setState({ ...state, [name]: val })
  }

  const handleSubmit = () => {
    const err = validate(state)
    if (err) return setErrorMessage(err)

    wait(dispatch(authActions.changePassword(state.oldPassword, state.newPassword)) as any, () => {
      setState({ oldPassword: '', newPassword: '', newPasswordRepeat: '' })
    })
  }

  return (
    <div className={styles.container}>
      <TextInput
        value={state.oldPassword}
        title="Old password"
        name="oldPassword"
        onChange={handleChange}
        type={'password'}
      />
      <TextInput
        value={state.newPassword}
        title="New password"
        name="newPassword"
        onChange={handleChange}
        type={'password'}
      />
      <TextInput
        value={state.newPasswordRepeat}
        title="Repeat new password"
        name="newPasswordRepeat"
        onChange={handleChange}
        type={'password'}
      />
      <SubmitFooter
        onSubmit={handleSubmit}
        submitTitle="Update password"
        loading={loading}
        errorMessage={errorMessage}
      />
    </div>
  )
}

const validate = (state: IResetPasswordState): string | null => {
  if (state.newPassword.length < 4 || state.newPassword.length > 10)
    return 'Password must contain from 4 to 10 characters'

  if (!state.newPassword.match(/[A-Z]/)) return 'Password must contain at least one capital letter'
  if (state.newPasswordRepeat !== state.newPassword) return 'Passwords must be the same'

  return null
}

export default ResetPassword
