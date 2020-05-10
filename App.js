import React from 'react';
import { setCustomText } from 'react-native-global-props';
import LogIn from './components/authentication/LogIn';
import SignUp from './components/authentication/SignUp';
import resetPassword from './components/authentication/resetPassword';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  StyleSheet,
  View,
} from 'react-native';

const customTextProps = {
  style: {
    fontFamily: "Montserrat-Medium"
  }
};

setCustomText(customTextProps);

const App: () => React$Node = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogIn"
                       screenOptions={{headerShown: false}}>
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="resetPassword" component={resetPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
