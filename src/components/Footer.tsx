import React from "react";
import { View, Text, Button } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from "./constants/Styles";

const Footer: React.FC = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.tabtext}>All</Text>
            <Text style={styles.tabtext}>Steam</Text>
            <Text style={styles.tabtext}>Nintendo</Text>
            <Text style={styles.tabtext}>Playstation</Text>
            <Text style={styles.tabtext}>...</Text>
        </View>
    )
}

export default Footer;