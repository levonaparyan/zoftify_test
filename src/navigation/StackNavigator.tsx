import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import HotelDetails from '../screens/HotelDetails';

export type StackParamList = {
  Tabs:
    | {screen?: 'Explore' | 'Stadiums' | 'Information' | 'Contacts'}
    | undefined;
  HotelDetails: {id: string};
};
export type StackNavigationType = NativeStackNavigationProp<StackParamList>;
export const Stack = createNativeStackNavigator<StackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HotelDetails"
        component={HotelDetails}
        options={() => {
          return {
            headerShown: false,
          };
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
