import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from '../style/WelcomeScreenStyle';
import React from "react";

const WelcomeScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: "center" }}>
			<Image
				source={require("../../assets/images/welcome1.png")}
				style={styles.image}
			/>

			<Text
				style={styles.textBodyOne}
			>
				New Way Manage
			</Text>

			<Text
				style={styles.textBodyTwo}
			>
				Your Work
			</Text>

			<Text
				style={styles.content}
			>
				Organize and simplify your work, collaborate with co-workers and view real-time progress.
			</Text>

			<TouchableOpacity
				onPress={() => navigation.navigate("RecipeList")}
				style={styles.button}
			>
				<Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
					Let's Go
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default WelcomeScreen;
