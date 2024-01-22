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


const Stack = createNativeStackNavigator<RootNavigationParamList>();


function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SCREENS.Login}>
        <Stack.Screen name={SCREENS.Login} component={LoginScreen} />
        <Stack.Screen name={SCREENS.Books} component={BooksScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;

