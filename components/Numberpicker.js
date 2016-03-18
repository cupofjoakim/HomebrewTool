'use strict';
const React = require('react-native');
const styles = require('../styles.js')
const constants = styles.constants;
const { StyleSheet, Text, TextInput, View, TouchableHighlight } = React;

class NumberPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: parseFloat(this.props.value).toFixed(3)
    };
  }
  _updateValue(val){
    this.setState({
      value: val
    }, this.props.onValueChange(val));
  }

  _decrease(){
    let val = parseFloat(this.state.value - 0.001).toFixed(3);
    this._updateValue(val);
  }

  _increase(){
    let val = (parseFloat(this.state.value) + 0.001).toFixed(3);
    this._updateValue(val);
  }

  _handleManual(val){
    console.log(val);
  }

  render() {
    return (
      <View style={styles.numberpickerOuter}>
        <Text style={styles.numberpickerLabel}>
          {this.props.label}
        </Text>
        <View style={styles.numberpicker}>
          <TouchableHighlight 
            style={styles.numberpickerButton}
            underlayColor={constants.actionColor}
            onPress={this._increase.bind(this)}>
            <Text></Text>
          </TouchableHighlight>

          <TextInput 
            style={styles.numberpickerValue}
            value={this.state.value}
            keyboardType='numeric'
            onEndEditing={this._handleManual.bind(this)}
            editable={false}
          />

          <TouchableHighlight
            style={styles.numberpickerButton}
            underlayColor={constants.actionColor}
            onPress={this._decrease.bind(this)}>
            <Text></Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

module.exports = NumberPicker;