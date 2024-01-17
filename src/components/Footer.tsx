import React from "react";
import { View, Text, Button, ScrollView, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import IIcon from 'react-native-vector-icons/Ionicons'

import styles from "./constants/Styles";
import { colors, sizes } from "./constants/Constants";

type Props = {
    navigation: any;
}

const Footer: React.FC<Props> = ({ navigation }: Props) => {
    return (
        <View style={styles.footer}>
            <ScrollView horizontal={true} style={stylesLocal.tabList} contentInsetAdjustmentBehavior="automatic">
                <Text style={styles.tabtext} onPress={() => navigation.navigate('Home', { update: true })}>All</Text>
                <MCIcon style={styles.iconTab} name="steam" onPress={() => navigation.navigate('Platforms', { platform: "Steam" })} />
                <IIcon style={styles.iconTab} name="nuclear" onPress={() => navigation.navigate('Platforms', { platform: "Epic" })} />
                <MCIcon style={styles.iconTab} name="gog" onPress={() => navigation.navigate('Platforms', { platform: "GOG" })} />
                <MCIcon style={styles.iconTab} name="nintendo-switch" onPress={() => navigation.navigate('Platforms', { platform: "Nintendo" })} />
                <IIcon style={styles.iconTab} name="logo-playstation" onPress={() => navigation.navigate('Platforms', { platform: "PlayStation" })} />
                <IIcon style={styles.iconTab} name="logo-xbox" onPress={() => navigation.navigate('Platforms', { platform: "XBox" })} />
                <IIcon style={styles.iconTab} name="logo-apple" onPress={() => navigation.navigate('Platforms', { platform: "macOS" })} />
                <IIcon style={styles.iconTab} name="logo-windows" onPress={() => navigation.navigate('Platforms', { platform: "Windows" })} />
                <IIcon style={styles.iconTab} name="logo-tux" onPress={() => navigation.navigate('Platforms', { platform: "Linux" })} />
                <MCIcon style={styles.iconTab} name="apple-ios" onPress={() => navigation.navigate('Platforms', { platform: "iOS" })} />
                <IIcon style={styles.iconTab} name="logo-android" onPress={() => navigation.navigate('Platforms', { platform: "Android" })} />
            </ScrollView>
        </View>
    )
}

const stylesLocal = StyleSheet.create({
    tabList: {
        // alignContent: 'space-between'
        // paddingHorizontal: 5,
    },
});

export default Footer;