import React, {Component} from 'react'
import { Button, View, Text,StyleSheet  } from 'react-native';

  export class TableDetails extends Component{
    
    render(){

        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Table Screen</Text>
                <Button
                title="Go to Details... again"
                />
            </View>
        )
    }
}

export default TableDetails
