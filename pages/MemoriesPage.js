import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const MemoriesPage = ({ navigation}) =>{
    const [result, setResult] = useState([]);
	const id =navigation.getParam('id');

	const testData = [
		{
			"id": "63263b07110c0b300557da8b",
			"date": "1970-01-01T05:37:00.305Z",
			"destination": "Stanley Park",
			"rating": 5,
			"photos": [
				"https://vancouversbestplaces.com/top-attractions/stanley-park/"
			],
			"__v": 0
		},
		{
			"id": "63263b39110c0b300557da8d",
			"date": "1970-01-01T05:37:00.605Z",
			"destination": "Vancouver Aquarium",
			"rating": 3,
			"photos": [
				"https://kenmoreair.com/world-renowned-vancouver-aquarium/"
			],
			"__v": 0
		},
		{
			"id": "63263b58110c0b300557da8f",
			"date": "1970-01-01T05:36:50.705Z",
			"destination": "Your Mom's House",
			"rating": 3,
			"photos": [
				"https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FfrFQQhOsxl8DctGjkR8OLHpdKMs%3D%2F0x0%3A3686x2073%2F1200x800%2Ffilters%3Afocal(1549x743%3A2137x1331)%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_image%2Fimage%2F68976842%2FHouse_Tour_Liverman_3D6A3138_tour.0.jpg&imgrefurl=https%3A%2F%2Fwww.thisoldhouse.com%2Fcurb-appeal%2F22334323%2Fsettling-down-in-a-1925-bungalow&tbnid=iWsLYOhk7RWGeM&vet=12ahUKEwjN0evx4Zz6AhXnr3IEHVraCAQQMygCegUIARDhAQ..i&docid=N98AdZ30Tf_moM&w=1200&h=800&q=house&ved=2ahUKEwjN0evx4Zz6AhXnr3IEHVraCAQQMygCegUIARDhAQ"
			],
			"__v": 0
		},
		{
			"id": "63263b81110c0b300557da91",
			"date": "1970-01-01T05:37:00.705Z",
			"destination": "Gastown",
			"rating": 4,
			"photos": [
				"https://www.expedia.com/Vancouver-Gastown.dx56156"
			],
			"__v": 0
		}
	]
    
    const getResult = async (id) =>{
		// api call here to get memories from db
        const response = await db.get(`/${id}`)
        setResult(response.data);
		// setResult(testData)
    }

    useEffect(() => {
        getResult(id)
    }, [])

    if(!result){
        return null
    }


    return(
        <View style={styles.container}>
            <Text style={styles.title}>Description</Text>
            <Text style={styles.text}> Your memories!
            </Text>

            <FlatList
                horizontal
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({item}) => {
                    return(
                    <View>
                        <Image style={styles.image} source={{uri: item}}/>
                    </View>
                    ) 
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        height: 200,
        width: 200,
        marginHorizontal: 15,
        borderRadius: 4
    },
    title:{
        //borderWidth: 2,
        borderRadius: 4,
        paddingHorizontal:5,
        backgroundColor: 'rgb(224, 223, 220)',
        marginHorizontal: 15,
        marginBottom: 10,
        fontSize:18,
        fontWeight: 'bold'
    },
    text:{
        //borderWidth: 2,
        marginHorizontal: 15,
        marginBottom: 10
    },
    container:{
        marginTop: 15
    }
})

export default MemoriesPage;
