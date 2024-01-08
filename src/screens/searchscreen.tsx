import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ParamList } from '../../App';
import { colors } from '../components/constants/Constants';
import SearchInput from '../components/Search/SearchInput';
import SearchResults from '../components/Search/SearchResults';
import gameService from '../services/game.service';
import { Game } from '../types/types';

type ScreenProps = NativeStackScreenProps<ParamList, 'Search'>;

const SearchScreen = ({ route, navigation }: ScreenProps) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [games, setGames] = useState<Array<Game>>([]);

  const deleteItem = async (id: string) => {
    await gameService.removeGameById(id);
  }

  const searchGames = async (value: string) => {
    setGames(await gameService.searchGame(value));
  }

  useEffect(() => {
    console.log("search-useEffect")
    searchGames(searchValue);
  }, [searchValue])

  return (
    <View style={styles.container}>
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
      <SearchResults games={games} navigation={navigation} deleteItem={deleteItem} updateScreen={() => { }} />
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

export default SearchScreen;