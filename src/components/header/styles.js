import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    safeAreaView: {
        backgroundColor: '#fff'
    },
    container: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
    },
    backBtn: {
        position: 'absolute',
        bottom: 10,
        left: 20
    },
    backText: {
        fontSize: 20,
        color: '#000',
    }
})

export default styles;