import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './src/Telas/Home';
import Sobre from './src/Telas/sobre';
const Stack = createNativeStackNavigator();


export default function MainNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName= "Home">
                <Stack.Screen name="Home" component={Home} opitions={{headerShow:false}}/>
                <Stack.Screen name="Sobre" component={Sobre}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}