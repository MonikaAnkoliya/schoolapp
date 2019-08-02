import React from 'react';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';

import Tab1 from './containers/Tab1';
import Tab2 from './containers/Tab2';


const TabNavigator = createStackNavigator({
  Home: {
    screen: createBottomTabNavigator({
      Home: Tab1,
      Settings: Tab2,
      Class: Tab2,
    }, // human-child
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;

          if (routeName === 'Home') {
            iconName = 'human-child';
            // Sometimes we want to add badges to some icons.
            // You can check the implementation below.
          } else if (routeName === 'Settings') {
            iconName = 'teach';
          } else if (routeName === 'Class') {
            iconName = 'google-classroom';
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    }),
    navigationOptions: ({ navigation }) => ({
      title: 'SchoolApp',
    }),
  },

});

export default createAppContainer(TabNavigator);
