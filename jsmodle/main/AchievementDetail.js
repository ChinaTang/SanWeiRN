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

export default class AchievementDetail extends Component{

    constructor(){
        super();
        this.state={
            listData:[],
        }
    }

    componentDidMount(){
        //获取数据
    }

    render(){
        return(<FlatList data={this.state.listData}
                         renderItem={({item}) => this._renderItem(item)}
        />);
    }

    _renderItem(item){
        return(<View style={styles.item}>
            <Text>
                {item.mark}
            </Text>
            <Text>
                {item.date}
            </Text>
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