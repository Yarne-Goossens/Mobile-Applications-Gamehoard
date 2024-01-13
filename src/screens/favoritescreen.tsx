import React, { PropsWithChildren, useEffect, useState } from 'react';
import Footer from '../components/Footer';
import GameCardList from '../components/Game/GameCardList';
import gameService from '../services/game.service';
import { Game } from '../types/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styles from '../components/constants/Styles';
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
import { getDate } from '../services/util.service';
import ButtonThemed from '../components/Elements/ButtonThemed';
import { colors } from '../components/constants/Constants';
import MultiSelectComponent from '../components/Elements/MultiSelectComponent';
import { useData } from '../components/constants/DataContext';


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

type ScreenProps = NativeStackScreenProps<ParamList, 'Favorites'>;

function FavoriteScreen({ route, navigation }: ScreenProps): React.JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        flex: 1
    };

    const { updateData, setUpdateData } = useData();

    const [collection, setCollection] = useState<Array<Game>>();
    const [update, setUpdate] = useState<Boolean>(false)

    const updateScreen = () => {
        console.log("update-screen");
        update ? setUpdate(false) : setUpdate(true);
    }

    const fetchData = async () => {
        setCollection(await gameService.getAllFavorites())
    }

    useEffect(() => {
        console.log("home-useEffect")
        fetchData();
    }, [update])

    const deleteItem = async (id: string) => {
        gameService.removeGameById(id);
        updateScreen();
    }

    return (
        <SafeAreaView style={backgroundStyle}>
            <View style={{ flex: 1 }}>
                <StatusBar
                    barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                    backgroundColor={backgroundStyle.backgroundColor}
                />
                <View
                    style={{
                        backgroundColor: isDarkMode ? colors.black : colors.white,
                        flex: 1,
                    }}>
                    <GameCardList games={collection} deleteItem={deleteItem} navigation={navigation} updateScreen={updateScreen} />
                </View>
            </View>
            {/* <View style={{ flexShrink: .1 }}>
                <Footer />
            </View> */}
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

export default FavoriteScreen;