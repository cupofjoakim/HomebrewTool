
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  AlertIOS,
  Text,
  ListView,
  View,
  Navigator
} from 'react-native';

const Firebase = require('firebase');
const styles = require('./styles.js');


const WelcomeScreen = require('./components/WelcomeScreen');

class HomebrewTool extends Component {
  render() {
    return (
       <Navigator
          initialRoute={{name: 'WelcomeScreen', component: WelcomeScreen}}
          configureScene={() => {
              return Navigator.SceneConfigs.FloatFromRight;
          }}
          renderScene={(route, navigator) => {
              // count the number of func calls
              console.log(route, navigator); 

              if (route.component) {
                  return React.createElement(route.component, { navigator });
              }
          }}
       />
    );
  }
}

AppRegistry.registerComponent('HomebrewTool', () => HomebrewTool);
