import React, { Component } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    TextInput
  } from 'react-native';
  
class Home extends Component{
  render(){
    const styles = StyleSheet.create({
 
      engine: {
        position: 'absolute',
        right: 0,
      },
     
      sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
      },
      sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
      },
      sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
      },
      highlight: {
        fontWeight: '700',
      },
      footer: {
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
      },
    });
    const {navigation} =this.props
      return (
        <>
             <StatusBar barStyle="dark-content" />
              <SafeAreaView>
                <ScrollView
                  contentInsetAdjustmentBehavior="automatic"
                  style={styles.scrollView}>
                  {global.HermesInternal == null ? null : (
                    <View style={styles.engine}>
                      <Text style={styles.footer}>Engine: Hermes</Text>
                    </View>
                  )}
                  <View style={styles.body}>
                    <View style={styles.sectionContainer}>
                    </View>
                    <View style={styles.sectionContainer}>
                      <Text style={styles.sectionTitle}>Welcome</Text>
                      <Text style={styles.sectionDescription}>Home</Text>
                      <Button 
                        title="Log Out" 
                        onPress={() => navigation.navigate('LoginContainer')}/>
                    </View>
                  </View>
                </ScrollView>
              </SafeAreaView>
          </>
      )
  }
}

export default Home