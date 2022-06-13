import React, { useEffect, useState } from 'react';
import { TextInput, Text, View, TouchableOpacity, StyleSheet, SafeAreaView, ToastAndroid, Image } from 'react-native';
import Appbar from '../Component/Appbar';
import * as colors from '../Constant/colors'
import firebase from 'react-native-firebase'
import { saveTasks, getTasks, editTask } from '../Service/AxiosDb'
import { APP_FONTS, FONT_SIZE } from '../Constant/styleConfig';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import { Checkbox } from 'react-native-paper';

const NewTask = (props) => {
    const [title, setTitle] = useState('New Task')
    const [task, setTask] = useState('')
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [dateTime, setDateTime] = useState('')
    const [taskFinsh, setTaskFinsh] = useState(false)
    const [keyTask, setKeyTask] = useState(false)


    const onInputChange = (value) => {
        setTask(value)
    }

    const handleSaveTask = () => {
        if (task != '') {
            var data = {
                task: task,
                taskFinsh: taskFinsh,
                dateTime: dateTime,
                key: keyTask
            }
            props?.route?.params?.taskEdit ? editTask(data) : saveTasks(data)
            setTask('')
            setDateTime('')
            props.navigation.navigate('Dashboard')
        } else {
            ToastAndroid.show("Enter the task details", ToastAndroid.SHORT);
        }
    }

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setDateTime(date)
        hideDatePicker();
    };

    const onPress = () => {
        props.navigation.navigate('Dashboard')
    }

    const onPressSend = () => {
        handleSaveTask()
        }

    useEffect(() => {
        setDateTime(props?.route?.params?.data?.dateTime || '')
        setTask(props?.route?.params?.data?.task || '')
        setTaskFinsh(props?.route?.params?.data?.taskFinsh || false)
        setTitle(props?.route?.params?.taskEdit ? "Edit Task" : "New Task")
        setKeyTask(props?.route?.params?.data?.key)

    }, []);

    return (
        <SafeAreaView style={styles.mainContainer}>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="datetime"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />

            <View style={styles.subContainer}>
                <View style={{ height: '7%' }}>
                    <Appbar
                        Title={title}
                        onPress={() => { onPress() }}
                        onPressSend={()=>{onPressSend()}}
                    />
                </View>
                <View style={{ height: '93%', padding: 20 }}>

                    <Text style={styles.label}>{"What is to be done?"}</Text>
                    <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                        <View style={{ justifyContent: 'center', alignItems: 'flex-start', width: '85%' }}>
                            <TextInput
                                placeholder='Enter Quick Task Here'
                                onChangeText={text => onInputChange(text)}
                                multiline
                                underlineColorAndroid={colors.COLOR_LIGHT_NAVY_BLUE}
                                style={{ width: '100%', fontSize: FONT_SIZE.l, color: colors.COLOR_LIGHT_NAVY_BLUE }}
                                placeholderTextColor={colors.COLOR_LIGHT_NAVY_BLUE}
                                value={task}
                            />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Checkbox
                            status={taskFinsh ? 'checked' : 'unchecked'}
                            color={colors.COLOR_LIGHT_NAVY_BLUE}
                            onPress={() => {
                                setTaskFinsh(!taskFinsh);
                            }}
                        />
                        <Text style={[styles.label, { fontSize: FONT_SIZE.m }]}>{"Task Finished?"}</Text>
                    </View>

                    <Text style={[styles.label, { marginTop: 20 }]}>{"Due Date"}</Text>
                    <TouchableOpacity
                        style={{ flexDirection: 'row', }}
                        onPress={() => { setDatePickerVisibility(true) }}
                    >
                        <View style={styles.calender}>
                            <Text style={styles.taskHading}>{dateTime == '' ? "Date & Time not set" : moment(dateTime).format('llll')}</Text>
                        </View>
                        <View style={styles.calenderView}>
                            <Image
                                source={require('../Assets/calendar.png')}
                                style={{ height: 30, width: 30, tintColor: colors.COLOR_LIGHT_NAVY_BLUE }}
                            />
                        </View>
                    </TouchableOpacity>

                </View>
            </View>

            {/* <TouchableOpacity
                style={styles.checkButton}
                onPress={() => { handleSaveTask() }}
            >
                <Image
                    source={require('../Assets/checkRound.png')}
                    style={{ alignSelf: 'flex-end', height: 60, width: 60, tintColor: colors.COLOR_LIGHT_NAVY_BLUE }}
                />
            </TouchableOpacity> */}


        </SafeAreaView>
    );
}
export default NewTask;

const styles = StyleSheet.create({
    label: {
        fontSize: FONT_SIZE.m,
        fontFamily: APP_FONTS.NunitoExtraBold,
        color: colors.COLOR_DARK_BLUE
    },
    taskHading: {
        fontSize: FONT_SIZE.l,
        fontFamily: APP_FONTS.NunitoExtraBold,
        color: colors.COLOR_LIGHT_NAVY_BLUE

    },
    checkButton: {
        position: 'absolute',
        // justifyContent: 'flex-end',
        bottom: 40,
        right: 35,
        width: '100%'
    },
    correctIcon: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: '15%',
        backgroundColor: 'transparent'
    },
    calender: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '85%',
        borderBottomWidth: 2,
        borderBottomColor: colors.COLOR_LIGHT_NAVY_BLUE
    },
    calenderView: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: '15%',
        backgroundColor: 'transparent',
    }
})

