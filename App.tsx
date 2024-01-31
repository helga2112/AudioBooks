import React from 'react';
import DrawerNavigation from './src/navigation/drawerNavigation';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from './src/screens/login/loginScreen';
import {RootNavigationParamList, SCREENS} from '@src/navigation/constants';

const Stack = createNativeStackNavigator<RootNavigationParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SCREENS.Login}>
        <Stack.Screen name={SCREENS.Login} component={LoginScreen} />
        <Stack.Screen
          name={SCREENS.AuthorizedApp}
          component={DrawerNavigation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
