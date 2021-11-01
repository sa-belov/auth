import { UserWithPassword } from './auth.types'
import authStorage from './auth.localstorage'
import { authSliceActions } from './auth.reducer'
import { ReduxState } from '../../redux/store.types'
import waiter from '../../shared/waiter'

const createUser = (user: UserWithPassword) => async (dispatch) => {
  await waiter()

  authStorage.addUser(user)

  dispatch(authSliceActions.login(user))
}

const login = (user: { email: string; password: string }) => async (dispatch) => {
  await waiter()
  const foundUser = authStorage.findUser(user)

  if (!foundUser) {
    throw new Error('Invalid email or password')
  }

  dispatch(authSliceActions.login(foundUser))
}

const changePassword = (oldPassword: string, newPassword: string) => async (_, getState) => {
  await waiter()
  const state: ReduxState = getState()

  if (state.auth.isAuthenticated) {
    const existsUser = authStorage.getUser(state.auth.user.id)
    if (existsUser.password !== oldPassword) {
      throw new Error('Old password is incorrect')
    }

    authStorage.updateUser({ ...existsUser, password: newPassword })
  }
}

const authActions = { createUser, login, changePassword, logout: authSliceActions.logout }
export default authActions
