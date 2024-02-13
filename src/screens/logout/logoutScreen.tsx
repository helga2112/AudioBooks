import React from 'react';
import { View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootNavigationParamList, SCREENS } from 'navigation/constants';
import { Button, Text } from 'react-native-paper';
import BaseScreenWrapper from 'screens/basePage/baseScreenWrapper';

type LogoutScreenProps = NativeStackScreenProps<
  RootNavigationParamList,
  SCREENS.Logout
>;

// TODO: navigatio to login page on button click
export const LogoutScreen = ({ navigation }: LogoutScreenProps) => {
  return (
    <BaseScreenWrapper>
      <View
        style={{
          height: '100%',
          padding: 20,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
        <Text>Are you sure you want to log out?</Text>
        <Button
          style={{ marginTop: 20 }}
          mode="contained-tonal"
          onPress={() => navigation.navigate(SCREENS.Login)}>
          Log Out
        </Button>
      </View>
    </BaseScreenWrapper>
  );
};
