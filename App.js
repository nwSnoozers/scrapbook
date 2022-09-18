import React from "react";
// import { StatusBar } from "expo-status-bar";
import CreateMemoryPage from "./pages/CreateMemoryPage";
import CalendarPage from './pages/CalendarPage';
import MemoriesPage from './pages/MemoriesPage';
import Svg from 'react-native-svg';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();

// const CustomTabBarButton = ({children, onPress}) => (
// 	<TouchableOpacity
// 		style={
// 			top: -30,
// 			justifyContent: 'center',
// 			alignItems: 'center',
// 			...styles.shadow
// 		}}
// 		onPress={onPress}
// 	>
// 	<View style={{width: 70}}>
// 		{children}
// 	</View> 
// 	</TouchableOpacity>
// );

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
		screenOptions={{
			"tabBarShowLabel": false,
			"tabBarStyle": [
				{
					'position': 'absolute',
					'elevation': 0, 
					'backgroundColor': '#ffffff',
					'borderRadius': 15,
					'height': 90
				},
				null
			]
		}}>
		{/* place holder */}
        <Tab.Screen name="Home" 
					component={CalendarPage} 
					options={{
						tabBarIcon: ({focused}) => (
						<View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
							<Image
								source={require('./assets/home.png')}
								resizeMode="contain"
								style={{
									width: 25,
									height: 30,
									tintColor: focused ? '#e32f45' : '#748c94'
								}}
							/>
							<Text style={{color: focused ? '#e32f45' : '#748c94', fontsize: 12}}>Home</Text>
						</View>
				),
		}} />
        <Tab.Screen name="Memories" 
					component={CalendarPage} 
					options={{
						tabBarIcon: ({focused}) => (
							<View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
								<Image 
									source={require('./assets/book.png')}
									resizeMode="contain"
									style={{
										width: 25,
										height: 30,
										tintColor: focused ? '#e32f45' : '#748c94'
									}}
								/>
								<Text style={{color: focused ? '#e32f45' : '#748c94', fontsize: 12}}>Memories</Text>
							</View>
							),
					}} 
		/>
		<Tab.Screen name="Create" 
			component={CreateMemoryPage}
			options={{
				tabBarIcon: ({focused}) => (
					<View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
						<Image 
							source={require('./assets/add.png')}
							resizeMode="contain"
							style={{
								width: 25,
								height: 30,
								tintColor: focused ? '#e32f45' : '#748c94'
							}}
						/>
						<Text style={{color: focused ? '#e32f45' : '#748c94', fontsize: 12}}>Add</Text>
					</View>
					),
			}} 
		/>
		{/* placeholder for wishlist class */}
		<Tab.Screen name="Memory list"
					component={CalendarPage}
					options={{
						tabBarIcon: ({focused}) => (
							<View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
								<Image 
									source={require('./assets/heart.png')}
									resizeMode="contain"
									style={{
										width: 25,
										height: 30,
										tintColor: focused ? '#e32f45' : '#748c94'
									}}
								/>
								<Text style={{color: focused ? '#e32f45' : '#748c94', fontsize: 12}}>Wishlist</Text>
							</View>
							),
					}} 
		/>
		{/* placeholder for settings class */}
		<Tab.Screen name="Settings"
			component={CalendarPage}
			options={{
				showIcon: true,
				tabBarIcon: ({focused}) => (
					<View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
						<Image 
							source={require('./assets/settings.png')}
							resizeMode="contain"
							style={{
								width: 25,
								height: 30,
								tintColor: focused ? '#e32f45' : '#748c94'
							}}
						/>
						<Text style={{color: focused ? '#e32f45' : '#748c94', fontsize: 12}}>Settings</Text>
					</View>
					),
			}} 
		/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
    shadow: {
      shawdowColor: '#7F5DF0',
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5, 
      elevation: 5
    }
})