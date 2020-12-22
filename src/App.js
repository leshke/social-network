import React, { useEffect } from 'react';
import { connect, Provider } from 'react-redux';
import { Redirect, Route, Switch, withRouter, HashRouter } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import Preloader from './components/common/Preloader';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import FriendsContainer from './components/MyFriends/MyFriendsContainer';
import Login from './components/Login/Login';
import withSuspense from './hoc/withSuspense';
import { initializeApp } from './redux/reducer-app';
import store from './redux/redux-state';
import About from './components/About/About';
import Header from './components/Header/Header';

const Messages = React.lazy(() => import('./components/Messages/Messages'));

const App = ({ initializeApp, initialize }) => {

  useEffect(() => {
    initializeApp()
  }, [initializeApp, initialize])

  if (!initialize) return <Preloader />

  return <div className="app-wrapper">
    <Header />
    <Menu />
    <div className="content-wrapper">
      <Switch>
        <Redirect exact from='/' to='/profile' />
        <Route path="/login" component={Login} />
        <Route path="/message" render={withSuspense(Messages)} />
        <Route path="/profile/:userId?" component={ProfileContainer} />
        <Route path="/users" component={UsersContainer} />
        <Route path="/friends" component={FriendsContainer} />
        <Route path="/about" component={About} />
        <Route render={() => <div>PAGE IS NOT FOUND</div>} />
      </Switch>
    </div>
    <Footer />
  </div>
}

const MapStateToProps = (state) => ({
  initialize: state.app.initialized
})

const AppContainer = compose(
  withRouter,
  connect(MapStateToProps, { initializeApp })
)(App)

const SocialNetwork = () => {
  return <HashRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </HashRouter>
}
export default SocialNetwork;