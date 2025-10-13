import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";


export default function Card(props) {
    const navigation = useNavigation();
    return (
        <View style={estilos.container}>
            <Text Style={estilos.Cardtitle}>{props.title}</Text>
            <Text Style={estilos.CardContent}>{props.content}</Text>
            <Button
                title={props.TextButton}
                onPress={props.onPress}

            />
        </View>

    )
}

const estilos = StyleSheet.create({
    container: {
        backgroundColor: "#877d7dff",
        borderRadius: 1.41,
        shadowColor: 'blue',
        shadowOpacity: 0.2,
        elevation: 2,
        padding: 20,
        margin: 20,
    },
    Cardtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,

    },
    CardContent: {
        fontSize: 14,
        marginBottom: 10,

    },
});