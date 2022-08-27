import {
  SafeAreaView,
  Platform
} from 'react-native';

import { Provider } from 'react-redux';

import { StatusBar } from 'expo-status-bar';

import store from './store';

import Home from './Screens/Home';

import Favorites from './Components/Favorites';

import {NativeModules} from 'react-native';
const {StatusBarManager} = NativeModules;

const AppStartup = () => {

  const STATUSBAR_HEIGHT = Platform.OS === 'android' ? 24 : StatusBarManager.HEIGHT;

  return (
    <SafeAreaView style={{ marginTop: STATUSBAR_HEIGHT }}>
      <StatusBar
        style="light"
        backgroundColor="#340067"
        animated={true}
      />
      <Provider store={store}>
        <Favorites />
        <Home />
      </Provider>
    </SafeAreaView>
  )
};

export default AppStartup;