import React, { Component } from 'react'
import {ScrollView, Image, View } from 'react-native'
import { Container, Header,Card,CardItem, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base'
import Piano from './Piano'

class EntrenamientoRitmo extends Component {
    render() {
        return (
          <Container>
            <Header style={{backgroundColor:'#d9113c'}}>
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
               
            
            <Piano/>
            </ScrollView >
            </Content>
            
          </Container>
        )
    }
}
export default EntrenamientoRitmo;