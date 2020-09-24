import React, {Component} from 'react'
import { Provider} from 'react-redux'
import ReactDOM from 'react-dom';
import storeProvider from './utils/storeProvider'
import configureStore from './redux/store/configureStore'
import { Button, View, Text,StyleSheet  } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome,faGift,faTable } from '@fortawesome/free-solid-svg-icons'
import SvgTest from './component/SVG/SvgTest'

import HomeContainer from './component/Home/Home_'
import LoginContainer from './component/Home/Login_'
import SearchForm from './component/Search/SearchForm';
import Table from './component/Table/Table'
import TableDetails from './component/Table/TableDetails'


function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings Screensdsdsd</Text>
        <View>
      <Text>Favorite beverage: 
        <FontAwesomeIcon icon={ faHome } />
        
      </Text> 
      </View>
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('Profile')}
        />
        <View style={StyleSheet.container}>
          <SvgTest width={130} height={100}/>
        </View>
      </View>
    );
  }
  
  function ProfileScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
        <Button
          title="Go to Settings"
          onPress={() => navigation.navigate('Settings')}
        />
      </View>
    );
  }
  
  function ShopScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }
  
  function DetailsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.push('Details')}
        />
      </View>
    );
  }
  
  export class Main extends Component{
    
    render(){
        const Tab = createBottomTabNavigator();
        const SettingsStack = createStackNavigator();
        const HomeStack = createStackNavigator();

        storeProvider.init(configureStore)
        const store = storeProvider.getStore();
        return(
            <Provider store={store}>
              <NavigationContainer>
                <Tab.Navigator
                  screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                      let iconName;

                      if (route.name === 'First') {
                        iconName = focused
                          ? faHome
                          : faHome;
                      } else if (route.name === 'Shop') {
                        iconName = focused ? faGift : faGift;
                      } else if (route.name === 'Table') {
                        iconName = focused ? faTable : faTable;
                      }

                      // You can return any component that you like here!
                      return <FontAwesomeIcon icon={iconName} size={25} />;
                    },
                  })}
                  tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                  }}
                >
                  <Tab.Screen name="First" >
                    {() => (
                      <SettingsStack.Navigator>
                        <SettingsStack.Screen
                          name="Settings"
                          component={HomeScreen}
                        />
                        {/* <SettingsStack.Screen name="Profile" component={ProfileScreen} /> */}
                      </SettingsStack.Navigator>
                    )}
                  </Tab.Screen>
                  <Tab.Screen name="Shop">
                    {() => (
                      <HomeStack.Navigator>
                        <HomeStack.Screen name="Shop" component={ShopScreen} />
                        <HomeStack.Screen name="Details" component={DetailsScreen} />
                      </HomeStack.Navigator>
                    )}
                  </Tab.Screen>
                  <Tab.Screen name="Table">
                    {() => (
                      <HomeStack.Navigator>
                        <HomeStack.Screen name="Table" component={Table} />
                        <HomeStack.Screen name="TableDetails" component={TableDetails} />
                      </HomeStack.Navigator>
                    )}
                  </Tab.Screen>
                </Tab.Navigator>
              </NavigationContainer>
            </Provider>
        )
    }
}

export default Main

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
  }
})