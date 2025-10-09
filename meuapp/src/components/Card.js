import {StyleSheet,Text,View} from "react-native "

export default function Card() {
    return (
        <View>
            <Text Style= {estilos.cardTitle}>Sobre</Text>
            <Text Style= {estilos.cardContent}>Saiba mais sobre nós</Text>
            <Button
                title="Ir para Sobre"
                onPress={
                    () => alert("Botão pressionado")

                }
            />
        </View>

    )
}

const estilos = StyleSheet.create({

    container: {
        backgroundColor: "#ffff",
        padding: 20,
        borderRadius: 1.41,
        shadowOpacity: 0.9,
        elevation: 2,
        margin: 20

    },
    cardTitle: {
        fontSize:18,
        fontWeight:"bold",
        marginBottom:10,

    },
    cardContent:{
        fontSize: 14,
        marginBottom: 10,
    },



});