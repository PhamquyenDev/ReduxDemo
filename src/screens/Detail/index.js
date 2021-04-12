import React from "react";
import {
    Image, ScrollView, Text, TouchableOpacity, View
} from "react-native";
import Header from "../../components/header";
import styles from "./styles";

const Detail = ({ navigation }) => {

    const data = navigation.getParam('movies');
    console.log(data);

    const imageUri = 'https://image.tmdb.org/t/p/w500/';
    return (
        <View style={styles.wrap}>
            <Header
                onBack={() => navigation.goBack()}
                title='Detail'
            ></Header>
            <View style={styles.container}>
                <ScrollView
                    style={styles.ScrollView}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.immageIntro}>
                        <Image
                            style={styles.imageBackgr}
                            source={{
                                uri: imageUri + data.poster_path
                            }}
                        ></Image>
                    </View>
                    <View style={styles.handleOptions}>
                        <TouchableOpacity
                            style={styles.btnTrailer}
                            onPress={() => { }}
                        >
                            <Text style={styles.txtButton}>Xem trailer</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.btnFilm}
                            onPress={() => { }}
                        >
                            <Text style={styles.txtButton}>Xem Film</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.infomationsContain}>
                        <View style={styles.Title}>
                            <View style={styles.Bannal}>
                                <Image
                                    style={{ width: '100%', height: '100%' }}
                                    source={{
                                        uri: imageUri + data.poster_path
                                    }}
                                ></Image>
                            </View>
                            <View style={styles.IntroContent}>
                                <View style={styles.item}>
                                    <Text style={styles.infoName} numberOfLines={3}>{data.title}</Text>
                                </View>
                                <View style={styles.item}>
                                    <Text style={styles.header}>Khởi chiếu: {data.release_date}</Text>
                                </View>
                                <View style={styles.item} >
                                    <Text style={styles.header} numberOfLines={3}>View: {data.popularity}</Text>
                                </View>
                                <View style={styles.item} >
                                    <Text style={styles.header} numberOfLines={3}>Vote :{data.vote_average}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.desception}>
                            <View style={styles.desTitle}>
                                <Text style={styles.infoName}>NỘI DUNG PHIM</Text>
                            </View>
                            <View style={styles.desTitle}>
                                <Text style={styles.desIntro} numberOfLines={15}>{data.overview}</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}
export default Detail;