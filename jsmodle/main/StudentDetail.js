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

import {ScrollableTabBar, DefaultTabBar} from 'react-native-scrollable-tab-view'

export default class StudentDetail extends Component{
    render() {
        return (<ScrollableTabBar
            renderTabBar={()=><DefaultTabBar/>}>
            <Text tabLabel='语文'/>
            <Text tabLabel='数学'/>
            <Text tabLabel='英语'/>
            <Text tabLabel='图表'/>
        </ScrollableTabBar>);
    }

}

const styles = StyleSheet.create({

})