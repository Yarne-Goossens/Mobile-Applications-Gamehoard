import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Header, HeaderButtons } from './src/components/Header';
import gameService from './src/services/game.service';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsScreen from './src/screens/settings';
import GameDetailsScreen from './src/components/Game/GameDetails';
import styles from './src/components/Styles';
import HomeScreen from './src/screens/homescreen';

export type ParamList = {
  Home: undefined;
  Details: { gameId: number };
  Settings: undefined;
};

const Stack = createNativeStackNavigator<ParamList>();

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

export default App;
