import React, { useState } from 'react';

import * as S from './styles'
import * as G from '../../styles/styles'

import NumberSpin from '../../components/NumberSpin';
import { Entypo, Feather } from '@expo/vector-icons';

interface TimeInputProps {
    deleteFunction?: () => void;
}

const TimeInput: React.FC<TimeInputProps> = ({ deleteFunction }) => {

    const [hour, setHour] = useState(10);
    const [minutes, setMinutes] = useState(6);
    const [editing, setEditing] = useState(false);

    const toggleEditing = () => {
        setEditing(!editing);
    }

    return (

        <S.Container>

            <S.Content>
                <NumberSpin value={hour} onChange={setHour} min={0} max={23} vertical={true} disabled={!editing} />
                <S.Text>:</S.Text>
                <NumberSpin value={minutes} onChange={setMinutes} min={0} max={59} vertical={true} disabled={!editing} />
            </S.Content>
            <S.Content>
                <S.IconButton onPress={toggleEditing}>
                    {editing ?
                        <Feather
                            name="save"
                            style={{ fontSize: 24, color: '#fff' }}
                        />
                        :
                        <Feather
                            name="edit"
                            style={{ fontSize: 24, color: '#fff' }}
                        />
                    }
                </S.IconButton>
                <S.IconButtonRed onPress={deleteFunction}>
                    <Feather
                        name="trash"
                        style={{ fontSize: 24, color: '#fff' }}
                    />
                </S.IconButtonRed>
            </S.Content>

        </S.Container>

    );
};

export default TimeInput;
