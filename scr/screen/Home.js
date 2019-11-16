import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, Image, Button, FlatList, ActivityIndicator} from 'react-native';

import * as firebase from 'firebase';

export default class Home extends Component {
  constructor(props) {
    super(props);
    console.log('Constructor Called.');
    this.state = {
      Dosen: [],
      Pesan: []
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
    }),

    firebase.database().ref('Pesan/').on('value', (data) => {
      if (data.val())
      {
        this.setState({Pesan:data.val()})
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
        <View style={styles.header}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}> Smart Indicator Lecturer </Text>
        </View>
        <View style={{flex: 0.6}}>
          <View style={styles.ketDosen}>
            <Text>Keterangan Dosen Disinih : </Text>
            <ScrollView>
              <View>
              {this.getFlatListDosen()}
              </View>
            </ScrollView>
          </View>
        </View>

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
  ketDosen: {
    margin: 20,
    padding: 20,
    borderWidth: 2,
    borderRadius: 20,
    flex: 1
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
