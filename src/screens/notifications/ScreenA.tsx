import React, {useEffect} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {notificationListener, requestUserPermission} from '../../fcm-services';

export const ScreenA = () => {
  const navigation = useNavigation();
  const goToNextScreen = () => {
    navigation.navigate('ScreenB');
  };

  useEffect(() => {
    requestUserPermission();
    notificationListener();
    // unsubscribeFCMNotification();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>ScreenA</Text>
      <Button onPress={goToNextScreen} title="Go To Next" color={'blue'} />
      {/* <RemoteNotification /> */}
      {/* <Button title={'Click Here'} onPress={LocalNotification} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  txt: {
    fontSize: 30,
    color: 'green',
    textAlign: 'center',
  },
});
