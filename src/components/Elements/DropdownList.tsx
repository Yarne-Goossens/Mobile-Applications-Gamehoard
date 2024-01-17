import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { colors } from '../constants/Constants';

type Props = {
    genres: string[];
}

let data = [
    { label: 'Genre 1', value: '1' },
    { label: 'Genre 2', value: '2' },
    { label: 'Genre 3', value: '3' },
];

const DropdownList = ({ genres }: Props) => {
    const [value, setValue] = useState(null);
    const [dataList, setDataList] = useState<{
        label: string;
        value: string;
    }[]>([])

    useEffect(() => {
        console.log(genres);
        const newData = genres.map((item) => ({ label: item, value: item }));
        setDataList(newData);
    }, [genres]);

    const renderItem = (item) => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>
            </View>
        );
    };

    return (
        <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            data={dataList}
            search={false}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Show"
            value={value}
            onChange={(item) => {
                //setValue(item.value);
            }}
            renderItem={renderItem}
        />
    );
};

export default DropdownList;

const styles = StyleSheet.create({
    dropdown: {
        marginHorizontal: 1,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    item: {
        padding: 2,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
    },
    textItem: {
        flex: 1,
        fontSize: 16,
        color: colors.textColor,
        fontWeight: '500',
        textAlign: 'center'
    },
    placeholderStyle: {
        fontSize: 16,
        color: colors.textColor,
        fontWeight: '500',
        textAlign: 'center'
    },
    selectedTextStyle: {
        fontSize: 16,
        color: colors.textColor,
    },
});