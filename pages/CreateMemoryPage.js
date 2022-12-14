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

const CreateMemoryPage = () => {
	// fonts
	let [fontsLoaded] = useFonts({
		SpaceMono_400Regular,
		SpaceMono_400Regular_Italic,
		SpaceMono_700Bold,
		SpaceMono_700Bold_Italic,
	});

	// text input consts
	const [location, onChangeLocation] = React.useState("Where did you go?");
	const [note, onChangeNote] = React.useState("What stood out from today?");
	const [rating, setRating] = useState(0);

	// date picker consts + functions
	const [selectedDate, setSelectedDate] = useState(getToday());

	let displayDate = getFormatedDate(selectedDate, "MMM DD YYYY");

	const onSelectedChangeHandler = (date) => {
		setSelectedDate(date);
		displayDate = getFormatedDate(selectedDate, "MMM DD YYYY");
	};

	// image upload consts
	const [image1, setImage1] = useState(null);
	const [image2, setImage2] = useState(null);
	const [image, setImage] = useState(null);

	const addImage1 = async () => {
		let _image = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});
		console.log(JSON.stringify(_image));
		if (!_image.cancelled) {
			setImage1(_image.uri);
		}
	};

	const addImage2 = async () => {
		let _image = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});
		console.log(JSON.stringify(_image));
		if (!_image.cancelled) {
			setImage2(_image.uri);
		}
	};

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

	function getPhotoUris () {
		var imageUris = [];
		if (image1) {
			imageUris.push(image1);
		}
		if (image2) {
			imageUris.push(image2);
		}
		if (image) {
			imageUris.push(image);
		}
		return imageUris;
	}

	return (
		<View style={styles.parentView}>
			<View
				style={{
					width: "100%",
					flex: 1,
					display: "flex",
					flexDirection: "column",
					paddingBottom: 90,
					paddingLeft: 24,
					paddingRight: 24,
				}}
			>
				<ScrollView
					// contentContainerStyle={styles.contentContainer}
					style={styles.scrollView}
				>
					<Text style={[styles.dateTitle, styles.text]}>
						{displayDate}
					</Text>
					<Text style={[styles.h2, styles.text]}>
						Select your date
					</Text>
					<DatePicker
						style={datePickerStyles.calendar}
						onSelectedChange={onSelectedChangeHandler}
					/>
					<Text style={[styles.h2, styles.text]}>
						Where did we go?
					</Text>
					<TextInput
						style={[styles.locationInput, styles.input]}
						onChangeText={onChangeLocation}
						value={location}
					/>
					<View style={styles.ratingView}>
						<Text
							style={[styles.h2, styles.text, styles.ratingText]}
						>
							Your rating
						</Text>
						<StarRating
							style={styles.ratingStars}
							rating={rating}
							onChange={setRating}
						/>
					</View>

					<Text style={[styles.h2, styles.text]}>Media</Text>
					<ScrollView horizontal={true}>
						<View style={imageUploaderStyles.container}>
							{image1 && (
								<Image
									source={{ uri: image1 }}
									style={{ width: 200, height: 200 }}
								/>
							)}
							<View
								style={imageUploaderStyles.uploadBtnContainer}
							>
								<TouchableOpacity
									onPress={addImage1}
									style={imageUploaderStyles.uploadBtn}
								>
									<Text color="#1B463E">
										{image1 ? "Edit" : "Upload"} Image
									</Text>
									<AntDesign
										name="camera"
										size={20}
										color="#1B463E"
									/>
								</TouchableOpacity>
							</View>
						</View>
						<View style={imageUploaderStyles.container}>
							{image2 && (
								<Image
									source={{ uri: image2 }}
									style={{ width: 200, height: 200 }}
								/>
							)}
							<View
								style={imageUploaderStyles.uploadBtnContainer}
							>
								<TouchableOpacity
									onPress={addImage2}
									style={imageUploaderStyles.uploadBtn}
								>
									<Text color="#1B463E">
										{image2 ? "Edit" : "Upload"} Image
									</Text>
									<AntDesign
										name="camera"
										size={20}
										color="#1B463E"
									/>
								</TouchableOpacity>
							</View>
						</View>
						<View style={imageUploaderStyles.container}>
							{image && (
								<Image
									source={{ uri: image }}
									style={{ width: 200, height: 200 }}
								/>
							)}
							<View
								style={imageUploaderStyles.uploadBtnContainer}
							>
								<TouchableOpacity
									onPress={addImage}
									style={imageUploaderStyles.uploadBtn}
								>
									<Text color="#1B463E">
										{image ? "Edit" : "Upload"} Image
									</Text>
									<AntDesign
										name="camera"
										size={20}
										color="#1B463E"
									/>
								</TouchableOpacity>
							</View>
						</View>
					</ScrollView>
					<Text style={[styles.h2, styles.text]}>Notes Section</Text>
					<TextInput
						style={[styles.notesInput, styles.input]}
						onChangeText={onChangeNote}
						value={note}
					/>
					<TouchableOpacity
						style={styles.saveButton}
						onPress={async () => {
							const body = {
								date: selectedDate,
								destination: location,
								rating: rating,
								photos: getPhotoUris(),
								notes: note
							  }
							await fetch(
							  `http://10.33.134.6:3000/memories`,
							  {
								method: 'POST',
								headers: {
								  'Content-Type': 'application/json',
								},
								body: JSON.stringify(body)
							  }
							);
					}
				}
						title="Save"
					>
						<Text style={styles.saveText}>Save</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.deleteMemoryButton}
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
					>
						<Text style={styles.deleteMemoryText}>
							Delete Memory
						</Text>
					</TouchableOpacity>
				</ScrollView>
			</View>
		</View>
	);
};

const datePickerStyles = StyleSheet.create({
	calendar: {
		elevation: 2,
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
		margin: 10,
		overflow: "hidden",
		borderRadius: 8,
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
	input: {
		borderRadius: 8,
		borderWidth: 1,
		borderColor: "#1B463E",
	},
	locationInput: {
		width: "99%",
		textAlignVertical: "top",
		marginVertical: 12,
		padding: 10,
	},
	notesInput: {
		flex: 1,
		height: 100,
		width: "99%",
		textAlignVertical: "top",
		marginVertical: 12,
		padding: 10,
		overflow: "hidden",
	},
	parentView: {
		flex: 1,
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
	saveButton: {
		paddingTop: 15,
		paddingBottom: 15,
		backgroundColor: "#1B463E",
		borderRadius: 8,
	},
	saveText: {
		color: "#ffffff",
		fontWeight: "bold",
		textAlign: "center",
	},
	deleteMemoryButton: {
		paddingTop: 15,
		paddingBottom: 15,
		borderColor: "#e32f45",
		borderRadius: 8,
		borderWidth: 1,
		marginTop: 10,
		marginBottom: 10,
	},
	deleteMemoryText: {
		color: "#e32f45",
		fontWeight: "bold",
		textAlign: "center",
	},
});

export default CreateMemoryPage;
