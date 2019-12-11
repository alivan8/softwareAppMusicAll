import React from "react";
import {View,Text,StyleSheet} from "react-native";
import Swiper from "react-native-web-swiper";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    slideContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default class Screen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Swiper>
                    <View style={[styles.slideContainer]}>
                        <Text>Slide 1</Text>
                    </View>
                    <View style={[styles.slideContainer]}>
                        <Text>Slide 2</Text>
                    </View>
                    <View style={[styles.slideContainer]}>
                        <Text>Slide 3</Text>
                    </View>
                    <View style={[styles.slideContainer]}>
                        <Text>Slide 3</Text>
                    </View>
                </Swiper>
            </View>
        )
    }
}