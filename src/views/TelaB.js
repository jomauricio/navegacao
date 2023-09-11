import React from "react"
import TextoCentral from "../components/TextoCentral"
import { Button } from "react-native"

export default props => (
    <TextoCentral corFundo="blue">
        Tela B
        <Button title="Tela A" onPress={() => props.navigation.navigate('TelaA')} />
        <Button title="Tela C" onPress={() => props.navigation.navigate('TelaC')} />
    </TextoCentral>
)     