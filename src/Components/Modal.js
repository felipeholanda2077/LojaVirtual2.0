import React, { useState } from 'react'
import { View, Text, Image, Button, TouchableOpacity, ScrollView, Linking } from 'react-native'
import Modal from "react-native-modal";
import Produto from '../../Navigation/StackNavigator';


// Criação do Modal
const Detalhes = (props) => {
  const [getModal, setModal] = useState(false);

  const AtualizaModal = () => {
    setModal(!getModal);
  };


  return (
    <View>
      <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => {Linking.openURL("https://www.lojasrenner.com.br/p/jaqueta-alongada-jeans-com-patches-e-bolsos/-/A-625815568-br.lr?sku=625815592")} }>
        <Text style={{ color: '#03c0ff' }}>Ver detalhes</Text>
      </TouchableOpacity>

      <Modal isVisible={getModal}>
        <View style={{ flex: 1, backgroundColor: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center', padding: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{props.nome2}</Text>
          <Image style={{ width: 150, height: 200, borderRadius: 10, margin: 10 }} source={{ uri: props.imagem2 }} />
          <Text style={{ fontWeight: 'bold' }}>{props.preco2}</Text>
          <ScrollView style={{ flex: 1, height: 10, padding: 10 }}>
            <Text>{props.descricao2}</Text>
            <Text></Text>
            <Text>{props.descricao2}</Text>
          </ScrollView>
          <Text></Text>
          <Button title="Voltar" onPress={AtualizaModal} />
        </View>
      </Modal>
    </View>
  );

}

// Criação do componente principal
export default function Jogo({ item }) {

  return (
    <View style={{ width: 180, marginBottom: 5 }}>
      <View style={{ height: 200, flex: 1, margin: 10 }}>
        <Image source={{ uri: item.imagem }} style={{ flex: 1, borderRadius: 20 }} />
      </View>
      <View style={{ justifyContent: 'center' }}>
        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>{item.nome}</Text>
      </View>
      <View>
        <Text style={{ textAlign: 'center', marginTop: 5 }}>{item.preco}</Text>
        <Detalhes nome2={item.nome} preco2={item.preco} descricao2={item.descricao} imagem2={item.imagem} />
      </View>
    </View>
  )
}