import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, Image, Button, FlatList, ActivityIndicator} from 'react-native';

import * as firebase from 'firebase';

export default class Home extends Component {
  constructor(props) {
    super(props);
    console.log('Constructor Called.');
    this.state = {
      Pesan: []
    };
  }

  componentDidMount() {
    firebase.database().ref('Pesan/').on('value', (data) => {
      if (data.val())
      {
        this.setState({Pesan:data.val()})
        console.log(data.val())
      }
      console.log(data)
    })
  }


  getFlatListPesan() {
    return(
      <FlatList
        key='fListPesan'
        data={this.state.Pesan}
        keyExtractor={(item, index) => (`${item}--${index}`)}
        renderItem= {({item, index}) =>
          <View style={styles.isiInfomasi}>
            <View>
              <Text style={{fontSize:9}}>{item.waktu}</Text>
            </View>
            <Text>{item.pesan}</Text>
          </View>
        }
      />);
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <View style={styles.infoFakultas}>
            <Text>Informasi Fakultas : </Text>
            <ScrollView>
              <View>
              {this.getFlatListPesan()}
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2
  },
  infoFakultas: {
    margin: 20,
    padding: 10,
    borderWidth: 0,
  },
  isiInfomasi: {
    margin: 5,
    padding: 20,
    borderWidth: 2,
    borderRadius: 20,
  }

});
