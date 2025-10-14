import React from 'react'
import { View, Text, StyleSheet, Image, } from 'react-native'
import Image1 from "../../assets/img-1.jpg";
import Image2 from "../../assets/img-2.jpg";
export default function Sobre() {
  const info = {
    nomeApp: "Fut Popeto",
    versao: "1.0.0",
    desenvolvedor: "Pessoa Dev"
  }
  return (
    <View style={estilos.container}>
      <Text>sobre</Text>
      <Image source={Image1} style={estilos.Image} />
      <View style={estilos.line} />
      <Image source={Image2} style={estilos.Image} />
      <View style={estilos.line} />
      <Text style={estilos.titulo}>Sobre o App</Text>
      <Text style={estilos.text}></Text>
      <Text>Nome: ={info.nomeApp}Nome</Text>
      <Text>Versão={info.versao}Versão</Text>
      <Text>Desenvolvedor por ={info.desenvolvedor}Desenvolvido por:</Text>
    </View>
  )
}
const estilos = StyleSheet.create({
  container: {
    padding: 30,
  },
  Image: {
    margin: 10,
    borderRadius: 15,
    borderColor: "black",
    borderWidth: 3,
  },
  line: {
    width: "90%",
    height: 10,
    backgroundColor: "#d5d0d0ff",
    marginVertical: 8,
  },
  titulo: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 5,
    textAlign: 'center',
  },

  text: {
fontSize:25,
color:"blue",
 


}
})
