import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";

import styles from "../Styles";
import { Game } from "../../types/types";

type Props = {
    games: Array<Game> | undefined
}

type GameProps = { game: Game };

const GameView = ({ game }: GameProps) => (
    <View style={styles.gamecard}>
        <Text style={styles.text}>{game.game_id}</Text>
        <Text style={styles.text}>{game.name}</Text>
    </View>
);

const GameCard: React.FC<Props> = ({ games }: Props) => {
    const [name, setName] = useState("");

    return (
        <FlatList
            style={styles.gamecard}
            data={games}
            renderItem={({ item }) => <GameView game={item} />}
            // keyExtractor={item => item.game_id}
        />
    )
}

export default GameCard;