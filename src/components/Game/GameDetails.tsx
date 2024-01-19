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
                            {details.picture ?
                                <Image
                                    style={{ width: '80%', height: (sizes.width * 0.9), marginTop: 15, borderRadius: sizes.radius, alignSelf: 'center' }}
                                    resizeMode="contain"
                                    source={{ uri: details.picture }}
                                /> :
                                <Image
                                    style={{ width: '80%', height: (sizes.width * 0.9), marginTop: 15, borderRadius: sizes.radius, alignSelf: 'center' }}
                                    resizeMode="contain"
                                    source={require('../../assets/placeholder.webp')}
                                />
                            }
                            {details.favorite ? <Icon style={{ position: 'absolute', top: 22, right: 45 }} name='heart' size={50} color={colors.iconFavorite} onPress={async () => { await gameService.favoriteGame(details.game_id); updateScreen() }} /> : <Icon style={{ position: 'absolute', top: 22, right: 45 }} name='heart-o' size={50} color={colors.iconFavorite} onPress={async () => { await gameService.favoriteGame(details.game_id); updateScreen() }} />}
                        </View>
                        <View style={{ flex: 1, flexDirection: 'column', marginTop: 20 }}>
                            <View style={styles.textDetailContainer}>
                                <Text style={styles.textDetailLabel}>Id:</Text>
                                <Text style={styles.textDetailGame}>{details.game_id}</Text>
                            </View>
                            <View style={styles.textDetailContainer}>
                                <Text style={styles.textDetailLabel}>Genre(s):</Text>
                                <DropdownList genres={details.genre} width={'40%'} />
                            </View>
                            <View style={styles.textDetailContainer}>
                                <Text style={styles.textDetailLabel}>Price (Bought/Full):</Text>
                                <Text style={styles.textDetailGame}>{details.price ? details.price : <Icon name="eye-slash" size={20} />} / {details.msrp ? details.msrp : <Icon name="eye-slash" size={20} />} €</Text>
                            </View>
                            <View style={styles.textDetailContainer}>
                                <Text style={styles.textDetailLabel}>Added On:</Text>
                                <Text style={styles.textDetailGame}>{details.added_on}</Text>
                            </View>
                            <View style={styles.textDetailContainer}>
                                <Text style={styles.textDetailLabel}><Icon name="clock-o" size={25} /></Text>
                                <Text style={styles.textDetailGame}>{details.playtime ? details.playtime : <Icon name="eye-slash" size={20} />} min.</Text>
                            </View>
                            <View style={styles.textDetailContainer}>
                                <Text style={styles.textDetailLabel}>Completiontime:</Text>
                                <Text style={styles.textDetailGame}>{details.completiontime ? details.completiontime : <Icon name="eye-slash" size={20} />}</Text>
                            </View>
                            <View style={styles.textDetailContainer}>
                                <Text style={styles.textDetailLabel}>Own Rating:</Text>
                                <Text style={styles.textDetailGame}>{details.rating ? details.rating : <Icon name="eye-slash" size={20} />}/10</Text>
                            </View>
                            <View style={styles.textDetailContainer}>
                                <Text style={styles.textDetailLabel}>User Rating:</Text>
                                <Text style={styles.textDetailGame}>{details.user_rating ? details.user_rating : <Icon name="eye-slash" size={20} />}/10</Text>
                            </View>
                            <View style={styles.textDetailContainer}>
                                <Text style={styles.textDetailLabel}>Critic Rating:</Text>
                                <Text style={styles.textDetailGame}>{details.critic_rating ? details.critic_rating : <Icon name="eye-slash" size={20} />}</Text>
                            </View>
                            <View style={styles.textDetailContainer}>
                                <Text style={styles.textDetailLabel}>Platforms:</Text>
                                {(details.platforms?.length != undefined && details.platforms?.length >= 2) ?
                                    <DropdownList genres={details.platforms} width={'40%'} />
                                    : <Text style={styles.textDetailGame}>{details.platforms ? details.platforms : <Icon name="eye-slash" size={20} />}</Text>
                                }
                            </View>
                            <View style={styles.textDetailContainer}>
                                <Text style={styles.textDetailLabel}>Multiplayer:</Text>
                                <Text style={styles.textDetailGame}>{details.multiplayer ? <MIcon name="people" size={20} /> : <Icon name="remove" size={20} />}</Text>
                            </View>
                            <View style={styles.textDetailContainer}>
                                <Text style={styles.textDetailLabel}>Coop:</Text>
                                <Text style={styles.textDetailGame}>{details.coop ? details.coop + ' players' : <Icon name="eye-slash" size={20} />}</Text>
                            </View>
                            <View style={styles.textDetailContainer}>
                                <Text style={styles.textDetailLabel}>Physical:</Text>
                                <Text style={styles.textDetailGame}>{details.physical ? <Icon name="check" size={20} /> : <Icon name="remove" size={20} />}</Text>
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
