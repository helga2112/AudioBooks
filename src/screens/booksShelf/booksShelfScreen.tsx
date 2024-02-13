import { BooksList } from 'components/booksList/BooksList';
import { AllBooksList } from 'mocks/allBooksList';
import React from 'react';
import { View } from 'react-native';

import { Text } from 'react-native-paper';
import BaseScreenWrapper from 'screens/basePage/baseScreenWrapper';

export const BooksScreen = () => {
  const allBooks = AllBooksList;
  console.log('>>>> ', allBooks);

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
            <BooksList data={allBooks} />
          </>
        )}
      </View>
    </BaseScreenWrapper>
  );
};
