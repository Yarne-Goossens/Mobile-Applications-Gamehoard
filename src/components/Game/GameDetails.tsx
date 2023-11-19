import { Text, View } from "react-native";
import styles from "../Styles";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ParamList } from "../../../App";

type ScreenProps = NativeStackScreenProps<ParamList, 'Details'>;

const GameDetailsScreen = ({ route, navigation }: ScreenProps) => (
    <View>
        <Text style={styles.textGame}>Id: {route.params.gameId}</Text>
    </View>
);

export default GameDetailsScreen;
