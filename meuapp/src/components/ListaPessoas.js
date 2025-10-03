import { Text, View, StyleSheet } from 'react-native'

export default function ListaPessoas() {
  const pessoas = [
    {
      id: 1,
      nome: 'juliana',
      idade: 20,
    },
    {
      id: 2,
      nome: 'Biscoito',
      idade: 40,
    },
    {
      id: 3,
      nome: 'Dom',
      idade: 33,

    }
  ];


  return (
    <View>
      <Text style={estilos.titulo}>Lista De Pessoas</Text>

      {pessoas.map((pessoa) => (
        <View style={estilos.card}>
          <Text>{pessoa.nome}</Text>
          <Text>{pessoa.idade}</Text>
        </View>
      ))}
    </View>
  )
}
const estilos = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40,
  },
  titulo: {
    fontSize: 22,
    frontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center'
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,


  }
})