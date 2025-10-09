import {StyleSheet,Text,View} from "react-native "

export default function Header() {
    return (
        <View style={estilos.topo}>
            <Text style={estilos.tituloHeader}> Fut Popeto </Text>
        </View>

    )
}
const estilos = StyleSheet.create({
    topo: {
        width:"100%",
        borderBottomColor:"#05051aff",
        borderBottomWidth:3,
        backgroundColor: "#858181",
        height:120,

 },
 tituloHeader:{

        width:"100%",
        textAling:'center',
        color: "orange",
        fontWeight:"bold",
        fontSize: 25,
        paddingTop: 40,

 }

});
