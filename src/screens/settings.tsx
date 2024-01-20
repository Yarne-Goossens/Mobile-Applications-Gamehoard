import React from 'react';
import { View, Text, Button, StyleSheet, useColorScheme, SafeAreaView, StatusBar } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ParamList } from '../../App';
import { useData } from '../components/constants/DataContext';
import ButtonThemed from '../components/Elements/ButtonThemed';
import { colors } from '../components/constants/Constants';
import gameService from '../services/game.service';
import { Colors } from 'react-native/Libraries/NewAppScreen';

type ScreenProps = NativeStackScreenProps<ParamList, 'Settings'>;

const SettingsScreen = ({ route, navigation }: ScreenProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  const { updateData, setUpdateData } = useData();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View
        style={{
          backgroundColor: isDarkMode ? colors.black : colors.white,
          flex: 1,
        }}>
        <View style={styles.root}>
          <ButtonThemed
            title="Add Sample Data"
            color={colors.highlightColor}
            textcolor='white'
            width='95%'
            borderRadius={8}
            marginTop={5}
            onPress={async () => { await gameService.sampleData(); setUpdateData(true); navigation.navigate('Home', { update: true }); }}
          />
          <ButtonThemed
            title="Refresh Game List"
            color={colors.highlightColor}
            textcolor='white'
            width='95%'
            borderRadius={8}
            marginTop={5}
            onPress={async () => { setUpdateData(true); navigation.navigate('Home', { update: true }); }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'black'
  }
});

export default SettingsScreen;