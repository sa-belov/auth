import Signup from '../Auth/Signup/Signup'
import Signin from '../Auth/Signin/Signin'
import ResetPassword from '../Auth/ResetPassword/ResetPassword'

interface IRoute {
  id: string
  name: string
  path: string
  component: any
  needAuth: boolean
}

const appRoutes: IRoute[] = [
  { id: 'login', name: 'Sign in', path: '/', component: Signin, needAuth: false },
  { id: 'signup', name: 'Sign up', path: '/signup', component: Signup, needAuth: false },
  { id: 'change', name: 'Reset password', path: '/password_reset', component: ResetPassword, needAuth: true },
]

export default appRoutes
