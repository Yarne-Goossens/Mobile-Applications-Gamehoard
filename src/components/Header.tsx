import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./Styles";
import Icon from "react-native-vector-icons/FontAwesome";

const Header: React.FC = () => {
    return (
        <View style={styles.header}>
            <Image source={require('../assets/logo.jpg')} style={styles.logo} />
            <Text style={styles.title}>GameHoard</Text>
        </View>
    )
}

const HeaderButtons: React.FC = () => {
    return (
        <View style={styles.header}>
            <Icon style={styles.icon} name='star' size={30} color='darkslateblue' />
            <Icon style={styles.icon} name='sliders' size={30} color='darkslateblue' />
            {/* <Icon style={styles.icon} name='arrow-left' size={30} color='darkslateblue' /> */}
        </View>
    )
}

export { Header, HeaderButtons };