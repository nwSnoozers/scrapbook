import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';

const HomePage = ({navigation}) => {
    return (
        <ScrollView style={styles.scrollView}>
            <Text style={styles.title}>What should we do?</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text>Plan it out</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={async () => {
                        const response = await fetch(`http://10.33.134.6:3000/wishlist/random`);
                        const json = await response.json();
                        navigation.navigate('Result', json);
                    }}
                >
                    <Text>Surprise me</Text>
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
        fontWeight: 'bold'
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
        justifyContent: 'space-around'
    }
});

export default HomePage;