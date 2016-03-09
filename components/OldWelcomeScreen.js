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
const AlcoholCalculatorScreen = require('./AlcoholCalculatorScreen.js');

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.itemsRef = new Firebase("beertool.firebaseio.com/items");
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
  }
  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }
  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {
      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          _key: child.key()
        });
      });
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });
    });
  }
  _addItem() {
    AlertIOS.prompt(
      'Add New Item',
      null,
      [
        {
          text: 'Add',
          onPress: (text) => {
            this.itemsRef.push({ title: text })
          }
        },
      ],
      'plain-text'
    );
  }

  _toCalc() {
    this.props.navigator.push({
        name: 'AlcoholCalculatorScreen',
        component: AlcoholCalculatorScreen
    });
  }

  _renderItem(item) {
    const onPress = () => {
      AlertIOS.prompt(
        'Complete',
        null,
        [
          {text: 'Complete', onPress: (text) => this.itemsRef.child(item._key).remove()},
          {text: 'Cancel', onPress: (text) => console.log('Cancel')}
        ],
        'default'
      );
    };

    return (
      <ListItem item={item} onPress={onPress} />
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar title="Grocery List" />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderItem.bind(this)}
          style={styles.listview}/>
        <ActionButton title="Add" onPress={this._addItem.bind(this)} />
        <ActionButton title="To Alcohol Calculator" onPress={this._toCalc.bind(this)} />
      </View>
    );
  }
}

module.exports = WelcomeScreen;
