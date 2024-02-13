import { Assets } from "assets/assets"
import { BookModel } from "model/bookModel"
import React from "react"
import { Dimensions, Image, View } from "react-native"
import { Text as TextStyled } from "react-native-paper"
import Entypo from 'react-native-vector-icons/Entypo'

interface BookListItemProps {
  data: BookModel
}

export const BookListItem = ({ data }: BookListItemProps) => {
  const { title, author, audiolenth, icon, id, isFaforite, } = data
  return (
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
        <Entypo name='heart' style={{ color: 'blue', fontSize: 25 }} />
      </View>
    </View>
  )
}