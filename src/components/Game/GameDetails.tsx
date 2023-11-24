import { Text, View } from "react-native";
import styles from "../Styles";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ParamList } from "../../../App";
import gameService from "../../services/game.service";
import { useEffect, useState } from "react";
import { Game } from "../../types/types";
import Icon from "react-native-vector-icons/FontAwesome";

type ScreenProps = NativeStackScreenProps<ParamList, 'Details'>;

const GameDetailsScreen = ({ route, navigation }: ScreenProps) => {
    const [details, setDetails] = useState<Game | null>(null);

    const fetchData = async () => {
        setDetails(await gameService.getGameById(route.params.gameId.toString()));
    }

    useEffect(() => {
        console.log("details-useEffect")
        fetchData();
    }, [route.params.gameId])

    return(
        <View>
            {details?(<>
                    <Text style={styles.textGame}>Id: {details.game_id}</Text>
                    <Text style={styles.textGenre}>Genre(s): {details.genre.toString()}</Text>
                    <Text style={styles.textGame}>Price: {details.price} / {details.msrp ? details.msrp : 'NA'} €</Text>
                    <Text style={styles.textGame}>Added On: {details.added_on}</Text>
                    <Text style={styles.textGame}><Icon name="clock-o" size={20} /> {details.playtime ? details.playtime : 'NA'}</Text>
                    <Text style={styles.textGame}>Rating: {details.rating ? details.rating : 'NA'}</Text>
                    <Text style={styles.textGame}>Platforms: {details.platforms ? details.platforms : 'NA'}</Text>
                    <Text style={styles.textGame}>Singleplayer: {details.singleplayer ? details.singleplayer : 'NA'}</Text>
                    <Text style={styles.textGame}>Multiplayer: {details.multiplayer ? details.multiplayer : 'NA'}</Text>
                    <Text style={styles.textGame}>Coop: {details.coop ? details.coop : 'NA'}</Text>
                    <Text style={styles.textGame}>Completiontime: {details.completiontime ? details.completiontime : 'NA'}</Text>
                    <Text style={styles.textGame}>Favorite: {details.favorite ? details.favorite : 'NA'}</Text>
                    <Text style={styles.textGame}>Picture: {details.picture ? details.picture : 'NA'}</Text>
                </>): (
                    <Text>Loading...</Text>
            )}
        </View>
    );
};

export default GameDetailsScreen;
