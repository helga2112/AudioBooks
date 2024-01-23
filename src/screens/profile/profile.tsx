import { View } from "react-native"
import { Button, Text } from "react-native-paper"
import { BasePageWrapper } from "../basePage/basePageWrapper"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootNavigationParamList, SCREENS } from "../../navigation/constants"

type BooksScreenProps = NativeStackScreenProps<RootNavigationParamList, SCREENS.Books>

export const ProfileScreen = (/* {navigation}: BooksScreenProps */) => {


    return (
        <BasePageWrapper>
            <View style={{
                height: '100%',
                padding: 20,
                marginLeft: 'auto',
                marginRight: 'auto',


            }}>

                <Text>Fav books list</Text>
                <Button style={{ marginTop: 20 }} mode='contained-tonal' /* onPress={() => navigation.navigate(SCREENS.Login)} */>
                    Go Back
                </Button>

            </View>
        </BasePageWrapper>
    )
}


