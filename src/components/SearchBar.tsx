import {
    StyleSheet,
    Text,
    View
} from "react-native";

export default function SearchBar() {
return(
    <View style={styles.background}>
        <Text style={styles.textSection}>
            Search
        </Text>
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
    },

    textSection: {
        color:"#54595d",
        width: "100%",
        textAlign:"left",
        margin: 16,
    }
});