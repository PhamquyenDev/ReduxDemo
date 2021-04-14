import React, { useEffect, useState, useRef } from "react";
import {
    ActivityIndicator,
    FlatList,
    Image, Text,
    TextInput,
    TouchableOpacity, View
} from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import Header from "../../components/header";
import { addFilterName } from './../../actions/Movies';
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
    useEffect(() => {
        dispatch({ type: "API_CALL_REQUEST" });
    }, []);
    // --------------------------------------------------- select data
    const data = useSelector(state => state.Movies.movies);
    const typingRef = useRef(null);
    // --------------------------------------------------- tìm kiếm
    const [findText, setFindText] = useState(null);
    // ----------------------- khi chưa có redux
    // const handleFindData = (Text) => {
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

    //     if (Text) {
    //         dispatch({ type: "API_FILTER_REQUEST" });
    //         setFindText(Text);
    //     }
    // }

    // ----------------------- khi có redux/redux-saga
    const handleFindDataUseRedux = (findText) => {
        setIsLoading(true);

        if (findText) {
            // nếu clearTimeout thì khi findtext xóa trắng sẽ error
            // vì sẽ else sau đó 0.2s useRef mới chạy
            if (typingRef.current) {
                clearTimeout(typingRef.current);
            }
            setFindText(findText);
            typingRef.current = setTimeout(() => {
                dispatch(addFilterName(findText));
                if (findText) {
                    dispatch({ type: "API_FILTER_REQUEST" });
                }
            }, 200);
        }

        if (!findText) {
            typingRef.current = setTimeout(() => {
                dispatch({ type: "API_CALL_REQUEST" });
                setFindText(findText);
            }, 220);
        }
        setIsLoading(false);
    };

    // --------------------------------------------------- render biểu tượng loading ở cuối
    const [isLoading, setIsLoading] = useState(false);
    const renderFooter = () => {
        return (
            isLoading ?
                <View style={styles.footerLoading}>
                    <ActivityIndicator size='large' color='black' />
                </View> : null
        );
    };

    // --------------------------------------------------- hendle loading more data
    const heanleLoadMore = React.useCallback(() => {
        setIsLoading(true);
        dispatch({ type: "API_MORE_REQUEST" });

        // nếu find != null thì thực hiện lại lần search
        if (findText) {
            setTimeout(() => {
                dispatch({ type: "API_FILTER_REQUEST" });
            }, 200);
        }
    }, [findText]);

    // --------------------------------------------------- reloading
    const [isRefresh, setRefreshing] = useState(false);
    const onRefresh = React.useCallback(() => {
        setFindText('');
        setRefreshing(true);
        dispatch({ type: "API_CALL_REQUEST" });
        setRefreshing(false)
    }, [isRefresh]);
    // --------------------------------------------------- handle move to Top
    const listViewRef = useRef();
    const topHandleButton = () => {
        listViewRef.current.scrollToOffset({ animated: true, offset: 0 })
    }
    // --------------------------------------------------- Main
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
                        value={findText}
                        onChangeText={(text) => handleFindDataUseRedux(text)}
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
                            keyExtractor={(item, index) => item.id}
                            // ----------- refreshing
                            refreshing={isRefresh}
                            onRefresh={onRefresh}
                            // ----------- Loading
                            ListFooterComponent={renderFooter}
                            onEndReached={heanleLoadMore}
                            onEndReachedThreshold={0.1}
                            // ----------- Move to Top
                            ref={listViewRef}
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
            <TouchableOpacity
                style={[styles.TopButton, { right: 20, bottom: 20 }]}
                onPress={topHandleButton}
            >
                <Text style={[styles.txtButton, { color: 'red' }]}>Top</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Home;