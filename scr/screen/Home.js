import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';

export default class Home extends Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}> Smart Indicator Lecturer </Text>
        </View>
        <View style={{flex: 0.6}}>
          <View style={styles.ketDosen}>
            <Text>Keterangan Dosen Disinih : </Text>
            <View style={{flexDirection: 'row'}}>
              <View style={{paddingTop: 20,paddingBottom: 20,}}>
                <View style={{ borderRadius:50, backgroundColor: 'red', width:15, height:15}}></View>
              </View>
              <Text style={{paddingTop: 20,paddingBottom: 20, paddingLeft: 10,}}>Dosen A</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{paddingTop: 20,paddingBottom: 20,}}>
                <View style={{ borderRadius:50, backgroundColor: 'green', width:15, height:15}}></View>
              </View>
              <Text style={{paddingTop: 20,paddingBottom: 20, paddingLeft: 10,}}>Dosen B</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{paddingTop: 20,paddingBottom: 20,}}>
                <View style={{ borderRadius:50, backgroundColor: 'red', width:15, height:15}}></View>
              </View>
              <Text style={{paddingTop: 20,paddingBottom: 20, paddingLeft: 10,}}>Dosen C</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
            <View style={{paddingTop: 20,paddingBottom: 20,}}>
              <View style={{ borderRadius:50, backgroundColor: 'green', width:15, height:15}}></View>
            </View>
              <Text style={{paddingTop: 20,paddingBottom: 20, paddingLeft: 10,}}>Dosen C</Text>
            </View>
          </View>
        </View>

          <View style={{flex: 1}}>
            <View style={styles.infoFakultas}>
              <Text>Informasi Fakultas : </Text>
              <ScrollView>
                <View style={styles.isiInfomasi}>
                  <Text>Informasi Dari Fakultas berdasarkan informasi terupdate dan terbaru, paling atas adalah informasi paling baru,
                  kemudian disusul informasi sebelumnya dan begitu trus</Text>
                </View>
                <View style={styles.isiInfomasi}>
                  <Text>Informasi Dari Fakultas berdasarkan informasi terupdate dan terbaru, paling atas adalah informasi paling baru,
                  kemudian disusul informasi sebelumnya dan begitu trus</Text>
                </View>
                <View style={styles.isiInfomasi}>
                  <Text>Informasi Dari Fakultas berdasarkan informasi terupdate dan terbaru, paling atas adalah informasi paling baru,
                  kemudian disusul informasi sebelumnya dan begitu trus</Text>
                </View>
                <View style={styles.isiInfomasi}>
                  <Text>Informasi Dari Fakultas berdasarkan informasi terupdate dan terbaru, paling atas adalah informasi paling baru,
                  kemudian disusul informasi sebelumnya dan begitu trus</Text>
                </View>
                <View style={styles.isiInfomasi}>
                  <Text>Informasi Dari Fakultas berdasarkan informasi terupdate dan terbaru, paling atas adalah informasi paling baru,
                  kemudian disusul informasi sebelumnya dan begitu trus</Text>
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
