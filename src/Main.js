import React, {Component} from 'react'
import { Provider} from 'react-redux'
import ReactDOM from 'react-dom';
import storeProvider from './utils/storeProvider'
import configureStore from './redux/store/configureStore'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './component/Home/Home_'
import Login from './component/Home/Login_'
import ListPage from './component/pages/ListPage_'

export class Main extends Component{
    
    render(){
        const Stack = createStackNavigator();

        storeProvider.init(configureStore)
        const store = storeProvider.getStore();
        return(
          <Provider store={store}>
            <NavigationContainer>
              <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Home"
                  options={{ title: 'Home' }}
                  component={Home}
                />
                <Stack.Screen name="Login"
                  options={{ title: 'Login', headerShown: false }}
                  component={Login} 
                />
                <Stack.Screen name="ListPage" 
                  options={{ title: 'List Page' }}
                  component={ListPage} 
                />
              </Stack.Navigator>
            </NavigationContainer>
          </Provider>
        )
    }
}

export default Main