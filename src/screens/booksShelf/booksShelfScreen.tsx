import { View } from "react-native"
import { Text } from "react-native-paper"
import { BasePageWrapper } from "../basePage/basePageWrapper"

export const BooksScreen = () => {
    return (
        <BasePageWrapper>
            <View style={{
                height: '100%',
                padding: 20,
                marginLeft: 'auto',
                marginRight: 'auto',
            }}>
                <Text>All Books will be here</Text>
            </View>
        </BasePageWrapper>
    )
}


