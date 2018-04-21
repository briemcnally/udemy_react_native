// import libraries for making component
import React from 'react';
import { Text, View } from 'react-native';
//wrap text tag in view

//make component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return(
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
  //style-{textStyle} is a props
};


const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    //between 1 and 0
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};
//make component available to other parts of the app

//Flex blox
// justify content: flex end: push text to bottom, center to middle, flex start is like default
// align items: positioj items in horizonatl space flex-start, center, flex end
//App is the root (only component to use AppRegistry)
//Header is a child component

export default Header;
