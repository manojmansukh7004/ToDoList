/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, StatusBar, SafeAreaView } from 'react-native';
//  import { Provider } from 'react-redux';
import Dashboard from './src/Pages/Dashboard'
import NewTask from './src/Pages/NewTask'
import RootNavigator from './src/Navigation/RootNavigator'
import Test from './src/Pages/Test'
import * as colors from './src/Constant/colors'
import { NavigationContainer } from '@react-navigation/native';
const App = () => {
  return (
    // <SafeAreaView style={{ flex: 1 }}>

    //   <StatusBar barStyle="light-content" backgroundColor={colors.COLOR_LIGHT_NAVY_BLUE} />
    //   <NavigationContainer>
    //     <RootNavigator />
    //   </NavigationContainer>
    // </SafeAreaView>
    <Test/>
  );
};

export default App;