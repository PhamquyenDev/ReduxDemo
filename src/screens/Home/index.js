import React, { useEffect, useState } from "react";
import {
    FlatList,
    Image, Text,
    TextInput, TouchableOpacity, View
} from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { findItem } from "../../actions/Movies";
import Header from "../../components/header";
import styles from "./styles";

function ItemList({ navigation, data }) {
    return (
        <View style={styles.items}>
            <TouchableOpacity onPress={() => navigation.navigate('Detail', {
                movies: data
            })}>
                <View style={styles.contentContainer}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: data.thumbImage
                        }}
                    ></Image>
                    <View style={styles.contentItem}>
                        <Text style={styles.header} numberOfLines={2}>
                            {data.name}
                        </Text>
                        <Text style={styles.label} >
                            Đạo Diễn: {data.author}
                        </Text>
                        <Text style={styles.label} numberOfLines={2}>
                            Thể loại: {data.category}
                        </Text>
                        <Text style={styles.label}>
                            Ngày chiếu: {data.premeiretime}
                        </Text>
                        <Text style={styles.label} >
                            Thời lượng: {data.time}
                        </Text>
                        <Text style={styles.label, styles.status} >
                            Trang thái: {data.status}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const Home = ({ navigation }) => {
    const [data, setData] = useState({});
    const [findText, setFindText] = useState('');
    const [isRefresh, setIsRefresh] = useState(false);

    const listData = useSelector(state => state.Movies.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        // if (findText) listData = dispatch(findItem(findText));
        setData(listData);
        return () => {

        }
    }, []);

    const handleFindData = (text) => {
        if (Text) {
            const findTextUpper = text.toUpperCase();
            const newData = listData.filter((item) => {
                const itemdata = item.name ? item.name.toUpperCase() : ''.toUpperCase();
                return itemdata.indexOf(findTextUpper) > -1;
            });

            // nếu đặt set data ở đây cứ mỗi lần nhập Text sẽ render lại useState/ gọi API 1 lần
            // dẫn đến Loop k có hồi kết
            setData(newData);
            setFindText(Text);
        }
        else {
            setData(listData);
            setFindText(Text);
        }
        // const findMovies = findItem(findTextUpper);
        // setDate(dispatch(findMovies));
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
                        value={findText}
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
                            refreshing={isRefresh}
                            onRefresh={() => { }}
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