import React from "react"
import { Text, View } from "react-native"

export default props => (
    <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: props.corFundo
    }}>
        <Text style={{
            fontSize: 46,
            color: "white"
        }}>
            {props.children}
        </Text>
    </View>
)