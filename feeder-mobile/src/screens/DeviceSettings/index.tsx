import React, { useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { navigationProp } from '../../routes/stack.routes';

import * as S from './styles'
import * as G from '../../styles/styles'

import { Header } from '../../components/Header';
import theme from '../../styles/theme';
import { Entypo } from '@expo/vector-icons';
import TimeInput from '../../components/TimeInput';
import NumberSpin from '../../components/NumberSpin'
import api from '../../services/api';

const DeviceSettings: React.FC = () => {

    const [doses, setDoses] = useState(10);

    const [firmwareName, setFirmwareName] = useState('Nome da ratazana');

    const navigation = useNavigation<navigationProp>();

    const saveSettings = () => {
        navigation.navigate('Home');
    }

    async function fetchApi() {
        try {
            const { data } = await api.get<Response>("/");



        } catch (err) {
            console.log(err);
        }

    }




    return (
        <S.SafeAreaView>

            <Header title='Device Settings' />

            <S.Container>

                <G.TextInputDark
                    placeholder='Name'
                    autoCompleteType='email'
                    placeholderTextColor={theme.colors.placeholder}
                    value={firmwareName}
                />

                <NumberSpin value={doses} onChange={setDoses} min={1} max={10} vertical={false} />

                <TimeInput />
                <TimeInput />
                <TimeInput />

                <S.Button onPress={saveSettings}>
                    <G.Text>Save</G.Text>
                </S.Button>

            </S.Container>

        </S.SafeAreaView>
    );
};

export default DeviceSettings;
