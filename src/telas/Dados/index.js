import React, {useState} from "react";

import { View, Text,TextInput, Button , StyleSheet} from "react-native";

function Dados(){
  const [nome, setNome]= useState();

  function pegaNome(texto){
    if(texto.length > 0){
      setNome('Bem vindo: '+texto)
    }else{
      setNome('')
    }
    
  }
  return(
    <View style={styles.container}>
      <Text>{nome}</Text>
      <TextInput style={styles.input}
      onChangeText={(texto)=>pegaNome(texto)} />
        
    </View>
  );

}

export default Dados;

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  input:{
    height:40,
    width:200,
    borderWidth:1,
    borderColor:'#fff',
    margin:10,
  }
});