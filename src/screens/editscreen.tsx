import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, SafeAreaView, ScrollView, useColorScheme } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ParamList } from '../../App';
import gameService from '../services/game.service';
import { v4 as uuid } from 'uuid';
import CheckBox from '@react-native-community/checkbox';
import { Game } from '../types/types';
import { Card } from '@rneui/themed';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import styles from '../components/constants/Styles';
import { colors, genreList, platformList } from '../components/constants/Constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import MultiSelectComponent from '../components/Elements/MultiSelectComponent';
import ButtonThemed from '../components/Elements/ButtonThemed';

type ScreenProps = NativeStackScreenProps<ParamList, 'Edit'>;

const EditScreen = ({ route, navigation }: ScreenProps) => {
  const [game, setGame] = useState<Game | null>(null);

  const fetchData = async () => {
    console.log('editID', route.params.gameId)
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
      setUserRating(game.user_rating!)
      setCriticRating(game.critic_rating!)
      setPlatform(game.platforms!)
      setMultiplayer(game.multiplayer!)
      setCoop(game.coop!)
      setPlaytime(game.playtime!)
      setCompletiontime(game.completiontime!)
      setFavorite(game.favorite!)
      setPicture(game.picture!)
      setPhysical(game.physical!)
    }
  }

  useEffect(() => {
    console.log("edit-useEffect");
    fetchData();
  }, [route.params.gameId])

  useEffect(() => {
    console.log("editData-useEffect");
    // console.log('name', name)
    // console.log('game', game)
    fillInData();
    // console.log('name', name)
    // console.log('game', game)
  }, [game])

  const [game_id, setGame_id] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [genre, setGenre] = useState<string[]>([]);
  const [added_on, setAdded_on] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [msrp, setMsrp] = useState<number>(0);
  const [rating, setRating] = useState<number>(0);
  const [user_rating, setUserRating] = useState<number>(0);
  const [critic_rating, setCriticRating] = useState<number>(0);
  const [platforms, setPlatform] = useState<string[]>([]);
  const [multiplayer, setMultiplayer] = useState<boolean>(false);
  const [coop, setCoop] = useState<string>('');
  const [playtime, setPlaytime] = useState<number>(0);
  const [completiontime, setCompletiontime] = useState<number>(0);
  const [favorite, setFavorite] = useState<boolean>(false);
  const [physical, setPhysical] = useState<boolean>(false);
  const [picture, setPicture] = useState<string>('');

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

  console.log('platform:', platforms)

  return (
    <>
      <SafeAreaView style={backgroundStyle}>
        <Card wrapperStyle={styles.gamecard} containerStyle={styles.gamecardContainer}>
          <ScrollView>
            <Text style={styles.textHeader}>Edit Game</Text>
            <Card.Divider />
            <View style={{ flex: 1, flexDirection: 'column' }}>
              <View style={styles.textDetailContainer}>
                <Text style={styles.textAddLabel}>Name:</Text>
                <TextInput style={styles.textInput} placeholder="Name" placeholderTextColor={colors.highlightColor} onChangeText={(val) => setName(val)} value={name} />
              </View>
              <View style={styles.textDetailContainer}>
                <Text style={styles.textAddLabel}>Genre(s):</Text>
                <MultiSelectComponent onSelectionChange={setGenre} valueList={genreList} previousValues={genre} />
              </View>
              <View style={styles.textDetailContainer}>
                <Text style={styles.textAddLabel}>Price Bought:</Text>
                <TextInput style={styles.textInput} placeholder="Price" placeholderTextColor={colors.highlightColor} onChangeText={(val) => setPrice(Number(val))} value={price?.toString()} />
              </View>
              <View style={styles.textDetailContainer}>
                <Text style={styles.textAddLabel}>Price Full:</Text>
                <TextInput style={styles.textInput} placeholder="MSRP" placeholderTextColor={colors.highlightColor} onChangeText={(val) => setMsrp(Number(val))} value={msrp?.toString()} />
              </View>
              <View style={styles.textDetailContainer}>
                <Text style={styles.textAddLabel}><Icon name="clock-o" size={25} /></Text>
                <TextInput style={styles.textInput} placeholder="Playtime" placeholderTextColor={colors.highlightColor} onChangeText={(val) => setPlaytime(Number(val))} value={playtime?.toString()} />
              </View>
              <View style={styles.textDetailContainer}>
                <Text style={styles.textAddLabel}>Completiontime:</Text>
                <TextInput style={styles.textInput} placeholder="Completiontime" placeholderTextColor={colors.highlightColor} onChangeText={(val) => setCompletiontime(Number(val))} value={completiontime?.toString()} />
              </View>
              <View style={styles.textDetailContainer}>
                <Text style={styles.textAddLabel}>Own Rating:</Text>
                <TextInput style={styles.textInput} placeholder="Rating" placeholderTextColor={colors.highlightColor} onChangeText={(val) => setRating(Number(val))} value={rating?.toString()} />
              </View>
              <View style={styles.textDetailContainer}>
                <Text style={styles.textAddLabel}>User Rating: </Text>
                <TextInput style={styles.textInput} placeholder="User Rating" placeholderTextColor={colors.highlightColor} onChangeText={(val) => setUserRating(Number(val))} value={user_rating?.toString()} />
              </View>
              <View style={styles.textDetailContainer}>
                <Text style={styles.textAddLabel}>Critic Rating:</Text>
                <TextInput style={styles.textInput} placeholder="Critic Rating" placeholderTextColor={colors.highlightColor} onChangeText={(val) => setCriticRating(Number(val))} value={critic_rating?.toString()} />
              </View>
              <View style={styles.textDetailContainer}>
                <Text style={styles.textAddLabel}>Platforms:</Text>
                <MultiSelectComponent onSelectionChange={setPlatform} valueList={platformList} previousValues={platforms} />
              </View>
              <View style={styles.textDetailContainer}>
                <Text style={styles.textAddLabel}>Multiplayer: </Text>
                <CheckBox style={styles.checkbox} tintColors={{ true: colors.highlightColor, false: 'black' }} value={multiplayer ? true : false} onValueChange={(val: boolean) => setMultiplayer(val)} />
              </View>
              <View style={styles.textDetailContainer}>
                <Text style={styles.textAddLabel}>Coop:</Text>
                <TextInput style={styles.textInput} placeholder="Coop" placeholderTextColor={colors.highlightColor} onChangeText={(val) => setCoop(val)} value={coop?.toString()} />
              </View>
              <View style={styles.textDetailContainer}>
                <Text style={styles.textAddLabel}>Physical:</Text>
                <CheckBox style={styles.checkbox} tintColors={{ true: colors.highlightColor, false: 'black' }} value={physical ? true : false} onValueChange={(val: boolean) => setPhysical(val)} />
              </View>
              <View style={styles.textDetailContainer}>
                <Text style={styles.textAddLabel}>Picture:</Text>
                <TextInput style={styles.textInput} placeholder="Picture" placeholderTextColor={colors.highlightColor} onChangeText={(val) => setPicture(val)} value={picture?.toString()} />
              </View>
              <ButtonThemed
                title="Edit Game"
                color={colors.highlightColor}
                textcolor='white'
                width='95%'
                borderRadius={16}
                marginBottom={2}
                marginTop={10}
                onPress={() => onSubmit()}
              />
            </View>
          </ScrollView>
        </Card >
      </SafeAreaView>
    </>
  );
}

export default EditScreen;
