import React from "react";
import { View, Text, Button } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from "./Styles";

const Footer: React.FC = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.text}>All</Text>
            <Text style={styles.text}>Nintendo</Text>
            <Text style={styles.text}>Playstation</Text>
            <Text style={styles.text}>Steam</Text>
            <Text style={styles.text}>...</Text>
        </View>
    )
}

export default Footer;