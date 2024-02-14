import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BooksList } from 'components/booksList/BooksList';
import { AllBooksList } from 'mocks/allBooksList';
import { BookModel } from 'model/bookModel';
import { RootNavigationParamList, SCREENS } from 'navigation/constants';
import React from 'react';
import { View } from 'react-native';

import { Text } from 'react-native-paper';
import BaseScreenWrapper from 'screens/basePage/baseScreenWrapper';

type BooksScreenProps = NativeStackScreenProps<
  RootNavigationParamList,
  SCREENS.Books
>;

export const BooksScreen = ({ navigation }: BooksScreenProps) => {
  const allBooks = AllBooksList;


  const openBook = (data: BookModel) => {
    navigation.navigate(SCREENS.Book, { data })
  }

  return (
    <BaseScreenWrapper>
      <View
        style={{
          height: '100%',
          padding: 20,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
        {allBooks.length === 0 && <Text>All Books will be here</Text>}
        {allBooks.length > 0 && (
          <>
            <BooksList data={allBooks} openBook={openBook} />
          </>
        )}
      </View>
    </BaseScreenWrapper>
  );
};
