import { Ionicons } from "@react-native-vector-icons/ionicons";
import {
    StyleSheet,
    Text,
    View
} from "react-native";

export default function SearchBar() {
return(
    
    <View style={styles.background}>
        <Ionicons
              name="search"
              color="#72777d"
              size={24}
        />
        <Text style={styles.textSection}>
            Search Wikipedia
        </Text>
        <Ionicons
              name="mic-sharp"
              color="#72777d"
              size={24}
        />
    </View>
)
}

const styles = StyleSheet.create({
    background: {
        backgroundColor:"#f8f9fa",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        maxHeight: 50,
        width: "100%",
        margin: 8,
        padding: 16,
        borderRadius: 25,
    },

    textSection: {
        color:"#54595d",
        width: "100%",
        textAlign:"left",
        margin: 16,
    }
});