import PushNotification from 'react-native-push-notification';

const LocalNotification = () => {
  const key = Date.now().toString();
  console.log('-====================>', key);
  PushNotification.createChannel(
    {
      channelId: key,
      channelName: 'Local message',
      channelDescription: 'Notification for local message',
      importance: 4,
      vibrate: true,
    },
    created => console.log(`createdChannel returned ${created}`),
  );
  PushNotification.localNotification({
    channelId: key,
    title: 'Local Message',
    message: 'Saten Push Message',
  });
};

export default LocalNotification;
