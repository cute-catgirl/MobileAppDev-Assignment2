import { Ionicons } from "@react-native-vector-icons/ionicons";
import {
    StyleSheet,
    TextInput,
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
        <TextInput
            style={styles.textSection}
            placeholder="Search Wikipedia"
            underlineColorAndroid="transparent"
            selectionColor="#72777d"
        />
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
        marginTop: 8,
        marginBottom: 8,
        padding: 16,
        borderRadius: 25,
    },

    textSection: {
        color:"#54595d",
        width: "100%",
        textAlign:"left",
        margin: 16,
        borderWidth: 0,
        outlineWidth: 0,
    }
});