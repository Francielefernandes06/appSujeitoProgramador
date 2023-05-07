import React from 'react';
import {View, Text, Image} from 'react-native';


function App(){

    let nome= "Franciele a gatinha";
    let img ='https://reactnative.dev/docs/assets/p_cat2.png'
    return(
        <View style={{
            flex:1,
            backgroundColor:'#87CEEB',
            alignItems:'center',
            justifyContent:'center'
            }}>
            <Text>Hello World!!!</Text>
            <Text style={{color:'#ffff', margin : 15, fontSize: 30}}>Meu Primeiro app</Text>

            <Logo/>
            

        </View>
    );
}

export default App;

function Logo(){
    let img ='https://reactnative.dev/docs/assets/p_cat2.png'
    return(
        <Image
            source={{uri:img}}
            style={{width: 200, height: 200}}
        />
    );
}