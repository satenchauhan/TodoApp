import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenA, ScreenB, ScreenC, ScreenD} from '../../screens';
import linking from '../../util/linking';
import FCMNavigationActions from '../FCMNavigationActions';

const Stack = createNativeStackNavigator();

export default function PushNotificationNavigator() {
  return (
    <NavigationContainer
      linking={linking}
      // ref={ref => FCMNavigationActions.setTopLevelNavigator(ref)}
    >
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: 'white'},
          headerTintColor: 'bulue',
        }}>
        <Stack.Screen
          name="ScreenA"
          component={ScreenA}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="ScreenB"
          component={ScreenB}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="ScreenC"
          component={ScreenC}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
