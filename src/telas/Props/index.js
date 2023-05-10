import React from "react";

import { View,  Image } from "react-native";

function Props(){
    return(
        <View style={{
            flex:1,
            backgroundColor:'#87CEEB',
            alignItems:'center',
            justifyContent:'center'
            }}>
          
            <Logo Tamanho={300} Altura={300}/>

        </View>
    );
}

export default Props;


function Logo(props){
  let img ='https://reactnative.dev/docs/assets/p_cat2.png'
  return(
      <Image
          source={{uri:img}}
          style={{width: props.tamanho, height: props.altura,}}/>
  );
}