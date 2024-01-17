import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MultiSelect } from 'react-native-element-dropdown';
import { colors } from '../constants/Constants';
import Icon from 'react-native-vector-icons/FontAwesome'

type Props = {
    onSelectionChange: (selectedGenres: string[]) => void;
    valueList: string[];
}

const MultiSelectComponent = ({ onSelectionChange, valueList }: Props) => {
    const [selected, setSelected] = useState([]);
    const placeholder = 'Select Values';
    const [dataList, setDataList] = useState<{
        label: string;
        value: string;
    }[]>([])

    useEffect(() => {
        const newData = valueList.map((item) => ({ label: item, value: item }));
        setDataList(newData);
    }, []);

    useEffect(() => {
        console.log(selected);
        onSelectionChange(selected);
    }, [selected]);

    const renderItem = (item) => {
        return (
            <View style={styles.item}>
                <Text style={[styles.textItem, selected.includes(item.label) && { color: 'green' }]}>{item.label}</Text>
            </View>
        );
    };

    return (
        <MultiSelect
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            // iconStyle={styles.iconStyle}
            data={dataList}
            search={false}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={placeholder}
            searchPlaceholder="Search..."
            value={selected}
            onChange={(item) => {
                setSelected(item);
            }}
            // renderLeftIcon={() => (
            //     <Icon
            //         style={styles.icon}
            //         color="black"
            //         name="star"
            //         size={20}
            //     />
            // )}
            renderItem={renderItem}
            visibleSelectedItem={false}
        />
    );
};

export default MultiSelectComponent;

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
    iconStyle: {
        width: 20,
        height: 20,
    },
    icon: {
        marginRight: 5,
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
        color: colors.highlightColor,
    },
});