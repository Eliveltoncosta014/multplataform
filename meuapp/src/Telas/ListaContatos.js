import React, { useEffect, useState } from 'react'
import { View, Text, } from 'react-native'
import axios from 'axios';
export default function ListaContatos() {

    
    const [contatos, setContatos] = useState([]);

    // Função para buscar contatos do servidor 
    const listaContatos = () => {
        axios
            .get("http://10.0.2.2:3000/contatos")
            .then((resposta) => {
                setContatos(resposta.data)
            })
            .catch((error) => {
                console.error("Erro ao buscar contatos", error);
            })

    }
    // Use o useEffect para buscar dados 
    useEffect(() => {
        listaContatos();
    }, [])
    return (
        <View>
            <Text>Lista Contatos</Text>
            {contatos.length > 0 ? (
             contatos.map((contato, index) => (
        
            <View key={index}>           
                <Text>{contato.nome}</Text>
                <Text>{contato.telefone}</Text>
                
            </View>
        ))
       ) : (
       <Text> Nenhum contato disponível </Text>
        )}
     </View>
   )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#0f0d0dff",
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 2
  },
  nome: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333"
  },
  telefone: {
    fontSize: 14,
    color: "#666"
  }
});