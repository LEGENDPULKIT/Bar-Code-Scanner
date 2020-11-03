import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import BookTransectionScreen from './screens/BookTransectionScreen';
import SearchScreen from './screens/SearchScreen';

export default class App extends React.Component {
  render(){
  return (
    
   <AppContainer/>
   
  );
}
}
//create Tab Navigation
const TabNavigator=createBottomTabNavigator({
  BookTransection:{screen:BookTransectionScreen},
  Search:{screen:SearchScreen}
})

//create App container
const AppContainer=createAppContainer(TabNavigator)
