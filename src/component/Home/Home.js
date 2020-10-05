import React, { Component } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    // Image,
    // TextInput,
    ActivityIndicator
  } from 'react-native';

  import Carousel from '@webileapps/react-native-banner-carousel';
  import { Image } from 'react-native-elements';
class Home extends Component{
  render(){
    const styles = StyleSheet.create({
      engine: {
        position: 'absolute',
        right: 0,
      },
      banner: {
        width: 500,
        height: 200,
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
    const {navigation, images} =this.props
      return (
        <>
             <StatusBar barStyle="dark-content" />
              <SafeAreaView>
                <ScrollView
                  contentInsetAdjustmentBehavior="automatic"
                  style={styles.scrollView}>
                  {global.HermesInternal !== null ?(
                    <View style={styles.engine}>
                      <Text style={styles.footer}>Engine: Hermes</Text>
                    </View>
                  ) :  null }
                  <View style={styles.body}>
                    <View style={styles.sectionContainer}>
                      <Text style={styles.sectionTitle}>Welcome</Text>
                      <Text style={styles.sectionDescription}>Home</Text>

                      <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <View style={{ flexGrow: 1,  height: 200,  }}>
                          <Image
                            source={ require('../../image/image1.jpg') }
                            style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
                            PlaceholderContent={<ActivityIndicator />}
                          />
                        </View>
                        <View style={{ flexGrow: 1, height: 200 }}>
                          <Image                      
                            source={ require('../../image/image1.jpg') }
                            style={{ width: '100%', height: '100%' }}
                            PlaceholderContent={<ActivityIndicator />}
                          />
                        </View>
                      </View>
                      <Button 
                        title="Log Out" 
                        onPress={() => navigation.navigate('Login')}/>
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

export default Home