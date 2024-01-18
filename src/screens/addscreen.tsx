import CheckBox from '@react-native-community/checkbox';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Card } from '@rneui/themed';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, View, useColorScheme } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { v4 as uuid } from 'uuid';
import { ParamList } from '../../App';
import ButtonThemed from '../components/Elements/ButtonThemed';
import MultiSelectComponent from '../components/Elements/MultiSelectComponent';
import { colors, genreList, platformList } from '../components/constants/Constants';
import styles from '../components/constants/Styles';
import gameService from '../services/game.service';
import { getDate } from '../services/util.service';

type ScreenProps = NativeStackScreenProps<ParamList, 'Add'>;

const AddScreen = ({ route, navigation }: ScreenProps) => {
  const [game_id, setGame_id] = useState<string>(uuid());
  const [name, setName] = useState<string>('');
  const [genre, setGenre] = useState<string[]>(['']);
  const [added_on, setAdded_on] = useState<string>(getDate());
  const [price, setPrice] = useState<number>(0);
  const [msrp, setMsrp] = useState<number>(0);
  const [rating, setRating] = useState<number>(0);
  const [user_rating, setUserRating] = useState<number>(0);
  const [critic_rating, setCriticRating] = useState<number>(0);
  const [platforms, setPlatform] = useState<string[]>(['']);
  const [multiplayer, setMultiplayer] = useState<boolean>(false);
  const [coop, setCoop] = useState<string>('');
  const [playtime, setPlaytime] = useState<number>(0);
  const [completiontime, setCompletiontime] = useState<number>(0);
  const [favorite, setFavorite] = useState<boolean>(false);
  const [physical, setPhysical] = useState<boolean>(false);
  const [picture, setPicture] = useState<string>('');

  const onSubmit = async () => {
    console.log('onSubmit');
    await gameService.addGame({ game_id, name, genre, added_on, price, msrp, rating, user_rating, critic_rating, platforms, multiplayer, coop, playtime, completiontime, favorite, physical, picture });
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
            <Text style={styles.titleAdd}>Add Game</Text>
            <Card.Divider />
            <View style={{ flex: 1, flexDirection: 'column' }}>
              <View style={styles.textDetailContainer}>
                <Text style={styles.textAddLabel}>Name:</Text>
                <TextInput style={styles.textInput} placeholder="Name" placeholderTextColor={colors.highlightColor} onChangeText={(val) => setName(val)} />
              </View>
              <View style={styles.textDetailContainer}>
                <Text style={styles.textAddLabel}>Genre(s):</Text>
                <MultiSelectComponent onSelectionChange={setGenre} valueList={genreList} />
              </View>
              <View style={styles.textDetailContainer}>
                <Text style={styles.textAddLabel}>Price Bought:</Text>
                <TextInput style={styles.textInput} placeholder="Price" placeholderTextColor={colors.highlightColor} onChangeText={(val) => setPrice(Number(val))} />
              </View>
              <View style={styles.textDetailContainer}>
                <Text style={styles.textAddLabel}>Price Full:</Text>
                <TextInput style={styles.textInput} placeholder="MSRP" placeholderTextColor={colors.highlightColor} onChangeText={(val) => setMsrp(Number(val))} />
              </View>
              <View style={styles.textDetailContainer}>
                <Text style={styles.textAddLabel}><Icon name="clock-o" size={25} /></Text>
                <TextInput style={styles.textInput} placeholder="Playtime" placeholderTextColor={colors.highlightColor} onChangeText={(val) => setPlaytime(Number(val))} />
              </View>
              <View style={styles.textDetailContainer}>
                <Text style={styles.textAddLabel}>Completiontime:</Text>
                <TextInput style={styles.textInput} placeholder="Completiontime" placeholderTextColor={colors.highlightColor} onChangeText={(val) => setCompletiontime(Number(val))} />
              </View>
              <View style={styles.textDetailContainer}>
                <Text style={styles.textAddLabel}>Own Rating:</Text>
                <TextInput style={styles.textInput} placeholder="Rating" placeholderTextColor={colors.highlightColor} onChangeText={(val) => setRating(Number(val))} />
              </View>
              <View style={styles.textDetailContainer}>
                <Text style={styles.textAddLabel}>User Rating: </Text>
                <TextInput style={styles.textInput} placeholder="User Rating" placeholderTextColor={colors.highlightColor} onChangeText={(val) => setUserRating(Number(val))} />
              </View>
              <View style={styles.textDetailContainer}>
                <Text style={styles.textAddLabel}>Critic Rating:</Text>
                <TextInput style={styles.textInput} placeholder="Critic Rating" placeholderTextColor={colors.highlightColor} onChangeText={(val) => setCriticRating(Number(val))} />
              </View>
              <View style={styles.textDetailContainer}>
                <Text style={styles.textAddLabel}>Platforms:</Text>
                <MultiSelectComponent onSelectionChange={setPlatform} valueList={platformList} />
              </View>
              <View style={styles.textDetailContainer}>
                <Text style={styles.textAddLabel}>Multiplayer: </Text>
                <CheckBox style={styles.checkbox} tintColors={{ true: colors.highlightColor, false: 'black' }} value={multiplayer} onValueChange={(val: boolean) => setMultiplayer(val)} />
              </View>
              <View style={styles.textDetailContainer}>
                <Text style={styles.textAddLabel}>Coop:</Text>
                <TextInput style={styles.textInput} placeholder="Coop" placeholderTextColor={colors.highlightColor} onChangeText={(val) => setCoop(val)} />
              </View>
              <View style={styles.textDetailContainer}>
                <Text style={styles.textAddLabel}>Physical:</Text>
                <CheckBox style={styles.checkbox} tintColors={{ true: colors.highlightColor, false: 'black' }} value={physical} onValueChange={(val: boolean) => setPhysical(val)} />
              </View>
              <View style={styles.textDetailContainer}>
                <Text style={styles.textAddLabel}>Picture:</Text>
                <TextInput style={styles.textInput} placeholder="Picture" placeholderTextColor={colors.highlightColor} onChangeText={(val) => setPicture(val)} />
              </View>
              <ButtonThemed
                title="Add Game"
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

export default AddScreen;
