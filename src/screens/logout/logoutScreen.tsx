import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {ParamListBase} from '@react-navigation/native';
import {SCREENS} from '@src/navigation/constants';
import {BaseScreenWrapper} from '@screens/basePage/baseScreenWrapper';

type LogoutScreenProps = DrawerScreenProps<ParamListBase, SCREENS.Logout>;

// TODO: navigatio to login page on button click
export const LogoutScreen = ({
  navigation,
}: LogoutScreenProps): React.JSX.Element => {
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
          style={{marginTop: 20}}
          mode="contained-tonal"
          onPress={() => navigation.navigate(SCREENS.Login)}>
          Log Out
        </Button>
      </View>
    </BaseScreenWrapper>
  );
};
