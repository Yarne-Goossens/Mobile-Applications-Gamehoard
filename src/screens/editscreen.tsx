import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, SafeAreaView, ScrollView, useColorScheme } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ParamList } from '../../App';
import gameService from '../services/game.service';
import { getDate } from '../services/util.service';
import { v4 as uuid } from 'uuid';
import CheckBox from '@react-native-community/checkbox';
import { Game } from '../types/types';
import { get } from 'http';
import { Card } from '@rneui/themed';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import styles from '../components/constants/Styles';
import { colors, genreList, platformList } from '../components/constants/Constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import MultiSelectComponent from '../components/Elements/MultiSelectComponent';

type ScreenProps = NativeStackScreenProps<ParamList, 'Edit'>;

const EditScreen = ({ route, navigation }: ScreenProps) => {
  const [game, setGame] = useState<Game | null>(null);

  const fetchData = async () => {
    console.log(route.params.gameId)
    const gameserv = await gameService.getGameById(route.params.gameId)
    setGame(await gameService.getGameById(route.params.gameId));
    fillInData();
  }

  const fillInData = () => {
    if (game != null) {
      setGame_id(game.game_id)
      setName(game.name)
      setGenre(game.genre)
      setAdded_on(game.added_on)
      setPrice(game.price)
      setMsrp(game.msrp!)
      setRating(game.rating!)
      setPlatform(game.platforms!)
      setMultiplayer(game.multiplayer!)
      setCoop(game.coop!)
      setPlaytime(game.playtime!)
      setCompletiontime(game.completiontime!)
      setFavorite(game.favorite!)
      setPicture(game.picture!)
    }
  }

  useEffect(() => {
    console.log("edit-useEffect");
    fetchData();
  }, [route.params.gameId])

  useEffect(() => {
    console.log("editData-useEffect");
    console.log('name', name)
    console.log('game', game)
    fillInData();
    console.log('name', name)
    console.log('game', game)
  }, [game])

  const [game_id, setGame_id] = useState<string>(game?.game_id!);
  const [name, setName] = useState<string>(game?.name!);
  const [genre, setGenre] = useState<string[]>(game?.genre!);
  const [added_on, setAdded_on] = useState<string>(game?.added_on!);
  const [price, setPrice] = useState<number>(game?.price!);
  const [msrp, setMsrp] = useState<number>(game?.msrp!);
  const [rating, setRating] = useState<number>(game?.rating!);
  const [user_rating, setUserRating] = useState<number>(0);
  const [critic_rating, setCriticRating] = useState<number>(0);
  const [platforms, setPlatform] = useState<string[]>(game?.platforms!);
  const [multiplayer, setMultiplayer] = useState<boolean>(game?.multiplayer!);
  const [coop, setCoop] = useState<string>(game?.coop!);
  const [playtime, setPlaytime] = useState<number>(game?.playtime!);
  const [completiontime, setCompletiontime] = useState<number>(game?.completiontime!);
  const [favorite, setFavorite] = useState<boolean>(game?.favorite!);
  const [physical, setPhysical] = useState<boolean>(game?.physical!);
  const [picture, setPicture] = useState<string>(game?.picture!);

  const onSubmit = async () => {
    console.log('onSubmit');
    await gameService.updateGame(game?.game_id!, { game_id, name, genre, added_on, price, msrp, rating, user_rating, critic_rating, platforms, multiplayer, coop, playtime, completiontime, favorite, physical, picture });
    navigation.navigate('Home', { update: true });
  }

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1
  };

  return (
    <>
      <SafeAreaView style={backgroundStyle}>
        <Card wrapperStyle={styles.gamecard} containerStyle={styles.gamecardContainer}>
          <ScrollView>
            <Text style={styles.text}>Edit Game</Text>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ width: '50%', justifyContent: 'space-evenly' }}>
                <Text style={styles.textLabel}>Name:</Text>
                <Text style={styles.textLabel}>Genre(s):</Text>
                <Text style={styles.textLabel}>Price Bought:</Text>
                <Text style={styles.textLabel}>Price Full:</Text>
                <Text style={styles.textLabel}><Icon name="clock-o" size={20} /></Text>
                <Text style={styles.textLabel}>Completiontime:</Text>
                <Text style={styles.textLabel}>Rating:</Text>
                <Text style={styles.textLabel}>Critic Rating:</Text>
                <Text style={styles.textLabel}>User Rating: </Text>
                <Text style={styles.textLabel}>Platforms:</Text>
                <Text style={styles.textLabel}>Multiplayer: </Text>
                <Text style={styles.textLabel}>Coop:</Text>
                <Text style={styles.textLabel}>Picture:</Text>
                <Text style={styles.textLabel}>Physical:</Text>
              </View>
              <View style={{ width: '50%', justifyContent: 'space-evenly' }}>
                <TextInput style={styles.textInput} placeholder="Name" placeholderTextColor={colors.highlightColor} onChangeText={(val) => setName(val)} value={name} />
                <MultiSelectComponent onSelectionChange={setGenre} valueList={genreList}/>
                <TextInput style={styles.textInput} placeholder="Price" placeholderTextColor={colors.highlightColor} onChangeText={(val) => setPrice(Number(val))} value={price?.toString()} />
                <TextInput style={styles.textInput} placeholder="MSRP" placeholderTextColor={colors.highlightColor} onChangeText={(val) => setMsrp(Number(val))} value={msrp?.toString()} />
                <TextInput style={styles.textInput} placeholder="Playtime" placeholderTextColor={colors.highlightColor} onChangeText={(val) => setPlaytime(Number(val))} value={playtime?.toString()} />
                <TextInput style={styles.textInput} placeholder="Completiontime" placeholderTextColor={colors.highlightColor} onChangeText={(val) => setCompletiontime(Number(val))} value={completiontime?.toString()} />
                <TextInput style={styles.textInput} placeholder="Rating" placeholderTextColor={colors.highlightColor} onChangeText={(val) => setRating(Number(val))} value={rating?.toString()} />
                <TextInput style={styles.textInput} placeholder="User Rating" placeholderTextColor={colors.highlightColor} onChangeText={(val) => setUserRating(Number(val))} value={user_rating?.toString()} />
                <TextInput style={styles.textInput} placeholder="Critic Rating" placeholderTextColor={colors.highlightColor} onChangeText={(val) => setCriticRating(Number(val))} value={critic_rating?.toString()} />
                <MultiSelectComponent onSelectionChange={setPlatform} valueList={platformList}/>
                <CheckBox style={styles.checkbox} tintColors={{ true: colors.highlightColor, false: 'black' }} value={multiplayer} onValueChange={(val: boolean) => setMultiplayer(val)} />
                <TextInput style={styles.textInput} placeholder="Coop" placeholderTextColor={colors.highlightColor} onChangeText={(val) => setCoop(val)} value={coop?.toString()} />
                <TextInput style={styles.textInput} placeholder="Picture" placeholderTextColor={colors.highlightColor} onChangeText={(val) => setPicture(val)} value={picture?.toString()} />
                <CheckBox style={styles.checkbox} tintColors={{ true: colors.highlightColor, false: 'black' }} value={physical} onValueChange={(val: boolean) => setPhysical(val)} />
              </View>
            </View>
            <Button title="Edit Game" onPress={() => onSubmit()} />
          </ScrollView>
        </Card >
      </SafeAreaView>
    </>
  );
}

export default EditScreen;
