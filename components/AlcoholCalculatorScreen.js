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

class AlcoholCalculatorScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      og: "1.065",
      fg: "1.010",
      abv: "0"
    };
  }
  componentDidMount() {
    return;
  }
  _calculate() {
    let abv = (76.08 * (this.state.og-this.state.fg) / (1.775-this.state.og)) * (this.state.fg / 0.794);

    this.setState({
      abv: abv.toFixed(1)
    });
  }
  _pop() {
    this.props.navigator.pop();
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar title="Alcohol Calculator" />
        <View style={styles.flexer}>

          <ActionButton title="Go Back" onPress={this._pop.bind(this)} />
          <Text>OG</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            keyboardType='numeric'
            onChangeText={(og) => this.setState({og})}
            value={this.state.og}
          />
          <Text>FG</Text>

          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            keyboardType='numeric'
            onChangeText={(og) => this.setState({fg})}
            value={this.state.fg}
          />

          <Text>calculated abv: {this.state.abv}%</Text>

        </View>
        <ActionButton title="Calculate" style={{align: 20}} onPress={this._calculate.bind(this)} />
      </View>
    );
  }
}

module.exports = AlcoholCalculatorScreen;
