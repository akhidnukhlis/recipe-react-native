import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Pressable,
    Dimensions,
    ScrollView
} from "react-native";
import React from "react";
import {FontAwesome} from "@expo/vector-icons";
import styles from '../style/RecipeDetailsStyles';

const RecipeDetailsScreen = ({navigation, route}) => {
    const {item} = route.params;

    console.log(item);
    return (
        <View
            style={{
                backgroundColor: item.color,
                flex: 1
            }}>
            <SafeAreaView
                style={{
                    flexDirection: "row",
                    marginHorizontal: 16,
                    marginTop: 40,
                }}>
                <Pressable
                    style={{
                        flex: 1
                    }}
                    onPress={() => navigation.goBack()}>
                    <FontAwesome name={"arrow-circle-left"} size={40} color="white"/>
                </Pressable>

                <FontAwesome name={"heart-o"} size={30} color="white"/>
            </SafeAreaView>
            <View style={styles.body}>
                <View style={styles.header}>
                    <Image source={item.image} style={styles.image}/>
                </View>

                {/* Recipe Name */}
                <Text style={styles.recipeName}>
                    {item.name}
                </Text>

                <View style={{
                        flex: 1
                    }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {/* Recipe Description */}
                        <Text
                            style={styles.recipeDesc}>
                            {item.description}
                        </Text>

                        {/* Recipe Extra Details */}

                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
								margin: 18
                            }}>
                            <View
                                style={styles.recipeExtraClock}>
                                <Text
                                    style={{
                                        fontSize: 30,
										marginBottom: 10
                                    }}>⏰</Text>
                                <Text
                                    style={{
                                        fontSize: 18,
                                        fontWeight: 400
                                    }}>
                                    {item.time}
                                </Text>
                            </View>
                            <View
                                style={styles.recipeExtraFood}>
                                <Text
                                    style={{
                                        fontSize: 30,
										marginBottom: 10
                                    }}>🥣</Text>
                                <Text
                                    style={{
                                        fontSize: 18,
                                        fontWeight: 400
                                    }}>
                                    {item.difficulty}
                                </Text>
                            </View>
                            <View
                                style={styles.recipeExtraCalories}>
                                <Text
                                    style={{
                                        fontSize: 30,
										marginBottom: 10
                                    }}>🔥</Text>
                                <Text
                                    style={{
                                        fontSize: 18,
                                        fontWeight: 400
                                    }}>
                                    {item.calories}
                                </Text>
                            </View>
                        </View>

                        {/* Recipe Ingredients  */}

                        <View
                            style={{
                                alignSelf: "flex-start",
                                marginVertical: 22,
								marginLeft: 20
                            }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontWeight: "600",
                                    marginBottom: 6
                                }}>
                                Ingredients:
                            </Text>

                            {
                                item
                                    .ingredients
                                    .map((ingredient, index) => {
                                        return (
                                            <View
                                                style={{
                                                    flexDirection: "row",
                                                    alignItems: "center",
                                                    marginVertical: 4
                                                }}
                                                key={index}>
                                                <View
                                                    style={{
                                                        backgroundColor: "red",
                                                        height: 10,
                                                        width: 10,
                                                        borderRadius: 5
                                                    }}></View>
                                                <Text
                                                    style={{
                                                        fontSize: 18,
                                                        marginLeft: 6
                                                    }}>
                                                    {ingredient}
                                                </Text>
                                            </View>
                                        );
                                    })
                            }
                        </View>

                        {/* Recipe Steps */}

                        <View
                            style={{
                                alignSelf: "flex-start",
                                marginVertical: 10,
                                marginHorizontal: 20,
                                marginBottom: 40
                            }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontWeight: "600",
                                    marginBottom: 6
                                }}>
                                Steps:
                            </Text>

                            {
                                item
                                    .steps
                                    .map((step, index) => {
                                        return (
                                            <Text
                                                key={index}
                                                style={{
                                                    fontSize: 16,
                                                    marginLeft: 6,
                                                    marginVertical: 6
                                                }}>{`${index + 1} ) ${step}`}</Text>
                                        );
                                    })
                            }
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    );
};

export default RecipeDetailsScreen;