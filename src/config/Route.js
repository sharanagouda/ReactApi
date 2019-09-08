import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import ListScreen from '../screens/ListDetails';
import Home from '../screens/Home';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Scene key="user" initial={this.props.loggedIn}>
          <Scene key="home" component={Home} title="Home" />
          <Scene
            key="listScreen"
            hideNavBar={true}
            component={ListScreen}
            title="Home"
          />
        </Scene>
      </Router>
    );
  }
}
