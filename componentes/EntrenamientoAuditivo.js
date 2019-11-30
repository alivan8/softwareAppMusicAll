import React, { Component } from 'react';
import {
  StyleSheet, 
  Alert, 
  ListView,  
  TouchableOpacity,
  ScrollView, 
  Image,
  
  Text, 
  View, 
  FlatList, 
  Platform, 
  StatusBar} from 'react-native';
import { Container, Header, Title, Content,  Left, Right, Body, Icon,Button } from 'native-base';


 class EntrenamientoAuditivo extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  onPress = () => {
    this.setState({
      count: this.state.count+1
    })
  }
    render() {
      const {navigation}=this.props;
      console.log(this.props);
        return (
            <Container>
            <Header style={{backgroundColor:'#71c418'}}>
              <Left>
              
              </Left>
              <Body>
                <Title>Header</Title>
              </Body>
              <Right />
            </Header>
            <Content>
            <ScrollView >
                        <View style={styles.container}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      navigation.navigate('tabAuditivo');
                    }}
                  >
                    <Text> Touch Here </Text>
                  </TouchableOpacity>
                  <View style={[styles.countContainer]}>
                    <Text style={[styles.countText]}>
                        { this.state.count !== 0 ? this.state.count: null}
                      </Text>
                    </View>
                  </View>
             </ScrollView>
            </Content>
            
          </Container>
       
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  }
})


export default EntrenamientoAuditivo;