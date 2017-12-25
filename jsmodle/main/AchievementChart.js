import Chart from 'react-native-chart';
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

export default class AchievementChart extends Component{
    render(){
        return(<View>
            <Chart/>
        </View>);
    }
}