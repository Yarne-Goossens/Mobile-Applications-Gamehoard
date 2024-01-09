import { Image, SafeAreaView, ScrollView, Text, View, useColorScheme } from "react-native";
import { useEffect, useState } from "react";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import styles from "../constants/Styles";
import { ParamList } from "../../../App";
import gameService from "../../services/game.service";
import { Game } from "../../types/types";
import Icon from "react-native-vector-icons/FontAwesome";
import MIcon from "react-native-vector-icons/MaterialIcons";
import { Card } from "@rneui/themed";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { colors, sizes } from "../constants/Constants";
import DropdownList from "../Elements/DropdownList";

type ScreenProps = NativeStackScreenProps<ParamList, 'Details'>;

const GameDetailsScreen = ({ route, navigation }: ScreenProps) => {
    const [details, setDetails] = useState<Game | null>(null);

    const fetchData = async () => {
        setDetails(await gameService.getGameById(route.params.gameId));
    }

    const [update, setUpdate] = useState<Boolean>(false)

    const updateScreen = () => {
        console.log("update-screen");
        update ? setUpdate(false) : setUpdate(true);
    }

    useEffect(() => {
        console.log("details-useEffect")
        fetchData();
        console.log(details?.name);
    }, [route.params.gameId, update])

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
                            <Image style={{ width: '80%', height: (sizes.width * 0.9), marginTop: 15, borderRadius: sizes.radius, alignSelf: 'center' }} resizeMode="contain" source={{ uri: details.picture }} />
                            {details.favorite ? <Icon style={{ position: 'absolute', top: 22, right: 45 }} name='heart' size={50} color={colors.iconFavorite} onPress={async () => { await gameService.favoriteGame(details.game_id); updateScreen() }} /> : <Icon style={{ position: 'absolute', top: 22, right: 45 }} name='heart-o' size={50} color={colors.iconFavorite} onPress={async () => { await gameService.favoriteGame(details.game_id); updateScreen() }} />}
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ width: '60%', alignSelf: 'center', marginTop: 20 }}>
                                <Text style={styles.textLabel}>Id:</Text>
                                <Text style={styles.textLabel}>Genre(s):</Text>
                                <Text style={styles.textLabel}>Price (Bought/Full):</Text>
                                <Text style={styles.textLabel}>Added On:</Text>
                                <Text style={styles.textLabel}><Icon name="clock-o" size={20} /></Text>
                                <Text style={styles.textLabel}>Completiontime:</Text>
                                <Text style={styles.textLabel}>Rating:</Text>
                                <Text style={styles.textLabel}>Critic Rating:</Text>
                                <Text style={styles.textLabel}>User Rating: </Text>
                                <Text style={styles.textLabel}>Platforms:</Text>
                                <Text style={styles.textLabel}>Multiplayer: </Text>
                                <Text style={styles.textLabel}>Coop:</Text>
                            </View>
                            <View style={{ width: '40%', alignSelf: 'center', marginTop: 20 }}>
                                <Text style={styles.textGame}>{details.game_id}</Text>
                                <DropdownList genres={details.genre} />
                                <Text style={styles.textGame}>{details.price} / {details.msrp ? details.msrp : <Icon name="eye-slash" size={20} />} €</Text>
                                <Text style={styles.textGame}>{details.added_on}</Text>
                                <Text style={styles.textGame}>{details.playtime ? details.playtime : <Icon name="eye-slash" size={20} />} min.</Text>
                                <Text style={styles.textGame}>{details.completiontime ? details.completiontime : <Icon name="eye-slash" size={20} />}</Text>
                                <Text style={styles.textGame}>{details.rating ? details.rating : <Icon name="eye-slash" size={20} />}/10</Text>
                                <Text style={styles.textGame}>{details.critic_rating ? details.critic_rating : <Icon name="eye-slash" size={20} />}</Text>
                                <Text style={styles.textGame}>{details.user_rating ? details.user_rating : <Icon name="eye-slash" size={20} />}/10</Text>
                                {(details.platforms?.length != undefined && details.platforms?.length >= 2) ?
                                    <DropdownList genres={details.platforms} />
                                    : <Text style={styles.textGame}>{details.platforms ? details.platforms : <Icon name="eye-slash" size={20} />}</Text>
                                }
                                <Text style={styles.textGame}>{details.multiplayer ? <MIcon name="people" size={20} /> : <Icon name="eye-slash" size={20} />}</Text>
                                <Text style={styles.textGame}>{details.coop ? details.coop + ' players' : <Icon name="eye-slash" size={20} />}</Text>
                            </View>
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
