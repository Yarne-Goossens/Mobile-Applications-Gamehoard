import React, { useState } from "react";
import { View, Text, FlatList, Image } from "react-native";
import { Card } from '@rneui/themed';

import styles from "../Styles";
import { Game } from "../../types/types";
import Icon from "react-native-vector-icons/FontAwesome";

type Props = {
    games: Array<Game> | undefined
}

type GameProps = { game: Game };

const GameView = ({ game }: GameProps) => (
    <Card wrapperStyle={styles.gamecard}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <Card.Title style={styles.gameTitle}>{game.name}</Card.Title>
            <Icon style={{ paddingLeft: 60, paddingTop: 5 }} name='star-o' size={30} color='darkslateblue' />
        </View>
        <Card.Divider />
        <View style={styles.gamecardInternal}>
            <Image
                style={{ width: "40%", height: 150 }}
                resizeMode="contain"
                source={require('../../assets/godOfWarPlaceholder.jpg')}
            />
            <View>
                <Text style={styles.textGame}>Id: {game.game_id}</Text>
                <Text style={styles.textGame}>Genre(s): {game.genre}</Text>
                <Text style={styles.textGame}>Price: {game.price} / {game.msrp ? game.msrp : 'NA'} €</Text>
                <Text style={styles.textGame}><Icon name="clock-o" size={20} /> {game.playtime ? game.playtime : 'NA'}</Text>
            </View>
        </View>
    </Card >
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