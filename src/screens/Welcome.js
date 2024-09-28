import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Welcome() {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 30,color: 'green'}}>Welcome</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})