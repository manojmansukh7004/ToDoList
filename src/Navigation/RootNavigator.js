import React from 'react';
import SplashScreen from '../Pages/SplashScreen';
import Dashboard from '../Pages/Dashboard';
import NewTask from '../Pages/NewTask';
import { createStackNavigator } from '@react-navigation/stack'
import { Image, View, StatusBar } from 'react-native';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="NewTask" component={NewTask} />
    </Stack.Navigator>
  );
}

export default RootNavigator