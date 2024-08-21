import React from "react";

import { View, Image, Dimensions, StyleSheet } from "react-native";

import Footer from "../components/Footer";

import { GestureHandlerRootView, Gesture, GestureDetector } from "react-native-gesture-handler";

import Animated, { withTiming, useAnimatedStyle, useSharedValue } from "react-native-reanimated";

import baseStyles from "../utils/Styles";

const { width: wWidth, height } = Dimensions.get("window");

const SNAP_POINTS = [-wWidth, 0, wWidth];
const aspectRatio = 1;
const CARD_WIDTH = wWidth - 128;
const CARD_HEIGHT = CARD_WIDTH * aspectRatio;
const IMAGE_WIDTH = CARD_WIDTH * 0.9;

export default function Map() 
{
    const offset = useSharedValue({ x: 0, y: 0 });
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(-height);
    const scale = useSharedValue(1);
    
    const gesture = Gesture.Pan()
        .onBegin(() => {
            offset.value = { x: translateX.value, y: translateY.value };
            scale.value = withTiming(1.1);
        })
        .onUpdate(({ translationX, translationY }) => {
            translateX.value = offset.value.x + translationX;
            translateY.value = offset.value.y + translationY;
        });

    const style = useAnimatedStyle(() => ({
        transform: [
            { translateX: translateX.value },
            { translateY: translateY.value },
        ],
    }));

    return (

        <View style={baseStyles.container}>
            <GestureHandlerRootView>

                <GestureDetector gesture={gesture}>

                    <Animated.View style={[style]}>
                        <Image 
                        source={'./src/assets/Mapa-ifet.png'}
                        style={{
                            width: IMAGE_WIDTH,
                            height: IMAGE_WIDTH * aspectRatio,
                        }}
                        resizeMode="contain"
                        />
                    </Animated.View>
                        
                </GestureDetector>
                
            </GestureHandlerRootView>
            <Footer />
        </View>
        
    );
    
}

const styles = StyleSheet.create({
    animatedView: {
        maxHeight: '100%',
        maxWidth: '100%',
        justifyContent: 'center',
    },
});