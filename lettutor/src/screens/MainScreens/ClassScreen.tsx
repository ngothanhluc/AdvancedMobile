import React, { useEffect } from "react";
import { View, Text } from "react-native";
const ClassScreen = ({ route }: any) => {
    const { lesson, type } = route.params;
    const [remainingTime, setRemainingTime] = React.useState(0);
    const [teachingTime, setTeachingTime] = React.useState(0);
    function convertSecondsToTime(seconds) {
        const hours = Math.floor(seconds / (60 * 60));
        const minutes = Math.floor((seconds % (60 * 60)) / 60);
        const remainingSeconds = seconds % 60;

        return ` ${hours} hours: ${minutes} minutes: ${remainingSeconds} sconds`;
    }
    function convertSecondsToMinutes(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;

        return ` ${minutes} minutes: ${remainingSeconds} sconds`;
    }
    useEffect(() => {
        setRemainingTime((prev) => {
            return Math.floor(
                (lesson.scheduleDetailInfo.startPeriodTimestamp -
                    Date.now() -
                    2000) /
                    1000
            );
        });
    }, []);
    useEffect(() => {
        let timerId: any;
        if (remainingTime > 0 && type === "waiting") {
            timerId = setInterval(() => {
                setRemainingTime((prev) => {
                    return prev - 1;
                });
            }, 1000);
        } else {
            timerId = setInterval(() => {
                setTeachingTime((prev) => {
                    return prev + 1;
                });
            }, 1000);
        }
        return () => clearInterval(timerId);
    });
    return (
        <View
            style={{
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignContent: "center",
            }}
        >
            {type === "waiting" && (
                <View
                    style={{
                        width: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Text style={{ fontSize: 14 }}>
                        Waiting for lesson to start
                    </Text>
                    <Text
                        style={{ fontWeight: "bold" }}
                    >{`Lesson start in ${convertSecondsToTime(
                        remainingTime
                    )}`}</Text>
                </View>
            )}
            {type === "meeting" && (
                <View
                    style={{
                        width: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Text style={{ fontSize: 18 }}>Teaching time</Text>
                    <Text>{`${convertSecondsToMinutes(teachingTime)}`}</Text>
                </View>
            )}
        </View>
    );
};

export default ClassScreen;
