import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {notificationListener, requestUserPermission} from '../../fcm-services';
import messaging from '@react-native-firebase/messaging';

// Register background handler this is remote notification while app in sleep inactive mode
messaging().setBackgroundMessageHandler(async msg => {
  console.log('background through remote====>', msg?.data?.screen);
});
export const HomeScreen = () => {
  const navigation = useNavigation();
  const goToNextScreen = () => {
    navigation.navigate('ProfileScreen');
  };
  useEffect(() => {
    requestUserPermission();
    notificationListener();
    // alertPoPupFCMNotification();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Home Screen</Text>
      <Button onPress={goToNextScreen} title="Go To Next" color={'blue'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  txt: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    marginBottom: 40,
  },
});
