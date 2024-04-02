import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {TodoNavigatior} from './navigation';
import {OfflineToastWrapper} from './components';

export default function App() {
  return (
    <OfflineToastWrapper>
      <SafeAreaView style={{flex: 1}}>
        {/* <PushNotificationNavigator /> */}
        <TodoNavigatior />
      </SafeAreaView>
    </OfflineToastWrapper>
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
