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
    route: any;
    platform: string;
}

const Footer: React.FC<Props> = ({ navigation, route, platform }: Props) => {

    const currentPage = (platformVar: string) => {
        if (platformVar === platform) {
            return { color: colors.highlightColor, borderBottomColor: colors.highlightColor, borderBottomWidth: 2, borderBottomLeftRadius: 14, borderBottomRightRadius: 14 }
        }
    }

    return (
        <View style={styles.footer}>
            <ScrollView horizontal={true} style={stylesLocal.tabList} contentInsetAdjustmentBehavior="automatic">
                <Text style={styles.tabtext} onPress={() => navigation.navigate('Home', { update: true })}>All</Text>
                <MCIcon style={[styles.iconTab, currentPage('Steam')]} name="steam" onPress={() => navigation.navigate('Platforms', { platform: "Steam" })} />
                <IIcon style={[styles.iconTab, currentPage('Epic')]} name="nuclear" onPress={() => navigation.navigate('Platforms', { platform: "Epic" })} />
                <MCIcon style={[styles.iconTab, currentPage('GOG')]} name="gog" onPress={() => navigation.navigate('Platforms', { platform: "GOG" })} />
                <MCIcon style={[styles.iconTab, currentPage('Nintendo')]} name="nintendo-switch" onPress={() => navigation.navigate('Platforms', { platform: "Nintendo" })} />
                <IIcon style={[styles.iconTab, currentPage('PlayStation')]} name="logo-playstation" onPress={() => navigation.navigate('Platforms', { platform: "PlayStation" })} />
                <IIcon style={[styles.iconTab, currentPage('XBox')]} name="logo-xbox" onPress={() => navigation.navigate('Platforms', { platform: "XBox" })} />
                <IIcon style={[styles.iconTab, currentPage('Mac')]} name="logo-apple" onPress={() => navigation.navigate('Platforms', { platform: "Mac" })} />
                <IIcon style={[styles.iconTab, currentPage('Windows')]} name="logo-windows" onPress={() => navigation.navigate('Platforms', { platform: "Windows" })} />
                <IIcon style={[styles.iconTab, currentPage('Linux')]} name="logo-tux" onPress={() => navigation.navigate('Platforms', { platform: "Linux" })} />
                <MCIcon style={[styles.iconTab, currentPage('iOS')]} name="apple-ios" onPress={() => navigation.navigate('Platforms', { platform: "iOS" })} />
                <IIcon style={[styles.iconTab, currentPage('Android')]} name="logo-android" onPress={() => navigation.navigate('Platforms', { platform: "Android" })} />
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