import React, {Component} from 'react'
import { Button, View, Text, StyleSheet  } from 'react-native';



class Table extends React.Component {
    render() {
     return (
      <Button
       title="Link to Shop"
       onPress={() => this.props.navigation.navigate('Shop', {something:'Page_2'})}
      />
     );
    }
   }

export default Table
