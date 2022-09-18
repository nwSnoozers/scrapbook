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

const MemoryLog2 = () => {
	// fonts
	let [fontsLoaded] = useFonts({
		SpaceMono_400Regular,
		SpaceMono_400Regular_Italic,
		SpaceMono_700Bold,
		SpaceMono_700Bold_Italic,
	});

	// text input consts
	const [rating, setRating] = useState(0);

	// date picker consts + functions
	const [selectedDate, setSelectedDate] = useState(getToday());

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
						Sep 17 2022
					</Text>

					<Text style={[styles.h2, styles.text]}>
						Where did we go?
					</Text>
					<View style={styles.locationBox}>
						<View style={styles.locationImageContainer}>
							<Image
								style={styles.locationImage}
								source={require("../assets/htn.jpeg")}
							/>
						</View>
						<View style={styles.locationContent}>
							<Text style={[styles.locationTitle]}>
								Hack the North 2022
							</Text>
							<Text style={[styles.locationPlace]}>Waterloo</Text>
							<View style={styles.locationTags}>
								<View style={styles.locationTag}>
									<Text>Learning</Text>
								</View>
								<View style={styles.locationTag}>
									<Text>Community</Text>
								</View>
							</View>
						</View>
					</View>

					<View style={styles.ratingView}>
						<Text
							style={[styles.h2, styles.text, styles.ratingText]}
						>
							Your rating
						</Text>
						<StarRating
							style={styles.ratingStars}
							rating={5}
							onChange={setRating}
						/>
					</View>

					<Text style={[styles.h2, styles.text]}>Media</Text>
					<ScrollView horizontal={true}>
						<Image
							style={styles.mediaImage}
							source={require("../assets/htn4.jpg")}
						/>
						<Image
							style={styles.mediaImage}
							source={require("../assets/htn2.jpg")}
						/>
						<Image
							style={styles.mediaImage}
							source={require("../assets/htn1.jpg")}
						/>
					</ScrollView>
					<Text style={[styles.h2, styles.text]}>Notes Section</Text>
					<Text style={[styles.notesInput, styles.input]}>
						We attended Hack the North 2022, and for some of us, it
						was our first in-person hackathon! {"\n"}
						{"\n"}
						#foodpoisoningcantstopus
					</Text>

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
		marginBottom: 0,
		fontFamily: "SpaceMono_700Bold",
	},
	h2: {
		fontSize: 20,
		fontWeight: "bold",
		marginTop: 20,
		marginBottom: 10,
	},
	locationBox: {
		width: "99%",
		borderRadius: 8,
		backgroundColor: "#ffffff",
		padding: 10,
		flexDirection: "row",
	},
	locationContent: {
		marginLeft: 10,
	},
	locationImage: {
		width: 100,
		height: 100,
		borderRadius: 8,
	},
	locationTitle: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#1B463E",
		marginTop: 10,
	},
	locationPlace: {
		marginTop: 5,
	},
	locationTags: {
		flexDirection: "row",
		marginTop: 10,
	},
	locationTag: {
		backgroundColor: "#F5F5F5",
		paddingHorizontal: 8,
		paddingVertical: 2,
		marginRight: 5,
		borderRadius: 15,
		borderWidth: 1,
		borderColor: "#C2C2C2",
	},
	input: {
		borderRadius: 8,
		borderWidth: 1,
		borderColor: "#DDDDDD",
	},
	mediaImage: {
		width: 200,
		height: 200,
		borderRadius: 8,
		marginRight: 10,
	},

	notesInput: {
		flex: 1,
		height: 100,
		width: "99%",
		textAlignVertical: "top",
		marginVertical: 12,
		padding: 10,
		overflow: "hidden",
		flexWrap: "wrap",
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
	deleteMemoryButton: {
		paddingTop: 15,
		paddingBottom: 15,
		borderColor: "#e32f45",
		borderRadius: 8,
		borderWidth: 1,
		marginTop: 10,
		marginBottom: 20,
	},
	deleteMemoryText: {
		color: "#e32f45",
		fontWeight: "bold",
		textAlign: "center",
	},
});

export default MemoryLog2;
