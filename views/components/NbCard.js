import React, { Component } from 'react';
import {
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

export default class NbCard extends Component {
  constructor(props) {
    super(props);
  }

  

  render() {

    // const { width } = Dimensions.get('window');
    // const factor = item.width / width;
    // const height = item.height / factor;

    return (
      <TouchableOpacity onPress={this.props.onPress} activeOpacity={0.5}>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Left>
              <Thumbnail square source={{ uri: 'music_study' }} />
              <Body>
                <Text>{this.props.title}</Text>
                <Text note>April 15, 2016</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image
                source={{ uri: this.props.imgUri }}
                style={styles.cardImage}
              />
            </CardItem>
            <CardItem>              
              <Text>
                {this.props.descript}
              </Text>
          </CardItem>
        </Card>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  cardImage: {
    flex: 1,
    width: null,  // según documentación de NativeBase Card Image
    height: 300,
  }
});