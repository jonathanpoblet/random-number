import React , {useState}from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';



const App = () => {

  const [numero,setNumero] = useState(0);

  const numerosAlAzar = () => {
    let azar = Math.round(Math.random() * 99);
    setNumero(azar)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Numeros al azar!</Text>
      <Text style={styles.numero}>{numero}</Text>
      <TouchableOpacity style={styles.boton} onPress={()=> numerosAlAzar()}>
        <Text style={{fontSize:20}}>Genera un numero</Text>
      </TouchableOpacity>
    </View>
  );

};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'red',
    height:100,
  },
  titulo: {
    color:'#fff',
    fontSize:30,
    marginBottom:20
  },
  boton: {
    padding:15,
    backgroundColor:'#fff',
    borderRadius:30
  },
  numero: {
    fontSize:40,
    marginBottom:20
  }
});

export default App;