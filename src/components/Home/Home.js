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
import * as SvgIcon from '_atoms/svgicon'
import Swiper from 'react-native-swiper'

import { Button, Layout, Text, Icon } from '@ui-kitten/components';

class Home extends Component {
  render(){
    const {navigation} =this.props
    return (
      <>
        <StatusBar barStyle="light-content"  />
        {/* <SafeAreaView style={styles.safeView}> */}
          <View style={styles.wapper}>
            <View style={styles.wapperShadow}/>
            <View style={styles.swiper}>
              <Swiper
                // style={styles.wrapper}
                // loop={false}
                // showsButtons
                // height={240}
                autoplay
                autoplayTimeout={5}
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
                <SvgIcon.PlanetIcon width={96} height={96} planetColor='blue' craterColor='#ef6c00' />
                <Text>Where are you now ? 知到嗎？</Text>
                <Text style={styles.text}>This is a Bold Title</Text>
                <Text style={styles.text1}>Try some Bold Text. Looking Good？ 中文的樣子。</Text>
                <Text style={styles.text2}>Try some Bold Text. Looking Good？ 中文的樣子。</Text>
                <Text style={styles.text3}>Try some Bold Text. Looking Good？ 中文的樣子。</Text>
              </Layout>

              <Button style={styles.btnLabel} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.btnLabel}>LogIn</Text>
              </Button>

            </Layout>
          </ScrollView>
        {/* </SafeAreaView> */}
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
        fontSize: 12,
        fontWeight: 'bold',
        fontFamily: 'Montserrat',
        textTransform: 'uppercase',
      },
      safeView: {
        backgroundColor: '#FFF',
        flex: 1,
      },
      text: {
        fontWeight: '800',
        fontSize: 32,
        fontFamily: 'Montserrat',
      },
      text1: {
        // fontWeight: 'bold',
        fontFamily: 'Montserrat-Thin',
      },
      text2: {
        // fontWeight: 'bold',
        fontFamily: 'Montserrat-Regular',
      },
      text3: {
        // fontWeight: 'bold',
        fontFamily: 'Montserrat-SemiBold',
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
        overflow:'hidden',
        position: "relative",
      },
      swiper: {
        height: 240,
        position:"relative",
        zIndex: 2,
      },
      wapperShadow: {
        height: 50,
        position: "absolute",
        top: 0,
        left: 0,
        right:0,
        zIndex: 3,
      },
      icon: {
        width: 32,
        height: 32,
        margin: 'auto',
      },
      upperContainer: {
        alignItems: 'center',
        paddingBottom: 15,
      },
      statusbar: {
        backgroundColor: '#fff',
      }
    });

export default Home