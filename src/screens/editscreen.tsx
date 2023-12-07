import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ParamList } from '../../App';
import gameService from '../services/game.service';
import { getDate } from '../services/util.service';
import {v4 as uuid} from 'uuid';
import CheckBox from '@react-native-community/checkbox';
import { Game } from '../types/types';
import { get } from 'http';

type ScreenProps = NativeStackScreenProps<ParamList, 'Edit'>;

const EditScreen = ({ route, navigation }: ScreenProps) => {
  const [game, setGame] = useState<Game | null>(null);

  const fetchData = async () => {
    setGame(await gameService.getGameById(route.params.gameId));
  }

  useEffect(() => {
      console.log("edit-useEffect");
      fetchData();
  }, [route.params.gameId])

  const [game_id, setGame_id] = useState<string>(game?.game_id!);
  const [name, setName] = useState<string>(game?.name!);
  const [genre, setGenre] = useState<string[]>(game?.genre!);
  const [added_on, setAdded_on] = useState<string>(game?.added_on!);
  const [price, setPrice] = useState<number>(game?.price!);
  const [msrp, setMsrp] = useState<number>(game?.msrp!);
  const [rating, setRating] = useState<number>(game?.rating!);
  const [platforms , setPlatform] = useState<string[]>(game?.platforms!);
  const [multiplayer, setMultiplayer] = useState<boolean>(game?.multiplayer!);
  const [coop, setCoop] = useState<string>(game?.coop!);
  const [playtime, setPlaytime] = useState<number>(game?.playtime!);
  const [completiontime, setCompletiontime] = useState<number>(game?.completiontime!);
  const [favorite, setFavorite] = useState<boolean>(game?.favorite!);
  const [picture, setPicture] = useState<string>(game?.picture!);

  const onSubmit = async() => {
    console.log('onSubmit');
    await gameService.updateGame(game?.game_id!,{game_id ,name, genre, added_on, price, msrp, rating, platforms, multiplayer, coop, playtime, completiontime, favorite, picture});
    navigation.navigate('Home');
  }

  return (
    <View style={styles.root}>
      <TextInput placeholder="Name" onChangeText={(val)=>setName(val)} />
      <TextInput placeholder="Genre" onChangeText={(val)=>setGenre(val)} />
      <TextInput placeholder="Price" onChangeText={(val)=>setPrice(Number(val))} />
      <TextInput placeholder="MSRP" onChangeText={(val)=>setMsrp(Number(val))} />
      <TextInput placeholder="Rating" onChangeText={(val)=>setRating(Number(val))} />
      <TextInput placeholder="Platforms" onChangeText={(val)=>setPlatform(val)} />
      <CheckBox value={multiplayer} onValueChange={(val: boolean) => setMultiplayer(val)} />
      <TextInput placeholder="Coop" onChangeText={(val)=>setCoop(val)} />
      <TextInput placeholder="Picture" onChangeText={(val)=>setPicture(val)} />
      <Button title="Add Game" onPress={() => onSubmit() } />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  }
});

export default EditScreen;
