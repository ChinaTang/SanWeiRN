import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import StudentsListPage from 'main/StudentsList'

import StudentDetailPage from 'main/StudentDetail'

import AddStudent from 'main/AddStudent'

import {
    StackNavigator,
} from 'react-navigation';

const Navigator = StackNavigator.create({
    Main: {screen: StudentsListPage},
    detail:{screen: StudentDetailPage},
    add:{screen: AddStudent},
});

export default Navigator;