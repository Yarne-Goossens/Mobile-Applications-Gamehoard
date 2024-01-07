import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Game } from "../../types/types";
import IgdbCard from "./IgdbCard";

type Props = {
    games: Array<Game> | undefined;
    updateScreen: () => void;
    navigation: any;
}

const SearchResults = ({ games, updateScreen, navigation }: Props) => {
    return (
        <View>
            <IgdbCard games={games} navigation={navigation} updateScreen={updateScreen} />
        </View >
    )
}

const styleslocal = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,
    }
});

export default SearchResults;