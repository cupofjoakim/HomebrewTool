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

class CalorieCalculatorScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      og: "1.065",
      fg: "1.010",
      caloriesFromAlcohol: 0,
      caloriesFromCarbs: 0,
    };
  }
  componentDidMount() {
    return;
  }
  _pop() {
    this.props.navigator.pop();
  }
  _calc(){
    this.setState({
      caloriesFromAlcohol: (1881.22 * this.state.fg * (this.state.og-this.state.fg)/(1.775-this.state.og))*0.929885623645616,
      caloriesFromCarbs: (3550* this.state.fg * ((0.1808 * this.state.og) + (0.8192 * this.state.fg)-1.0004))*0.929885623645616
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar title="Calorie Content Calculator" />
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
            onChangeText={(fg) => this.setState({fg})}
            value={this.state.fg}
          />

          <Text>The following values are for a bottle of 33cl beer</Text>
          <Text>kcal from alcohol: {Math.round(this.state.caloriesFromAlcohol)}</Text>
          <Text>kcal from carbs: {Math.round(this.state.caloriesFromCarbs)}</Text>
          <Text>Total kcal: {Math.round(this.state.caloriesFromAlcohol) + Math.round(this.state.caloriesFromCarbs)}</Text>

        </View>
        <ActionButton title="Calculate" style={{align: 20}} onPress={this._calc.bind(this)} />
      </View>
    );
  }
}

module.exports = CalorieCalculatorScreen;
