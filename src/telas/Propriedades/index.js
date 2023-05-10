import React from 'react';
import {View, Text, Image, Button} from 'react-native';

function Propriedades(){
  return(
    <View style={{flex:1, backgroundColor:'#000'}}>
      <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#d94b70'}}>
        <Text style={{fontSize:24}}>BI</Text>
      </View>
      <View style={{flex:1,justifyContent:'center', alignItems:'center', backgroundColor:'#9a4f96'}}>
      <Text style={{fontSize:24}}>SEX</Text>
      </View>
      <View style={{flex:1, justifyContent:'center', alignItems:'center',backgroundColor:'#1548a9'}}>
      <Text style={{fontSize:24}}>UAU</Text>
      </View>
    </View>
  )

}

export default Propriedades;