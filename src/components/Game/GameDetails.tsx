import { Image, SafeAreaView, ScrollView, Text, View, useColorScheme } from "react-native";
import styles from "../constants/Styles";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ParamList } from "../../../App";
import gameService from "../../services/game.service";
import { useEffect, useState } from "react";
import { Game } from "../../types/types";
import Icon from "react-native-vector-icons/FontAwesome";
import { Card } from "@rneui/themed";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MIcon from "react-native-vector-icons/MaterialIcons";

type ScreenProps = NativeStackScreenProps<ParamList, 'Details'>;

const GameDetailsScreen = ({ route, navigation }: ScreenProps) => {
    const [details, setDetails] = useState<Game | null>(null);

    const fetchData = async () => {
        setDetails(await gameService.getGameById(route.params.gameId));
    }

    useEffect(() => {
        console.log("details-useEffect")
        fetchData();
        console.log(details?.name);
    }, [route.params.gameId])

    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        flex: 1
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <Card wrapperStyle={styles.gamecard} containerStyle={styles.gamecardContainer}>
                <ScrollView>
                    {details ? (<>
                        <View>
                            <Image style={{ width: "35%", height: 180 }} resizeMode="contain" source={{ uri: details.picture }} />
                        </View>
                        <View>
                            <Text style={styles.textGame}>Id: {details.game_id}</Text>
                            <Text style={styles.textGenre}>Genre(s): {details.genre.toString()}</Text>
                            <Text style={styles.textGame}>Price: {details.price} / {details.msrp ? details.msrp : 'NA'} €</Text>
                            <Text style={styles.textGame}>Added On: {details.added_on}</Text>
                            <Text style={styles.textGame}><Icon name="clock-o" size={20} /> {details.playtime ? details.playtime : 'NA'}</Text>
                            <Text style={styles.textGame}>Rating: {details.rating ? details.rating : 'NA'}</Text>
                            <Text style={styles.textGame}>Critic Rating: {details.critic_rating ? details.critic_rating : 'NA'}</Text>
                            <Text style={styles.textGame}>User Rating: {details.user_rating ? details.user_rating : 'NA'}</Text>
                            <Text style={styles.textGame}>Platforms: {details.platforms ? details.platforms : 'NA'}</Text>
                            <Text style={styles.textGame}>Multiplayer: {details.multiplayer ? <MIcon name="people" size={20} color={styles.icon.color}/> : 'NA'}</Text>
                            <Text style={styles.textGame}>Coop: {details.coop ? <MIcon name="cruelty-free" size={20} color={styles.icon.color}/> : 'NA'}</Text>
                            <Text style={styles.textGame}>Completiontime: {details.completiontime ? details.completiontime : 'NA'}</Text>
                            <Text style={styles.textGame}>Favorite: {details.favorite ? details.favorite : 'NA'}</Text>
                            <Text style={styles.textGame}>Picture: {details.picture ? details.picture : 'NA'}</Text>
                        </View>
                    </>) : (
                        <Text>Loading...</Text>
                    )}
                </ScrollView>
            </Card >
        </SafeAreaView>
    );
};

export default GameDetailsScreen;
