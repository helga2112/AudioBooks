import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';
import { Colors } from "react-native/Libraries/NewAppScreen"

export const BaseScreenWrapper = (props: { children?: JSX.Element }): React.JSX.Element => {
  const { children } = props
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }


  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>

        {children}
      </View>
    </SafeAreaView>
  );
}
