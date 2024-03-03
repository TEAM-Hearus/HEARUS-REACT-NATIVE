import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TestHome from './pages/testHome/TestHome';
import LoginEmail from './pages/loginEmail/LoginEmail';
import LoginOAuth from './pages/loginOAuth/LoginOAuth';
import SignUpEmail from './pages/signUpEmail/SignUpEmail';
import SignUpOAuth from './pages/signUpOAuth/SignUpOAuth';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="TestHome">
        <Stack.Screen name="TestHome" component={TestHome} />
        <Stack.Screen name="LoginEmail" component={LoginEmail} />
        <Stack.Screen name="LoginOAuth" component={LoginOAuth} />
        <Stack.Screen name="SignUpEmail" component={SignUpEmail} />
        <Stack.Screen name="SignUpOAuth" component={SignUpOAuth} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}