import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    wrap: {
        flex: 1
    },
    container: {
        flex: 1,
        marginTop: 20,
    },
    sectionFind: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    TextInput: {
        flex: 4,
        height: 40,
        backgroundColor: 'rgba(0,0,0,.1)',
        borderRadius: 7,
        fontSize: 20,
        paddingHorizontal: 15,
    },
    btnFnd: {
        flex: 1,
        height: 40,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
    },
    txtButton: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    sectionItems: {
        flex: 8,
        marginTop: 10
    },
    content: {
        flex: 8,
    },
    Title: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'brown',
        borderRadius: 10,
    },
    txtMore: {
        fontSize: 26,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 5
    },
    btnMore: {
        fontSize: 34,
        position: 'absolute',
        right: 20
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 5,
    },
    image: {
        flex: 1,
        height: '100%',
    },
    contentItem: {
        flex: 2,
        marginLeft: 10
    },
    header: {
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 'bold'
    },
    label: {
        fontSize: 15,
        marginBottom: 10,
    },
    footerLoading: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    TopButton: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        borderRadius: 15
    }
});

export default styles;