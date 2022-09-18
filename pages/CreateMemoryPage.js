import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	ScrollView,
	SafeAreaView,
	StatusBar,
	Dimensions,
} from "react-native";
import {
	useFonts,
	SpaceMono_400Regular,
	SpaceMono_400Regular_Italic,
	SpaceMono_700Bold,
	SpaceMono_700Bold_Italic,
} from "@expo-google-fonts/space-mono";

// date picker imports
import { Button } from "react-native";
import DatePicker from "react-native-modern-datepicker";
import { Image } from "react-native";
import { getToday, getFormatedDate } from "react-native-modern-datepicker";

// photo upload imports
import { Platform, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

// star rating component
import StarRating from "react-native-star-rating-widget";

// axios
// var axios = require('axios');

const CreateMemoryPage = () => {
	// fonts
	let [fontsLoaded] = useFonts({
		SpaceMono_400Regular,
		SpaceMono_400Regular_Italic,
		SpaceMono_700Bold,
		SpaceMono_700Bold_Italic,
	});

	// text input consts
	const [note, onChangeNote] = React.useState("Add your notes here");
	const [location, onChangeLocation] = React.useState("Where did you go?");
	const [rating, setRating] = useState(0);

	// date picker consts + functions
	const [selectedDate, setSelectedDate] = useState(getToday());

	let displayDate = getFormatedDate(selectedDate, "MMM DD YYYY");
	console.log("selectedDate: ", selectedDate);
	console.log("displayDate: ", displayDate);

	const onSelectedChangeHandler = (date) => {
		setSelectedDate(date);
		displayDate = getFormatedDate(selectedDate, "MMM DD YYYY");
	};

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
			<View style={{
				width: "100%",
				flex: 1,
				display: "flex",
				flexDirection: "column",
				paddingBottom: 90,
				paddingLeft: 24,
				paddingRight: 24
			}}>

			<ScrollView
				// contentContainerStyle={styles.contentContainer}
				style={styles.scrollView}
			>
				<Text style={[styles.dateTitle, styles.text]}>
					{displayDate}
				</Text>
				<Text style={[styles.h2, styles.text]}>Select your date</Text>
				<DatePicker
					style={datePickerStyles.calendar}
					onSelectedChange={onSelectedChangeHandler}
				/>
				<Text style={[styles.h2, styles.text]}>Where did you go?</Text>
				<TextInput
					style={styles.locationInput}
					onChangeText={onChangeLocation}
					value={location}
				/>
				<View style={styles.ratingView}>
					<Text style={[styles.h2, styles.text, styles.ratingText]}>
						Your rating
					</Text>
					<StarRating
						style={styles.ratingStars}
						rating={rating}
						onChange={setRating}
					/>
				</View>

				<Text style={[styles.h2, styles.text]}>Media</Text>
				<View style={imageUploaderStyles.container}>
					{image && (
						<Image
							source={{ uri: image }}
							style={{ width: 200 }}
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
				<Text style={[styles.h2, styles.text]}>Notes Section</Text>
				<TextInput
					style={styles.notesInput}
					onChangeText={onChangeNote}
					value={note}
				/>
				<Button
					onPress={() => {
						// axios({
						// 	method: 'post',
						// 	url: 'http://localhost:3000/memories',
						// 	data: {
						// 	  date: selectedDate,
						// 	  destination: location,
						// 	  rating: rating,
						// 	  photos: image.uri,
						// 	  notes: note
						// 	}
						//   });
					}}
					title="Save"
					color="#841584"
				/>
				{/* <StatusBar style="auto" /> */}
			</ScrollView>
			</View>
		</View>
	);
};

const datePickerStyles = StyleSheet.create({
	calendar: {
		elevation: 2,
		// height: 200,
		backgroundColor: "#efefef",
		position: "relative",
		overflow: "hidden",
	},
});

const imageUploaderStyles = StyleSheet.create({
	container: {
		elevation: 2,
		height: 200,
		flex: 1, 
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
		// height: "25%",
	},
	uploadBtn: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
});

const styles = StyleSheet.create({
	text: {
		color: "#1B463E",
	},
	dateTitle: {
		fontSize: 40,
		fontWeight: "bold",
		marginTop: 20,
		marginBottom: 20,
		fontFamily: "SpaceMono_700Bold",
	},
	h2: {
		fontSize: 20,
		fontWeight: "bold",
		marginTop: 20,
		marginBottom: 10,
	},
	locationInput: {
		// height: 40,
		width: "99%",
		textAlignVertical: "top",
		marginVertical: 12,
		borderWidth: 1,
		padding: 10,
	},
	notesInput: {
		// height: "30%",
		width: "99%",
		textAlignVertical: "top",
		marginVertical: 12,
		borderWidth: 1,
		padding: 10,
		overflow: "hidden",
	},
	parentView: {
		flex: 1,
		// height: "auto",
		backgroundColor: "#F3F7F5",
		borderColor: "green",
		borderWidth: 1,
	},
	scrollView: {
		// flex: 1,
		// display: "flex",
		// width: "80%",
		// alignSelf: "center",
	},
	contentContainer: {
		// flexGrow: 1,
	},
	ratingView: {
		flexDirection: "row",
	},
	ratingText: {
		flex: 1,
	},
	ratingStars: {
		flex: 2,
		alignSelf: "center",
		marginTop: 10,
	},
});

export default CreateMemoryPage;
