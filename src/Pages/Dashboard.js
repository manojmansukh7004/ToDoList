import React, { useEffect, useState } from 'react';
import { FlatList, View, Image, TouchableOpacity, StyleSheet, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { Card, Text } from 'react-native-paper'

import Appbar from '../Component/Appbar';
import BottomBar from '../Component/BottomBar';
import * as colors from '../Constant/colors'
import firebase from 'react-native-firebase'
import { saveTasks, getTasks } from '../Service/AxiosDb'

const Dashboard = (props) => {

    const [task, setTask] = useState('')
    const [taskData, setTaskData] = useState('')


    const onInputChange = (value) => {
        setTask(value)
    }

    const handleSaveTask = () => {
        data = {
            task: task,
            taskFinsh: false,
            dateTime: '',
        }
        saveTasks(data)
        setTask('')
        apiCall()

    }

    const apiCall = async () => {
        const fcmToken = await firebase.messaging().getToken();
        // console.log("tokennnnnn", fcmToken);
        // setFcmToken(fcmToken)
        getTasks((response) => {
            var dataSource = []
            Object.keys(response).map((key) => {
                response[key].key= key
                dataSource.push(response[key], )
            })
            setTaskData(dataSource.reverse())
        })
    }

    const renderRow = (item, index) => {
        return (
            <TouchableOpacity
                onPress={() => { console.log(props.navigation.navigate('NewTask', { data: taskData[item], taskEdit: true })); }}
                style={[styles.Btn, { backgroundColor: 'transparent' }]}
            >
                <Text style={styles.dataStyle}>{taskData[item].task}</Text>
            </TouchableOpacity>
        )
    }

    React.useEffect(
        () => props.navigation.addListener('focus', () =>
            apiCall(),
        ),
        []
    );
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.subContainer}>
                <View style={{ height: '7%' }}>
                    <Appbar
                        Title={"Home"}
                    />
                </View>

                <View style={{ height: '93%', padding: 20 }}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={Object.keys(taskData)}
                        style={{ marginBottom: 50 }}
                        renderItem={({ item, index }) =>
                            renderRow(item, index)
                        }
                    />
                </View>

            </View>

            <TouchableOpacity
                style={styles.checkButton}
                onPress={() => { props.navigation.navigate('NewTask') }}
            >
                <Image
                    source={require('../Assets/plus.png')}
                    style={styles.plusIcon}
                />
            </TouchableOpacity>
            <View style={{ height: '8%', position: 'absolute', bottom: 0, left: 0, width: '100%' }}>
                <BottomBar
                    onInputChange={(text) => onInputChange(text)}
                    value={task}
                    handleSaveTask={handleSaveTask}
                />
            </View>

        </SafeAreaView>
    );
}
export default Dashboard;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.COLOR_WHITE
    },
    subContainer: {
        flex: 1,
        backgroundColor: colors.COLOR_WHITE
    },
    lableStyle: {
        color: colors.COLOR_DARK_NAVY_BLUE,
        fontSize: 14,
    },
    dataStyle: {
        color: colors.COLOR_NIMBUS_GREY,
        fontSize: 16,
    },
    Btn: {
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.COLOR_DARK_NAVY_BLUE,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    checkButton: {
        position: 'absolute',
        justifyContent: 'flex-end',
        bottom: 90,
        right: 30,
        width: '100%',
    },
    plusIcon:{
        alignSelf: 'flex-end', 
        backgroundColor: 'white',
         height: 50, 
         width: 50, 
         tintColor: colors.COLOR_LIGHT_NAVY_BLUE 
    }
})
