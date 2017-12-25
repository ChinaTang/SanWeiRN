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


export default class StudentsList extends Component{

    constructor(props){
        super(props)
        this.state={
            students:[],
        }
    }

    componentDidMount(){
        //获取数据
    }

    render(){
        return(<View style={styles.container}>
            <FlatList data={this.state.students}
                      renderItem={({item})=>this.renderItem(item)}/>

            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('add')}}>
                <Text>
                    添加
                </Text>
            </TouchableOpacity>
        </View>);
    }

    renderItem(item) {
        return (
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('')}}>
                <View style={styles.itemView}>
                    <Image style={styles.imageView}/>
                    <Text>
                        {item.name}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    itemView:{
        width: width,
        height:100,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
    },
    imageView:{
      width:80,
      height:80,
        borderBottomLeftRadius:40,
        borderTopRightRadius:40,
        borderTopLeftRadius:40,
        borderBottomRightRadius:40,
    }
});