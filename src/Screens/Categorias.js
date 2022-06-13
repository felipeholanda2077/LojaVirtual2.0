import React, { Component, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList, Button } from 'react-native'
import Modal from '../Components/Modal';

export default function Categorias() { 

    const Roupas = [
      {id: 1, nome: "Roupa Masculina",imagem: 'https://i.pinimg.com/236x/2b/4d/f1/2b4df176dacd711c524455d6169c252e.jpg'},
      {id: 2, nome: 'Roupa Feminina', imagem: 'https://img.elo7.com.br/product/zoom/272C52C/blusa-feminina-leticia-roupas-feminina-blusa.jpg' }
    ]

    const Calças = [
      {
        id: 1, 
        nome: 'Calças', 
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imagem: 'https://images2.marisa.com.br/medias/sys_master/images/images/h86/he9/13299375767582/Kit-2-Calcas-Masculinas-Jeans-Skinny-10048457750-C1.jpg'
      }
    ]
    
    return(
      <ScrollView style={style.container}>

          <Text style={style.titulo}>Roupas Superior</Text>
            
            <View style={{flex: 1}}>
            <FlatList 
                data={Roupas}
                renderItem={({item}) => Modal({item})}
                key={(item) => item.id}
                horizontal={true}
            />
            </View>

            <View style={{flex: 1}}>
                <Text style={style.titulo}>Roupas Inferior</Text>
                
                <FlatList 
                data={Calças}
                renderItem={({item}) => (Modal({item}))}
                key={(item) => item.id}
                horizontal={true}
                />
            </View>

            <View style={{marginBottom: 10}}> 
              {/* Espaçamento para não deixar o conteúdo ser tapado pelo Tab Navigator */}
            </View>

            <Text style={{ color: 'black', fontSize: 13, textAlign: 'center', paddingTop: 10, paddingBottom: 20 }}>© Felipe Holanda - BAZAAR 2022</Text>
      </ScrollView>
    )
}

const style = StyleSheet.create({
  container: {
      padding: 10,
      flex: 1,
      
  },
  titulo: {
      fontSize: 26,
      fontWeight: 'bold',
      color: 'black'
  }
})