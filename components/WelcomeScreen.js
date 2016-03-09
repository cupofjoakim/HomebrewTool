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
const styles = require('../styles.js');

/* Components */
const StatusBar = require('./StatusBar');
const ActionButton = require('./ActionButton');
const ListItem = require('./ListItem');

/* Other views */
const AlcoholCalculatorScreen = require('./AlcoholCalculatorScreen');
const PrimingCalculatorScreen = require('./PrimingCalculatorScreen');
const CalorieCalculatorScreen = require('./CalorieCalculatorScreen');

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  _toCalc(cmpnt, title, obj) {
    this.props.navigator.push({
        name: title,
        component: cmpnt
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar title="HomebrewTool" />
        <ActionButton title="Alcohol Calculator" onPress={this._toCalc.bind(this, AlcoholCalculatorScreen, 'AlcoholCalculatorScreen')} />
        <ActionButton title="Priming Calculator" onPress={this._toCalc.bind(this, PrimingCalculatorScreen, 'PrimingCalculatorScreen')} />
        <ActionButton title="Calorie Content Calculator" onPress={this._toCalc.bind(this, CalorieCalculatorScreen, 'CalorieCalculatorScreen')} />
      </View>
    );
  }
}

module.exports = WelcomeScreen;
