import React, { useCallback, useEffect, useState } from 'react';

import { useNavigation, RouteProp } from '@react-navigation/native';
import { navigationProp } from '../../routes/stack.routes';

import * as S from './styles'
import * as G from '../../styles/styles'

import { Header } from '../../components/Header';
import TimeInput from '../../components/TimeInput';
import NumberSpin from '../../components/NumberSpin'
import api from '../../services/api';
import { Entypo } from '@expo/vector-icons';

export interface ActivationTime {
    id: string;
    hour: number;
    minutes: number;
}

export interface Response {
    doses: number;
    recharge: boolean;
    activationTimes: ActivationTime[];
}

interface DeviceProps {
    route: RouteProp<{ params: { id: string } }, 'params'>
}

const DeviceSettings: React.FC<DeviceProps> = ({ route }) => {

    const { id } = route.params;

    const [doses, setDoses] = useState(0);

    const [times, setTimes] = useState<ActivationTime[]>([]);

    const navigation = useNavigation<navigationProp>();

    const fetchMyAPI = useCallback(async () => {
        try {

            const { data } = await api.get<Response>(`/firmwares/${id}`);

            const { doses, activationTimes } = data;

            setTimes(activationTimes);
            setDoses(doses);

        } catch (err) {
            console.log(err);
        }

    }, [id]);

    const saveSettings = useCallback(async () => {
        try {
            await api.put(`/firmwares/${id}`, {
                activationTimes: times.map(time => ({
                    hour: time.hour,
                    minutes: time.minutes
                })),
                doses,
                minHeight: 6
            });
            navigation.navigate('Home');
        } catch (err) {

        }
    }, [id, times, doses]);

    const deleteTime = (id: string) => {
        const newArray = times.filter((item) => item.id !== id);

        setTimes(newArray);
    }

    const addNewActivationTime = () => {

        const date = new Date();

        const newActivationTime = {
            hour: date.getHours(),
            minutes: date.getMinutes(),
            id: `${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`
        }

        const newTimesarray = [...times, newActivationTime];

        setTimes(newTimesarray);

    }


    const updateTime = (timeToChange: ActivationTime) => {

        const newArray = times.filter((item) => item.id !== timeToChange.id);

        const newTimesarray = [...newArray, timeToChange];

        setTimes(newTimesarray);

    }

    useEffect(() => {
        fetchMyAPI();
    }, [])

    return (
        <S.SafeAreaView>

            <Header title='Device Settings' />

            <S.Container>

                <NumberSpin value={doses} onChange={setDoses} min={1} max={10} vertical={false} text={"Doses: "} />

                {times.map((item) =>
                    <TimeInput
                        hour={item.hour}
                        minutes={item.minutes}
                        key={item.id}
                        deleteFunction={deleteTime}
                        id={item.id}
                        updateTime={updateTime}
                    />)
                }

                <S.ButtonContainer onPress={() => addNewActivationTime()}>
                    <S.IconButton>
                        <Entypo
                            name="plus"
                            style={{ fontSize: 24, color: '#fff' }}
                        />
                    </S.IconButton>
                </S.ButtonContainer>

                <S.Button onPress={() => saveSettings()}>
                    <G.Text>Save</G.Text>
                </S.Button>

            </S.Container>

        </S.SafeAreaView>
    );
};

export default DeviceSettings;
