import React, { Component } from 'react';
import {Text, View, StyleSheet, ScrollView, Image, Button, FlatList, ActivityIndicator} from 'react-native';

import * as firebase from 'firebase';

export default class Dosen extends Component {
  constructor(props) {
    super(props);
    console.log('Constructor Called.');
    this.state = {
      Dosen: []
    };
  }

  componentDidMount() {
    firebase.database().ref('Dosen/').on('value', (data) => {
      if (data.val())
      {
        this.setState({Dosen:data.val()})
        console.log(data.val())
      }
      console.log(data)
    })
  }

  getFlatListDosen() {
    return (
    <FlatList key="flatList"
      data={this.state.Dosen}
      keyExtractor={(item, index) => (`${item}--${index}`)}
      renderItem = {({ item, index }) =>
        <View style={{flexDirection: 'row'}}>
          <View style={{paddingTop: 20,paddingBottom: 20,}}>
            <View style={{ borderRadius:50, backgroundColor: item.status == 0 ? 'red' : 'green', width:15, height:15}}></View>
          </View>
          <Text style={{paddingTop: 20,paddingBottom: 20, paddingLeft: 10,}}>{item.nama}</Text>
        </View>
      } />
  );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}> Smart Indicator Lecturer </Text>
        </View>

        <View style={{flex: 1}}>
          <View style={styles.ketDosen}>
            <View style={styles.judul}>
              <Text style={{padding: 10, fontWeight: 'bold'}}>Indicator Lecturer</Text>
            </View>
            <ScrollView>
              <View>
              {this.getFlatListDosen()}
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
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white",
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
  ketDosen: {
    position: 'relative',
    marginTop: 50,
    padding: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    flex: 1,
    backgroundColor: 'white',
  },
  judul: {
    position: 'absolute',
    top: -20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
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
});
