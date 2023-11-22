import React, { PropsWithChildren, useEffect, useState } from 'react';
import Footer from '../components/Footer';
import GameCard from '../components/Game/GameCard';
import gameService from '../services/game.service';
import { Game } from '../types/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styles from '../components/Styles';
import { ParamList } from '../../App';
import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


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

    async function fetchData() {
        setCollection(await gameService.getAllGames())
    }

    useEffect(() => {
        console.log("index-useEffect")
        fetchData();
    }, [])

    const deleteItem = async (id: number) => {
        gameService.removeGameById(id);
        setCollection(await gameService.getAllGames())
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
                        title="Refresh Sample Data"
                        onPress={async () => { await gameService.sampleData(); fetchData(); }}
                    />
                    <GameCard games={collection} deleteItem={deleteItem} navigation={navigation} />
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

export default HomeScreen;