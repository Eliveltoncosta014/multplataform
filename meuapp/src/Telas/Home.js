import React from 'react'
import { View, Text } from 'react-native'
import Card from '../Components/Card'
import { useNavigation } from "@react-navigation/native";
export default function Home() {
 const navigation = useNavigation();
  return (
    <View>
      <Card
        title="Sobre"
        content="Saiba mais sobre nossos serviços."
        TextButton="Ir para sobre*"
        onPress={
            ()=> navigation.navigate('Sobre')}
      />
      <Card
        title="Faq "
        content="Saiba mais sobre Faq."
        TextButton="Ir para Faq *"
         onPress={
            ()=> navigation.navigate('Faq')}
      />

    </View>
  )
}
