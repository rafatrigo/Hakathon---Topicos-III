import React from 'react'
import {Text, StyleSheet, Pressable} from 'react-native'

import Colors from '../utils/Colors'

export default function BtnPrimary({title, onPress}){
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.PRYMARY1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',

        width: '100%',
        height: 45,

        marginBottom: 10,
    },
    title: {
        color: Colors.WHITE1,
        fontSize: 24,
        letterSpacing: -1.5,
        fontWeight: 'regular',
        fontFamily: 'Ubuntu-Regular',
        textAlign: 'center',
    },
})