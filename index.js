//Import library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

//Create a component
const App = () => {
  return(
    <Text>Some Text</Text>
  );
};


//Render it to the device
AppRegistry.registerComponent('albums', () => App);
// Pass a function to return first component me created



// import { AppRegistry } from 'react-native';
// import App from './App';
// AppRegistry.registerComponent('albums', () => App);
