import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export const ProfileScreen = ({route}) => {
  const {id, name} = route?.params || {};
  const navigation = useNavigation();
  const goToNextScreen = () => {
    navigation.navigate('SettingScreen');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Profile Screen</Text>
      <Text style={styles.txt}>User ID: {id}</Text>
      <Text style={styles.txt}>User name: {name}</Text>
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
