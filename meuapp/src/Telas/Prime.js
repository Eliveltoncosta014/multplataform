import { StyleSheet, Text, View } from "react-native";

export default function Prime() {
  return (
    <>
      <View style={estilos.topo}>
        <Text style={estilos.tituloHeader}>Cursos SENAI</Text>

      </View>

      <View>
        <Text> - HTML Completo </Text>
        <Text> - Informática Básica </Text>
        <Text> -                   </Text>
      </View>
    </>
  )
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: 150,
    backgroundColor: "red",
  },
  tituloHeader: {
    width: "100%",
    color: "white",
    textAlign: "center",
    paddingTop: 60,
    fontSize: 20
  },
  CursosContente{
    width:"100%",
    color: "whire",
    textAlign: "center",

    



  }

});
