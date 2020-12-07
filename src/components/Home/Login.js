import React, { Component } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    TextInput,
    Image
  } from 'react-native';

// import Carousel from 'react-native-banner-carousel';

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
      imgContainer : {
        backgroundColor: 'blue', 
        borderWidth: 1, 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        overflow: 'hidden'
      },
      imgcenter:{
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
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

    const {handleOnChangePassword, handleOnChangeUsername, password, username, navigation, enable, images, handleOnSubmit} = this.props;
    return(
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
                      {/* <View style={styles.imgContainer}> */}
                        <Image source={require('_assets/images/defaultNewsImg.jpg')} style={{width: 300, height: 100}} resizeMode="contain" />
                        <Image source={{ uri: 'https://iportal-uat.infocast.hk/NewsPictures/2NewsType/RTSE/1.jpg?ts=1606805159' }} style={{width: 300, height: 100}} resizeMode="contain" />
                      {/* </View> */}
                      <Text style={styles.sectionTitle}>Login</Text>
                      <Text style={styles.sectionDescription}>User Name</Text>
                      <TextInput
                        id='name'
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={handleOnChangeUsername}
                        value={username}
                      />
                      <Text style={styles.sectionDescription}>Password</Text>
                      <TextInput
                        name='password'
                        secureTextEntry={true}
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={handleOnChangePassword}
                        value={password}
                      />
                      <Button 
                        title="Login" 
                      onPress={handleOnSubmit}/>
                    </View>
                    <View style={styles.sectionContainer}>
                      <Text style={styles.sectionTitle}>Reset Password</Text>
                      <Button 
                        title="Reset Password" 
                        onPress={() => navigation.navigate('Resetpassword')}/>
                    </View>
                  </View>
                  <View style={styles.container}>
                  {/* <Carousel
                    autoplay
                    autoplayTimeout={5000}
                    loop
                    index={0}  
                  >
                    {console.log(images)}
                    {images.map((image, index) => 
                      <View key={index}>
                        <Image style={styles.banner} source={image} />
                      </View>)}
                  </Carousel> */}
                  </View>
                </ScrollView>
              </SafeAreaView>
        </>
    )
  }
}

export default Login