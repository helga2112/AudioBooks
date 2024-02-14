import { Assets } from "assets/assets"
import { BookModel } from "model/bookModel"
import React from "react"
import { Image, Pressable, View } from "react-native"
import { Text as TextStyled } from "react-native-paper"
import Entypo from 'react-native-vector-icons/Entypo'
import { MD2Colors } from 'react-native-paper';

interface BookListItemProps {
  data: BookModel,
  openBook: (data: BookModel) => void
}

export const BookListItem = ({ data, openBook }: BookListItemProps) => {
  const { title, author, audiolenth, icon, id, isFaforite, } = data

  return (
    <Pressable onPress={() => openBook(data)}>
      <View
        key={id}
        style={{
          padding: 5,
          marginVertical: 8,
          marginHorizontal: 16
        }

        }>
        <Image source={Assets.defaultBookIcon} style={{ width: 100, height: 100 }} />
        <View style={{
          display: 'flex', justifyContent: 'center',
          flexDirection: 'row',
        }}>
          <View>
            <TextStyled > {title} </TextStyled>
            <TextStyled > {author} </TextStyled>
          </View>
          {isFaforite &&
            <Entypo name='heart' style={{ color: MD2Colors.blue300, fontSize: 25 }} />}
          {!isFaforite &&
            <Entypo name='heart-outlined' style={{ color: MD2Colors.blue300, fontSize: 25 }} />}
        </View>
      </View>
    </Pressable>
  )
}