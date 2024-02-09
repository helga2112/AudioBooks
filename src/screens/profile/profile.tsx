import React from 'react';
import {View} from 'react-native';

import {Text} from 'react-native-paper';
import BaseScreenWrapper from 'screens/basePage/baseScreenWrapper';

export const ProfileScreen = () => {
  return (
    <BaseScreenWrapper>
      <View
        style={{
          height: '100%',
          padding: 20,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
        <Text>User Profile Data</Text>
      </View>
    </BaseScreenWrapper>
  );
};
