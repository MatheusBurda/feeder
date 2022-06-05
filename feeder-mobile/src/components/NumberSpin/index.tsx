import { Poppins_200ExtraLight } from '@expo-google-fonts/poppins';
import { Entypo } from '@expo/vector-icons';
import React from 'react'

import * as S from './styles';

interface SelectorProps {
    onChange: (value: number) => void;
    value: number;
    min: number;
    max: number;
    vertical: boolean;
}

const NumberSpin: React.FC<SelectorProps> = ({ value, min, max, onChange, vertical }: SelectorProps) => {

    const increment = () => {
        onChange(value >= max ? max : value + 1);
    }

    const decrement = () => {
        onChange(value <= min ? min : value - 1);
    }

    return (

        <S.Container vertical={vertical}>
            <S.IconButtonRed onPress={decrement}>
                <Entypo
                    name="minus"
                    style={{ fontSize: 24, color: '#fff' }}
                />
            </S.IconButtonRed>

            <S.Text>{String(value).padStart(2, '0')}</S.Text>

            <S.IconButton onPress={increment}>
                <Entypo
                    name="plus"
                    style={{ fontSize: 24, color: '#fff' }}
                />
            </S.IconButton>
        </S.Container>

    );
}

export default NumberSpin;


/* import React, { useState } from 'react'
import { Button, View, Text } from 'react-native'
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

import * as S from './styles';

const TimePicker: React.FC = () => {
    const [date, setDate] = useState<Date>(new Date());
    const [show, setShow] = useState(true);

    const onChange = (event: DateTimePickerEvent, date?: Date) => {
        const currentDate = date;
        setShow(false);
        if(currentDate)
            setDate(currentDate);
    };

    const showMode = (currentMode: any) => {
        setShow(true);
    };

    return (
        <View>
            <Text>selected: {date?.toLocaleString()}</Text>

                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode='time'
                    is24Hour={true}
                    onChange={onChange}
                />

        </View>
    );
}

export default TimePicker;
 */
