import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
	useFonts,
	SpaceMono_400Regular,
	SpaceMono_400Regular_Italic,
	SpaceMono_700Bold,
	SpaceMono_700Bold_Italic,
} from "@expo-google-fonts/space-mono";

const WIP = () => {
    // fonts
	let [fontsLoaded] = useFonts({
		SpaceMono_400Regular,
		SpaceMono_400Regular_Italic,
		SpaceMono_700Bold,
		SpaceMono_700Bold_Italic,
	});

    return (
        <View style={{
            flex: 1,
            width: "100%", 
            display: "flex",
            flexDirection: "column",
            paddingBottom: 90,
            paddingLeft: 24,
            paddingRight: 24,
        }}
        >
            <Text style={[styles.dateTitle, styles.text]}>
                Under construction
            </Text>
            <Text style={[styles.h2, styles.text]}>
                Come back soon!
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
	text: {
		color: "#1B463E",
	},
	dateTitle: {
		fontSize: 40,
		fontWeight: "bold",
		marginTop: 20,
		marginBottom: 0,
		fontFamily: "SpaceMono_700Bold",
	},
	h2: {
		fontSize: 20,
		fontWeight: "bold",
		marginTop: 20,
		marginBottom: 10,
        fontFamily: "SpaceMono_700Bold"
	}
});

export default WIP;