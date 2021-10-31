import Login from '../Login/LoginPage';
import Signup from '../../components/SignUpComponent/SignUpComponent';
import ChangePasswordPage from '../ChangePassword/ChangePasswordPage';

interface IRoute {
  id: string;
  name: string;
  path: string;
  component: any;
}

const appRoutes: IRoute[] = [
  { id: 'login', name: 'Login', path: '/', component: Login },
  { id: 'signup', name: 'Signup', path: '/signup', component: Signup },
  { id: 'change', name: 'Change', path: '/change', component: ChangePasswordPage },
];

export default appRoutes;
