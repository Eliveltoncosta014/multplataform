import { View, StyleSheet, Text } from "react-native";
import ListaPessoas from "../components/ListaPessoas";


export default function Prime() {
  return (
    <>
      <View style={estilos.topo}>
        <Text style={estilos.tituloHeader}>Cursos SENAI teste</Text>
        <Text style={estilos.tituloHeader}> Lista De Amigos </Text>
      </View>
      <ListaPessoas />
      <View>
        <Text style={estilos.coresTitle}>Lista de Alunos</Text>


      </View>
      <View style={estilos.cursosContent}>
        <Text style={estilos.textTitle}> - HTML Completo</Text>
        <Text> - Informática Básica</Text>
      </View>


    </>
  )
}

const estilos = StyleSheet.create({
  topo: {
    width: "200%",
    height: 200,
    backgroundColor: "red",
  },
  tituloHeader: {
    width: "100%",
    color: "white",
    textAlign: "center",
    paddingTop: 60,
    fontSize: 20
  },
  cursosContent: {
    paddingTop: 25,
  },
  textTitle: {
    color: "blue",
  }
});