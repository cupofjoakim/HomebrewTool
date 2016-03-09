'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  AlertIOS,
  Text,
  TextInput,
  ListView,
  View
} from 'react-native';

const styles = require('../styles.js');

/* Components */
const StatusBar = require('./StatusBar');
const ActionButton = require('./ActionButton');

class PrimingCalculatorScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    return;
  }
  _pop() {
    this.props.navigator.pop();
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar title="Priming Calculator" />
        <View style={styles.flexer}>

          <ActionButton title="Go Back" onPress={this._pop.bind(this)} />

          <Text>To be done</Text>

        </View>
      </View>
    );
  }
}

module.exports = PrimingCalculatorScreen;
