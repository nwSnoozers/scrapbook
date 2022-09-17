import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";

// date picker import
// import DatePicker from "react-native-date-picker";
import { Button } from "react-native";
import DatePicker from "react-native-modern-datepicker";
import { Image } from 'react-native'

// photo upload imports
import { Platform, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

// star rating component
import StarRating from 'react-native-star-rating-widget';

const CreateMemoryPage = () => {
	// text input consts
	const [note, onChangeNote] = React.useState("Add your notes here");
	const [location, onChangeLocation] = React.useState("Where did you go?");
	const [rating, setRating] = useState(0);

	// date picker consts
	// const [date, setDate] = useState(new Date());
	// const [open, setOpen] = useState(false);
	const [selectedDate, setSelectedDate] = useState("");

	// image upload consts
	const [image, setImage] = useState(null);

	const addImage = async () => {
		let _image = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});
		console.log(JSON.stringify(_image));
		if (!_image.cancelled) {
			setImage(_image.uri);
		}
	};

	return (
		<View style={styles.parentView}>
			<ScrollView contentContainerStyle={styles.contentContainer} style={styles.scrollView}>
				<Text>Create new memory</Text>
				<Text>Select your date</Text>
				<DatePicker
					style={datePickerStyles.calendar}
					onSelectedChange={(date) => setSelectedDate(date)}
				/>
				<Text>Destination</Text>
				<TextInput
					style={styles.locationInput}
					onChangeText={onChangeLocation}
					value={location}
				/>
				<Text>Rate your experience</Text>
				<StarRating
					rating={rating}
					onChange={setRating}
				/>
				<Text>Add media</Text>
				<View style={imageUploaderStyles.container}>
					{image && (
						<Image
							source={{ uri: image }}
							style={{ width: 200, height: 200 }}
						/>
					)}
					<View style={imageUploaderStyles.uploadBtnContainer}>
						<TouchableOpacity
							onPress={addImage}
							style={imageUploaderStyles.uploadBtn}
						>
							<Text>{image ? "Edit" : "Upload"} Image</Text>
							<AntDesign name="camera" size={20} color="black" />
						</TouchableOpacity>
					</View>
				</View>
				<Text>Notes Section</Text>
				<TextInput
					style={styles.notesInput}
					onChangeText={onChangeNote}
					value={note}
				/>
				<Button
					onPress={() => Alert.alert('Saved!')}
					title="Save"
					color="#841584"
				/>
				{/* <StatusBar style="auto" /> */}
			</ScrollView>
		</View>
	);
};

const datePickerStyles = StyleSheet.create({
	calendar: {
		elevation: 2,
		height: 200,
		// width: 200,
		backgroundColor: "#efefef",
		position: "relative",
		overflow: "hidden",
	},
});

const imageUploaderStyles = StyleSheet.create({
	container: {
		elevation: 2,
		height: 200,
		width: 200,
		backgroundColor: "#efefef",
		position: "relative",
		overflow: "hidden",
	},
	uploadBtnContainer: {
		opacity: 0.7,
		position: "absolute",
		right: 0,
		bottom: 0,
		backgroundColor: "lightgrey",
		width: "100%",
		height: "25%",
	},
	uploadBtn: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
});

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
	scrollView: {
		height: '100%',
		width: '80%',
		margin: 20,
		alignSelf: 'center',
		padding: 10,
	},
	parentView: {
		flex: 1,
		height: "100%",
		width: "100%"
	},
	contentContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: 30,
	},
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "top",
		justifyContent: "center",
	},
});

export default CreateMemoryPage;