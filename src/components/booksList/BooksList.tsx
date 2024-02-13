import { View, TouchableOpacity, SafeAreaView } from "react-native"
import { MD3Colors, ProgressBar, Text } from "react-native-paper"
import { FlatList, ScrollView } from "react-native-gesture-handler"
import { BookListItem } from "./BookListItem"
import { BookModel, FavoriteBoookModel } from "model/bookModel"
import { Dimensions } from "react-native"

// TODO: check how can you add progress bar 

interface BooksListProps {
  data: BookModel[]
}

export const BooksList = ({ data }: BooksListProps) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/*   <ProgressBar progress={0.8} color={MD3Colors.primary10} /> */}
      <FlatList style={{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 8,
      }}
        data={data}

        horizontal={false}
        numColumns={2}
        renderItem={({ item }) => <BookListItem data={item} />}
        keyExtractor={(item) => item.id}
      >
      </FlatList>
    </SafeAreaView>
  )
}