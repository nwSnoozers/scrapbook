import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView, TextInput } from "react-native";

const MemoryPage = () => {
	const [note, onChangeNote] = React.useState("Add your notes here");
	const [location, onChangeLocation] = React.useState("Where did you go?");
	const [number, onChangeNumber] = React.useState(null);
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Text>Memory</Text>
			<Text>Date</Text>
			<Text>Destination</Text>
			<TextInput
				style={styles.locationInput}
				onChangeText={onChangeLocation}
				value={location}
			/>
			<Text>Personal rating</Text>
			<Text>Photo</Text>
			<Text>Notes Section</Text>
			<TextInput
				style={styles.notesInput}
				onChangeText={onChangeNote}
				value={note}
			/>
			<StatusBar style="auto" />
		</View>
	);
};

const styles = StyleSheet.create({
	locationInput: {
		height: 40,
		width: "80%",
		textAlignVertical: "top",
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
	notesInput: {
		height: "30%",
		width: "80%",
		textAlignVertical: "top",
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "top",
		justifyContent: "left",
	},
});

export default MemoryPage;
