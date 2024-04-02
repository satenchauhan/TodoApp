import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import {showError} from '../util/helper';
import {Linking} from 'react-native';
import {base_url} from './../util/linking';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const isApproved =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (isApproved) {
    // console.log('Authorization status: ', authStatus);
    getFCMToken();
  } else {
    console.log('Authorization status failed');
    showError('Authorization status:  Failed');
  }
}

const getFCMToken = async () => {
  let fcmToken = await AsyncStorage.getItem('fcmToken');
  console.log('Old saved FCM Token------->', fcmToken);
  if (!fcmToken) {
    try {
      const new_fcmToken = await messaging().getToken();
      if (new_fcmToken) {
        console.log('New  generated FCM Token====>', new_fcmToken);
        await AsyncStorage.setItem('fcmToken', new_fcmToken);
      }
    } catch (error) {
      // console.log('FCM Token not generated*********', error);
      showError(error.message);
    }
  }
};

export const notificationListener = () => {
  messaging().onNotificationOpenedApp(msg => {
    console.log('onOpened in background state', msg);
    Linking.openURL(base_url + msg.data.screen);
  });

  messaging().onMessage(async msg => {
    console.log('Received in forground on Message===========>', msg);
  });

  messaging()
    .getInitialNotification()
    .then(msg => {
      if (msg) {
        console.log('Initial inactive state', msg.notification);
      }
    });
};

export const unsubscribeFCMNotification = () => {
  const unsubscribe = messaging().onMessage(async remoteMessage => {
    Alert.alert('A new FCM message arrived !', JSON.stringify(remoteMessage));
  });
  return unsubscribe;
};

/** Legacy FCM Cloud Messaging API Server key
 * server key :AAAAhq4YnU0:APA91bHvcszUhImCt8wDIk6L-Uz9AsSyyeglFrkH7jC0kusfmEAm1xHLjfy15Q27QWtn3Zs-_Si0VsbymrL3mkh4H5vw03WBqqZHknkraiyXqraLV1rDfXH7wU-5hyrz0Kk-Ku86DJSz
 * sender ID: 578446466381
 *Device token
  dMOhHyKQSdSfnwtcm-0QzH:APA91bFvZqSwYPaaZmQuzv_UEDwrawZhihQGay1j3lL6ZiFSeUAEtoHlv1X6ZK-wkSjlgj8U58pYiL8N8m3gJEDzo_C6sj0sMVzCvlHwPIq30DPiNPmj5dzCzbBAe9HGSFGrdFNNXNnl
*/
