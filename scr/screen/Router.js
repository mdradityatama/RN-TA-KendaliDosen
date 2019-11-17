import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Dosen from './Dosen';
import Informasi from './Informasi';

const AppNavigator = createBottomTabNavigator(
  {
    Dosen,
    Informasi
  },
  {
    headerMode: 'none'
  }
);

export default createAppContainer(AppNavigator);
