import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from "../screens/Home";
import Detail from "../screens/Detail";

// const Stack = createStackNavigator();

const AppNavigator = createStackNavigator(
    {
        Home: Home,
        Detail: Detail,
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none',
        navigationOptions: {
        }
    }
);

export default createAppContainer(AppNavigator);