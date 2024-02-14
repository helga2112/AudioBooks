import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { BookModel } from "model/bookModel"
import { RootNavigationParamList, SCREENS } from "navigation/constants"
import { Avatar, Button, Card, MD2Colors, Text } from "react-native-paper"
import Entypo from 'react-native-vector-icons/Entypo'

const LeftContent = (props: any) => <Avatar.Icon {...props} icon="folder" />

type BookCardNavigationProps = NativeStackScreenProps<
  RootNavigationParamList,
  SCREENS.Book
>;

type BookNavigationProp = BookCardNavigationProps['navigation'];
type BookRouteProp = BookCardNavigationProps['route'];

interface BookCardProps {
  navigation: BookNavigationProp,
  route: BookRouteProp
}

export const BookCard = ({ navigation, route }: BookCardProps) => {
  const data = route.params?.data
  const { title, author, audiolenth, icon, isFaforite, description, url } = data

  const goBack = () => {
    navigation.goBack()
  }

  return (
    <Card>
      <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
      <Card.Content>
        <Text variant="titleLarge">{title}</Text>
        <Text variant="bodyMedium">{description}</Text>
        {isFaforite &&
          <Entypo name='heart' style={{ color: MD2Colors.blue300, fontSize: 25 }} />}
        {!isFaforite &&
          <Entypo name='heart-outlined' style={{ color: MD2Colors.blue300, fontSize: 25 }} />}
      </Card.Content>
      <Card.Cover source={{ uri: url }} />
      <Card.Actions>
        <Button onPress={goBack}>Go Back</Button>
        <Button >Play</Button>
      </Card.Actions>
    </Card>
  )
}