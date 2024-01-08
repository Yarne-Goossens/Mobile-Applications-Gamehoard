import React, { useState } from "react";
import { View, Text, FlatList, Image, Button } from "react-native";
import { Card } from '@rneui/themed';

import styles from "../constants/Styles";
import { Game } from "../../types/types";
import Icon from "react-native-vector-icons/FontAwesome";
import gameService from "../../services/game.service";
import GameCard from "./GameCard";

type Props = {
    games: Array<Game> | undefined;
    deleteItem: (id: string) => void;
    updateScreen: () => void;
    navigation: any;
}

const GameCardList: React.FC<Props> = ({ games, deleteItem, navigation, updateScreen }: Props) => {
    return (
        <FlatList
            style={styles.gamecard}
            data={games}
            renderItem={({ item }) => <GameCard game={item} deleteItem={deleteItem} navigation={navigation} updateScreen={updateScreen} />}
            keyExtractor={item => item.game_id}
        />
    )
}

export default GameCardList;