import React, { useState } from 'react';

import * as S from './styles'
import * as G from '../../styles/styles'

import NumberSpin from '../../components/NumberSpin';

const TimeInput: React.FC = () => {

    const [hour, setHour] = useState(10);
    const [minutes, setMinutes] = useState(6);

    return (

        <S.Container>

            <NumberSpin value={hour} onChange={setHour} min={0} max={23} vertical={true} />
            <S.Text>:</S.Text>
            <NumberSpin value={minutes} onChange={setMinutes} min={0} max={59} vertical={true} />

        </S.Container>

    );
};

export default TimeInput;
