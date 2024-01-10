import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import styles from "../constants/Styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors, padding, sizes } from "../constants/Constants";
import { color } from "@rneui/themed/dist/config";

type Props = {
    searchValue: string,
    setSearchValue: React.Dispatch<React.SetStateAction<string>>,
}

const SearchInput = ({ searchValue, setSearchValue }: Props) => {
    const [search, setSearch] = useState('');

    return (
        <View style={styleslocal.container}>
            <View style={styleslocal.inner}>
                <View style={styleslocal.search}>
                    <Icon style={styles.iconSearch} name='search' size={30} />
                </View>
                <TextInput style={styleslocal.textfield} placeholder="Search" value={searchValue} onChangeText={setSearchValue} />
                <View style={styleslocal.filter}>
                    <Icon style={styles.iconSearch} name='filter' size={30} onPress={() => { }} />
                </View>
            </View>
        </View>
    )
}

const styleslocal = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    inner: {
        flexDirection: 'row',
        flexGrow: 1,
    },
    search: {
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 1,
    },
    textfield: {
        backgroundColor: colors.white,
        paddingLeft: padding.xl + padding.s,
        paddingRight: padding.xl,
        borderRadius: sizes.radius,
        height: 60,
        flex: 1,
        flexGrow: 1,
        color: colors.black,
        fontSize: sizes.textSize,
    },
    filter: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1,
    }
});

export default SearchInput;