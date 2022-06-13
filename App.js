import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabsNavigator from './Navigation/TabsNavigator';


export default function App() {
  return (
    <NavigationContainer>
      <TabsNavigator />
    </NavigationContainer>
  );
}

