import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { BasePageWrapper } from '../basePage/basePageWrapper';
import { SCREENS } from '../../navigation/constants';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { ParamListBase } from '@react-navigation/native';

type LogoutScreenProps = DrawerScreenProps<ParamListBase, SCREENS.Logout>;

// TODO: navigatio to login page on button click
export const LogoutScreen = ({ navigation }: LogoutScreenProps): React.JSX.Element => {
  return (
    <BasePageWrapper>
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
    </BasePageWrapper>
  );
};
