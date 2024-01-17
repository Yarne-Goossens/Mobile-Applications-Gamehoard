import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import styles from "../constants/Styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors, padding, sizes } from "../constants/Constants";

type Props = {
    searchValue: string,
    setSearchValue: React.Dispatch<React.SetStateAction<string>>,
    input: (searchValue: string) => void,
}

const IgdbInput = ({ searchValue, setSearchValue, input }: Props) => {
    const [search, setSearch] = useState('');

    return (
        <View style={styleslocal.container}>
            <View style={styleslocal.inner}>
                <View style={styleslocal.search}>
                    <Icon style={styles.iconSearch} name='search' size={sizes.icon} />
                </View>
                <TextInput style={styleslocal.textfield} value={searchValue} onChangeText={setSearchValue} onSubmitEditing={() => { input(searchValue) }} />
                <View style={styleslocal.clear}>
                    <Icon style={styles.iconSearch} name='remove' size={sizes.icon} onPress={() => { setSearchValue('') }} />
                </View>
                <View style={styleslocal.filter}>
                    <Icon style={styles.iconSearch} name='filter' size={sizes.icon} onPress={() => { }} />
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
    clear: {
        position: 'absolute',
        top: 10,
        right: sizes.icon + 2 * 10,
        zIndex: 1,
    },
    filter: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1,
    }
});

export default IgdbInput;