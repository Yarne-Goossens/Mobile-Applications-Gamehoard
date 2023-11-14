import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./Styles";

const Header: React.FC = () => {
    return (
        <View style={styles.header}>
            <Image source={require('../assets/logo.jpg')} style={styles.logo} />
            <Text style={styles.title}>GameHoard</Text>
            {/* <Icon name='facebook' size={20} color='firebrick' /> */}
            <Text style={styles.text}>Star</Text>
            <Text style={styles.text}>Filter</Text>
            <Text style={styles.text}>Back</Text>
        </View>
    )
}

export default Header;