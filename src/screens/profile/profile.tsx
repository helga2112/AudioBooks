import React from "react"
import { View } from "react-native"
import { Text } from "react-native-paper"
import { BasePageWrapper } from "../basePage/basePageWrapper"

export const ProfileScreen = () => {

    return (
        <BasePageWrapper>
            <View style={{
                height: '100%',
                padding: 20,
                marginLeft: 'auto',
                marginRight: 'auto',


            }}>

                <Text>User Profile Data</Text>
            </View>
        </BasePageWrapper>
    )
}


