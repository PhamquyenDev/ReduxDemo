import React, { useState } from "react";
import {
    Text,
    TextInput, TouchableOpacity, View
} from "react-native";

import styles from "./styles";



const comFindData = (props) => {

    const handleFindData = (text) => {

    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.TextInput}
                placeholder='Nhập tên cần tìm'
                onChange={(text) => setFindText(text)}
            >
            </TextInput>
            <TouchableOpacity
                style={styles.btnFnd}
                onPress={handleFindData(findText)}
            >
                <Text style={styles.txtButton}>Tìm</Text>
            </TouchableOpacity>
        </View>
    );
}

export default comFindData;