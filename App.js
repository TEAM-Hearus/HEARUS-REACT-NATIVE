import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as ScreenOrientation from 'expo-screen-orientation';
import * as Font from "expo-font";

import Test from './pages/test/Test'
import TestHome from './pages/testHome/TestHome';
import LoginEmail from './pages/loginEmail/LoginEmail';
import LoginOAuth from './pages/loginOAuth/LoginOAuth';
import SignUpEmail from './pages/signUpEmail/SignUpEmail';
import SignUpOAuth from './pages/signUpOAuth/SignUpOAuth';
import Onboarding from './pages/onboarding/Onboarding';
import Home from './pages/home/Home';
import KeywordList from './pages/keywordList/KeywordList';
import DownloadedFiles from './pages/downloadedFiles/DownloadedFiles';
import ScheduleWeek from './pages/scheduleWeek/ScheduleWeek';
import SharedStorage from './pages/sharedStorage/SharedStorage';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isFont, setIsFont] = useState(false);

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    return () => {
      ScreenOrientation.unlockAsync();
    };
  }, []);

  useEffect(() => {
    const fontMap = {
      "Regular": require('./shared/fonts/Pretendard-Regular.ttf'),
      "Bold": require('./shared/fonts/Pretendard-Bold.ttf'),
    }

    Font.loadAsync(fontMap);
    setIsFont(true);

    return () => {
      // await Font.unloadAsync(fontMap);
      setIsFont(false);
    }
  },[]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="TestHome">
        <Stack.Screen name="TestHome" component={TestHome} />
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="LoginEmail" component={LoginEmail} />
        <Stack.Screen name="LoginOAuth" component={LoginOAuth} />
        <Stack.Screen name="SignUpEmail" component={SignUpEmail} />
        <Stack.Screen name="SignUpOAuth" component={SignUpOAuth} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="KeywordList" component={KeywordList} />
        <Stack.Screen name="DownloadedFiles" component={DownloadedFiles} />
        <Stack.Screen name="ScheduleWeek" component={ScheduleWeek} />
        <Stack.Screen name="SharedStorage" component={SharedStorage} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}