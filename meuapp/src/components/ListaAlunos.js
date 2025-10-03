import { Text, View, FlatList, StyleSheet } from 'react-native';

export default function ListaAlunos() {
  const aluno = ["Gabriel", "Dom", "Costa", "Lamborghini", "Milionário", "Drielle ","Elaine", "Isabel", ];

  return (
    <View style={estilos.container}>
      <FlatList
        data={aluno}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={estilos.listItem}>
            <Text style={estilos.bullet}>•</Text>
            <Text style={estilos.text}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
    container: {
        marginTop: 40,
        padding: 20,
    },
    lastItem: {
        flexDirection: "row",
        marginBottom:8,
        padding: 12,
        backgroundColor: "orange",
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 10,
        elevation: 3
    },
    bullet: {
        fontSize: 20,
        marginRight: 8,
    },
    text: {
        fontSize: 16,
    }
});



