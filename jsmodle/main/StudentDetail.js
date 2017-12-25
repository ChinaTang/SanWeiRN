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

import Achievement from 'AchievementDetail'

import AchievementChart from 'AchievementChart'

import {ScrollableTabBar, DefaultTabBar} from 'react-native-scrollable-tab-view'

export default class StudentDetail extends Component{
    render() {
        return (<ScrollableTabBar
            renderTabBar={()=><DefaultTabBar/>}>
            <Achievement tabLabel='语文'/>
            <Achievement tabLabel='数学'/>
            <Achievement tabLabel='英语'/>
            <AchievementChart tabLabel='图表'/>
        </ScrollableTabBar>);
    }

}

const styles = StyleSheet.create({

})