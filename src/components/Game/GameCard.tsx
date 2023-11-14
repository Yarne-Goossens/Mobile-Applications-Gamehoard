import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";

import styles from "../Styles";
import { Game } from "../../types/types";

type Props = {
    games: Array<Game> | undefined
}

type GameProps = { name: string };

const GameView = ({ name }: GameProps) => (
    <View style={styles.gamecard}>
        {/* <Text style={styles.text}>{game.game_id}</Text> */}
        <Text style={styles.text}>{name}</Text>
    </View>
);

const GameCard: React.FC<Props> = ({ games }: Props) => {
    const [name, setName] = useState("");

    return (
        <View style={styles.header}>
            {games && (
                <FlatList
                    style={styles.gamecard}
                    data={games}
                    renderItem={({ game }) => <GameView name={game.name} />}
                // keyExtractor={game => game.game_id}
                />
            )}
        </View >
    )
}

export default GameCard;