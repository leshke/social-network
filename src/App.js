import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import Preloader from './components/common/Preloader';
import Footer from './components/Footer/Footer';
import HeaderContainer from './components/Header/HeaderContainer';
import Menu from './components/Menu/Menu';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import FriendsContainer from './components/MyFriends/MyFriendsContainer';
import Login from './components/Login/Login';
import withSuspense from './hoc/withSuspense';
import { initializeApp } from './redux/reducer-app';
import store from './redux/redux-state';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const Messages = React.lazy(() => import('./components/Messages/Messages'));

class App extends React.PureComponent {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialize) return <Preloader />

    return <div className="app-wrapper">
      <HeaderContainer />
      <Menu />
      <div className="content-wrapper">
        <Switch>
        <Route exact path="/" render={() => <Redirect to='/profile' />} />
          <Route path="/login" component={Login} />
          <Route path="/message" render={withSuspense(Messages)} />
          <Route path="/profile/:userId?" component={ProfileContainer} />
          <Route path="/users" component={UsersContainer} />
          <Route path="/friends" component={FriendsContainer} />
          <Route render={() => <div>PAGE IS NOT FOUND</div>} />
        </Switch>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  }
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