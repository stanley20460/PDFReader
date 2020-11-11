import React, { Component } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    // Text,
    StatusBar,
    // Button,
    // TextInput,
    TouchableOpacity,
    Dimensions,
    Image
  } from 'react-native';
  
import Swiper from 'react-native-swiper'

import { Button, Layout, Text, Icon } from '@ui-kitten/components';

class Home extends Component {
  render(){
    const {navigation} =this.props
    return (
      <>
        <StatusBar barStyle="default" />
        <SafeAreaView style={styles.safeView}>
          <View style={styles.wapper}>
            <Swiper
              // style={styles.wr apper}
              // loop={false}
              // showsButtons
              // height={240}
              autoplay
            >
              <View style={styles.slide} >
                <Image style={styles.image} source={require('_assets/images/image1.jpg')} />
              </View>
              <View style={styles.slide} >
                <Image style={styles.image} source={require('_assets/images/image2.jpg')} />
              </View>
              <View style={styles.slide} >
                <Image style={styles.image} source={require('_assets/images/image3.jpg')} />
              </View>
            </Swiper>
          </View>
          <ScrollView 
          contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}
          >
            {/* {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )} */}
            
            <Layout style={styles.sectionContainer}>
              <Layout style={styles.upperContainer}>
                <Icon
                  style={styles.icon}
                  fill='#8F9BB3'
                  name='star-outline'
                />
                <Text>Where are you now ? 知到嗎？</Text>
                <Text style={styles.text}>Try some Bold Text? fdbm ？</Text>
              </Layout>

              <Button style={styles.btn} onPress={() => navigation.navigate('Login')}>
                LogIn
              </Button>

            </Layout>
          </ScrollView>
        </SafeAreaView>
      </>
    )
  }
}

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
      engine: {
        position: 'absolute', right: 0,
      },
      sectionContainer: {
        marginTop: 32, paddingHorizontal: 24, backgroundColor:'#fff',
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
      touchableBtn: {
        margin: 20,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#406E9F',
        borderRadius: 9,
        alignItems: 'center',
        justifyContent: 'center',
      },
      btnLabel: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
      },
      safeView: {
        backgroundColor: '#FFF',
        flex: 1,
      },
      text: {
        fontWeight: 'bold',
      },
      scrollView: {
        // backgroundColor: 'red',
        backgroundColor:'#FFF',
        marginTop: -16,
        borderTopLeftRadius:16,
        borderTopRightRadius:16,
        // borderWidth:1,
        // borderStyle: 'solid',
        // borderColor: 'blue',
        flex: 1,
      },
      body: {
        // borderWidth:1,
        // borderStyle: 'solid',
        // borderColor: 'red',
      },
      slide: {
        flex: 1,
        justifyContent: 'center',
        // backgroundColor: '#fff',
      },
      image: {
        width,
        flex: 1
      },
      layoutContainer: {
        paddingHorizontal: 15,
      },
      wapper:{
        height: 240,
        // borderBottomLeftRadius:20,
        // borderBottomEndRadius:20,
        overflow:'hidden'
      },
      icon: {
        width: 32,
        height: 32,
        margin: 'auto',
      },
      upperContainer: {
        alignItems: 'center',
        paddingBottom: 15,
      }
    });

export default Home