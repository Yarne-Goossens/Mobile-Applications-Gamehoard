import React, { useState } from "react";
import { View, Text, FlatList, Image, Button } from "react-native";
import { Card } from '@rneui/themed';

import styles from "../constants/Styles";
import { Game } from "../../types/types";
import Icon from "react-native-vector-icons/FontAwesome";
import MIcon from "react-native-vector-icons/MaterialIcons";
import gameService from "../../services/game.service";
import { colors, sizes } from "../constants/Constants";
import ButtonThemed from "../Elements/ButtonThemed";
import DropdownList from "../Elements/DropdownList";

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
            <View style={{ width: "35%", flexDirection: 'column', flex: 1 }}>
                {game.picture ?
                    <Image
                        style={{ height: (sizes.cardHeight * .7), width: 'auto', borderRadius: sizes.radius / 2 }}
                        resizeMode="contain"
                        source={{ uri: game.picture }}
                    /> :
                    <Image
                        style={{ height: (sizes.cardHeight * .7), width: 'auto', borderRadius: sizes.radius / 2 }}
                        resizeMode="contain"
                        source={require('../../assets/placeholder.webp')}
                    />
                }
            </View>
            <View style={{ width: "65%", height: (sizes.cardHeight * .8) }}>
                <View style={{ flexDirection: 'column', height: (sizes.cardHeight * .8), alignItems: 'center' }}>
                    <View style={styles.textContainer}>
                        <Text style={styles.textIgdbLabel}>IGDB Id:</Text>
                        <Text style={styles.textIgdbGame}>{game.game_id}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.textIgdbLabel}>Genre(s):</Text>
                        <DropdownList genres={game.genre} width={'45%'} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.textIgdbLabel}>User Rating:</Text>
                        <Text style={styles.textIgdbGame}>{game.user_rating ? game.user_rating : <Icon name="eye-slash" size={20} />}/10</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.textIgdbLabel}>Critic Rating:</Text>
                        <Text style={styles.textIgdbGame}>{game.critic_rating ? game.critic_rating : <Icon name="eye-slash" size={20} />}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.textIgdbLabel}>Multiplayer:</Text>
                        <Text style={styles.textIgdbGame}>{game.multiplayer ? <MIcon name="people" size={20} /> : <Icon name="remove" size={20} />}</Text>
                    </View>
                </View>
                <View style={{ height: (sizes.cardHeight * .2), paddingHorizontal: 5 }}>
                    <ButtonThemed
                        title="Show Details"
                        color={colors.highlightColor}
                        textcolor='white'
                        width='95%'
                        borderRadius={16}
                        marginBottom={2}
                        marginTop={2}
                        onPress={() => navigation.navigate('IgdbDetails', { gameObject: game })}
                    />
                </View>
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