import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'

let ProdutoImg = "https://img.lojasrenner.com.br/item/624030110/zoom/1.jpg";

let imagens = []
    for (let i = 0; i < 1; i++) {
      imagens.push(<Image style={{alignSelf: 'baseline', width: 400, height: 145, margin: 10}}  source={{ uri: ProdutoImg }} />)
    }


const Produto = () => {
    return (
      <View style={style.container}>
        <Text style={style.titulo}>Produto X</Text>

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
        textAlign: 'right',
        color: 'black'
    }
})
  export default Produto;