import React, {Component} from 'react'
import { Provider} from 'react-redux'
import ReactDOM from 'react-dom';
import storeProvider from './utils/storeProvider'
import configureStore from './redux/store/configureStore'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeContainer from './component/Home/Home_'
import LoginContainer from './component/Home/Login_'

export class Main extends Component{
    
    render(){
        const Stack = createStackNavigator();

        storeProvider.init(configureStore)
        const store = storeProvider.getStore();
        return(
            <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="LoginContainer" component={LoginContainer} 
                  options={{ title: () => <Login /> }} />
                    <Stack.Screen name="HomeContainer" component={HomeContainer} />
                </Stack.Navigator>
            </NavigationContainer>
            </Provider>
        )
    }
}

export default Main