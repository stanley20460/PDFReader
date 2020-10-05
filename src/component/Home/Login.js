import React, { Component } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    // Button,
    // TextInput,
    Image
  } from 'react-native';

import Carousel from '@webileapps/react-native-banner-carousel';
import { Input, Button, Icon } from 'react-native-elements';

class Login extends Component{

  render(){
    const styles = StyleSheet.create({
      container: {
        paddingTop: 50,
      },
      banner: {
        width: 500,
        height: 200,
      },
      engine: {
        position: 'absolute',
        right: 0,
      },
      sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
      },
      labelStyle : {
        fontSize: 18,
      },
      sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
      },
      loginTitle: {
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 10,
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

    const {handleOnChangePassword, handleOnChangeUsername, password, username, navigation, enable, images, handleOnSubmit} = this.props;
    return(
        <>
             <StatusBar barStyle="dark-content" />
              <SafeAreaView>
                <ScrollView
                  contentInsetAdjustmentBehavior="automatic"
                  style={styles.scrollView}>
                  {global.HermesInternal === null ? null : (
                    <View style={styles.engine}>
                      <Text style={styles.footer}>Engine: Hermes</Text>
                    </View>
                  )}
                  <View style={styles.body}>
                    <View style={styles.sectionContainer}>
                      <Text style={styles.loginTitle}>Login</Text>
                      {/* <Text style={styles.sectionDescription}>User Name</Text> */}
                      <Input
                        label='User Name'
                        labelStyle={styles.labelStyle}
                        id='name'
                        placeholder='User Name'
                        // InputComponent = {TextInput}
                        onChangeText={handleOnChangeUsername}
                        value={username}
                        />
                      {/* <TextInput
                        id='name'
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={handleOnChangeUsername}
                        value={username}
                      /> */}
                      <Text style={styles.sectionDescription}>Password</Text>
                      <Input name='password' 
                        onChangeText={handleOnChangePassword}
                        value={password}
                        placeholder="Password" 
                        secureTextEntry={true}
                      />
                      {/* <TextInput
                        name='password'
                        secureTextEntry={true}
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={handleOnChangePassword}
                        value={password}
                      /> */}
                      <Button 
                        title="Login" 
                        onPress={handleOnSubmit}/>
                    </View>
                    <View style={styles.sectionContainer}>
                      <Text style={styles.sectionTitle}>Reset Password</Text>
                      <Button 
                        title="Reset Password" 
                        type="outline"
                        onPress={() => navigation.navigate('Resetpassword')}
                      />
                    </View>
                    <View style={styles.sectionContainer}>
                      <Text style={styles.sectionTitle}>List Demo</Text>
                      
                      <Button 
                        title="View List" 
                        type="outline"
                        onPress={() => navigation.navigate('ListPage')}
                      />
                    </View>
                  </View>
                  <View style={styles.container}>
                    <Carousel
                      // autoplay
                      autoplayTimeout={10000}
                      // loop={false}
                      index={1}
                    >
                      {images.map((image, index) => 
                      <View key={index}>
                        <Image style={styles.banner} source={image} />
                      </View>)}
                    </Carousel>
                  </View>
                </ScrollView>
              </SafeAreaView>
        </>
    )
  }
}

export default Login