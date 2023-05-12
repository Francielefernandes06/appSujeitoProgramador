import React, {Component} from "react";

import {View, Text, Image, Button} from "react-native";

class Ciclo extends Component{

    constructor(props){
        super(props);
        this.state = {
            nome: 'Franciele',
            contador: 0,
            hora: '00:00:00'
        }
    }

    componentDidMount(){
        console.log('Executou componentDidMount');

        setInterval(()=>{
            this.setState({ hora: new Date().toLocaleTimeString()})
        },1000);
    }

    componentDidUpdate(){
        console.log('Executou componentDidUpdate');
    }

    componentWillUnmount(){
        console.log('Executou componentWillUnmount');
    }

    shouldComponentUpdate(){
        console.log('Executou shouldComponentUpdate');
        return true;
    }

    render(){
        console.log('Executou render');
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:24}}>{this.state.nome}</Text>
                <Text style={{fontSize:24}}>{this.state.contador}</Text>
                <Text style={{fontSize:24}}>{this.state.hora}</Text>
                <Button title="Adicionar" onPress={()=>{
                    this.setState({contador: this.state.contador + 1})
                }}/>
            </View>
        )
    }
}


export default Ciclo;