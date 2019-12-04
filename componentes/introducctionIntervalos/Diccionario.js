import React, { Component } from 'react'
import {  View,Image ,ScrollView,  TouchableOpacity,} from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import Sound from 'react-native-sound';
class Diccionario extends Component {
  constructor(props){
    super(props);
  
    this.sound={};
    const soundList = [ "C", "Cs", "D", "Ds", "E", "F", "Fs", "G", "Gs", "A", "As", "B" ]
    soundList.forEach(note=>{
      this.sound[note]= new Sound(note+".mp3",Sound.MAIN_BUNDLE);
    });
  }
  stroke(note){
    setTimeout( () => {
      this.sound[note].play(success => {
        if ( success ) {
          console.log("successfully finished playing.");
        } else {
          console.log("failed to play the sound.");
        }
      });
    }, 1);
  }

  stop(note){
    setTimeout( () => {
      // gradually decrease the volume
      for (let i=0; i<2000; i++) {
        this.sound[note].setVolume( 1.0-i/2000. );
      }
      this.sound[note].stop();
      this.sound[note].setVolume( 1.0 );
    }, 1 )
  }

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
                <View 
                 onTouchStart={() => this.stroke("Cs")}
                 onTouchEnd={() => this.stop("Cs")}
                ><Text style={{fontWeight: 'bold',fontSize:13,color:'#23a34f'}}>ASCENDENTE </Text>
                </View>
            
                <View 
                 onTouchStart={() => this.stroke("Cs")}
                 onTouchEnd={() => this.stop("Cs")}
                ><Text style={{fontWeight: 'bold',fontSize:13,color:'#23a34f',paddingLeft:10}}>DESCENDENTE </Text>
                </View>
                <View 
                 onTouchStart={() => this.stroke("Cs")}
                 onTouchEnd={() => this.stop("Cs")}
                ><Text style={{fontWeight: 'bold',fontSize:13,color:'#23a34f',paddingLeft:10}}>ARMONICO </Text>
                </View>
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
                <View 
                 onTouchStart={() => this.stroke("Cs")}
                 onTouchEnd={() => this.stop("Cs")}
                ><Text style={{fontWeight: 'bold',fontSize:13,color:'#23a34f'}}>ASCENDENTE </Text>
                </View>
            
                <View 
                 onTouchStart={() => this.stroke("Cs")}
                 onTouchEnd={() => this.stop("Cs")}
                ><Text style={{fontWeight: 'bold',fontSize:13,color:'#23a34f',paddingLeft:10}}>DESCENDENTE </Text>
                </View>
                <View 
                 onTouchStart={() => this.stroke("Cs")}
                 onTouchEnd={() => this.stop("Cs")}
                ><Text style={{fontWeight: 'bold',fontSize:13,color:'#23a34f',paddingLeft:10}}>ARMONICO </Text>
                </View>
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
                <View 
                 onTouchStart={() => this.stroke("Cs")}
                 onTouchEnd={() => this.stop("Cs")}
                ><Text style={{fontWeight: 'bold',fontSize:13,color:'#23a34f'}}>ASCENDENTE </Text>
                </View>
            
                <View 
                 onTouchStart={() => this.stroke("Cs")}
                 onTouchEnd={() => this.stop("Cs")}
                ><Text style={{fontWeight: 'bold',fontSize:13,color:'#23a34f',paddingLeft:10}}>DESCENDENTE </Text>
                </View>
                <View 
                 onTouchStart={() => this.stroke("Cs")}
                 onTouchEnd={() => this.stop("Cs")}
                ><Text style={{fontWeight: 'bold',fontSize:13,color:'#23a34f',paddingLeft:10}}>ARMONICO </Text>
                </View>
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
