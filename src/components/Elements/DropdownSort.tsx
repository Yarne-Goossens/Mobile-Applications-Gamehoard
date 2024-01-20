import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, DimensionValue } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { colors, sizes } from '../constants/Constants';

type Props = {
    elemList: { label: string; value: string; }[];
    setSort: React.Dispatch<React.SetStateAction<string>>
    width?: DimensionValue | undefined;
    borderRadius?: number;
}

const DropdownSort = ({ elemList, setSort, width, borderRadius }: Props) => {
    const [value, setValue] = useState<string>('');

    const renderItem = (item) => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>
            </View>
        );
    };

    return (
        <Dropdown
            style={[styles.dropdown, { width: (width ? width : '50%'), borderRadius: (borderRadius ? borderRadius : 12) }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            data={elemList}
            search={false}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Sort Order"
            value={value}
            onChange={(item) => {
                setValue(item.value);
                setSort(item.value);
            }}
            renderItem={renderItem}
        />
    );
};

export default DropdownSort;

const styles = StyleSheet.create({
    dropdown: {
        marginHorizontal: 10,
        marginTop: 5,
        height: 40,
        backgroundColor: colors.highlightColor,
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
        // padding: 1,
        flexDirection: 'row',
        backgroundColor: colors.black,
        // justifyContent: 'space-between',
        alignItems: 'center',
    },
    textItem: {
        flex: 1,
        fontSize: sizes.textSize,
        color: colors.white,
        fontWeight: '600',
        textAlign: 'center'
    },
    placeholderStyle: {
        fontSize: sizes.textSize,
        color: colors.white,
        fontWeight: '600',
        textAlign: 'center'
    },
    selectedTextStyle: {
        fontSize: sizes.textSize,
        color: colors.white,
        fontWeight: '600',
        textAlign: 'center'
    },
});