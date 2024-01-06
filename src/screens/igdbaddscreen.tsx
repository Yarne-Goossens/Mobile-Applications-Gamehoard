import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ParamList } from '../../App';
import { colors } from '../components/constants/constants';
import SearchInput from '../components/Search/SearchInput';
import SearchResults from '../components/Search/SearchResults';
import gameService from '../services/game.service';
import { Game } from '../types/types';
import igdb from '../services/igdb.service';

type ScreenProps = NativeStackScreenProps<ParamList, 'Igdb'>;

const IgdbAddScreen = ({ route, navigation }: ScreenProps) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [games, setGames] = useState<Array<Game>>([]);

  const deleteItem = async (id: string) => {
    await gameService.removeGameById(id);
  }

  const searchGames = async (value: string) => {
    setGames(await gameService.searchGame(value));
  }

  const getGames = async (searchValue: string) => {
    const response = await igdb.getGamesIgdb(searchValue);
    console.log("getIgdbGames")
    setGames(response);
  }

  useEffect(() => {
    console.log("search-useEffect")
    searchGames(searchValue);
  }, [searchValue])

  return (
    <View style={styles.container}>
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
      <SearchResults games={games} navigation={navigation} deleteItem={deleteItem} updateScreen={() => { }} />
      <Button title="Get" onPress={() => getGames(searchValue)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    paddingBottom: 80,
  }
});

export default IgdbAddScreen;