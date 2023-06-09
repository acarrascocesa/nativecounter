import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';


interface Props {
	title: string,
	onPress: any,
	position?: 'br' | 'bl'
}

const Fab = ({ title, onPress, position = 'br' }: Props) => {

	return (

		<TouchableOpacity onPress={onPress} style={(position === 'bl') ? styles.fabLocationBL : styles.fabLocationBR}>
			<View style={styles.fab}>
				<Text style={styles.fabText}>{title}</Text>
			</View>
		</TouchableOpacity>

	);
};


const styles = StyleSheet.create({

	fabLocationBR: {
		position: 'absolute',
		bottom: 25,
		right: 25,
	},
	fabLocationBL: {
		position: 'absolute',
		bottom: 25,
		left: 25,
	},
	fab: {
		backgroundColor: '#5856D6',
		width: 60,
		height: 60,
		borderRadius: 100,
		justifyContent: 'center',
	},
	fabText: {
		color: 'white',
		fontSize: 25,
		fontWeight: 'bold',
		alignSelf: 'center',
	},
});

export default Fab;
