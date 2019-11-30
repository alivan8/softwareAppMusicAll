import React, { Component } from 'react'
import {ScrollView, Image, View } from 'react-native'
import { Container, Header,Card,CardItem, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base'

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
               
            <Content>
          <Card>
            <CardItem header>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                La teoría musical es un campo de estudio que tiene por objeto la investigación de los diversos elementos de la música, entre ellos el desarrollo y la metodología para analizar, escuchar, comprender y componer música. El Diccionario Oxford de la Música1​ describe tres aspectos interrelacionados:

El primero se refiere a los denominados “rudimentos” musicales, que en la enseñanza se reducen a los elementos de notación como armaduras, indicadores de compás, valores rítmicos y demás. En este sentido, la teoría se considera parte preliminar indispensable para el estudio de la armonía, el contrapunto y la forma musical.
El segundo al estudio de los escritos musicales de la antigüedad hasta nuestros días (estética, notación, acústica, diseño de instrumentos musicales, prácticas interpretativas, etcétera.).
El tercer aspecto se refiere al campo de los estudios musicológicos que persiguen una definición de los procesos y principios generales de la música, un área de investigación que puede diferenciarse del análisis al tomar como punto de partida no la obra o la interpretación individual, sino los materiales fundamentales que la conforman.
Una persona especializada en teoría musical es un teórico musical.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>GeekyAnts</Text>
            </CardItem>
         </Card>
        </Content>
             </ScrollView>
            </Content>
            
          </Container>
        )
    }
}
export default EntrenamientoRitmo;