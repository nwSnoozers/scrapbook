import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const MemoriesPage = () =>{
    const [result, setResult] = useState([]);
    
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
