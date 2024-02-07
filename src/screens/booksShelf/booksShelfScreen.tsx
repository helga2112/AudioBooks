import {BaseScreenWrapper} from '@screens/basePage/baseScreenWrapper';
import {View} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';

export const BooksScreen = () => {
  return (
    <BaseScreenWrapper>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          height: '100%',
          padding: 20,
          marginHorizontal: 'auto',
          /*  marginLeft: 'auto',
                marginRight: 'auto',
 */
        }}>
        <Text
          style={{
            marginHorizontal: 'auto',
          }}>
          All Books will be here
        </Text>
      </View>
    </BaseScreenWrapper>
  );
};
