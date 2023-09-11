import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#fff",
        flex: 1,
        marginTop: 140,
        borderTopLeftRadius: 56,
        borderTopRightRadius: 56,
        alignItems: "center",
        paddingHorizontal: 16,
    },
    header: {
        height: 300,
        width: 300,
        position: "absolute",
        top: -150,
    },
    recipeName: {
        marginTop: 150,
        fontSize: 28,
        fontWeight: "bold",
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
    recipeDesc: {
        fontSize: 16,
        marginVertical: 16,
        margin: 20,
        alignItems: "center",
        elevation: 9,
    },
    recipeExtraClock: {
        backgroundColor: "rgba(255, 0, 0, 0.38)",
        // paddingHorizontal: 16,
        paddingVertical: 26,
        borderRadius: 14,
        alignItems: "center",
        width: 100,
    },
    recipeExtraFood: {
        backgroundColor: "rgba(135, 206, 235, 0.8)",
        // paddingHorizontal: 16,
        paddingVertical: 26,
        borderRadius: 14,
        alignItems: "center",
        width: 100,
        // marginHorizontal: 24,
    },
    recipeExtraCalories: {
        backgroundColor: "rgba(255, 165, 0, 0.48)",
        // paddingHorizontal: 16,
        paddingVertical: 26,
        borderRadius: 14,
        alignItems: "center",
        width: 100,
    }
});

export default styles;