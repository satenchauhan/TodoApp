import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {TodoNavigatior} from './navigation';
import {NetworkToastWrapper} from './components';

export default function App() {
  return (
    <NetworkToastWrapper>
      <SafeAreaView style={{flex: 1}}>
        <TodoNavigatior />
      </SafeAreaView>
    </NetworkToastWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
