import { Text, View, FlatList, StyleSheet } from 'react-native';

export default function ListaAlunos() {
  const data = ["Gabriel", "Dom", "Costa", "Lamborghini", "Milionário"];

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.text}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
}



