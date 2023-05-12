import React, { useState } from "react";

import { View, Text, TextInput, Button, StyleSheet } from "react-native";

function Dados() {
  const [nome, setNome] = useState();
  const [input, setInput] = useState();

  function entrar() {
    pegaNome(input)
  }

  function pegaNome(texto) {
    if (texto.length > 0) {
      setNome('Bem vindo: ' + texto)
    } else {
      setNome('')
    }

  }
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{nome}</Text>
      <TextInput style={styles.input}
        onChangeText={(texto) => setInput(texto)} />

      <Button title="Entrar" onPress={entrar} />

    </View>
  );

}

export default Dados;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 40,
    width: 200,
    borderWidth: 1,
    borderColor: '#fff',
    margin: 10,
  },
  texto:{
    fontSize: 20,
    color: '#fff'


  }
});