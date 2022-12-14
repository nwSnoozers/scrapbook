import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import {
	useFonts,
	SpaceMono_400Regular,
	SpaceMono_400Regular_Italic,
	SpaceMono_700Bold,
	SpaceMono_700Bold_Italic,
} from "@expo-google-fonts/space-mono";
import StarRating from "react-native-star-rating-widget";
import { TouchableOpacity } from "react-native";

const result = [
	{
		"id": "63293b39110c0b300557da8d",
		"date": "Sept 17",
		"destination": "Hack the North 2022",
		"rating": 4.5,
		"photo": "https://pbs.twimg.com/profile_images/1543064009817088000/fQeOj83A_400x400.jpg",
		"route": "MemoryLog2"
	},
	{
		"id": "63263b07110c0b300557da8b",
		"date": "Sept 11",
		"destination": "Stanley Park",
		"rating": 4,
		"photo": "https://i0.wp.com/www.hachettebookgroup.com/wp-content/uploads/2019/01/Vancouver_StanleyParkSeawall_jamesvancouver-iStock-520298306.jpg?resize=1024%2C768&ssl=1",
	},
	{
		"id": "63263b58110c0b300557da8f",
		"date": "Sept 6",
		"destination": "Ramen Danbo",
		"rating": 3,
		"photo": "https://s3-media0.fl.yelpcdn.com/bphoto/hyKUi5uOnqV-HmB07e6DbQ/l.jpg",
	},
	{
		"id": "63263b81110c0b300557da92",
		"date": "Aug 28",
		"destination": "Hackcon X",
		"rating": 5,
		"photo": "https://uploads-ssl.webflow.com/609c2b0f45157f0889b2d6a4/609d752f59106c624224698e_photo-1.jpg",
		"route": "MemoryLog1"
	},
	{
		"id": "63263b39110c0b300557da8d",
		"date": "Aug 22",
		"destination": "Vancouver Aquarium",
		"rating": 3,
		"photo": "https://images.dailyhive.com/20210415100545/adventure-aquarium-new-jersey.jpeg",
	},
	{
		id: "63263b58220c0b300557da8f",
		date: "Aug 16",
		destination: "Guildford Town Center",
		rating: 1,
		photo: "https://img.ic-static.net/ZYSzX7xIzt0S_ZR_f7Rl7w0L6n4=/0x0:3600x2074/GLD/IC-Guildford-Town-Centre-Exterior-D850-6017-RT-Print-min-compressed.jpg",
	},
	{
		id: "63263b81110c0b300547da91",
		date: "Aug 01",
		destination: "Burnaby Mountain Park",
		rating: 3,
		photo: "https://farm6.staticflickr.com/5570/14863814085_0934d6bec8_z.jpg",
	},
];

const MemoriesPage = ({ navigation }) => {
	let [fontsLoaded] = useFonts({
		SpaceMono_400Regular,
		SpaceMono_400Regular_Italic,
		SpaceMono_700Bold,
		SpaceMono_700Bold_Italic,
	});

	return (
		<View style={styles.container}>
			<FlatList
				columnWrapperStyle={{ justifyContent: "space-between" }}
				horizontal={false}
				numColumns={2}
				paddingLeft={20}
				paddingRight={20}
				ItemSeparatorComponent={() => <View style={{height: 40}} />}
                data={result}
                renderItem={({item}) => {
                    return(
                    <View style={styles.list}>
						<TouchableOpacity onPress={() => item.route ? navigation.push(item.route) : {}}>
                        	<Image style={styles.image} source={{ uri: item.photo }}/>
							<Text style={styles.title}>{item.date}</Text>
							<Text style={styles.text}>{item.destination}</Text>
						</TouchableOpacity>
						<StarRating
							style={styles.ratingStars}
							rating={item.rating}
							starSize={22}
							onChange={() => {}}
							color={"#faae2b"}
						/>
                    </View>
                    ) 
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
	ratingStars: {
		// marginBottom: -10,
	},
    image:{
        height: 170,
		width: 170,
		marginRight: 5,
		marginLeft: 5,
		borderRadius: 10,
	},
	title: {
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: "rgb(224, 223, 220)",
		borderRadius: 10,
		flex: 1,
		marginHorizontal: 5,
		marginBottom: 5,
		fontSize: 18,
		fontWeight: "bold",
		fontFamily: "SpaceMono_700Bold",
		color: "#1B463E",
    },
    text:{
        marginHorizontal: 5,
        marginBottom: 5,
		color: "#1B463E",
	},
	container: {
		width: "100%",
		justifyContent: "space-between",
		flexDirection: "row",
		flex: 1,
		paddingBottom: 70,
	},
});

export default MemoriesPage;
