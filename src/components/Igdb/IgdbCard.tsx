import React, { useState } from "react";
import { View, Text, FlatList, Image, Button } from "react-native";
import { Card } from '@rneui/themed';

import styles from "../constants/Styles";
import { Game } from "../../types/types";
import Icon from "react-native-vector-icons/FontAwesome";
import gameService from "../../services/game.service";

type Props = {
    games: Array<Game> | undefined;
    updateScreen: () => void;
    navigation: any;
}

type GameProps = {
    game: Game;
    updateScreen: () => void;
    navigation: any
};

const GameView = ({ game, navigation, updateScreen }: GameProps) => (
    <Card wrapperStyle={styles.gamecard} containerStyle={styles.gamecardContainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <Card.Title style={styles.gameTitle}>{game.name}</Card.Title>
            {game.favorite ? <Icon style={{ paddingLeft: 60, paddingTop: 5 }} name='heart' size={30} color='darkslateblue' onPress={async () => { await gameService.favoriteGame(game.game_id); updateScreen() }} /> : <Icon style={{ paddingLeft: 60, paddingTop: 5 }} name='heart-o' size={30} color='darkslateblue' onPress={async () => { await gameService.favoriteGame(game.game_id); updateScreen() }} />}
        </View>
        <Card.Divider />
        <View style={styles.gamecardInternal}>
            <View style={{ width: "35%", flexDirection: 'column' }}>
                <Image
                    style={{ height: 150 }}
                    resizeMode="contain"
                    source={{ uri: game.picture }}
                />
            </View>
            <View style={{ width: "65%" }}>
                <Text style={styles.textGame}>Id: {game.game_id}</Text>
                {/*<Text style={styles.textGenre}>Genre(s): {game.genre.toString()}</Text>*/}
                <Text style={styles.textGame}>Price: {game.price} / {game.msrp ? game.msrp : 'NA'} €</Text>
                <Text style={styles.textGame}><Icon name="clock-o" size={20} /> {game.playtime ? game.playtime : 'NA'}</Text>
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('Details', { gameId: game.game_id })}
                />
            </View>
        </View>
    </Card >
);

const GameCard: React.FC<Props> = ({ games, navigation, updateScreen }: Props) => {
    return (
        <FlatList
            style={styles.gamecard}
            data={games}
            renderItem={({ item }) => <GameView game={item} navigation={navigation} updateScreen={updateScreen} />}
            keyExtractor={item => item.game_id}
        />
    )
}

export default GameCard;