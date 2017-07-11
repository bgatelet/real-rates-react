import Base from '../components/Base.js';
import Home from '../components/Home.js';
import LoginContainer from '../containers/LoginContainer.js';
import SignUpContainer from '../containers/SignUpContainer.js';
import Auth from '../modules/Auth.js';


const routes = {
  component: Base,
  childRoutes: [

    {
      path: '/',
      component: Home
    },

    {
      path: '/login',
      component: LoginContainer
    },

    {
      path: '/signup',
      component: SignUpContainer
    },

    {
      path: '/logout',
      onEnter: (nextState, replace) => {
        Auth.deauthenticateUser();
        replace('/');
      }
    }

  ]
};

export default routes;
