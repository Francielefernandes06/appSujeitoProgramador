import React, {useState} from 'react';
import {View, Text, Image, Button} from 'react-native';

function States(){
const [nome, setNome] = useState('Franciele');
const [idade, setIdade] = useState(23);

function entrar(){
    setNome('Franciele Fernandes');
    setIdade(24);
}

    return(
        <View style={{
            flex:1,
            backgroundColor:'#87CEEB',
            alignItems:'center',
            justifyContent:'center'
            }}>
            <Text style={{fontSize:24,}}>{nome}</Text>
            <Text style={{fontSize:24,}}>{idade} anos</Text>
             <Button title = 'Mudar nome' onPress={entrar}/> 
        </View>
    );
}

export default States;