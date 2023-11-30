import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ParamList } from '../../App';
import gameService from '../services/game.service';
import { getDate } from '../services/util.service';
import {v4 as uuid} from 'uuid';
import CheckBox from '@react-native-community/checkbox';

type ScreenProps = NativeStackScreenProps<ParamList, 'Add'>;

const AddScreen = ({ route, navigation }: ScreenProps) => {
  const [game_id, setGame_id] = useState<string>(uuid());
  const [name, setName] = useState<string>('');
  const [genre, setGenre] = useState<string[]>(['']);
  const [added_on, setAdded_on] = useState<string>(getDate());
  const [price, setPrice] = useState<number>(0);
  const [msrp, setMsrp] = useState<number>(0);
  const [rating, setRating] = useState<number>(0);
  const [platforms , setPlatform] = useState<string[]>(['']);
  const [multiplayer, setMultiplayer] = useState<boolean>(false);
  const [coop, setCoop] = useState<string>('');
  const [playtime, setPlaytime] = useState<number>(0);
  const [completiontime, setCompletiontime] = useState<number>(0);
  const [favorite, setFavorite] = useState<boolean>(false);
  const [picture, setPicture] = useState<string>('');

  

  const onSubmit = async() => {
    console.log('onSubmit');
    console.log(game_id);
    console.log(added_on);
    await gameService.addGame({game_id ,name, genre, added_on, price, msrp, rating, platforms, multiplayer, coop, playtime, completiontime, favorite, picture});
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

export default AddScreen;
