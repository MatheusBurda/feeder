import React, { useCallback, useState } from 'react';
import api from '../../services/api';

import * as S from './styles';
import * as G from '../../styles/styles'
import { useNavigation } from '@react-navigation/native';
import { navigationProp } from '../../routes/stack.routes';

interface DeviceProps {
    recharge: boolean;
    id: string;
}

const DeviceInfo: React.FC<DeviceProps> = ({ recharge, id }) => {
    const [recharged, setRecharged] = useState(recharge);
    const navigation = useNavigation<navigationProp>();

    const goToSettings = () => {
        navigation.navigate('DeviceSettings', { id });
    }

    const handleSetAsRecharged = useCallback(async () => {
        try {
            await api.patch('/firmwares/' + id, {
                'value': false
            });
            setRecharged(false);
        } catch (err) {

        }
    }, [id]);

    return (
        <S.Container>
            <S.Title>Device</S.Title>
            {recharged &&
                <>
                    <S.Highlight>Needs Refil</S.Highlight>
                    <S.Button onPress={() => handleSetAsRecharged()}>
                        <G.Text>Recharged</G.Text>
                    </S.Button>
                </>
            }
            <S.Text></S.Text>
            <S.Button onPress={goToSettings}>
                <G.Text>Settings</G.Text>
            </S.Button>
        </S.Container>
    );
}

export default DeviceInfo;
