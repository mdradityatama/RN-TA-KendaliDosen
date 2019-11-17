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
            <View style={styles.judul}>
              <Text style={{padding: 10, fontWeight: 'bold'}}>Information Faculty</Text>
            </View>
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
    backgroundColor: "rgba(87,161,9,1)"
  },
  header: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2
  },
  infoFakultas: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 50,
    paddingTop: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    position: 'relative',
  },
  judul: {
    position: 'absolute',
    top: -20,
    left: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    width: 230,
    backgroundColor: 'white',
    elevation: 15,
    borderRadius: 4,
    shadowOffset: {
      height: 0,
      width: 0
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    overflow: "visible"
  },
  isiInfomasi: {
    margin: 10,
    padding: 10,
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 4,
    shadowOffset: {
      height: 0,
      width: 0
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    overflow: "visible"
  }

});
