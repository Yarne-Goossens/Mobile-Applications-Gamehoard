import AsyncStorage from '@react-native-async-storage/async-storage';
import {Game} from '../../types/types';

const getItem = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    // console.log(jsonValue);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.log('error: ', error);
  }
};

const getAll = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const result = await AsyncStorage.multiGet(keys);

    return result.map(req => JSON.parse(req[1])).forEach(console.log);
  } catch (error) {
    console.log('error: ', error);
  }
};

const addItem = async (key: string, valueObject: Object) => {
  try {
    const jsonValue = JSON.stringify(valueObject);
    // console.log(jsonValue);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.log('error: ', error);
  }
};

const updateItem = async (key: string, valueObject: Object) => {
  try {
    await AsyncStorage.mergeItem(key, JSON.stringify(valueObject));
  } catch (error) {
    console.log('error: ', error);
  }
};

const removeItem = async (key: string) => {
  try {
    console.log('remove ', key);
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log('error: ', error);
  }
};

export default {getItem, getAll, addItem, updateItem, removeItem};
