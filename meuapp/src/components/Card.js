import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";


export default function Card(props) {
    const navigation = useNavigation();
    return (
        <View style={estilos.container}>
            <Text Style={estilos.Cardtitle}>{props.title}</Text>
            <Text Style={estilos.CardContent}>{props.content}</Text>
              <View style={estilos.line}/>
            <Button
                title={props.TextButton}
                onPress={props.onPress}

            />
        </View>

    )
}

const estilos = StyleSheet.create({
    line: {
        backgroundColor: "#b8ababff",
        borderRadius: 1.58,
        shadowColor: 'blue',
        shadowOpacity: 0.2,
        elevation: 2,
        padding: 20,
        margin: 20,
    },
    Cardtitle: {
        fontSize: 18,
        fontWeight: 'black',
        marginBottom: 10,

    },
    CardContent: {
        fontSize: 14,
        marginBottom: 10,
        

    },
});