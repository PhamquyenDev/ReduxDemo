import React, { useEffect, useState } from "react";
import {
    FlatList,
    Image, Text,
    TextInput,
    TouchableOpacity, View
} from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import Header from "../../components/header";
import styles from "./styles";
import Movies from './../../services/Movies';

function ItemList({ navigation, data }) {

    const imageUri = 'https://image.tmdb.org/t/p/w500/';

    return (
        <View style={styles.items}>
            <TouchableOpacity onPress={() => navigation.navigate('Detail', {
                movies: data
            })}>
                <View style={styles.contentContainer}>
                    <Image
                        style={styles.image}
                        source={{ uri: imageUri + data.poster_path }}
                    ></Image>
                    <View style={styles.contentItem}>
                        <Text style={styles.header} numberOfLines={2}>
                            {data.title}
                        </Text>
                        <Text style={styles.label} >
                            Đạo Diễn: Phạm Quyền
                        </Text>
                        <Text style={styles.label}>
                            Ngày chiếu: {data.release_date}
                        </Text>
                        <Text style={styles.label} >
                            Đánh giá: {data.vote_average}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}


const Home = ({ navigation }) => {

    const [findText, setFindText] = useState('');
    const [isRefresh, setRefreshing] = useState(false);

    const dispatch = useDispatch();
    const { data } = useSelector(state => state);
    console.log(data);

    useEffect(() => {
        dispatch({ type: "API_CALL_REQUEST" });
    }, []);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        dispatch({ type: "API_CALL_REQUEST" })
        setRefreshing(false)
    }, [isRefresh]);

    const handleFindData = (text) => {
        if (Text) {
            const findTextUpper = text.toUpperCase();
            const newData = listData.filter((item) => {
                const itemdata = item.name ? item.name.toUpperCase() : ''.toUpperCase();
                return itemdata.indexOf(findTextUpper) > -1;
            });
            setData(newData);
            setFindText(Text);
        }
        else {
            setData(listData);
            setFindText(Text);
        };
    }

    return (
        <View style={styles.wrap}>
            <Header
                title='Home'
            ></Header>
            <View style={styles.container}>
                <View style={styles.sectionFind}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder='Nhập tên cần tìm'
                        onChangeText={(text) => handleFindData(text)}
                    >
                    </TextInput>
                    <TouchableOpacity
                        style={styles.btnFnd}
                        onPress={() => { }}
                    >
                        <Text style={styles.txtButton}>Tìm</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <View style={styles.Title}>
                        <Text style={styles.txtMore}>
                            Danh sách phim
                                </Text>
                        <TouchableOpacity
                            style={styles.btnMore}
                            onPress={() => { }}
                        >
                            <Text style={styles.txtMore}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.sectionItems}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={Movies}
                            keyExtractor={(item) => item.id}
                            refreshing={isRefresh}
                            onRefresh={onRefresh} // goi lai data luc dau
                            renderItem={({ item }) =>
                                <ItemList
                                    data={item}
                                    navigation={navigation}
                                ></ItemList>
                            }>
                        </FlatList>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Home;