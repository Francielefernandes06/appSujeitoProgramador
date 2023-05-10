import React from 'react';
import {View, Text, Image, Button, StyleSheet} from 'react-native';


function GroupStyles(){
  
      return(
          <View style={styles.container}>
              <Text style={[styles.titulo, styles.textoEscuro]}>Franciele Fernandes</Text>
              <Text style={styles.titulo}>24 anos</Text>
              <Text style={styles.subtitulo}>A linda</Text>
            
          </View>
      );
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#87CEEB',
    alignItems:'center',
    
  },
  titulo:{
    fontSize:24,
    
  },
  subtitulo:{
    fontSize:18,
    color: '#000'
  },
  textoEscuro:{
    color:'#000'
  }
});

export default GroupStyles;