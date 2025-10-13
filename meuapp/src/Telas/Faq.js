import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
export default function Faq() {
  return (
  
  <View style={estilos.container}>
    <Text style={estilos.titulo}>FAQs (perguntas frequentes)</Text>
        <Text style= {estilos.perguntas}>•Faq reclame aqui</Text>
          <Text style={estilos.perguntas}> •Recuperar senha </Text>
        <Text style= {estilos.perguntas}>• Recuperar emai-l</Text>
        <Text style={estilos.perguntas}>•               </Text>




  </View>


  )
}
const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 120,
        backgroundColor: "#d7d7de",
        borderBottomColor: "#9c9ca1ff",
        borderBottomWidth: 3
      
      },
    titulo: {
        width: "100%",
        textAlign: 'center',
        color: "#ff7b00ff",
        fontWeight: "bold",
        fontSize: 25,
        paddingTop: 40
    },
    perguntas:{
         paddingTop:30,
         fontSize: 25,

      





    }
});
