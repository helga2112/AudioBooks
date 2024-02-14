import { SafeAreaView } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import { BookListItem } from "./BookListItem"
import { BookModel } from "model/bookModel"

// TODO: check how can you add progress bar 

interface BooksListProps {
  data: BookModel[]
  openBook: (data: BookModel) => void
}

export const BooksList = ({ data, openBook }: BooksListProps) => {

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
        renderItem={({ item }) => <BookListItem data={item} openBook={openBook} />}
        keyExtractor={(item) => item.id}
      >
      </FlatList>
    </SafeAreaView>
  )
}