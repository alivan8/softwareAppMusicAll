import React, { Component } from 'react';
import {ScrollView, Image, View } from 'react-native'
import { Container, Header, Card,CardItem,Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base'

class Ejercicio extends Component {
    render() {
        return (
            <Container>
            <Header style={{backgroundColor:'#188bc4'}}>
              <Left>
                <Button transparent>
                  <Icon name='menu' />
                </Button>
              </Left>
              <Body>
                <Title>Header</Title>
              </Body>
              <Right />
            </Header>
            <Content>
            <ScrollView >
               
            <Content>
           
        </Content>
                
             </ScrollView>
            </Content>
            
          </Container>
        )
    }
}


export default Ejercicio;