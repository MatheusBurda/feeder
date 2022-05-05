import styled from 'styled-components/native';

import theme from '../../styles/theme';

export const IconButton = styled.TouchableOpacity`
    background-color: ${theme.colors.green};
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    height: 56px;
    width: 56px;
    color: ${theme.colors.text};
    position: absolute;
    left: 40px;
    top: 40px;
`
