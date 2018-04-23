//Import library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//Create a component
//Component nesting
const App = () => {
  return(
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums'}/>
      <AlbumList />
    </View>
  );
};


//Render it to the device
AppRegistry.registerComponent('albums', () => App);
// Pass a function to return first component me created



// import { AppRegistry } from 'react-native';
// import App from './App';
// AppRegistry.registerComponent('albums', () => App);
