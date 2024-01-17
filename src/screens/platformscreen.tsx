import React, { PropsWithChildren, useEffect, useState } from 'react';
import Footer from '../components/Footer';
import GameCardList from '../components/Game/GameCardList';
import gameService from '../services/game.service';
import { Game } from '../types/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styles from '../components/constants/Styles';
import { ParamList } from '../../App';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import ButtonThemed from '../components/Elements/ButtonThemed';
import { colors } from '../components/constants/Constants';
import { useData } from '../components/constants/DataContext';
import { platform } from 'os';

type ScreenProps = NativeStackScreenProps<ParamList, 'Platforms'>;

function PlatformScreen({ route, navigation }: ScreenProps): React.JSX.Element {
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
        updateData ? setUpdateData(false) : setUpdateData(true);
    }

    const fetchData = async (platform: string) => {
        setCollection(await gameService.getAllOfPlatform(platform))
    }

    const randomGame = () => {
        let random = Math.floor(Math.random() * collection!.length);
        return collection![random].game_id;
    }

    useEffect(() => {
        console.log("home-useEffect")
        console.log('UpdateData-Home:', updateData)
        fetchData(route.params?.platform);
    }, [updateData])

    useEffect(() => {
        console.log("home-useEffect")
        if (route.params?.platform) {
            updateScreen();
        }
        const updatedParams = { ...route.params, update: false };
        navigation.setParams(updatedParams);
    }, [route.params?.platform])

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
                    <ButtonThemed
                        title="Add A Game"
                        color={colors.highlightColor}
                        textcolor='white'
                        width='95%'
                        borderRadius={8}
                        marginTop={5}
                        onPress={() => navigation.navigate('Add')}
                    />
                    <ButtonThemed
                        title="Add A Game From IGDB"
                        color={colors.highlightColor}
                        textcolor='white'
                        width='95%'
                        borderRadius={8}
                        marginTop={5}
                        onPress={() => navigation.navigate('Igdb')}
                    />
                    <ButtonThemed
                        title="Random Game"
                        color={colors.highlightColor}
                        textcolor='white'
                        width='95%'
                        borderRadius={8}
                        marginTop={5}
                        marginBottom={5}
                        onPress={() => navigation.navigate('Details', { gameId: randomGame() })}
                    />
                    <GameCardList games={collection} deleteItem={deleteItem} navigation={navigation} updateScreen={updateScreen} />
                </View>
            </View>
            <View style={{ flexShrink: .1 }}>
                <Footer navigation={navigation} />
            </View>
        </SafeAreaView>
    );
}

export default PlatformScreen;