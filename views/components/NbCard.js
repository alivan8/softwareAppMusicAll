import React, { Component } from 'react';
import {
  Image,
  TouchableOpacity,
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
      <TouchableOpacity onPress={this.props.onPress}>
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
          <CardItem>
            <Body>
              <Image
                source={{ uri: 'teach_child_' + (Math.floor(Math.random() * 4) + 1) }}
                style={{ height: 200, width: 200, flex: 1, alignSelf: 'center' }}
              />
              <Text>
                {this.props.descript}
              </Text>
            </Body>
          </CardItem>
        </Card>
      </TouchableOpacity>
    );
  }
}