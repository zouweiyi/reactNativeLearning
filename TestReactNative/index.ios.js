/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';


import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';

var MOCKED_MOVIES_DATA = [
                          {title:'Title',year:'2015',posters:{thumbnail:'http://i.imgur.com/UePbdph.jpg'}}
                          ];

var styles1 = StyleSheet.create({
               container:{
                flex:1,
                flexDirection:'row',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'#F5FCFF',
               },
              thumbnail:{
               width:53,
               height:81,
              },
            rightContainer:{
                backgroundColor:'#888888',
                flex:1,
            },
            title:{
            fontSize:20,
            marginBottom:8,
            textAlign:'center',
            },
            year:{
            textAlign:'center',
            },
                              
});

class TestReactNative extends Component {
  render() {


	  var movie = MOCKED_MOVIES_DATA[0];
    return (
     
        <View style={styles1.container}>
           
            <Image source={{uri:movie.posters.thumbnail}}
                style={styles1.thumbnail}/>
            <View style= {styles1.rightContainer}>
            <Text style={styles1.title} >{movie.title}</Text>
            <Text style={styles1.year}>{movie.year}</Text>
            </View>
        </View>
  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TestReactNative', () => TestReactNative);
