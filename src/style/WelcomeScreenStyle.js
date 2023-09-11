import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    height: 30,
    flex:1,
    // aspectRatio:1,
    resizeMode: "contain",
    overflow: 'hidden',
  },
  textBodyOne: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#3c444c",
    marginTop: 16,
    textAlign: "center",
  },
  textBodyTwo: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#3c444c",
    marginBottom: 20,
  },
  content: {
    fontSize: 14,
    fontWeight: "light",
    color: "#767676",
    marginBottom: 40,
    width: 300,
    textAlign: "center",
    lineHeight: 28,
    letterSpacing: 1.4,
  },
  button: {
    backgroundColor: "#f96163",
    marginBottom: 40,
    borderRadius: 18,
    paddingVertical: 18,
    width: '80%',
    alignItems: "center",
  },
});

export default styles;