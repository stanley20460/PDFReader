import React, { Component } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    Image,
    ActivityIndicator
  } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'
  
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
      listContainer: {
        marginVertical: 12,
      },
      listTitle: {
        marginBottom: 10,
        fontSize: 16,
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
      subtitleView: {
        flexDirection: 'row',
        paddingLeft: 0,
        paddingTop: 5
      },
      ratingImage: {
        height: 15,
        width: 80
      },
      ratingText: {
        paddingLeft: 10,
        color: 'grey'
      }
    });

    const list = [
      {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      }
    ]
    const { navigation } = this.props;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}
          >
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>List Demo</Text>
                <View style={styles.listContainer}>
                  <Text style={styles.listTitle}>Avatar List</Text>
                  {
                    list.map((l, i) => (
                      <ListItem key={i} bottomDivider>
                        <Avatar rounded source={{uri: l.avatar_url}} />
                        <ListItem.Content>
                          <ListItem.Title>{l.name}</ListItem.Title>
                          <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                        </ListItem.Content>
                        
                      </ListItem>
                    ))
                  }
                </View>

                <View style={styles.listContainer}>

                  <Text style={styles.listTitle}>Custom List with Link</Text>
                  <ListItem bottomDivider onPress={() => navigation.navigate('Home')}>
                    <Avatar rounded source={require('../../image/avatar1.jpg')} />
                    <ListItem.Content>
                      <ListItem.Title>Limited supply! Its like digital gold!</ListItem.Title>
                      <View style={styles.subtitleView}>
                        <Image source={require('../../image/rating.png')} style={styles.ratingImage}/>
                        <Text style={styles.ratingText}>5 months ago</Text>
                      </View>
                    </ListItem.Content>
                  </ListItem>
                  <ListItem bottomDivider onPress={() => navigation.navigate('Login')}>
                    <Avatar rounded source={require('../../image/avatar2.jpg')} />
                    <ListItem.Content>
                      <ListItem.Title>It's the digital golden arrow!</ListItem.Title>
                      <View style={styles.subtitleView}>
                        <Image source={require('../../image/rating.png')} style={styles.ratingImage}/>
                        <Text style={styles.ratingText}>4 months ago</Text>
                      </View>
                    </ListItem.Content>
                    <Text>＞</Text>
                  </ListItem>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    )
  }
}

export default Home