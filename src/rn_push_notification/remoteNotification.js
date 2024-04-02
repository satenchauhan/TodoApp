import {useEffect} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';
import PushNotification from 'react-native-push-notification';

const checkApplicationPermission = async () => {
  if (Platform.OS === 'android') {
    try {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
    } catch (error) {
      console.error(error);
    }
  }
};

const RemoteNotification = () => {
  useEffect(() => {
    checkApplicationPermission();
    PushNotification.getChannels(function (channel_ids) {
      channel_ids.forEach(id => {
        PushNotification.deleteChannel(id);
      });
    });
    PushNotification.configure({
      onRegister: function (token) {
        console.log('Token Generated=====>', token);
      },

      onNotification: function (notification) {
        const {message, title, name, id} = notification;
        let strTitle: string = JSON.stringify(title).split('"').join('');
        let strBody: string = JSON.stringify(message).split('"').join('');
        let strName: string = JSON.stringify(name).split('"').join('');
        const key: string = JSON.stringify(id).split('"').join('');
        PushNotification.createChannel(
          {
            channelId: key,
            channelName: 'Remote Message',
            channelDescription: 'Notification for remote',
            importance: 4,
            vibrate: true,
          },
          created => console.log(`Remoted Channel cretaed=======> ${created}`),
        );
        PushNotification.localNotification({
          channelId: key,
          title: strTitle,
          message: strBody,
          name: strName,
        });
        console.log(
          'REMOTE NOTIFICATION===>',
          title,
          message,
          name,
          id,
          notification,
        );
      },
      senderID: '578446466381',
      popInitialNotification: true,
      requestPermissions: true,
    });
  }, []);
  return null;
};

export default RemoteNotification;
