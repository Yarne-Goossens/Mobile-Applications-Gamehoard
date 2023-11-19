import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import { Header, HeaderButtons } from './src/components/Header';
import Footer from './src/components/Footer';
import GameCard from './src/components/Game/GameCard';
import gameService from './src/services/game.service';
import { Game } from './src/types/types';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsScreen from './src/screens/settings';
import { Button } from 'react-native';
import GameDetailsScreen from './src/components/Game/GameDetails';
import styles from './src/components/Styles';

export type ParamList = {
  Home: undefined;
  Details: { gameId: number };
  Settings: undefined;
};

const Stack = createNativeStackNavigator<ParamList>();

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={stylesApp.sectionContainer}>
      <Text
        style={[
          stylesApp.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          stylesApp.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

type ScreenProps = NativeStackScreenProps<ParamList, 'Home'>;

function HomeScreen({ route, navigation }: ScreenProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [collection, setCollection] = useState<Array<Game>>();

  useEffect(() => {
    console.log("index-useEffect")
    setCollection(gameService.getAllGames())
  }, [])

  const deleteItem = (id: number) => {
    gameService.removeGameById(id);
    setCollection(gameService.getAllGames())
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Button
            title="Go to Settings"
            onPress={() => navigation.navigate('Settings')}
          />
          <GameCard games={collection} deleteItem={deleteItem} navigation={navigation} />
          <Section title="Step One">
            Edit <Text style={stylesApp.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="Step One">
            Edit <Text style={stylesApp.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={({ navigation, route }) => ({
        headerStyle: {
          backgroundColor: styles.header.backgroundColor,
        },
        headerTitle: (props) => <Header />,
        headerRight: (props) => <HeaderButtons navigation={navigation} />
      })}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Details" component={GameDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const stylesApp = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
