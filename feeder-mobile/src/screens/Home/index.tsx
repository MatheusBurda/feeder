import React, { useCallback, useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { navigationProp } from '../../routes/stack.routes';

import * as S from './styles'

import { Header } from '../../components/Header';
import DeviceInfo from '../../components/DeviceInfo';
import { Entypo } from '@expo/vector-icons';
import api from '../../services/api';

export interface Firmware {
    id: string;
    doses: number;
    recharge: boolean;
}

const Home: React.FC = () => {

    const [firmwares, setFirmwares] = useState<Firmware[]>([])

    const navigation = useNavigation<navigationProp>();

    const addNewDevice = async () => {

        try {

            const { data } = await api.post<Firmware>("/firmwares", {
                "activationTimes": [],
                "doses": 1,
                "minHeight": 6
            });

            const { id } = data;

            navigation.navigate('DeviceSettings', { id });

        } catch (err) {

            console.log(err);

        }
    }

    const fetchMyAPI = useCallback(async () => {
        try {

            const { data } = await api.get<Firmware[]>(`/firmwares`);

            setFirmwares(data);

        } catch (err) {
            console.log(err);
        }

    }, [])

    useEffect(() => {
        fetchMyAPI()
    }, [fetchMyAPI])

    return (
        <S.SafeAreaView>

            <Header title='       Feeder' />

            <S.Container>

                {firmwares.map((item) => <DeviceInfo key={item.id} id={item.id} recharge={item.recharge} />)}

                <S.ButtonContainer onPress={addNewDevice}>
                    <S.IconButton>
                        <Entypo
                            name="plus"
                            style={{ fontSize: 24, color: '#fff' }}
                        />
                    </S.IconButton>
                </S.ButtonContainer>

            </S.Container>

        </S.SafeAreaView>
    );
};

export default Home;
