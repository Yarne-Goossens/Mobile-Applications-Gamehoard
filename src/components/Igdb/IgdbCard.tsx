import React, { useState } from "react";
import { View, Text, FlatList, Image, Button } from "react-native";
import { Card } from '@rneui/themed';

import styles from "../constants/Styles";
import { Game } from "../../types/types";
import Icon from "react-native-vector-icons/FontAwesome";
import MIcon from "react-native-vector-icons/MaterialIcons";
import gameService from "../../services/game.service";
import { colors } from "../constants/Constants";
import ButtonThemed from "../Elements/ButtonThemed";

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
            {/* {game.favorite ? <Icon style={{ paddingLeft: 60, paddingTop: 5 }} name='heart' size={30} color={colors.iconFavorite} onPress={async () => { await gameService.favoriteGame(game.game_id); updateScreen() }} /> : <Icon style={{ paddingLeft: 60, paddingTop: 5 }} name='heart-o' size={30} color={colors.iconFavorite} onPress={async () => { await gameService.favoriteGame(game.game_id); updateScreen() }} />} */}
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
                <Text style={styles.textGame}>IGDB ID: {game.game_id}</Text>
                <Text style={styles.textGenre}>Genre(s): Adventure, RPG </Text>
                {/* {game.genre.toString()} */}
                {/* <Text style={styles.textGame}>Price: {game.price} / {game.msrp ? game.msrp : 'NA'} €</Text> */}
                <Text style={styles.textGame}>User Rating: {game.user_rating ? (game.user_rating / 10).toFixed(2) : <Icon name="eye-slash" size={20} />}/10</Text>
                <Text style={styles.textGame}>Critic Rating: {game.critic_rating ? (game.critic_rating).toFixed(2) : <Icon name="eye-slash" size={20} />}</Text>
                <Text style={styles.textGame}>Multiplayer: {game.multiplayer ? <MIcon name="people" size={20} /> : <Icon name="eye-slash" size={20} />}</Text>
                <ButtonThemed
                    title="Add to Library"
                    color={colors.highlightColor}
                    textcolor='white'
                    width='90%'
                    borderRadius={16}
                    marginBottom={2}
                    marginTop={2}
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