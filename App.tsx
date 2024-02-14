/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';

import { registerRootComponent } from 'expo';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from 'screens/login/loginScreen';

import { RootNavigationParamList, SCREENS } from './src/navigation/constants';
import DraweraNavigation from './src/navigation/drawerNavigation';
import { BookCard } from 'components/book/BookCard';

const Stack = createNativeStackNavigator<RootNavigationParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SCREENS.Login}>
        <Stack.Screen name={SCREENS.Login} component={LoginScreen} />
        <Stack.Screen
          name={SCREENS.AuthorizedApp}
          component={DraweraNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={SCREENS.Book}
          component={BookCard}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App);

export default App;
