// app/_layout.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './tabs/HomeScreen';
import AboutPage from './tabs/AboutPage';
import UserProfilePage from './tabs/UserProfilePage';
import { RootParamList } from './types/navigation';

const Tab = createBottomTabNavigator<RootParamList>();

export default function Layout() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About" component={AboutPage} />
        <Tab.Screen name="UserProfile" component={UserProfilePage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
