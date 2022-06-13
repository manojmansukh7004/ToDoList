import axios from 'axios';
var uid;
var data
var baseUrl = 'https://todolist-dba8d-default-rtdb.asia-southeast1.firebasedatabase.app/Tasks.json'
var baseUrl1 = 'https://todolist-dba8d-default-rtdb.asia-southeast1.firebasedatabase.app/'


export function saveTasks(data) {
    axios.post(`${baseUrl}`, {
        task: data.task,
        taskFinsh: data.taskFinsh,
        dateTime: data.dateTime,

    })
        .then((response) => {
            // console.log("response", response.data);
        })
        .catch(function (error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            // ADD THIS THROW error
            throw error;
        });
}

export async function getTasks(callback) {

    await axios.get(`${baseUrl}`)
        .then((response) => {
            data = response.data
            callback(data)
        })
        .catch(function (error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            // ADD THIS THROW error
            throw error;
        });
}

export function editTask(data) {
    axios.put(`${baseUrl1}Tasks/${data.key}/.json`, {
        task: data.task,
        taskFinsh: data.taskFinsh,
        dateTime: data.dateTime,
    })
    .then((response) => {
        data = response.data
        callback(data)
    })
    .catch(function (error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
        // ADD THIS THROW error
        throw error;
    });
}

