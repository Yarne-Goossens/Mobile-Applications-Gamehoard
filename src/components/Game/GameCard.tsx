import React, { useState } from "react";
import { View, Text, FlatList, Image, Button } from "react-native";
import { Card } from '@rneui/themed';

import styles from "../Styles";
import { Game } from "../../types/types";
import Icon from "react-native-vector-icons/FontAwesome";
import gameService from "../../services/game.service";

type Props = {
    games: Array<Game> | undefined;
    deleteItem: (id: string) => void;
    updateScreen: () => void;
    navigation: any;
}

type GameProps = {
    game: Game;
    deleteItem: (id: string) => void;
    updateScreen: () => void;
    navigation: any
};

const GameView = ({ game, deleteItem, navigation, updateScreen }: GameProps) => (
    <Card wrapperStyle={styles.gamecard}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <Card.Title style={styles.gameTitle}>{game.name}</Card.Title>
            {game.favorite ? <Icon style={{ paddingLeft: 60, paddingTop: 5 }} name='star' size={30} color='darkslateblue' onPress={async () => { await gameService.favoriteGame(game.game_id); updateScreen() }} /> : <Icon style={{ paddingLeft: 60, paddingTop: 5 }} name='star-o' size={30} color='darkslateblue' onPress={async () => { await gameService.favoriteGame(game.game_id); updateScreen() }} />}
        </View>
        <Card.Divider />
        <View style={styles.gamecardInternal}>
            <Image
                style={{ width: "35%", height: 180 }}
                resizeMode="contain"
                source={require('../../assets/godOfWarPlaceholder.jpg')}
            />
            <View style={{ width: "65%" }}>
                <Text style={styles.textGame}>Id: {game.game_id}</Text>
                <Text style={styles.textGenre}>Genre(s): {game.genre.toString()}</Text>
                <Text style={styles.textGame}>Price: {game.price} / {game.msrp ? game.msrp : 'NA'} €</Text>
                <Text style={styles.textGame}><Icon name="clock-o" size={20} /> {game.playtime ? game.playtime : 'NA'}</Text>
                <Icon style={{ alignSelf: 'flex-end', flexDirection: 'row' }} name="remove" size={20} color="firebrick" onPress={() => deleteItem(game.game_id)} />
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('Details', { gameId: game.game_id })}
                />
            </View>
        </View>
    </Card >
);

const GameCard: React.FC<Props> = ({ games, deleteItem, navigation, updateScreen }: Props) => {
    const [name, setName] = useState("");

    return (
        <FlatList
            style={styles.gamecard}
            data={games}
            renderItem={({ item }) => <GameView game={item} deleteItem={deleteItem} navigation={navigation} updateScreen={updateScreen} />}
        // keyExtractor={item => item.game_id}
        />
    )
}

export default GameCard;