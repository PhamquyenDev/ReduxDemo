import React, { useEffect, useState } from "react";
import {
    ActivityIndicator,
    FlatList,
    Image, Text,
    TextInput,
    TouchableOpacity, View
} from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import Header from "../../components/header";
import { findItem } from './../../actions/Movies';
import styles from "./styles";

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
    const dispatch = useDispatch();
    //const [data, setData] = useState({});

    useEffect(() => {
        dispatch({ type: "API_CALL_REQUEST" });
    }, []);

    // ----------- tìm kiếm
    const [findText, setFindText] = useState('');
    const handleFindData = (Text) => {
        // ----------- khi chưa có redux
        // if (Text) {
        //     const findTextUpper = Text.toUpperCase();
        //     const newData = data.filter((item) => {
        //         const itemdata = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        //         return itemdata.indexOf(findTextUpper) > -1;
        //     });
        //     setData(newData);
        //     setFindText(Text);
        // }
        // else {
        //     setData(data); 
        //     setFindText(Text);
        // };

        // ----------- khi có redux/redux-saga
        if (Text) {
            dispatch({ type: "API_FILTER_REQUEST" });
            setFindText(Text);
        }
    }

    // ----------- render biểu tượng loading ở cuối
    const [isLoading, setIsLoading] = useState(false);
    const renderFooter = () => {
        return (
            isLoading ?
                <View style={styles.footerLoading}>
                    <Text>Loading...</Text>
                </View> : null
        );
    };

    // ----------- hendle loading more data
    const heanleLoadMore = React.useCallback(() => {
        const currentPage = select();
        console.log(currentPage);
        setIsLoading(true);
        dispatch({ type: "API_MORE_REQUEST" });
    }, [isLoading]);
    // () => {
    //     setIsLoading(true);
    //     dispatch({ type: "API_MORE_REQUEST" });
    //     setIsLoading(false);
    // };

    // ----------- select data
    const data = useSelector(state => state.Movies.movies);
    console.log(data);
    // ----------- reloading
    const [isRefresh, setRefreshing] = useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        dispatch({ type: "API_CALL_REQUEST" });
        setRefreshing(false)
    }, [isRefresh]);

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
                            data={data}
                            keyExtractor={(item) => item.id}
                            // ----------- refreshing
                            refreshing={isRefresh}
                            onRefresh={onRefresh}
                            // ----------- Loading
                            ListFooterComponent={renderFooter}
                            onEndReached={heanleLoadMore}
                            onEndReachedThreshold={0}
                            // ----------- render items
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