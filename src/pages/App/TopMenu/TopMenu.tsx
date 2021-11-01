import styles from './topMenu.module.sass';
import { NavLink } from 'react-router-dom';
import appRoutes from '../app.router';

const TopMenu = () => {
  const renderLinks = () => {
    return appRoutes.map((route) => (
      <NavLink key={route.id} to={route.path} className={styles.link} activeClassName={styles.activeLink} exact={true}>
        {route.name}
      </NavLink>
    ));
  };

  return <div className={styles.topMenu}>{renderLinks()}</div>;
};

export default TopMenu;
