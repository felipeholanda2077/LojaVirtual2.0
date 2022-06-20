import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../src/Screens/Home'
import Categorias from '../src/Screens/Categorias';
import Sobre from '../src/Screens/Sobre';
import Icon from 'react-native-vector-icons/Ionicons';
import Cartao from '../src/Screens/Cartao';

const Tabs = createBottomTabNavigator();
const TabsNavigator = () => {
  return (
    <Tabs.Navigator

    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        // Configuramos os icones que irão aparecer caso a tela esteja selecionada ou não
        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home-outline';
        } else if (route.name === 'Categorias') {
          iconName = focused
          ? 'list'
          : 'list-outline';
        } else if (route.name === 'Sobre') {
          iconName = focused
          ? 'info'
          : 'info-outline';
        }
        else if (route.name === 'Cartões') {
          iconName = focused
          ? 'card'
          : 'card-outline';
        }

        // Retornamos o ícone
        return <Icon name={iconName} size={size} color={color} />;
      },
      // Definimos as cores dos ícones
      tabBarActiveTintColor: '#0d6efd',
      tabBarInactiveTintColor: 'gray',
    })}    

    >
      <Tabs.Screen 
        name="Home" 
        component={Home} 
        options={{headerShown: false}} 
      />
      <Tabs.Screen 
        name="Categorias" 
        component={Categorias}  
      />
      <Tabs.Screen 
        name="Sobre" 
        component={Sobre}      
      />
      <Tabs.Screen 
        name="Cartões" 
        component={Cartao}      
      />
    </Tabs.Navigator>
  );
};
export default TabsNavigator;