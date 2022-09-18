import { StyleSheet, Text, View, TextInput, ScrollView, Linking } from "react-native";
import { TouchableOpacity, Image } from "react-native";

const ResultPage = ({ route, navigation }) => {
    const params = route.params;
    return (
        <ScrollView style={styles.scrollView}>
            <Text style={styles.title}>Our official suggestion...</Text>
            <View style={styles.locationBox}>
                <View style={styles.locationImageContainer}>
                    <Image
                        style={styles.locationImage}
                        source={{uri: params.image}}
                    />
                </View>
                <View style={styles.locationContent}>
                    <Text style={[styles.locationTitle]}>
                        {params.destination}
                    </Text>
                    <Text style={[styles.locationPlace]}>{params.city}</Text>
                    <View style={styles.locationTags}>
                        <View style={styles.locationTag}>
                            <Text>{params.tags[0]}</Text>
                        </View>
                        <View style={styles.locationTag}>
                            <Text>{params.tags[1]}</Text>
                        </View>
                        <View style={styles.locationTag}>
                            <Text>{params.tags[2]}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={async () => {
                        const supported = await Linking.canOpenURL(route.params.url);
                        if (supported) {
                            await Linking.openURL(route.params.url);
                        }
                    }}>
                    <Text>Google Maps</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Home')}>
                    <Text>Done</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        marginHorizontal: 20,
        marginTop: 50,
    },
    title: {
        //borderWidth: 2,
        borderRadius: 4,
        paddingHorizontal: 5,
        marginHorizontal: 15,
        marginBottom: 10,
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        paddingTop: 100
    },
    button: {
        // paddingTop: 15,
        // paddingBottom: 15,
        backgroundColor: "#EFB14A",
        borderRadius: 8,
        width: 150,
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10
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
});

export default ResultPage;