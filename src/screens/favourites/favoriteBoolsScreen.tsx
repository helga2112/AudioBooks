import {BaseScreenWrapper} from '@screens/basePage/baseScreenWrapper';
import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

export const FavoriteBooksScreen = (/* {navigation}: BooksScreenProps */) => {
  return (
    <BaseScreenWrapper>
      <View
        style={{
          height: '100%',
          padding: 20,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
        <Text>Favorite Books Screen</Text>
      </View>
    </BaseScreenWrapper>
  );
};
