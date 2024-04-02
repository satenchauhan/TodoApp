import React from 'react';
import {Text, View} from 'react-native';

class Car extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      city: '',
    };
  }
  render() {
    return (
      <View>
        <Text>This is class component</Text>
      </View>
    );
  }
}
