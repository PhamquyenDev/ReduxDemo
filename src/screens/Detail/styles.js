import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const dimensions = Dimensions.get('window');
const width = dimensions.width;
const height = dimensions.height;

const styles = StyleSheet.create({
    wrap: {
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ScrollView: {
        flex: 1,
    },
    immageIntro: {
        flex: 4,
    },
    imageBackgr: {
        width,
        height: height / 2,
    },
    handleOptions: {
        flex: 1,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnTrailer: {
        width: 100,
        height: 40,
        marginLeft: 20,
        backgroundColor: 'green',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnFilm: {
        width: 100,
        height: 40,
        marginLeft: 20,
        backgroundColor: 'red',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtButton: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    infomationsContain: {
        width,
        height,
        marginTop: 8,
        backgroundColor: 'white',
    },
    Title: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 8,
        marginHorizontal: 16,
    },
    Bannal: {
        flex: 1,
        width: '100%',
    },
    IntroContent: {
        flex: 2,
    },
    item: {
        marginHorizontal: 8,
        marginVertical: 4
    },
    infoName: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    header: {
        fontSize: 15,
    },
    desception: {
        flex: 2,
        marginHorizontal: 16,
    },
    desTitle: {
        marginVertical: 4
    },
    desIntro: {
        fontSize: 16,
    }
});

export default styles;