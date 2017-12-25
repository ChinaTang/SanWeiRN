import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import StudentsListPage from 'main/StudentsList'

import {
    StackNavigator,
} from 'react-navigation';

const Navigator = StackNavigator.create({
    Main: {screen: StudentsListPage},
});

export default Navigator;