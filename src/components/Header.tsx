import React from "react";
import { View, Text, Button, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from "./Styles";

const Header: React.FC = () => {
    return (
        <View style={styles.header}>
            {/* <Image source={require('/src/assets/logo.jpg')} /> */}
            <Text style={styles.title}>GameHoard</Text>
            {/* <Icon name='facebook' size={20} color='firebrick' /> */}
            <Text style={styles.text}>Star</Text>
            <Text style={styles.text}>Filter</Text>
            <Text style={styles.text}>Back</Text>
        </View>
    )
}

export default Header;