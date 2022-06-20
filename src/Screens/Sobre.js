import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
const Sobre = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sobre a Loja</Text>

      <Text style={styles.text}>{'\n'}{'\n'}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
    
    
    
      <Text style={{ color: 'black', fontSize: 13, textAlign: 'center', paddingTop: 50, paddingBottom: 20 }}>© Felipe Holanda - BAZAAR 2022</Text>
      </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Opns Sans',
    color: 'black'
  },
  titulo: {
    color: 'black',
    fontSize: 20,

  }
});
export default Sobre;