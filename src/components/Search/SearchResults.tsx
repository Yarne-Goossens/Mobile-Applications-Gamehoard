import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../constants/Styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors, padding, sizes } from "../constants/constants";
import { color } from "@rneui/themed/dist/config";
import { Game } from "../../types/types";
import GameCard from "../Game/GameCard";

type Props = {
    games: Array<Game> | undefined;
    deleteItem: (id: string) => void;
    updateScreen: () => void;
    navigation: any;
}

const SearchResults = ({ games, deleteItem, updateScreen, navigation }: Props) => {
    return (
        <View>
            <GameCard games={games} deleteItem={deleteItem} navigation={navigation} updateScreen={updateScreen} />
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