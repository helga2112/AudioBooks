import React, { useState } from "react"
import { Image, View } from "react-native"
import { Button, TextInput } from "react-native-paper"
import { Assets } from "../../assets/assets"
import { BasePageWrapper } from "../basePage/basePageWrapper"
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootNavigationParamList, SCREENS } from "../../navigation/navigations"

type LoginScreenProps = NativeStackScreenProps<RootNavigationParamList, SCREENS.Login>

export const LoginScreen = ({ navigation }: LoginScreenProps) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [isAuthorized, setIsAuthorized] = useState(false)

    return (
        <BasePageWrapper>
            <View style={{
                height: '100%',
                padding: 20,
                marginLeft: 'auto',
                marginRight: 'auto',


            }}>
                <Image
                    style={{
                        width: 250,
                        height: 250,
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}
                    source={Assets.logo1}
                />
                <TextInput
                    style={{ minWidth: 300 }}
                    label="Email"
                    value={login}
                    onChangeText={text => setLogin(text)}
                />
                <TextInput
                    style={{ minWidth: 300 }}
                    label="Password"
                    value={password}
                    secureTextEntry
                    right={<TextInput.Icon icon="eye" />}
                    onChangeText={password => setPassword(password)}
                />
                <Button style={{ marginTop: 20 }} mode='contained-tonal' onPress={() => {
                    console.log('[USER CREDS]: ', login, password)
                    if (login && password) {
                        navigation.navigate(SCREENS.Books)
                    }
                }}>
                    LOGIN
                </Button>

            </View>
        </BasePageWrapper>
    )
}

