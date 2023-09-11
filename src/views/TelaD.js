import React from "react"
import TextoCentral from "../components/TextoCentral"
import { Button, View } from "react-native"

export default props => (

    <View>
        <View>
            <Button title="OpenDrower" />
        </View>
        <View>
            <TextoCentral style={{ flex: 1 }} corFundo="black" corTexto="#FFF">
                Tela D
            </TextoCentral>
        </View>


    </View>
)