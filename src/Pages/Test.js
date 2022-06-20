
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import moment from 'moment';


const Test = (props) => {

    useEffect(() => {

        var arr = [
            {
                activities: ["Cooking"],
                date: { time: 1617603973 },
                mood: 5,
                negativeEmotions: ["Nervous"],
                positiveEmotions: ["Excited"]
            },
            {
                date: { time: 1617603973 },
                mood: 4,
                positiveEmotions: ["Optimistic"]
            },
            {
                date: { time: 1617776843 },
                mood: 5,
                positiveEmotions: ["Optimistic"]
            },
            {
                date: { time: 1617776887 },
                mood: 3,
                negativeEmotions: ["Sad"]
            },
            {
                date: { time: 1617776893 },
                mood: 1,
                negativeEmotions: ["Sad"]
            },
            {
                date: { time: 1617776923 },
                mood: 5,
                positiveEmotions: ["Happy"]
            },
            {
                date: { time: 1617798494 },
                mood: 3,
                positiveEmotions: ["Grateful"]
            },
            {
                date: { time: 1617884916 },
                mood: 5,
                positiveEmotions: ["Grateful"]
            },
            {
                date: { time: 1617884939 },
                mood: 4,
                negativeEmotions: ["Sad"]
            },
            {
                date: { time: 1617884939 },
                mood: 25,
                negativeEmotions: ["Sad"]
            }
        ];

        // date sorting logic
        const sortByDate = arr => {
            const sorter = (a, b) => {
                return new Date(a.date.time).getTime() - new Date(b.date.time).getTime();
            }
            arr.sort(sorter);
        };
        sortByDate(arr);

        // remove duplicates from array
        var result = arr.reduce((unique, o) => {
            if (!unique.some(obj => obj.date.time === o.date.time)) {
                unique.push(o);
            }
            return unique;
        }, []);

        // main logic part 
        var mainArray = []
        Object.keys(result).map((item, index) => {
            var temp = result[item].date.time
            var moods = []
            Object.keys(arr).map((item, index) => {
                console.log("fff",moment(temp) , moment(arr[item].date.time));

                temp == arr[item].date.time ?
                    moods.push(arr[item])
                    : null
            })
            mainArray.push({ date: temp, moods: moods })

        })
        // console.log(JSON.stringify(mainArray, null, 4));
    })

    return (
        <View>
            <Text>Test</Text>
        </View>
    );
}
export default Test;

