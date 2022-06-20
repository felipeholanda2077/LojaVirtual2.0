import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'

let Meiosdepagamento = "https://cdn.shopify.com/s/files/1/0495/6241/9360/files/imagem_2021-12-24_112908_x200.png?v=1640356151";

let imagens = []
    for (let i = 0; i < 1; i++) {
      imagens.push(<Image style={{alignSelf: 'center', width: 400, height: 145, margin: 10}}  source={{ uri: Meiosdepagamento }} />)
    }


const Cartao = () => {
    return (
      <View style={style.container}>
        <Text style={style.titulo}>Nossos metodos de pagamento</Text>

        {imagens}
  
        <Text style={style.text}>{'\n'}{'\n'}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      
      
      
        <Text style={{ color: 'black', fontSize: 13, textAlign: 'center', paddingTop: 20, paddingBottom: 20 }}>© Felipe Holanda - BAZAAR 2022</Text>
        </View>
    );
  };

  const style = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        
    },
    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'black'
    },
    text: {
        fontSize: 15,
        textAlign: 'center',
        color: 'black'
    }
})
  export default Cartao;