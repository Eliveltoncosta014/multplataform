
import { Text, View, ScrollView, } from 'react-native';
import Header from './src/components/Header'
import Card from './src/components/Card';
export default function App() {
  return (
    <>
        
        <ScrollView>
        <Header/>
        <Card />
        </ScrollView>
       
    
    </>

  );
}
