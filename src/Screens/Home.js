import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView, Linking } from 'react-native'
import Produto from '../Screens/Produto'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'

import Modal from '../Components/Modal';

export default function Home() {


    let Banner1 = "https://siberian.vteximg.com.br/arquivos/ids/177011/NOVIDADES%20MASCULINO%20MOBILE.jpg?v=637758892402070000";

    let imagens = []
    for (let i = 0; i < 1; i++) {
        imagens.push(<Image style={{ alignSelf: 'center', width: 540, height: 400, margin: 10, borderRadius: 10 }} source={{ uri: Banner1 }}/>)
    }

    const Feminina = [ 
        { id: 1, nome: 'Produto 1', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', preco: 'R$ 32,00', imagem: 'https://img.lojasrenner.com.br/item/625815584/zoom/1.jpg' },
        { id: 2, nome: 'Produto 2', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', preco: 'R$ 40,00', imagem: 'https://img.lojasrenner.com.br/item/624030110/zoom/1.jpg' },
        { id: 3, nome: 'Produto 3', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', preco: 'R$ 90,00', imagem: 'https://img.lojasrenner.com.br/item/598798600/zoom/1.jpg' },


    ]

    const Masculina = [
        { id: 1, nome: 'Produto 4', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', preco: 'R$ 120,99', imagem: 'https://damyller.vteximg.com.br/arquivos/ids/597598-475-713/Jaqueta-Biker-Resinada-Masculina-Frente--.jpg?v=637497653752370000' },
        { id: 2, nome: 'Produto 5', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', preco: 'R$ 49,99', imagem: 'https://ph-cdn1.ecosweb.com.br/imagens01/foto/moda-masculina/camisetas-masculinas/camiseta-manga-longa-gola-role-preta_23170_301_1.jpg' },
        { id: 3, nome: 'Produto 6', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', preco: 'R$ 59,99', imagem: 'https://ph-cdn1.ecosweb.com.br/imagens01/foto/moda-masculina/camiseta-manga-curta/camiseta-at-roger-marinho_307888_301_1.jpg' },
    ]

    let Redes = "https://s2.glbimg.com/d6oXwb6hUgp9jEujFafrEsjtvOY=/0x0:1080x288/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/N/J/qWlChvQkGwkNWK3lRpbQ/socialmedias.png";

    let RedesSociais = []
    for (let i = 0; i < 1; i++) {
        RedesSociais.push(<Image style={{ alignSelf: 'center', width: 370, height: 100, margin: 10, borderRadius: 10 }} source={{ uri: Redes }} />)
    }




    return (
        <ScrollView style={style.container}>
            <Text style={{ fontSize: 30, textAlign: 'center', paddingBottom: 10, color: 'white', backgroundColor: 'black', height: 42 }}>BAZZAAR</Text>


            {imagens}




            <View style={{ flex: 1, marginBottom: 15 }}>
                <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', paddingTop: 40 }}>Moda Feminina</Text>

                <FlatList
                    data={Feminina}
                    renderItem={({ item }) => (Modal({ item }))}
                    key={(item) => item.id}
                    horizontal={true}
                /> 
            </View>
            <View style={{ flex: 1, marginBottom: 15 }}>
                <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', paddingTop: 40 }}>Moda Masculina</Text>

                <FlatList
                    data={Masculina}
                    renderItem={({ item }) => (Modal({ item }))}
                    key={(item) => item.id}
                    horizontal={true}
                />
            </View>

            <Text style={{ color: 'black', fontSize: 16, textAlign: 'center', margin: 40 }}>Bem Vindo ao BAZAAR{'\n'}{'\n'}{'\n'}Nossos produtos são inspirados pelas pessoas que estão á nossa volta, com suas belezas e qualidades.{'\n'}{'\n'}Produtos de bom gosto especialmente para você.{'\n'}Descubra "our story" e aproveite as promoçôes imperdiveis.{'\n'}{'\n'}{'\n'}-------------------------------------------------------------------</Text>
            <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', margin: 50 }}>Rua Eusébio 10{'\n'}Centro, Cidade das Águas{'\n'}{'\n'}Abertura de segunda a sexta das 10:00 ás 21:00{'\n'}{'\n'}</Text>

            <Text style={{ color: 'black', fontSize: 16, textAlign: 'center' }}>----------------------------------------------------------------------------</Text>


            <Text style={{ color: 'black', fontSize: 20, textAlign: 'left', margin: 50 }}>Siga-nos nas nossas redes sociais:</Text>

            {RedesSociais}


            <Text style={{ color: 'black', fontSize: 13, textAlign: 'center', paddingTop: 50, paddingBottom: 20 }}>© Felipe Holanda - BAZAAR 2022</Text>


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
    },
    hyperlinkStyle: {
        color: 'blue',
    },
})