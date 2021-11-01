import appRoutes from '../app.routes'
import { NavLink } from 'react-router-dom'
import styles from './topMenu.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { ReduxState } from '../../../redux/store.types'
import authActions from '../../Auth/auth.actions'

const TopMenu = () => {
  const dispatch = useDispatch()
  const authState = useSelector((state: ReduxState) => state.auth)

  const handleLogout = () => dispatch(authActions.logout())

  const renderLinks = () => {
    const isAuthenticated = authState.isAuthenticated

    return appRoutes.map((route) => {
      const link = (
        <NavLink
          key={route.id}
          to={route.path}
          className={styles.link}
          activeClassName={styles.linkActive}
          exact={true}
        >
          {route.name}
        </NavLink>
      )

      if (isAuthenticated && route.needAuth) return link
      if (!isAuthenticated && !route.needAuth) return link

      return null
    })
  }

  const renderUserInfo = () => {
    if (!authState.isAuthenticated) return null

    return (
      <div className={styles.userInfo}>
        <span>Signed in as {authState.user.name}</span>
        {' | '}
        <span className={styles.logout} onClick={handleLogout}>
          Logout
        </span>
      </div>
    )
  }

  return (
    <div className={styles.topMenu}>
      {renderLinks()}
      {renderUserInfo()}
    </div>
  )
}

export default TopMenu
