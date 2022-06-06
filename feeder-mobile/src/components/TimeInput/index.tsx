import React, { useEffect, useState } from 'react';

import * as S from './styles'

import NumberSpin from '../../components/NumberSpin';
import { Feather } from '@expo/vector-icons';

interface TimeInputProps {
    deleteFunction: (id: string) => void;
    updateTime: (item: ActivationTime) => void;
    hour: number;
    minutes: number;
    id: string;
}

interface ActivationTime {
    id: string;
    hour: number;
    minutes: number;
}

const TimeInput: React.FC<TimeInputProps> = (props) => {

    const [hour, setHour] = useState(props.hour);
    const [minutes, setMinutes] = useState(props.minutes);
    const [editing, setEditing] = useState(false);

    const toggleEditing = () => {

        if (editing)
            props.updateTime({
                id: props.id,
                hour: hour,
                minutes: minutes
            })

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
                <S.IconButtonRed onPress={() => props.deleteFunction(props.id)}>
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
