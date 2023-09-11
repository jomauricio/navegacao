import React from "react"
import TextoCentral from "../components/TextoCentral"
import { Button } from "react-native"

export default props => (
    <TextoCentral corFundo="green">
        Tela C
        <Button title="Tela B" onPress={() => props.navigation.navigate('TelaB')} />
    </TextoCentral>
)