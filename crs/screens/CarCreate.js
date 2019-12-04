import React,{Component} from 'react';
import {connect} from 'react-redux';
import { ScrollView, Image, View, Keyboard } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Icon, Text, Grid, Spinner } from 'native-base';
import { ColorWheel } from 'react-native-color-wheel';
import colorsys from 'colorsys';

export default class CarCreate extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            color:'#ffffff'
        }
    }
    componentWillMount(){

    }

    onColorChange(color){
        this.setState({color:colorsys.hsvToHex(color)});
    }
    onButtonPress(){
        Keyboard.dismiss();
        this.props.CarCreate(this.state.name,this.state.color,this.props.navigation);
    }


    render() {
        return (
             <Container>
                 <Content>
                     <Form>
                        <Item>
                            <label>Name</label>    
                            <Input 
                                value={this.state.name}
                                onChangeText={(text)=>this.setState({name:text})}
                            />
                        </Item> 
                        <Item>
                            <label>Color</label>
                            <Icon active name="ios-car" style={{color:this.state.color}}/>
                        </Item>
                        <ColorWheel 
                            initialColor={this.state.color}
                            onColorChange={color=>this.onColorChange(color)}
                            style={{marginleft:20,padding:40,height:200,witdth:200}}
                            thumbStyle={{height:30,width:30,borderRadius:30}}
                        />

                     </Form>
                     <Button style={{margin:15}} block bordered onPress={()=>this.onButtonPress()}>
                        {this.props.loading ? <Spinner color='blue' />:<Text>Save</Text>}
                     </Button>
                 </Content>
             </Container>
        );
    }
}