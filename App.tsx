/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'

import DraweraNavigation from './src/navigation/drawerNavigation';

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName={SCREENS.Login}>
        <Stack.Screen name={SCREENS.Login} component={LoginScreen} />
        <Stack.Screen name={SCREENS.Books} component={BooksScreen} />
      </Stack.Navigator> */}
     <DraweraNavigation/>
    </NavigationContainer>

  );
}

export default App;

