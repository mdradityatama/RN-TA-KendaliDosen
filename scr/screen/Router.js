import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Dosen from './Dosen';
import Informasi from './Informasi';

const AppNavigator = createBottomTabNavigator(
  {
    Dosen: {
      screen: Dosen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) =>
          <Icon name='users' size={25} color={tintColor} />
      }
    },
    Informasi: {
      screen: Informasi,
      navigationOptions: {
        tabBarIcon: ({tintColor}) =>
          <Icon name='info-circle' size={25} color={tintColor} />
      }
    },
  },
  {
    headerMode: 'none',
    tabBarOptions: {
      activeTintColor: 'rgba(87,161,9,1)',
      inactiveTintColor: 'gray'
    }
  }
);

export default createAppContainer(AppNavigator);
