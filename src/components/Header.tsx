import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./constants/Styles";
import Icon from "react-native-vector-icons/FontAwesome";
import Button from "react-native-vector-icons/FontAwesome";
import { colors, sizes } from "./constants/Constants";


const Header = () => {
    return (
        <View style={styles.header}>
            <Image source={require('../assets/logo.jpg')} style={styles.logo} />
            <Text style={styles.title}>GameHoard</Text>
        </View>
    )
}

const HeaderButtons = ({ navigation }: any) => {
    return (
        <View style={styles.header}>
            <Button style={styles.iconHeader} name='search' size={sizes.icon} color={colors.iconColor} onPress={() => navigation.navigate('Search')} />
            <Button style={styles.iconHeader} name='heart' size={sizes.icon} color={colors.iconColor} onPress={() => navigation.navigate('Favorites')} />
            <Button style={styles.iconHeader} name='sliders' size={sizes.icon} color={colors.iconColor} onPress={() => navigation.navigate('Settings')} />
        </View>
    )
}

export { Header, HeaderButtons };