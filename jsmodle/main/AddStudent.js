import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TextInput,
    TouchableOpacity
} from 'react-native';

let width = Dimensions.get('window').width;

export default class AddStudent extends Component{
    render(){
        return(<View style={styles.container}>
            <View style={{width:width, flex:1, flexDirection:'row'}}>
                <Text>
                    姓名:
                </Text>
                <TextInput/>
            </View>
            <TouchableOpacity onPress={}>
                <Text>
                    确定
                </Text>
            </TouchableOpacity>
        </View>)
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
});