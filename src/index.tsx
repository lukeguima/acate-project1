import {
  SafeAreaView
} from 'react-native';

import { Provider } from 'react-redux';

import store from './store';

import Home from './Screens/Home';

const AppStartup = () => {
  return (
    <SafeAreaView style={{ marginTop: 24 }}>
      <Provider store={store}>
        <Home />
      </Provider>
    </SafeAreaView>
  )
};

export default AppStartup;