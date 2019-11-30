import React, { Component } from 'react'
import {  View,Image ,ScrollView} from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
class Diccionario extends Component {
    render() {
        return (
            <Container>
        
        <Content>
        <ScrollView >
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://i.ytimg.com/vi/WRGeLbWOc1Q/maxresdefault.jpg'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://i.ytimg.com/vi/WRGeLbWOc1Q/maxresdefault.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
             
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://i.ytimg.com/vi/WRGeLbWOc1Q/maxresdefault.jpg'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://i.ytimg.com/vi/WRGeLbWOc1Q/maxresdefault.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
             
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://i.ytimg.com/vi/WRGeLbWOc1Q/maxresdefault.jpg'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://i.ytimg.com/vi/WRGeLbWOc1Q/maxresdefault.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
             
            </CardItem>
          </Card>
          </ScrollView>
        </Content>
      </Container>
        )
    }
}

export default Diccionario;
