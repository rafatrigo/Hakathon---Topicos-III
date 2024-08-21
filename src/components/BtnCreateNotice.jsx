import React from 'react'
import {Text, StyleSheet, Pressable} from 'react-native'

import Colors from '../utils/Colors'
import { AntDesign } from "@expo/vector-icons"



export default function BtnCreateNotice({title, onPress}){
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <AntDesign name='plus'  size={36} color={Colors.WHITE1}/>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.INFO,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',

        width: 45,
        height: 45,

        bottom: 70,
        right: 10,

        position:'absolute',

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