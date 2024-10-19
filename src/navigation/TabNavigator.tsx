/* eslint-disable react/no-unstable-nested-components */
import React, {FC} from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import Explore from '../screens/Explore';
import {Text, Icon} from '../components/ui';
import {TYPOGRAPHY} from '../constants/typography';
import Stadiums from '../screens/Stadiums';
import Information from '../screens/Information';
import Contacts from '../screens/Contacts';
import {verticalScale} from '../utils/device-scale';

const tabBarOptions: BottomTabNavigationOptions = {
  tabBarStyle: {
    paddingTop: verticalScale(10),
  },
  tabBarLabelPosition: 'below-icon',
  tabBarLabelStyle: {
    paddingTop: verticalScale(4),
  },
};

const tabBarItemOptions = {
  headerShown: false,
};

const Tab = createBottomTabNavigator();
const TabNavigator: FC = () => {
  return (
    <Tab.Navigator screenOptions={tabBarOptions} initialRouteName="Explore">
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={() => {
          return {
            tabBarIcon: ({focused}) => (
              <Icon
                name="home"
                color={focused ? 'primary_120' : 'gray_60'}
                size={21}
              />
            ),

            tabBarLabel: ({focused}) => (
              <Text
                typography={TYPOGRAPHY.tabBar}
                size={10}
                color={focused ? 'primary_120' : 'gray_60'}>
                Explore
              </Text>
            ),
            ...tabBarItemOptions,
          };
        }}
      />
      <Tab.Screen
        name="Stadiums"
        component={Stadiums}
        options={() => {
          return {
            tabBarIcon: ({focused}) => (
              <Icon
                name="stadium"
                color={focused ? 'primary_120' : 'gray_60'}
                size={21}
              />
            ),

            tabBarLabel: ({focused}) => (
              <Text
                typography={TYPOGRAPHY.tabBar}
                size={10}
                color={focused ? 'primary_120' : 'gray_60'}>
                Stadiums
              </Text>
            ),
            ...tabBarItemOptions,
          };
        }}
      />
      <Tab.Screen
        name="Information"
        component={Information}
        options={() => {
          return {
            tabBarIcon: ({focused}) => (
              <Icon
                name="info"
                color={focused ? 'primary_120' : 'gray_60'}
                size={21}
              />
            ),

            tabBarLabel: ({focused}) => (
              <Text
                typography={TYPOGRAPHY.tabBar}
                size={10}
                color={focused ? 'primary_120' : 'gray_60'}>
                Information
              </Text>
            ),
            ...tabBarItemOptions,
          };
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={Contacts}
        options={() => {
          return {
            tabBarIcon: ({focused}) => (
              <Icon
                name="phone"
                color={focused ? 'primary_120' : 'gray_60'}
                size={21}
              />
            ),

            tabBarLabel: ({focused}) => (
              <Text
                typography={TYPOGRAPHY.tabBar}
                size={10}
                color={focused ? 'primary_120' : 'gray_60'}>
                Contacts
              </Text>
            ),
            ...tabBarItemOptions,
          };
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
