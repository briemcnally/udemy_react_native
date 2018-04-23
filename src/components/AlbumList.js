import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';
// import axiosfrom 'axios';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount(){
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => response.json())
    .then(data => this.setState({ albums: data }));
    }
  //will be execture right before the render method and before
  // any info rendered to screen

  renderAlbums(){
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album}/>);
  }

  render() {
    // console.log(this.state);
    return(
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
//class based component for react to fetch data
//need to define a render methof with some jsx return


//command d is dev tools

//communivate from parent to child with props
//use state when we want to update some data over time
//class based components have access to state but
// functional compoenents do not
