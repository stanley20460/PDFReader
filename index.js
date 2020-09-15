/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { Provider} from 'react-redux'
import ReactDOM from 'react-dom';
import App from './App';
import Main from './src/Main'
import storeProvider from './src/utils/storeProvider'
import configureStore from './src/redux/store/configureStore'
import {name as appName} from './app.json';

storeProvider.init(configureStore)
const store = storeProvider.getStore();

AppRegistry.registerComponent(appName, () => Main);
