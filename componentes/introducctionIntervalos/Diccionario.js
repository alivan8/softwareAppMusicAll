import React, { Component } from 'react'
import {  View,Image ,ScrollView,  TouchableOpacity,} from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
class Diccionario extends Component {
    render() {
        return (
            <Container>
        
        <Content>
        <ScrollView >

          <Card>
            <View style={{flexDirection:'column'}}>
            
            <CardItem>
              <Left>
                
                <Body>
                <Text style={{fontWeight: 'bold',fontSize:20}}>Unisono Justo</Text>
                 
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody >
            <Left>
                
                <Body>
                <Text style={{color:'#ccb7bd'}}>
                  P1
                  Tonos:0 (0 semitonos)
                  Consonancia Perfecta
                  </Text>
                </Body>
              </Left>
              <Image source={{uri: 'unisonojusto'}} style={{ marginTop:-50, height: 150, width: null, flex: 1 ,marginRight:10}}/>
            </CardItem>
            <CardItem>
              <View style={{flexDirection:'row'}}>
            <TouchableOpacity
                    //style={styles.button}
                    onPress={() => {
                      //navigation.navigate('tabAuditivo');
                    }}
                  >
                     <Text style={{fontWeight: 'bold',fontSize:13,color:'#23a34f'}}>ASCENDENTE </Text>
             </TouchableOpacity>
                  <TouchableOpacity
                    //style={styles.button}
                    onPress={() => {
                      //navigation.navigate('tabAuditivo');
                    }}
                  >
                     <Text style={{fontWeight: 'bold',fontSize:13,paddingLeft:15,color:'#23a34f'}}> DESCENDENTE </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    //style={styles.button}
                    onPress={() => {
                      //navigation.navigate('tabAuditivo');
                    }}
                  >
                    <Text style={{fontWeight: 'bold',fontSize:13,paddingLeft:15,color:'#23a34f'}}> ARMONICO </Text>
                  </TouchableOpacity>
                  </View>
            </CardItem>
            </View>
          </Card>
          <Card>
            <View style={{flexDirection:'column'}}>
            
            <CardItem>
              <Left>
                
                <Body>
                <Text style={{fontWeight: 'bold',fontSize:20}}>Unisono Justo</Text>
                 
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody >
            <Left>
                
                <Body>
                <Text style={{color:'#ccb7bd'}}>
                  P1
                  Tonos:0 (0 semitonos)
                  Consonancia Perfecta
                  </Text>
                </Body>
              </Left>
              <Image source={{uri: 'segundamenor'}} style={{ marginTop:-50, height: 150, width: null, flex: 1 ,marginRight:10}}/>
            </CardItem>
            <CardItem>
              <View style={{flexDirection:'row'}}>
            <TouchableOpacity
                    //style={styles.button}
                    onPress={() => {
                      //navigation.navigate('tabAuditivo');
                    }}
                  >
                     <Text style={{fontWeight: 'bold',fontSize:13,color:'#23a34f'}}>ASCENDENTE </Text>
             </TouchableOpacity>
                  <TouchableOpacity
                    //style={styles.button}
                    onPress={() => {
                      //navigation.navigate('tabAuditivo');
                    }}
                  >
                     <Text style={{fontWeight: 'bold',fontSize:13,paddingLeft:15,color:'#23a34f'}}> DESCENDENTE </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    //style={styles.button}
                    onPress={() => {
                      //navigation.navigate('tabAuditivo');
                    }}
                  >
                    <Text style={{fontWeight: 'bold',fontSize:13,paddingLeft:15,color:'#23a34f'}}> ARMONICO </Text>
                  </TouchableOpacity>
                  </View>
            </CardItem>
            </View>
          </Card>
          <Card>
            <View style={{flexDirection:'column'}}>
            
            <CardItem>
              <Left>
                
                <Body>
                <Text style={{fontWeight: 'bold',fontSize:20}}>Unisono Justo</Text>
                 
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody >
            <Left>
                
                <Body>
                <Text style={{color:'#ccb7bd'}}>
                  P1
                  Tonos:0 (0 semitonos)
                  Consonancia Perfecta
                  </Text>
                </Body>
              </Left>
              <Image source={{uri: 'unisonojusto'}} style={{ marginTop:-50, height: 150, width: null, flex: 1 ,marginRight:10}}/>
            </CardItem>
            <CardItem>
              <View style={{flexDirection:'row'}}>
            <TouchableOpacity
                    //style={styles.button}
                    onPress={() => {
                      //navigation.navigate('tabAuditivo');
                    }}
                  >
                     <Text style={{fontWeight: 'bold',fontSize:13,color:'#23a34f'}}>ASCENDENTE </Text>
             </TouchableOpacity>
                  <TouchableOpacity
                    //style={styles.button}
                    onPress={() => {
                      //navigation.navigate('tabAuditivo');
                    }}
                  >
                     <Text style={{fontWeight: 'bold',fontSize:13,paddingLeft:15,color:'#23a34f'}}> DESCENDENTE </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    //style={styles.button}
                    onPress={() => {
                      //navigation.navigate('tabAuditivo');
                    }}
                  >
                    <Text style={{fontWeight: 'bold',fontSize:13,paddingLeft:15,color:'#23a34f'}}> ARMONICO </Text>
                  </TouchableOpacity>
                  </View>
            </CardItem>
            </View>
          </Card>
         </ScrollView>
        </Content>
      </Container>
        )
    }
}

export default Diccionario;
