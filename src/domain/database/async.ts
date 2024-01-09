import AsyncStorage from '@react-native-async-storage/async-storage';
import {Game as GameType} from '../../types/types';
import {Game} from '../model/game';

const getItem = async (key: string): Promise<Game> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    // console.log(jsonValue);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error('error: ', error);
  }
};

const getAll = async (): Promise<Game[]> => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const result = await AsyncStorage.multiGet(keys);

    let list: Game[] = [];
    // console.log(list);
    result.map(req => list.push(JSON.parse(req[1])));
    console.log(list);
    return list;
  } catch (error) {
    console.error('error: ', error);
  }
};

const addItem = async (key: string, valueObject: Object) => {
  try {
    const jsonValue = JSON.stringify(valueObject);
    // console.log(jsonValue);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.error('error: ', error);
  }
};

const updateItem = async (key: string, valueObject: Object) => {
  try {
    await AsyncStorage.mergeItem(key, JSON.stringify(valueObject));
  } catch (error) {
    console.error('error: ', error);
  }
};

const removeItem = async (key: string) => {
  try {
    console.log('remove ', key);
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('error: ', error);
  }
};

export default {getItem, getAll, addItem, updateItem, removeItem};
