import React , {useState}from 'react';
import {Text, View, StyleSheet, Image, Button, Alert, TouchableOpacity} from 'react-native';
import image from './assets/diamante.png';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';


const App = () => {

  const [imagen,setImagen] = useState(null);

  let openImagePickerAsync = async () => {
    
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if(permissionResult.granted === false) {
      alert('Permission to access camera is required');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();

    if(pickerResult.cancelled === true) { 
      return;
    }

    setImagen({ localUri: pickerResult.uri })
  }

  const openShareDialog = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert('Compartir no esta disponible en tu plataforma');
      return
    };

    await Sharing.shareAsync(imagen.localUri);
  }

  return (
  <View style={styles.container}>
    <Text style={styles.title}>Pick an Image!</Text>
    <TouchableOpacity onPress={openImagePickerAsync}>
      <Image
        
        source={{
          uri:
          imagen !== null
          ? imagen.localUri
          : 'https://picsum.photos/200/200'}}
        style={styles.image}
      />
    </TouchableOpacity>
      {imagen
        ?
        (<TouchableOpacity style={styles.button} onPress={openShareDialog}>
          <Text>Share this image</Text>
        </TouchableOpacity>)
        : (<View/>)}
  </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#2929ba',
  },
  title:{
    fontSize:30,
    color:'#fff'
  },
  image:{
    height:200,
    width:200,
  },
  button:{
    backgroundColor:'green'
  }
});

export default App;