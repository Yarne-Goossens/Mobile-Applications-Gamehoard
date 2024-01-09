import React from "react";
import { DimensionValue, GestureResponderEvent, Pressable, StyleSheet, Text } from "react-native";
import { sizes } from "../constants/Constants";

type Props = {
    color?: string;
    textcolor?: string;
    width?: DimensionValue | undefined;
    borderRadius?: number;
    marginTop?: number;
    marginBottom?: number;
    title: string;
    onPress: ((event: GestureResponderEvent) => void) | null | undefined;
}

const ButtonThemed = ({ color, textcolor, width, borderRadius, marginTop, marginBottom, title, onPress }: Props) => {
    return (
        <Pressable
            onPress={onPress}
            style={[{ backgroundColor: color, borderColor: color, width: width, marginTop: marginTop, marginBottom: marginBottom, borderRadius: borderRadius }, styles.button]}
        >
            <Text style={{ color: textcolor, fontSize: sizes.textSize, fontWeight: '600' }}>{title}</Text>
        </Pressable>);
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        alignSelf: 'center',
        padding: 4,
        // borderColor: color,
        borderWidth: 3,
        // borderRadius: 15,
        marginHorizontal: 10,
        // marginVertical: 5,
    }
})


export default ButtonThemed