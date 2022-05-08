import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { navigationProp } from '../../routes/stack.routes';

import * as S from './styles'

import { Header } from '../../components/Header';
import { DeviceInfo } from '../../components/DeviceInfo';
import { Entypo } from '@expo/vector-icons';

const Login: React.FC = () => {

    const navigation = useNavigation<navigationProp>();

    const addNewDevice = () => {
        navigation.navigate('SignUp');
    }

    return (
        <S.SafeAreaView>

            <Header title='Hello, Matheus' />

            <S.Container>

                <DeviceInfo name={"Casa 1"} nextActivation={"17:00:00"} />
                <DeviceInfo name={"Escritorio"} nextActivation={"11:30:00"} />
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

export default Login;
