import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const ScreenD = () => {
  const navigation = useNavigation();
  const goToNextScreen = () => {
    navigation.navigate('ScreenA');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>ScreenD</Text>
      <Button onPress={goToNextScreen} title="Go To Next" color={'blue'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'tomato',
  },
  txt: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
});
