import { Button, SafeAreaView, ScrollView, Text, TextInput, View, useColorScheme } from "react-native";
import styles from "../constants/Styles";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ParamList } from "../../../App";
import gameService from "../../services/game.service";
import { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Card } from "@rneui/themed";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MIcon from "react-native-vector-icons/MaterialIcons";
import { colors, sizes } from "../constants/Constants";
import DropdownList from "../Elements/DropdownList";
import CheckBox from '@react-native-community/checkbox';
import { getDate } from "../../services/util.service";
import { v4 as uuid } from 'uuid';

type ScreenProps = NativeStackScreenProps<ParamList, 'Details'>;

const GameAdd = ({ route, navigation }: ScreenProps) => {
    const [game_id, setGame_id] = useState<string>(uuid());
    const [name, setName] = useState<string>('');
    const [genre, setGenre] = useState<string[]>(['']);
    const [added_on, setAdded_on] = useState<string>(getDate());
    const [price, setPrice] = useState<number>(0);
    const [msrp, setMsrp] = useState<number>(0);
    const [rating, setRating] = useState<number>(0);
    const [platforms, setPlatform] = useState<string[]>(['']);
    const [multiplayer, setMultiplayer] = useState<boolean>(false);
    const [coop, setCoop] = useState<string>('');
    const [playtime, setPlaytime] = useState<number>(0);
    const [completiontime, setCompletiontime] = useState<number>(0);
    const [favorite, setFavorite] = useState<boolean>(false);
    const [picture, setPicture] = useState<string>('');

    const onSubmit = async () => {
        console.log('onSubmit');
        await gameService.addGame({ game_id, name, genre, added_on, price, msrp, rating, platforms, multiplayer, coop, playtime, completiontime, favorite, picture });
        navigation.navigate('Home', { update: true });
    }

    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        flex: 1
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <Card wrapperStyle={styles.gamecard} containerStyle={styles.gamecardContainer}>
                <ScrollView>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ width: '60%', alignSelf: 'center', marginTop: 20, alignContent: 'stretch' }}>
                            <Text style={styles.textLabel}>Name:</Text>
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
                        <View style={{ width: '40%', alignSelf: 'center', marginTop: 20, alignContent: 'stretch' }}>
                            <TextInput style={styles.textLabel} placeholder="Name" onChangeText={(val) => setName(val)} />
                            <TextInput placeholder="Genre" onChangeText={(val) => setGenre(val)} />
                            <TextInput placeholder="Price" onChangeText={(val) => setPrice(Number(val))} />
                            <TextInput placeholder="MSRP" onChangeText={(val) => setMsrp(Number(val))} />
                            <TextInput placeholder="Rating" onChangeText={(val) => setRating(Number(val))} />
                            <TextInput style={{ color: 'black' }} placeholder="Platforms" onChangeText={(val) => setPlatform(val)} />
                            <CheckBox style={{ borderColor: 'black', borderWidth: 5 }} value={multiplayer} onValueChange={(val: boolean) => setMultiplayer(val)} />
                            <TextInput placeholder="Coop" onChangeText={(val) => setCoop(val)} />
                            <TextInput placeholder="Picture" onChangeText={(val) => setPicture(val)} />
                        </View>
                    </View>
                    <Button title="Add Game" onPress={() => onSubmit()} />
                </ScrollView>
            </Card >
        </SafeAreaView>
    );
};

export default GameAdd;
