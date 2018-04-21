//Import library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

//Create a component
//Component nesting
const App = () => {
  return(
    <Header/>
  );
};


//Render it to the device
AppRegistry.registerComponent('albums', () => App);
// Pass a function to return first component me created



// import { AppRegistry } from 'react-native';
// import App from './App';
// AppRegistry.registerComponent('albums', () => App);
