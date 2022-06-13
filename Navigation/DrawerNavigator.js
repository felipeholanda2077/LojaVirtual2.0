import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../src/Screens/Home';
import Sobre from '../src/Screens/Sobre';
import Categorias from '../src/Screens/Categorias';
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Categorias" component={Categorias} />
      <Drawer.Screen name="Sobre" component={Sobre} />

    </Drawer.Navigator>
  );
};
export default DrawerNavigator;