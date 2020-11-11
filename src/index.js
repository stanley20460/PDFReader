import React, {Component} from 'react'
import { Provider } from 'react-redux'
// import ReactDOM from 'react-dom';
import storeProvider from './utils/storeProvider'
import configureStore from './redux/store/configureStore'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { default as theme } from './custom-theme.json';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import HomeContainer from './components/Home/Home_'
import LoginContainer from './components/Home/Login_'

export class App extends Component{
    
    render(){
        const Stack = createStackNavigator();

        storeProvider.init(configureStore)
        const store = storeProvider.getStore();
        return(
          <>
          <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
            <Provider store={store}>
              <NavigationContainer >
                <Stack.Navigator initialRouteName="Home" >
                  <Stack.Screen name="Login"
                    component={LoginContainer} 
                    options={{ 
                      title: 'Login', 
                      // headerShown: false
                    }}
                  />
                  <Stack.Screen name="Home" 
                    component={HomeContainer}
                    options={{ 
                      // title: 'Here is the Home', 
                      headerShown: false
                    }}
                  />
                </Stack.Navigator>
              </NavigationContainer>
            </Provider>
          </ApplicationProvider>
          </>
        )
    }
}

export default App