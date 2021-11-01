import TopMenu from './TopMenu/TopMenu'
import { Route, Switch } from 'react-router-dom'
import appRoutes from './app.routes'
import styles from './app.module.css'
import { useSelector } from 'react-redux'
import { ReduxState } from '../../redux/store.types'

function App() {
  const isAuthenticated = useSelector((state: ReduxState) => state.auth.isAuthenticated)

  const renderRoutes = () => {
    return appRoutes.map((r) => {
      const route = <Route key={r.id} path={r.path} component={r.component} exact={true} />

      if (isAuthenticated && r.needAuth) return route
      if (!isAuthenticated && !r.needAuth) return route

      return null
    })
  }

  return (
    <>
      <TopMenu />
      <Switch>
        <div className={styles.container}>{renderRoutes()}</div>
      </Switch>
    </>
  )
}

export default App
