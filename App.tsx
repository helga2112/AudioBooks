/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'


import { LoginScreen } from './src/screens/login/loginPage';
import { BooksScreen } from './src/screens/catalog/catalog';
import { RootNavigationParamList, SCREENS } from './src/navigation/navigations';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text, View } from 'react-native';

const Stack = createNativeStackNavigator<RootNavigationParamList>();

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Article Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator /* useLegacyImplementation */>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName={SCREENS.Login}>
        <Stack.Screen name={SCREENS.Login} component={LoginScreen} />
        <Stack.Screen name={SCREENS.Books} component={BooksScreen} />
      </Stack.Navigator> */}
     <MyDrawer/>
    </NavigationContainer>

  );
}

export default App;

