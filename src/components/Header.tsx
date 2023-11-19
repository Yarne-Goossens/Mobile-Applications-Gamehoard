import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./Styles";
import Icon from "react-native-vector-icons/FontAwesome";
import Button from "react-native-vector-icons/FontAwesome";


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
            <Button style={styles.icon} name='star' size={30} color='darkslateblue' />
            <Button style={styles.icon} name='sliders' size={30} color='darkslateblue' onPress={() => navigation.navigate('Settings')} />
            {/* <Icon style={styles.icon} name='arrow-left' size={30} color='darkslateblue' /> */}
        </View>
    )
}

export { Header, HeaderButtons };