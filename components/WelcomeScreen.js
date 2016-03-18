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

//const Firebase = require('firebase');
const styles = require('../styles.js');
const Storer = require('../data/storer.js');

/* Components */
const StatusBar = require('./StatusBar');
const ActionButton = require('./ActionButton');
const ListItem = require('./ListItem');
const NumberPicker = require('./Numberpicker');

/* Other views */
const AlcoholCalculatorScreen = require('./AlcoholCalculatorScreen');
const PrimingCalculatorScreen = require('./PrimingCalculatorScreen');
const CalorieCalculatorScreen = require('./CalorieCalculatorScreen');

const defaults = {
  og: 1.065,
  fg: 1.010
}

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      og: defaults.og,
      fg: defaults.fg
    }
    Storer.updateValue('og', defaults.og);
    Storer.updateValue('fg', defaults.fg);
  }

  _updateValues(key, val) {
    this.setState(function(previousState, currentProps){
      let modification = previousState;
      modification[key] = val;
      Storer.updateValue(key, val);
      return modification;
    });
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
        <NumberPicker value={defaults.og}  label="OG" onValueChange={this._updateValues.bind(this, "og")} />
        <NumberPicker value={defaults.fg} label="FG" onValueChange={this._updateValues.bind(this, "fg")} />
        <ActionButton title="Alcohol Calculator" onPress={this._toCalc.bind(this, AlcoholCalculatorScreen, 'AlcoholCalculatorScreen')} />
        <ActionButton title="Calorie Content Calculator" onPress={this._toCalc.bind(this, CalorieCalculatorScreen, 'CalorieCalculatorScreen')} />
        <ActionButton title="Priming Calculator" onPress={this._toCalc.bind(this, PrimingCalculatorScreen, 'PrimingCalculatorScreen')} />
      </View>
    );
  }
}

module.exports = WelcomeScreen;
