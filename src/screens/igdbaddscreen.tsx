import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ParamList } from '../../App';
import { colors } from '../components/constants/Constants';
import SearchInput from '../components/Search/SearchInput';
import SearchResults from '../components/Search/SearchResults';
import gameService from '../services/game.service';
import { Game } from '../types/types';
import igdb from '../services/igdb.service';
import IgdbInput from '../components/Igdb/IgdbInput';
import IgdbResults from '../components/Igdb/IgdbResults';

type ScreenProps = NativeStackScreenProps<ParamList, 'Igdb'>;

const IgdbAddScreen = ({ route, navigation }: ScreenProps) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [games, setGames] = useState<Array<Game>>([]);

  const deleteItem = async (id: string) => {
    await gameService.removeGameById(id);
  }

  const getGames = async (searchValue: string) => {
    const response = await igdb.getGamesIgdb(searchValue);
    setGames(response);
  }

  /*useEffect(() => {
    console.log("search-useEffect")
    searchGames(searchValue);
  }, [searchValue])*/

  return (
    <View style={styles.container}>
      <IgdbInput searchValue={searchValue} setSearchValue={setSearchValue} input={getGames} />
      <IgdbResults games={games} navigation={navigation} updateScreen={() => { }} />
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