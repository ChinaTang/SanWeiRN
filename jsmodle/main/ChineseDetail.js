import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';

let width = Dimensions.get('window').width;

export default class ChineseDetail extends Component{
    render(){
        return(<FlatList

        />);
    }

    _renderItem(item){
        return(<View>

        </View>)
    }
}

const styles = StyleSheet.create({
    item:{
        width: width,
        height: 100,
        flexDirection: 'row',
        alignItems:'center'
    }
});