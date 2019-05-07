import React ,{Component} from 'react';
import {TextInput } from 'react-native';
 
export default class TextBox extends Component{
    constructor(){
        super();
        this.state ={
            TextInputValue:''
        }
        this.handleChangeText = this.handleChangeText.bind(this);
    }

    handleChangeText(e){
            let x =this.state;
            x.TextInputValue =e;
            this.setState(x)
    }
    render(){
        return(
            <TextInput value={this.state.TextInputValue}
            onChange={this.handleChangeText}
            style={{height:40,
                    borderColor:'black',
                    borderWidth:1
            }}
            
            />

 
           
         )
    }
}